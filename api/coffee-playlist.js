// /api/coffee-playlist.js
// Fetches the "قهوة النعيم" playlist from @qabilatalnaim (DYNAMIC).
// Playlist ID: PLkJUzCOLsXAMZaiQMBB7wnuFb4GH11ddj
//
// Strategy:
//   1) Primary: Invidious API
//   2) Secondary: YouTube oEmbed per video
//   3) Fallback: hardcoded FALLBACK_VIDEOS

const CACHE_TTL_MS = 30 * 60 * 1000
const STALE_TTL_MS = 6 * 60 * 60 * 1000
let cache = { data: null, expires: 0, staleExpires: 0 }

const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLkJUzCOLsXAMZaiQMBB7wnuFb4GH11ddj'
const PLAYLIST_TITLE = '☕ قهوة النعيم | فن الضيافة العربية والمجالس البدوية الأصيلة'
const PLAYLIST_ID = 'PLkJUzCOLsXAMZaiQMBB7wnuFb4GH11ddj'
const INVIDIOUS_API = 'https://inv.nadeko.net/api/v1/playlists/PLkJUzCOLsXAMZaiQMBB7wnuFb4GH11ddj'
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

// FALLBACK: قائمة "قهوة النعيم" (23 فيديو - تم التحقق منها 7 أغسطس 2026)
const FALLBACK_VIDEOS = [
  { id: 'bI7bCmBs1lo', title: '☕ القهوة العربية | طيبها من طيب أهلها ورمز الكرم العربي' },
  { id: 'kWkTygHj8JY', title: 'قهوة النعيم فنجال كرم يُقدَّم للضيف قبل الكلام' },
  { id: 'kzZzImjNPjU', title: 'ما قصة الفناجين الخمسة عند العرب؟ ☕ أسرار المجالس البدوية' },
  { id: 'TFO_4YQoMI4', title: 'هل يجب شرب فنجان الضيف؟ ☕ من عادات العرب الأصيلة' },
  { id: 'G2D6g4rv2Bg', title: 'القهوة الشمالية قبيلة السادة النعيم فنجال يروّي سيرةَ عز' },
  { id: 'MBmrV8BXWK0', title: 'لماذا يشرب المعزّب فنجان الهيف أولًا؟ ☕ من عادات العرب الأصيلة' },
  { id: 'gB5w_06mE2o', title: 'قهوة قبيلة النعيم السمراء فنجال كرم ونخوة من قلب البادية' },
  { id: '9rhf08o6ZfQ', title: '☕ القهوة العربية | فخر العرب وهيبة الضيافة في فنجان' },
  { id: 'TWZsNJtfYRc', title: 'ما هو فنجان الهجال؟ ☕🏇 رمز الشجاعة والوفاء عند العرب' },
  { id: 'EYgGbh8CCc0', title: 'عبق القهوة وصوت النجر قهوة الكرم على جمر الغضى' },
  { id: 'ue0G8U7tuoI', title: 'قهوة قبيلة النعيم رمز الكرم وأصالة المجالس' },
  { id: 'SqjKTnphIDU', title: 'ما هو فنجان الكيف؟ ☕ سر الاستمتاع بالقهوة العربية' },
  { id: 'NahvQaz5_Dc', title: 'الفناجين الخمسة عند العرب ☕ أسرار القهوة العربية ومعانيها' },
  { id: 'koks9BwSp54', title: 'طائر الغرنوق والقهوة العربية رمز الأصالة والكرم' },
  { id: 'N1gSxKOU3ww', title: '☕ فناجين القهوة الخمسة عند العرب | أسرار الكرم والنخوة' },
  { id: 'AVAvj859JlE', title: '☕ القهوة السمراء | أول رسالة كرم وضيافة في المجالس العربية' },
  { id: 'QHRHEIy_J_s', title: 'حمس القهوة وصوت المحماس يطرب، وصوت النجر يشرّف' },
  { id: 'vWRoKcIZTK0', title: 'تشريبة القهوة سحر المذاق وفن الضيافة' },
  { id: 'ZdL5aGSxp-I', title: 'القهوة عند العرب رمزًا للشهامة والوفاء' },
  { id: 'BzokRPHkCpo', title: 'ماذا يعني فنجان السيف؟ ☕⚔️ عادة عربية تدل على الشجاعة' },
  { id: 'Dlviy6vm2L4', title: '☕ What\'s the Secret to Coffee Infusion? | An Ancient Bedouin Tradition' },
  { id: 'SXO7feAb2s4', title: 'مُجدول - بث مباشر عن قهوة النعيم' },
  { id: 'olgpxEmdEQY', title: '🐦☕ Do You Know the Secret of the Crane Bird on the Arabic Coffee?' },
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
    console.error('coffee-playlist live fetch failed:', err)

    if (cache.data && cache.staleExpires > now) {
      return res.status(200).json({ ...cache.data, cache: 'stale', warning: String(err?.message || err) })
    }

    return res.status(200).json({ ...fallbackPayload(err), cache: 'miss' })
  }
}
