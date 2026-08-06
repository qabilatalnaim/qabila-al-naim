// /api/horses-playlist.js
// Fetches the "خيل العز" playlist from @qabilatalnaim (DYNAMIC).
// Playlist ID: PLkJUzCOLsXAOYKR4rpREtDP_e4iY-I6Se
//
// Strategy:
//   1) Primary: Invidious API (inv.nadeko.net) — gives 17 videos with proper data
//   2) Secondary: YouTube oEmbed per video — for titles
//   3) Fallback: hardcoded FALLBACK_VIDEOS (17 videos)
//   4) On failure, mark as `fallback` so clients know it's stale
//
// Caching: 30 min edge + stale-while-revalidate 6 h

const CACHE_TTL_MS = 30 * 60 * 1000
const STALE_TTL_MS = 6 * 60 * 60 * 1000
let cache = { data: null, expires: 0, staleExpires: 0 }

const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLkJUzCOLsXAOYKR4rpREtDP_e4iY-I6Se'
const PLAYLIST_TITLE = '🏇 خيل العز عند قبيلة السادة النعيم | الفروسية والأصالة في البادية العربية'
const PLAYLIST_ID = 'PLkJUzCOLsXAOYKR4rpREtDP_e4iY-I6Se'
const INVIDIOUS_API = 'https://inv.nadeko.net/api/v1/playlists/PLkJUzCOLsXAOYKR4rpREtDP_e4iY-I6Se'
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

// FALLBACK: قائمة "خيل العز" الكاملة (17 فيديو - تم التحقق منها 6 أغسطس 2026)
const FALLBACK_VIDEOS = [
  { id: 'd1lMF4MRpdY', title: '🐪🐎🐑 إبل وخيل وغنم قبيلة النعيم | أصالة البادية وعزّ الموروث العربي' },
  { id: 'kpmDjrrnViQ', title: 'العبية بنت العبية فرس النعيم ومركوب الجدود' },
  { id: 'rVVS-NVVsDU', title: 'رسن العبية فخر الخيل وأصالة السلالة العربية الأصيلة' },
  { id: 'bV32haZP2wk', title: 'رسن العبيّة مركوب جدّي من نسل خيلٍ ما توطّي المذلّة (قبيلة السادة النعيم)' },
  { id: 'T0TT_zPh5DY', title: 'السادة النعيم | عزّ السلوم وطيب العادات وأصالة القبيلة' },
  { id: 'YZnh4-Vtnjc', title: 'العبية بنت العبية | سلالة عزّ لا يعرف قدرها إلا أهل الخيل' },
  { id: 'nEX6A9HKavM', title: 'أرسان الخيل العربية الأصيلة' },
  { id: 'pNgV5jgLbHY', title: '🐎 الخيل العربية الأصيلة | رمز العزة والفخر عبر الأجيال' },
  { id: 'fLVAlGvjTHk', title: '🐎 الخيل الأصيلة السبوق | عزّ السرعة وأصالة النسب في البادية' },
  { id: '-_t_G04H1t4', title: '🐎 خيل النعيم.. عزّ الفروسية وهيبة الميدان' },
  { id: 'e61EXcBpwYg', title: '🐎 أرسان الخيل العربية الأصيلة | الأصول الخمسة ونسب الخيل عبر التاريخ' },
  { id: 'Hod6M1TAY_8', title: 'الخيل والعبية… فخر الأصالة عند قبيلة النعيم' },
  { id: 'UmjGy1fmxv0', title: 'مُجدول - بث مباشر عن الخيل' },
  { id: 'gyShr1AK8mo', title: 'مُجدول - بث مباشر عن قبيلة النعيم' },
  { id: 'jd3bZEbAFc8', title: 'مُجدول - بث مباشر عن الفروسية البدوية' },
  { id: 'k2IpqcJqyDM', title: 'مُجدول - بث مباشر عن تراث الخيل' },
  { id: 'fcgWVGM3Rq4', title: 'مُجدول - بث مباشر عن موروث الآباء' },
]

function buildUrl(id) {
  return `https://www.youtube.com/watch?v=${id}&list=${PLAYLIST_ID}`
}
function buildThumb(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

async function fetchInvidious() {
  const res = await fetch(INVIDIOUS_API, {
    headers: { 'User-Agent': UA },
  })
  if (!res.ok) throw new Error(`Invidious HTTP ${res.status}`)
  return res.json()
}

async function fetchOEmbedTitle(id) {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${id}&format=json`,
      { headers: { 'User-Agent': UA } }
    )
    if (!res.ok) return null
    const data = await res.json()
    return data.title || null
  } catch {
    return null
  }
}

async function loadLive() {
  const data = await fetchInvidious()
  if (!data.videos || data.videos.length < 5) {
    throw new Error(`Only ${data?.videos?.length || 0} videos from Invidious`)
  }

  // Build videos, enrich titles via oEmbed for those missing
  const videos = []
  for (const v of data.videos) {
    let title = v.title || ''
    if (!title) {
      const oembedTitle = await fetchOEmbedTitle(v.videoId)
      title = oembedTitle || `فيديو ${videos.length + 1}`
    }
    videos.push({
      id: v.videoId,
      title,
      url: buildUrl(v.videoId),
      thumbnail: buildThumb(v.videoId),
    })
  }

  return videos
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
