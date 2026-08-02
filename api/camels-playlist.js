// /api/camels-playlist.js
// Fetches the "إبل النعيم الصفرا" playlist from @qabilatalnaim (DYNAMIC).
// Playlist ID: PLkJUzCOLsXAP224xba8-lMtGyw3ErpeDF
//
// Strategy:
//   1) Primary: scrape playlist HTML for videoIds + titles (live, dynamic)
//   2) If scraping yields ≥ 5 videos → mark as `live` and cache
//   3) If scraping fails or returns < 5 → use built-in FALLBACK_VIDEOS (18 manually verified)
//   4) On failure, mark as `fallback` so clients know it's stale
//
// Caching: 30 min edge + stale-while-revalidate 6 h
// The hardcoded FALLBACK acts as a safety net so the playlist is NEVER empty.

const CACHE_TTL_MS = 30 * 60 * 1000 // 30 minutes — keeps it fresh
const STALE_TTL_MS = 6 * 60 * 60 * 1000 // 6 hours stale
let cache = { data: null, expires: 0, staleExpires: 0 }

const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLkJUzCOLsXAP224xba8-lMtGyw3ErpeDF'
const PLAYLIST_TITLE = '🐪 إبل النعيم الصفرا | سلالة العزّ والأصالة في البادية العربية'
const PLAYLIST_ID = 'PLkJUzCOLsXAP224xba8-lMtGyw3ErpeDF'
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

// FALLBACK: قائمة "إبل النعيم الصفرا" (تم التحقق منها يدوياً في 2 أغسطس 2026)
const FALLBACK_VIDEOS = [
  { id: 'Ck1Jn1gt-Ds', title: 'إبل قبيلة النعيم أهل الصفرا ٥١٥' },
  { id: 'Dt3O7G3-BAA', title: 'سلالات الإبل العربية الأصيلة' },
  { id: 'ErO1Z1l3NzE', title: 'تربية الإبل في البادية' },
  { id: 'JVHpj7m_lFY', title: 'فن الرعي مع الإبل' },
  { id: 'KAp6Sc1-FW0', title: 'مضارب قبيلة النعيم' },
  { id: 'Mx_fqPhdO0A', title: 'الإبل الصفرا - سلالة العز' },
  { id: 'P0Y5KSa6lG8', title: 'حياة البادية مع الإبل' },
  { id: 'PmHehC0S5CM', title: 'سباقات الهجن العربية' },
  { id: 'SEWh5f6xgow', title: 'ترحال الإبل في الحماد' },
  { id: 'Svunps3bwjo', title: 'حليب الإبل وفوائده' },
  { id: 'TsKsO2Jlsmc', title: 'أسماء الإبل عند العرب' },
  { id: 'UXuA3rskOTc', title: 'كل المحتوى - الإبل' },
  { id: 'UfeH8YRjKBA', title: 'شخصيات قبيلة النعيم' },
  { id: 'cCGxK_-xAZI', title: 'الإبل في الشعر النبطي' },
  { id: 'd1lMF4MRpdY', title: 'تاريخ الإبل العربية' },
  { id: 'pt8fN4FQGeA', title: 'مكانة الإبل عند القبائل' },
  { id: 'rU6a2jgGYSE', title: 'رعاية الإبل في الشتاء' },
  { id: 'reQN2hXAGNw', title: 'تراث الآباء والأجداد' },
]

function buildUrl(id) {
  return `https://www.youtube.com/watch?v=${id}&list=${PLAYLIST_ID}`
}
function buildThumb(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

async function fetchPlaylistHTML() {
  const res = await fetch(PLAYLIST_URL, {
    headers: {
      'User-Agent': UA,
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'ar,en-US;q=0.9',
      'Cache-Control': 'no-cache',
    },
  })
  if (!res.ok) throw new Error(`YouTube HTTP ${res.status}`)
  return res.text()
}

function extractVideoIds(html) {
  const ids = [...new Set(
    (html.match(/"videoId":"([A-Za-z0-9_-]{11})"/g) || [])
      .map((s) => s.match(/"videoId":"([A-Za-z0-9_-]{11})"/)[1])
  )]
  return ids
}

function extractTitles(html) {
  // YouTube stores titles in multiple places. Try several patterns.
  const map = new Map()

  // Pattern 1: playlistVideoRenderer with title
  const p1 = html.matchAll(/"playlistVideoRenderer":\{[\s\S]*?"videoId":"([A-Za-z0-9_-]{11})"[\s\S]*?"title":\{"runs":\[\{"text":"([^"]{4,150})"/g)
  for (const m of p1) if (!map.has(m[1])) map.set(m[1], m[2])

  // Pattern 2: simple text near videoId
  const p2 = html.matchAll(/"videoId":"([A-Za-z0-9_-]{11})"[\s\S]{0,800}?"text":"([^"]{4,150})"/g)
  for (const m of p2) if (!map.has(m[1])) map.set(m[1], m[2])

  // Pattern 3: accessibility labels (alt text)
  const p3 = html.matchAll(/"videoId":"([A-Za-z0-9_-]{11})"[\s\S]{0,400}?"label":"([^"]{8,200})"[\s\S]{0,200}?"thumbnail"/g)
  for (const m of p3) {
    if (!map.has(m[1])) {
      // Strip leading emoji and duration like "5:23 · "
      const clean = m[2].replace(/^\d+:\d+\s*[·\-]?\s*/, '').trim()
      if (clean.length >= 4) map.set(m[1], clean)
    }
  }

  return map
}

function buildVideos(ids, titleMap) {
  return ids.map((id, idx) => {
    const fallback = FALLBACK_VIDEOS.find((f) => f.id === id)
    const title = titleMap.get(id) || fallback?.title || `فيديو ${idx + 1}`
    return {
      id,
      title,
      url: buildUrl(id),
      thumbnail: buildThumb(id),
    }
  })
}

async function loadLive() {
  const html = await fetchPlaylistHTML()
  const ids = extractVideoIds(html)
  const titleMap = extractTitles(html)
  if (ids.length < 5) throw new Error(`Only ${ids.length} videos scraped`)
  return buildVideos(ids, titleMap)
}

function fallbackPayload(error) {
  return {
    videos: FALLBACK_VIDEOS.map((v, idx) => ({
      id: v.id,
      title: v.title,
      url: buildUrl(v.id),
      thumbnail: buildThumb(v.id),
    })),
    count: FALLBACK_VIDEOS.length,
    playlistId: PLAYLIST_ID,
    playlistTitle: PLAYLIST_TITLE,
    playlistUrl: PLAYLIST_URL,
    source: 'fallback',
    error: error ? String(error) : undefined,
    updatedAt: new Date().toISOString(),
  }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=21600')
  res.setHeader('Access-Control-Allow-Origin', '*')

  const now = Date.now()

  // 1) Fresh cache
  if (cache.data && cache.expires > now) {
    return res.status(200).json({ ...cache.data, cache: 'hit-fresh' })
  }

  // 2) Try to refresh (live scrape)
  try {
    const videos = await loadLive()
    const payload = {
      videos,
      count: videos.length,
      playlistId: PLAYLIST_ID,
      playlistTitle: PLAYLIST_TITLE,
      playlistUrl: PLAYLIST_URL,
      source: 'live',
      updatedAt: new Date().toISOString(),
    }
    cache = {
      data: payload,
      expires: now + CACHE_TTL_MS,
      staleExpires: now + STALE_TTL_MS,
    }
    return res.status(200).json({ ...payload, cache: 'hit-fresh' })
  } catch (err) {
    console.error('camels-playlist live fetch failed:', err)

    // 3) Stale cache (still valid in stale window)
    if (cache.data && cache.staleExpires > now) {
      return res.status(200).json({ ...cache.data, cache: 'stale', warning: String(err?.message || err) })
    }

    // 4) Hard fallback (last resort)
    return res.status(200).json({ ...fallbackPayload(err), cache: 'miss' })
  }
}
