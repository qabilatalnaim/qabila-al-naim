// /api/latest-videos.js
// Fetches latest 6 videos from YouTube channel @qabilatalnaim via HTML scraping
// Cached for 3 hours at the edge.

const CACHE_TTL_MS = 3 * 60 * 60 * 1000
let cache = { data: null, expires: 0 }

const CHANNEL_URL = 'https://www.youtube.com/@qabilatalnaim'
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

async function fetchYouTubeHTML() {
  const res = await fetch(CHANNEL_URL, {
    headers: {
      'User-Agent': UA,
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'en-US,en;q=0.9,ar;q=0.8',
    },
  })
  if (!res.ok) throw new Error(`YouTube HTTP ${res.status}`)
  return res.text()
}

function extractVideos(html) {
  // Extract all videoIds and their titles
  const videoIds = [...new Set(
    (html.match(/"videoId":"([A-Za-z0-9_-]{11})"/g) || []).map((s) => s.match(/"videoId":"([A-Za-z0-9_-]{11})"/)[1])
  )]

  // Try to extract titles — the home page keeps a map of videoId → title in some response blocks
  const titleMap = new Map()
  const titleMatches = html.matchAll(/"videoId":"([A-Za-z0-9_-]{11})".*?"title":\{"runs":\[\{"text":"([^"]+)"\}\]/g)
  for (const m of titleMatches) {
    titleMap.set(m[1], m[2])
  }

  // Fallback: use the gridVideoRenderer "title" pairings
  const altMatches = html.matchAll(/"gridVideoRenderer":\{[^}]*"videoId":"([A-Za-z0-9_-]{11})"[\s\S]*?"title":\{"runs":\[\{"text":"([^"]+)"/g)
  for (const m of altMatches) {
    if (!titleMap.has(m[1])) titleMap.set(m[1], m[2])
  }

  return videoIds.slice(0, 12).map((id) => ({
    id,
    title: titleMap.get(id) || `فيديو ${id}`,
    url: `https://www.youtube.com/watch?v=${id}`,
    thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  }))
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'public, s-maxage=10800, stale-while-revalidate=86400')
  res.setHeader('Access-Control-Allow-Origin', '*')

  const now = Date.now()
  if (cache.data && cache.expires > now) {
    return res.status(200).json(cache.data)
  }

  try {
    const html = await fetchYouTubeHTML()
    const videos = extractVideos(html)

    if (videos.length === 0) {
      return res.status(200).json({
        videos: [],
        source: 'empty',
        updatedAt: new Date().toISOString(),
      })
    }

    const payload = {
      videos,
      count: videos.length,
      source: 'live',
      updatedAt: new Date().toISOString(),
    }

    cache = { data: payload, expires: now + CACHE_TTL_MS }
    return res.status(200).json(payload)
  } catch (err) {
    console.error('latest-videos error:', err)
    return res.status(200).json({
      videos: [],
      source: 'error',
      error: String(err?.message || err),
      updatedAt: new Date().toISOString(),
    })
  }
}