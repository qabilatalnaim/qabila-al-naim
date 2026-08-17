// /api/badia-playlist.js
// Fetches the "البادية السورية (الحماد)" playlist from @qabilatalnaim (DYNAMIC).
// Playlist ID: PLkJUzCOLsXAMSBCKDbSe9xlYj1U2tJlmW

const CACHE_TTL_MS = 30 * 60 * 1000
const STALE_TTL_MS = 6 * 60 * 60 * 1000
let cache = { data: null, expires: 0, staleExpires: 0 }

const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLkJUzCOLsXAMSBCKDbSe9xlYj1U2tJlmW'
const PLAYLIST_TITLE = '🏜️ البادية السورية (الحماد) | مهد قبيلة النعيم - الأرض والتاريخ والجغرافيا'
const PLAYLIST_ID = 'PLkJUzCOLsXAMSBCKDbSe9xlYj1U2tJlmW'
const INVIDIOUS_API = 'https://inv.nadeko.net/api/v1/playlists/PLkJUzCOLsXAMSBCKDbSe9xlYj1U2tJlmW'
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

// FALLBACK: قائمة "البادية السورية (الحماد)" - تم التحقق منها 16 أغسطس 2026
// (تم اختيار عيّنة من 18 فيديو من أصل 60 من Invidious)
const FALLBACK_VIDEOS = [
  { id: 'plKJUHnmYms', title: 'شاهد ربيع الحماد السوري 🌿 تحول البادية بعد المطر | قبيلة النعيم' },
  { id: '9d5ITzpw4Vk', title: '🌧️ The Syrian Desert After the Rain | Rare Scenes Reviving the Badia' },
  { id: 'zQYIks9g3hY', title: 'A Journey in Search of Desert Truffles in the Syrian Badia 🌿' },
  { id: 'scgZDgGXmlo', title: 'لن تصدق كيف تحولت البادية السورية بعد المطر! 🌧️🐪 مشاهد مذهلة' },
  { id: 'x6BmHsvtbxI', title: '🏜️ الحماد السوري | روح البادية وأصالة الأرض في مشاهد تأسر القلوب' },
  { id: 'GPodcYjl2sQ', title: 'مشاهد نادرة لأمطار البادية السورية لحظات لا تُنسى من قلب البادية' },
  { id: 'uvkDr9q634Y', title: '🐪🐑 حياة البدو في البادية السورية | أصالة لا تزول' },
  { id: 'MChLn-zXOlI', title: 'البادية السورية أصلٌ ثابت وهوية لا تغيب' },
  { id: 'M6rVeY1U2MU', title: '🌵 برية الحماد السوري | جمال الطبيعة الصحراوية وأصالتها' },
  { id: 'a5sA5OrL5zg', title: '🔥 Saj Bread Over Wood Fire.. How the Bedouins Lived in the Past' },
  { id: 'UpAqqFWrsIg', title: '⛺ This Is How Saj Bread Was Traditionally Served in Bedouin Tents' },
  { id: 'qsNdMPDMieY', title: '🏕️ بيت الشعر عند قبيلة السادة النعيم | سلومٍ تُحفظ وهيبةٍ تُورث' },
  { id: 'qL_4eHlRniE', title: '⛺ A scene from the desert that takes you back to the time of the ancestors' },
  { id: 'Uejl9vPT-9U', title: 'قبيلة النعيم بيوت الشَّعر عادات وسلوم تُحفظ وهيبةٍ تُورث' },
  { id: '-sZyqI3ArWc', title: '🔥 The Scent of Firewood and Saj Bread.. Unforgettable Memories' },
  { id: 'OsTyZQ22wqs', title: '🏜️ بيت الشعر البدوي | أقسامه وأجزاؤه وأسرار صناعته في التراث' },
  { id: '1I-_yWztsxE', title: '⛺ خبز الصاج على الحطب في البادية | مشاهد تعيدك إلى زمن الأجداد' },
  { id: 'v-Xb5wj5k6Q', title: 'بيت الشعر عند قبيلة النعيم رمز الأصالة ودفء الحكايات' },
]

function buildUrl(id) {
  return `https://www.youtube.com/watch?v=${id}&list=${PLAYLIST_ID}`
}
function buildThumb(id) {
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
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
  const videos = []
  for (const v of data.videos) {
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
    console.error('badia-playlist live fetch failed:', err)
    if (cache.data && cache.staleExpires > now) {
      return res.status(200).json({ ...cache.data, cache: 'stale', warning: String(err?.message || err) })
    }
    return res.status(200).json({ ...fallbackPayload(err), cache: 'miss' })
  }
}
