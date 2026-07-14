// /api/social-stats.js
// Serverless endpoint to fetch live social media stats for قبيلة النعيم أهل الصفرا ٥١٥
// Strategy: Scrape YouTube channel HTML (no API key needed) → fall back to hardcoded values.

const CACHE_TTL_MS = 6 * 60 * 60 * 1000 // 6 hours
let cache = { data: null, expires: 0 }

// Manual fallback — verified by channel owner (2026-07-10)
const FALLBACK = {
  youtube: { subscribers: 629, videos: 197 },
  facebook: { followers: 103000 },
  totals: { views: 215642, videos: 197 },
  updatedAt: '2026-07-10T00:00:00.000Z',
  source: 'fallback',
}

const YT_CHANNEL_URL = 'https://www.youtube.com/@qabilatalnaim'
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

async function fetchYouTubeStats() {
  const res = await fetch(YT_CHANNEL_URL, {
    headers: {
      'User-Agent': UA,
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'en-US,en;q=0.9',
    },
  })
  if (!res.ok) return null
  const html = await res.text()

  // Subscriber count: "X subscribers" in accessibility label
  const subMatch = html.match(/"label":"([\d,]+) subscribers"/)
  const subscribers = subMatch ? parseInt(subMatch[1].replace(/,/g, ''), 10) : null

  // Video count: videoCountText.runs
  const vidMatch = html.match(/"videoCountText":\{"runs":\[\{"text":"(\d+)"\}/)
  const videos = vidMatch ? parseInt(vidMatch[1], 10) : null

  // View count for individual videos is not the channel total. Skip.
  // We rely on owner-supplied total since YouTube doesn't expose it without API.

  if (subscribers || videos) {
    return { subscribers, videos }
  }
  return null
}

async function fetchYouTubeAPI() {
  const apiKey = process.env.YOUTUBE_API_KEY
  const channelId = process.env.YOUTUBE_CHANNEL_ID
  if (!apiKey || !channelId) return null

  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
  const res = await fetch(url)
  if (!res.ok) return null
  const json = await res.json()
  const stats = json?.items?.[0]?.statistics
  if (!stats) return null
  return {
    subscribers: Number(stats.subscriberCount || 0),
    videos: Number(stats.videoCount || 0),
    views: Number(stats.viewCount || 0),
  }
}

async function fetchFacebook() {
  const token = process.env.FACEBOOK_ACCESS_TOKEN
  const pageId = process.env.FACEBOOK_PAGE_ID
  if (!token || !pageId) return null

  const url = `https://graph.facebook.com/v19.0/${pageId}?fields=followers_count,fan_count&access_token=${token}`
  const res = await fetch(url)
  if (!res.ok) return null
  const json = await res.json()
  return {
    followers: Number(json.followers_count || json.fan_count || 0),
  }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'public, s-maxage=21600, stale-while-revalidate=86400')
  res.setHeader('Access-Control-Allow-Origin', '*')

  const now = Date.now()
  if (cache.data && cache.expires > now) {
    return res.status(200).json(cache.data)
  }

  let payload = null

  try {
    // Try YouTube Data API first (most accurate), then HTML scrape, then fallback
    const [ytApi, ytHtml, fb] = await Promise.allSettled([
      fetchYouTubeAPI(),
      fetchYouTubeStats(),
      fetchFacebook(),
    ])

    const ytApiData = ytApi.status === 'fulfilled' ? ytApi.value : null
    const ytHtmlData = ytHtml.status === 'fulfilled' ? ytHtml.value : null
    const fbData = fb.status === 'fulfilled' ? fb.value : null

    // Merge: API > HTML > fallback
    const ytSubscribers = ytApiData?.subscribers ?? ytHtmlData?.subscribers ?? FALLBACK.youtube.subscribers
    const ytVideos = ytApiData?.videos ?? ytHtmlData?.videos ?? FALLBACK.youtube.videos
    const ytViews = ytApiData?.views ?? FALLBACK.totals.views
    const fbFollowers = fbData?.followers ?? FALLBACK.facebook.followers

    const source = ytApiData
      ? 'api'
      : ytHtmlData
      ? 'live'
      : 'fallback'

    payload = {
      youtube: {
        subscribers: ytSubscribers,
        videos: ytVideos,
        views: ytViews,
      },
      facebook: {
        followers: fbFollowers,
      },
      totals: {
        views: ytViews,
        videos: ytVideos,
      },
      updatedAt: new Date().toISOString(),
      source,
    }
  } catch (err) {
    console.error('social-stats error:', err)
  }

  if (!payload) {
    payload = { ...FALLBACK, source: 'fallback' }
  }

  cache = { data: payload, expires: now + CACHE_TTL_MS }
  return res.status(200).json(payload)
}