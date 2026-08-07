// /api/sheep-playlist.js
// Fetches the "غنم قبيلة النعيم" playlist from @qabilatalnaim (DYNAMIC).
// Playlist ID: PLkJUzCOLsXAOFn8aOURZWnIiHabcNMBzY
//
// Strategy:
//   1) Primary: Invidious API — gives all videos with proper data
//   2) Secondary: YouTube oEmbed per video — for titles
//   3) Fallback: hardcoded FALLBACK_VIDEOS
//   4) On failure, mark as `fallback`

const CACHE_TTL_MS = 30 * 60 * 1000
const STALE_TTL_MS = 6 * 60 * 60 * 1000
let cache = { data: null, expires: 0, staleExpires: 0 }

const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLkJUzCOLsXAOFn8aOURZWnIiHabcNMBzY'
const PLAYLIST_TITLE = '🐑 غنم قبيلة النعيم | نوادر السلالات والمراعي في البادية السورية'
const PLAYLIST_ID = 'PLkJUzCOLsXAOFn8aOURZWnIiHabcNMBzY'
const INVIDIOUS_API = 'https://inv.nadeko.net/api/v1/playlists/PLkJUzCOLsXAOFn8aOURZWnIiHabcNMBzY'
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

// FALLBACK: قائمة "غنم قبيلة النعيم" (18 فيديو - تم التحقق منها 7 أغسطس 2026)
const FALLBACK_VIDEOS = [
  { id: '9d5ITzpw4Vk', title: '🌧️ البادية السورية بعد المطر | مشاهد نادرة تُحيي تراب الأرض' },
  { id: 'pr1XaitlSAc', title: '🐑 غنم قبيلة النعيم | تراث أصيل وموروث' },
  { id: 'UqwXN5qC2nM', title: 'جزّ صوف الغنم 🐑 | فزعة رجال البادية' },
  { id: 'cIniniS5SuM', title: '🐑 غنم قبيلة السادة النعيم | فخر السلالة وأيقونة الجمال في البادية' },
  { id: 'CBIH6Y58UpI', title: '🌧️ أمطار البادية السورية | مشاهد نادرة تُحيي الأرض' },
  { id: 'PKE0HV6hIS4', title: '🏜️ ديار قبيلة النعيم | حياة البادية ومراعي الحلال' },
  { id: 'BZJOTlTa95U', title: 'غنم قبيلة النعيم سلالة نادرة تُورَّث كما يُورَّث المجد' },
  { id: 'd1lMF4MRpdY', title: '🐪🐎🐑 إبل وخيل وغنم قبيلة النعيم | أصالة البادية وعزّ الموروث العربي' },
  { id: 'bbTi_Ufws0M', title: 'غنم النعيم 🐑 | فخر القبائل وسلالة الكرم في البادية العربية' },
  { id: 'zoatIq67THw', title: '🌿 ربيع البادية السورية | الحماد يتحول إلى جنة خضراء' },
  { id: 'bhqjg10FGlc', title: 'نوادر غنم قبيلة السادة النعيم سلالات نادرة تستحق المشاهدة' },
  { id: 'HQ2eb0Ar77k', title: '🐑 مراح قبيلة النعيم ومرتع الغنم | عزّ البادية وطيب الحلال' },
  { id: 'o-dFhVtoR6Q', title: 'غنم قبيلة النعيم ألوان وسلالات تميّزها البادية وتفخر بها الأجيال' },
  { id: 'CsewyFa6qUw', title: '🐑 الغنم النعيمية | أصالة السلالة وفخر أهل البادية' },
  { id: 'lYvUo27PZd4', title: 'جمال غنم قبيلة النعيم أصالة السلالة وعزّ البادية' },
  { id: 'P0Y5KSa6lG8', title: '🐪 الإبل الصفرا والغنم الشقرة | بصمة قبيلة النعيم في المراعي' },
  { id: 'LDhwxCsoX-M', title: 'غنم قبيلة النعيم فخر الأرض وكنز الأجداد' },
  { id: 'DFg4RBAdmDg', title: 'مُجدول - بث مباشر عن غنم النعيم' },
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
    console.error('sheep-playlist live fetch failed:', err)

    if (cache.data && cache.staleExpires > now) {
      return res.status(200).json({ ...cache.data, cache: 'stale', warning: String(err?.message || err) })
    }

    return res.status(200).json({ ...fallbackPayload(err), cache: 'miss' })
  }
}
