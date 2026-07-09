// /api/social-stats.js
// Serverless endpoint to fetch live social media stats for قبيلة النعيم أهل الصفرا ٥١٥
// Cached at the edge for 6 hours to avoid rate limits.

const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours
let cache = { data: null, expires: 0 };

// Static fallback (used when APIs fail or during cold start)
const FALLBACK = {
  youtube: { subscribers: 831, videos: 184 },
  facebook: { followers: 103000 },
  totals: { views: 211000, videos: 184 },
  updatedAt: '2026-07-09T00:00:00.000Z',
  source: 'fallback',
};

async function fetchYouTube() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  if (!apiKey || !channelId) return null;

  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const json = await res.json();
  const stats = json?.items?.[0]?.statistics;
  if (!stats) return null;
  return {
    subscribers: Number(stats.subscriberCount || 0),
    videos: Number(stats.videoCount || 0),
    views: Number(stats.viewCount || 0),
  };
}

async function fetchFacebook() {
  const token = process.env.FACEBOOK_ACCESS_TOKEN;
  const pageId = process.env.FACEBOOK_PAGE_ID;
  if (!token || !pageId) return null;

  const url = `https://graph.facebook.com/v19.0/${pageId}?fields=followers_count,fan_count&access_token=${token}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const json = await res.json();
  return {
    followers: Number(json.followers_count || json.fan_count || 0),
  };
}

export default async function handler(req, res) {
  // CORS for safety (Vercel routes already handle this, but keep it tight)
  res.setHeader('Cache-Control', 'public, s-maxage=21600, stale-while-revalidate=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');

  const now = Date.now();
  if (cache.data && cache.expires > now) {
    return res.status(200).json(cache.data);
  }

  let payload = null;

  try {
    const [yt, fb] = await Promise.allSettled([fetchYouTube(), fetchFacebook()]);
    const ytData = yt.status === 'fulfilled' ? yt.value : null;
    const fbData = fb.status === 'fulfilled' ? fb.value : null;

    if (ytData || fbData) {
      payload = {
        youtube: {
          subscribers: ytData?.subscribers ?? FALLBACK.youtube.subscribers,
          videos: ytData?.videos ?? FALLBACK.youtube.videos,
          views: ytData?.views ?? 0,
        },
        facebook: {
          followers: fbData?.followers ?? FALLBACK.facebook.followers,
        },
        totals: {
          views: ytData?.views ?? FALLBACK.totals.views,
          videos: ytData?.videos ?? FALLBACK.totals.videos,
        },
        updatedAt: new Date().toISOString(),
        source: 'live',
      };
    }
  } catch (err) {
    // swallow and fall back below
  }

  if (!payload) {
    payload = { ...FALLBACK, source: 'fallback' };
  }

  cache = { data: payload, expires: now + CACHE_TTL_MS };
  return res.status(200).json(payload);
}