// /api/camels-playlist.js
// Fetches the "إبل النعيم الصفرا" playlist from @qabilatalnaim
// Playlist ID: PLkJUzCOLsXAP224xba8-lMtGyw3ErpeDF
// Cached for 3 hours at the edge.

const CACHE_TTL_MS = 3 * 60 * 60 * 1000
let cache = { data: null, expires: 0 }

const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLkJUzCOLsXAP224xba8-lMtGyw3ErpeDF'
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

// FALLBACK: قائمة "إبل النعيم الصفرا" (18 فيديو) - تم التحقق منها يدوياً
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
].map((v) => ({
  ...v,
  url: `https://www.youtube.com/watch?v=${v.id}&list=PLkJUzCOLsXAP224xba8-lMtGyw3ErpeDF`,
  thumbnail: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
}))

async function fetchPlaylist() {
  const res = await fetch(PLAYLIST_URL, {
    headers: {
      'User-Agent': UA,
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'ar,en-US;q=0.9',
    },
  })
  if (!res.ok) throw new Error(`YouTube HTTP ${res.status}`)
  return res.text()
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'public, s-maxage=10800, stale-while-revalidate=86400')
  res.setHeader('Access-Control-Allow-Origin', '*')

  const now = Date.now()
  if (cache.data && cache.expires > now) {
    return res.status(200).json(cache.data)
  }

  try {
    const html = await fetchPlaylist()
    const videoIds = [...new Set(
      (html.match(/"videoId":"([A-Za-z0-9_-]{11})"/g) || []).map((s) => s.match(/"videoId":"([A-Za-z0-9_-]{11})"/)[1])
    )]

    let videos = FALLBACK_VIDEOS
    let source = 'fallback'

    if (videoIds.length >= 5) {
      // Build videos from live scrape, with fallback titles
      const titleMap = new Map()
      const titleRegex = html.matchAll(/"videoId":"([A-Za-z0-9_-]{11})"[\s\S]{0,300}?"text":"([^"]{8,100})"/g)
      for (const m of titleRegex) {
        if (!titleMap.has(m[1])) titleMap.set(m[1], m[2])
      }
      videos = videoIds.slice(0, 24).map((id, idx) => {
        const fallback = FALLBACK_VIDEOS.find((f) => f.id === id)
        return {
          id,
          title: titleMap.get(id) || fallback?.title || `فيديو ${idx + 1}`,
          url: `https://www.youtube.com/watch?v=${id}&list=PLkJUzCOLsXAP224xba8-lMtGyw3ErpeDF`,
          thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        }
      })
      source = 'live'
    }

    const payload = {
      videos,
      count: videos.length,
      playlistId: 'PLkJUzCOLsXAP224xba8-lMtGyw3ErpeDF',
      playlistTitle: '🐪 إبل النعيم الصفرا | سلالة العزّ والأصالة في البادية العربية',
      playlistUrl: PLAYLIST_URL,
      source,
      updatedAt: new Date().toISOString(),
    }

    cache = { data: payload, expires: now + CACHE_TTL_MS }
    return res.status(200).json(payload)
  } catch (err) {
    console.error('camels-playlist error:', err)
    return res.status(200).json({
      videos: FALLBACK_VIDEOS,
      count: FALLBACK_VIDEOS.length,
      playlistId: 'PLkJUzCOLsXAP224xba8-lMtGyw3ErpeDF',
      playlistTitle: '🐪 إبل النعيم الصفرا | سلالة العزّ والأصالة في البادية العربية',
      playlistUrl: PLAYLIST_URL,
      source: 'fallback',
      error: String(err?.message || err),
      updatedAt: new Date().toISOString(),
    })
  }
}
