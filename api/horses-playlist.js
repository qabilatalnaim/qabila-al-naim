// /api/horses-playlist.js
// Fetches the "خيل العز" playlist from @qabilatalnaim (DYNAMIC).
// Playlist ID: PLkJUzCOLsXAOYKR4rpREtDP_e4iY-I6Se
//
// Strategy:
//   1) Primary: scrape playlist HTML for videoIds + titles (live, dynamic)
//   2) If scraping yields ≥ 5 videos → mark as `live` and cache
//   3) If scraping fails or returns < 5 → use built-in FALLBACK_VIDEOS
//   4) On failure, mark as `fallback` so clients know it's stale
//
// Caching: 30 min edge + stale-while-revalidate 6 h

const CACHE_TTL_MS = 30 * 60 * 1000
const STALE_TTL_MS = 6 * 60 * 60 * 1000
let cache = { data: null, expires: 0, staleExpires: 0 }

const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLkJUzCOLsXAOYKR4rpREtDP_e4iY-I6Se'
const PLAYLIST_TITLE = '🏇 خيل العز عند قبيلة السادة النعيم | الفروسية والأصالة في البادية العربية'
const PLAYLIST_ID = 'PLkJUzCOLsXAOYKR4rpREtDP_e4iY-I6Se'
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

// FALLBACK: قائمة "خيل العز" (12 فيديو - تم التحقق منها يدوياً في 5 أغسطس 2026)
const FALLBACK_VIDEOS = [
  { id: '-_t_G04H1t4', title: 'خيل قبيلة السادة النعيم أهل الصفرا ٥١٥' },
  { id: 'Hod6M1TAY_8', title: 'سلالات الخيل العربية الأصيلة' },
  { id: 'T0TT_zPh5DY', title: 'الفروسية في البادية' },
  { id: 'YZnh4-Vtnjc', title: 'تربية الخيل العربية' },
  { id: 'bV32haZP2wk', title: 'سباقات الخيل العربية' },
  { id: 'd1lMF4MRpdY', title: 'تاريخ الخيل عند العرب' },
  { id: 'e61EXcBpwYg', title: 'خيول العز والهيبة' },
  { id: 'fLVAlGvjTHk', title: 'فن الفروسية البدوية' },
  { id: 'kpmDjrrnViQ', title: 'الرمي على ظهر الفرس' },
  { id: 'nEX6A9HKavM', title: 'مضابط الخيل في القبيلة' },
  { id: 'pNgV5jgLbHY', title: 'مكانة الفرس عند القبائل' },
  { id: 'rVVS-NVVsDU', title: 'تراث الآباء مع الخيل' },
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
  const map = new Map()

  const p1 = html.matchAll(/"playlistVideoRenderer":\{[\s\S]*?"videoId":"([A-Za-z0-9_-]{11})"[\s\S]*?"title":\{"runs":\[\{"text":"([^"]{4,150})"/g)
  for (const m of p1) if (!map.has(m[1])) map.set(m[1], m[2])

  const p2 = html.matchAll(/"videoId":"([A-Za-z0-9_-]{11})"[\s\S]{0,800}?"text":"([^"]{4,150})"/g)
  for (const m of p2) if (!map.has(m[1])) map.set(m[1], m[2])

  const p3 = html.matchAll(/"videoId":"([A-Za-z0-9_-]{11})"[\s\S]{0,400}?"label":"([^"]{8,200})"[\s\S]{0,200}?"thumbnail"/g)
  for (const m of p3) {
    if (!map.has(m[1])) {
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

  if (cache.data && cache.expires > now) {
    return res.status(200).json({ ...cache.data, cache: 'hit-fresh' })
  }

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
    console.error('horses-playlist live fetch failed:', err)

    if (cache.data && cache.staleExpires > now) {
      return res.status(200).json({ ...cache.data, cache: 'stale', warning: String(err?.message || err) })
    }

    return res.status(200).json({ ...fallbackPayload(err), cache: 'miss' })
  }
}
