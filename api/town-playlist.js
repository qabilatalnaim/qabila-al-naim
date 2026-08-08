// /api/town-playlist.js
// Fetches the "بلدة عزالدين أبو حمرة" playlist from @qabilatalnaim (DYNAMIC).
// Playlist ID: PLkJUzCOLsXAONtoYl_4wd1COLwTg5CAft

const CACHE_TTL_MS = 30 * 60 * 1000
const STALE_TTL_MS = 6 * 60 * 60 * 1000
let cache = { data: null, expires: 0, staleExpires: 0 }

const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLkJUzCOLsXAONtoYl_4wd1COLwTg5CAft'
const PLAYLIST_TITLE = '🏕️ بلدة عزالدين أبو حمرة | تاريخ وأصالة البادية وتراث قبيلة السادة النعيم'
const PLAYLIST_ID = 'PLkJUzCOLsXAONtoYl_4wd1COLwTg5CAft'
const INVIDIOUS_API = 'https://inv.nadeko.net/api/v1/playlists/PLkJUzCOLsXAONtoYl_4wd1COLwTg5CAft'
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

// FALLBACK: قائمة "بلدة عزالدين أبو حمرة" (29 فيديو - تم التحقق منها 8 أغسطس 2026)
const FALLBACK_VIDEOS = [
  { id: 'KiIEUqNFh4w', title: '🇸🇾 من أرض النعيم إلى حمص | رجال النعيم في ذكرى التحرير' },
  { id: 'AQGpfGyjrgI', title: 'عزالدين أبو حمرة أرض الجد والأصالة' },
  { id: 'M1dJ7jcFy6w', title: 'رجالٌ تربّوا على الحقّ | وفد أهالي بلدة عزالدين النعيم إلى حمص' },
  { id: '7S_Dwjc69-4', title: '🚗 الجمس البهبهاني 🔥 هيبة الزمن الجميل' },
  { id: 'SitKmmjv4hE', title: 'أمطار عزالدين حين يفيض الخير' },
  { id: 'MGEfcQNA0LU', title: '🏞️ عزالدين أبو حمرة | موطن الأصالة وديار السادة النعيم' },
  { id: '6UJAVKkvCJk', title: 'من عزالدين إلى حمص | وفد النعيم في ذكرى التحرير ورسالة وفاء' },
  { id: 'L5B3gGj8OcM', title: '🕊️ مشاهد من عزاء العقيد سرحان بن الشيخ حسين السلامة' },
  { id: 'hEu2DMYz0BU', title: 'عزالدين أبو حمرة أرض الأجداد' },
  { id: '3HbKIX2SmuU', title: 'مشاهد جوية مهيبة 🚁 | عزالدين أبو حمرة وديار السادة النعيم' },
  { id: 'edNFcd7bCXI', title: 'بلدة عزّالدين أبو حمرة فخر قبيلة السادة النعيم' },
  { id: 'MChLn-zXOlI', title: 'البادية السورية أصلٌ ثابت وهوية لا تغيب' },
  { id: '4b963vsvjOA', title: 'عزالدين أبو حمرة | موطن السادة النعيم من علو السماء 🦅' },
  { id: '_rvOg0nQf_U', title: 'عزالدين أبو حمرة … حين يُرى المجد من السماء' },
  { id: 'B60968-CxbI', title: 'مشاهد جوية نادرة 🚁 | عزالدين أبو حمرة موطن السادة النعيم' },
  { id: 'QIoyrO53YXk', title: 'عزالدين أبو حمرة من علوّ السماء، تبدو كلوحةٍ من الجمال' },
  { id: 'IgDwiAgf934', title: '🏞️ عزالدين أبو حمرة | جمال القرية من علو السماء' },
  { id: 'Q6DZHHHFm_I', title: 'عزالدين أبو حمرة فخر الأرض والنسب' },
  { id: 'Fake0f8J_kM', title: '🌧️ أمطار عزالدين أبو حمرة | غيثٌ يحيي الأرض' },
  { id: 'wxtDRweBoIY', title: 'وثيقة من بدايات الثورة السورية 🇸🇾 | قبيلة النعيم عام ٢٠١١' },
  { id: 'LEVLQ6qJaCk', title: '🏛️ زيارة رسمية إلى عزالدين أبو حمرة' },
  { id: 'uYtVXWnVE6s', title: '🚁 Ezzeldin Abu Hamra from the sky | A breathtaking view 🌿' },
  { id: 'furOBXi9YuA', title: 'بلدة عزالدين أبو حمرة تحضن في طياتها عبق الماضي' },
  { id: 'JBksgUt1wsY', title: '🚁 Ezzeldin Abu Hamra from the sky | A breathtaking view' },
  { id: 'L8NYL7HZk1M', title: 'Rabee Izz al-Din | A Green Canvas from the Heart of the Desert' },
  { id: 'hXb5-Ssk8OE', title: 'مُجدول - بث مباشر عن بلدة عزالدين' },
  { id: 'tDq6Qbh4Muc', title: 'مُجدول - بث مباشر عن تراث البلدة' },
  { id: 'XyxaCtikm90', title: 'مُجدول - بث مباشر عن النعيم' },
]

function buildUrl(id) {
  return `https://www.youtube.com/watch?v=${id}&list=${PLAYLIST_ID}`
}
function buildThumb(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

async function fetchInvidious() {
  const res = await fetch(INVIDIOUS_API, { headers: { 'User-Agent': UA } })
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
  // De-dupe by videoId
  const seen = new Set()
  const videos = []
  for (const v of data.videos) {
    if (seen.has(v.videoId)) continue
    seen.add(v.videoId)
    let title = v.title || ''
    if (!title) {
      const oembedTitle = await fetchOEmbedTitle(v.videoId)
      title = oembedTitle || `فيديو ${videos.length + 1}`
    }
    videos.push({ id: v.videoId, title, url: buildUrl(v.videoId), thumbnail: buildThumb(v.videoId) })
  }
  return videos
}

function fallbackPayload(error) {
  return {
    videos: FALLBACK_VIDEOS.map((v, idx) => ({
      id: v.id, title: v.title, url: buildUrl(v.id), thumbnail: buildThumb(v.id),
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
      videos, count: videos.length,
      playlistId: PLAYLIST_ID, playlistTitle: PLAYLIST_TITLE, playlistUrl: PLAYLIST_URL,
      source: 'live', updatedAt: new Date().toISOString(),
    }
    cache = { data: payload, expires: now + CACHE_TTL_MS, staleExpires: now + STALE_TTL_MS }
    return res.status(200).json({ ...payload, cache: 'hit-fresh' })
  } catch (err) {
    console.error('town-playlist live fetch failed:', err)
    if (cache.data && cache.staleExpires > now) {
      return res.status(200).json({ ...cache.data, cache: 'stale', warning: String(err?.message || err) })
    }
    return res.status(200).json({ ...fallbackPayload(err), cache: 'miss' })
  }
}
