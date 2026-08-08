import { useEffect, useState } from 'react'

export interface SocialStats {
  youtube: {
    subscribers: number
    videos: number
    views: number
  }
  facebook: {
    followers: number
  }
  totals: {
    views: number
    videos: number
  }
  updatedAt: string
  source: 'live' | 'fallback' | 'cache' | 'api'
}

export interface LatestVideo {
  id: string
  title: string
  url: string
  thumbnail: string
}

interface LatestVideosPayload {
  videos: LatestVideo[]
  count: number
  source: 'live' | 'empty' | 'error'
  updatedAt: string
}

const FALLBACK_STATS: SocialStats = {
  youtube: { subscribers: 640, videos: 205, views: 222600 },
  facebook: { followers: 103000 },
  totals: { views: 222600, videos: 205 },
  updatedAt: '2026-07-27T00:00:00.000Z',
  source: 'fallback',
}

const FALLBACK_VIDEOS: LatestVideosPayload = {
  videos: [],
  count: 0,
  source: 'error',
  updatedAt: new Date().toISOString(),
}

/**
 * useSocialStats — fetches live social media stats from /api/social-stats.
 * Fallback chain: live API → owner-verified hardcoded values.
 */
export function useSocialStats(): { stats: SocialStats; loading: boolean } {
  const [stats, setStats] = useState<SocialStats>(FALLBACK_STATS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    const load = async () => {
      try {
        const res = await fetch('/api/social-stats', {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = (await res.json()) as SocialStats
        if (!cancelled) setStats(data)
      } catch {
        // Fallback already in state
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    const interval = window.setInterval(load, 6 * 60 * 60 * 1000)

    return () => {
      cancelled = true
      controller.abort()
      window.clearInterval(interval)
    }
  }, [])

  return { stats, loading }
}

/**
 * useLatestVideos — fetches latest videos from /api/latest-videos.
 */
export function useLatestVideos(limit = 6): { videos: LatestVideo[]; loading: boolean } {
  const [videos, setVideos] = useState<LatestVideo[]>(FALLBACK_VIDEOS.videos)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    const load = async () => {
      try {
        const res = await fetch('/api/latest-videos', {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = (await res.json()) as LatestVideosPayload
        if (!cancelled) setVideos(data.videos.slice(0, limit))
      } catch {
        if (!cancelled) setVideos([])
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    const interval = window.setInterval(load, 3 * 60 * 60 * 1000)

    return () => {
      cancelled = true
      controller.abort()
      window.clearInterval(interval)
    }
  }, [limit])

  return { videos, loading }
}

export interface CamelsPlaylistPayload {
  videos: LatestVideo[]
  count: number
  playlistId: string
  playlistTitle: string
  playlistUrl: string
  source: 'live' | 'fallback'
  updatedAt: string
}

/**
 * useCamelsPlaylist — fetches the dedicated "إبل النعيم الصفرا" playlist
 * (PLkJUzCOLsXAP224xba8-lMtGyw3ErpeDF) from /api/camels-playlist.
 * Auto-refreshes every 15 min + on window focus for live updates.
 */
export function useCamelsPlaylist(): {
  data: CamelsPlaylistPayload | null
  videos: LatestVideo[]
  loading: boolean
  refresh: () => Promise<void>
} {
  const [data, setData] = useState<CamelsPlaylistPayload | null>(null)
  const [videos, setVideos] = useState<LatestVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [bust, setBust] = useState(0)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    const load = async () => {
      try {
        const res = await fetch(`/api/camels-playlist?_=${Date.now()}`, {
          signal: controller.signal,
          headers: { Accept: 'application/json', 'Cache-Control': 'no-cache' },
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const payload = (await res.json()) as CamelsPlaylistPayload
        if (!cancelled) {
          setData(payload)
          setVideos(payload.videos || [])
        }
      } catch {
        // Keep empty
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    const interval = window.setInterval(load, 15 * 60 * 1000)
    const onFocus = () => load()
    window.addEventListener('focus', onFocus)
    const onOnline = () => load()
    window.addEventListener('online', onOnline)

    return () => {
      cancelled = true
      controller.abort()
      window.clearInterval(interval)
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('online', onOnline)
    }
  }, [bust])

  const refresh = async () => {
    setBust((b) => b + 1)
  }

  return { data, videos, loading, refresh }
}

/**
 * useHorsesPlaylist — fetches the "خيل العز" playlist
 * (PLkJUzCOLsXAOYKR4rpREtDP_e4iY-I6Se) from /api/horses-playlist.
 * Auto-refreshes every 15 min + on window focus.
 */
export function useHorsesPlaylist(): {
  data: CamelsPlaylistPayload | null
  videos: LatestVideo[]
  loading: boolean
  refresh: () => Promise<void>
} {
  const [data, setData] = useState<CamelsPlaylistPayload | null>(null)
  const [videos, setVideos] = useState<LatestVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [bust, setBust] = useState(0)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    const load = async () => {
      try {
        const res = await fetch(`/api/horses-playlist?_=${Date.now()}`, {
          signal: controller.signal,
          headers: { Accept: 'application/json', 'Cache-Control': 'no-cache' },
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const payload = (await res.json()) as CamelsPlaylistPayload
        if (!cancelled) {
          setData(payload)
          setVideos(payload.videos || [])
        }
      } catch {
        // Keep empty
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    const interval = window.setInterval(load, 15 * 60 * 1000)
    const onFocus = () => load()
    window.addEventListener('focus', onFocus)
    const onOnline = () => load()
    window.addEventListener('online', onOnline)

    return () => {
      cancelled = true
      controller.abort()
      window.clearInterval(interval)
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('online', onOnline)
    }
  }, [bust])

  const refresh = async () => {
    setBust((b) => b + 1)
  }

  return { data, videos, loading, refresh }
}

/**
 * useSheepPlaylist — fetches the "غنم قبيلة النعيم" playlist
 * (PLkJUzCOLsXAOFn8aOURZWnIiHabcNMBzY) from /api/sheep-playlist.
 * Auto-refreshes every 15 min + on window focus.
 */
export function useSheepPlaylist(): {
  data: CamelsPlaylistPayload | null
  videos: LatestVideo[]
  loading: boolean
  refresh: () => Promise<void>
} {
  const [data, setData] = useState<CamelsPlaylistPayload | null>(null)
  const [videos, setVideos] = useState<LatestVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [bust, setBust] = useState(0)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    const load = async () => {
      try {
        const res = await fetch(`/api/sheep-playlist?_=${Date.now()}`, {
          signal: controller.signal,
          headers: { Accept: 'application/json', 'Cache-Control': 'no-cache' },
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const payload = (await res.json()) as CamelsPlaylistPayload
        if (!cancelled) {
          setData(payload)
          setVideos(payload.videos || [])
        }
      } catch {
        // Keep empty
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    const interval = window.setInterval(load, 15 * 60 * 1000)
    const onFocus = () => load()
    window.addEventListener('focus', onFocus)
    const onOnline = () => load()
    window.addEventListener('online', onOnline)

    return () => {
      cancelled = true
      controller.abort()
      window.clearInterval(interval)
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('online', onOnline)
    }
  }, [bust])

  const refresh = async () => {
    setBust((b) => b + 1)
  }

  return { data, videos, loading, refresh }
}

/**
 * useCoffeePlaylist — fetches the "قهوة النعيم" playlist
 * (PLkJUzCOLsXAMZaiQMBB7wnuFb4GH11ddj) from /api/coffee-playlist.
 * Auto-refreshes every 15 min + on window focus.
 */
export function useCoffeePlaylist(): {
  data: CamelsPlaylistPayload | null
  videos: LatestVideo[]
  loading: boolean
  refresh: () => Promise<void>
} {
  const [data, setData] = useState<CamelsPlaylistPayload | null>(null)
  const [videos, setVideos] = useState<LatestVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [bust, setBust] = useState(0)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    const load = async () => {
      try {
        const res = await fetch(`/api/coffee-playlist?_=${Date.now()}`, {
          signal: controller.signal,
          headers: { Accept: 'application/json', 'Cache-Control': 'no-cache' },
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const payload = (await res.json()) as CamelsPlaylistPayload
        if (!cancelled) {
          setData(payload)
          setVideos(payload.videos || [])
        }
      } catch {
        // Keep empty
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    const interval = window.setInterval(load, 15 * 60 * 1000)
    const onFocus = () => load()
    window.addEventListener('focus', onFocus)
    const onOnline = () => load()
    window.addEventListener('online', onOnline)

    return () => {
      cancelled = true
      controller.abort()
      window.clearInterval(interval)
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('online', onOnline)
    }
  }, [bust])

  const refresh = async () => {
    setBust((b) => b + 1)
  }

  return { data, videos, loading, refresh }
}

/**
 * useTentPlaylist — fetches the "بيوت الشعر" playlist
 * (PLkJUzCOLsXAMdkfAUBYxaVXJjr8E8CL0_) from /api/tent-playlist.
 */
export function useTentPlaylist(): {
  data: CamelsPlaylistPayload | null
  videos: LatestVideo[]
  loading: boolean
  refresh: () => Promise<void>
} {
  const [data, setData] = useState<CamelsPlaylistPayload | null>(null)
  const [videos, setVideos] = useState<LatestVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [bust, setBust] = useState(0)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    const load = async () => {
      try {
        const res = await fetch(`/api/tent-playlist?_=${Date.now()}`, {
          signal: controller.signal,
          headers: { Accept: 'application/json', 'Cache-Control': 'no-cache' },
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const payload = (await res.json()) as CamelsPlaylistPayload
        if (!cancelled) {
          setData(payload)
          setVideos(payload.videos || [])
        }
      } catch {
        // Keep empty
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    const interval = window.setInterval(load, 15 * 60 * 1000)
    const onFocus = () => load()
    window.addEventListener('focus', onFocus)
    const onOnline = () => load()
    window.addEventListener('online', onOnline)

    return () => {
      cancelled = true
      controller.abort()
      window.clearInterval(interval)
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('online', onOnline)
    }
  }, [bust])

  const refresh = async () => {
    setBust((b) => b + 1)
  }

  return { data, videos, loading, refresh }
}

/**
 * useTownPlaylist — fetches the "بلدة عزالدين أبو حمرة" playlist
 * (PLkJUzCOLsXAONtoYl_4wd1COLwTg5CAft) from /api/town-playlist.
 */
export function useTownPlaylist(): {
  data: CamelsPlaylistPayload | null
  videos: LatestVideo[]
  loading: boolean
  refresh: () => Promise<void>
} {
  const [data, setData] = useState<CamelsPlaylistPayload | null>(null)
  const [videos, setVideos] = useState<LatestVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [bust, setBust] = useState(0)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    const load = async () => {
      try {
        const res = await fetch(`/api/town-playlist?_=${Date.now()}`, {
          signal: controller.signal,
          headers: { Accept: 'application/json', 'Cache-Control': 'no-cache' },
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const payload = (await res.json()) as CamelsPlaylistPayload
        if (!cancelled) {
          setData(payload)
          setVideos(payload.videos || [])
        }
      } catch {
        // Keep empty
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    const interval = window.setInterval(load, 15 * 60 * 1000)
    const onFocus = () => load()
    window.addEventListener('focus', onFocus)
    const onOnline = () => load()
    window.addEventListener('online', onOnline)

    return () => {
      cancelled = true
      controller.abort()
      window.clearInterval(interval)
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('online', onOnline)
    }
  }, [bust])

  const refresh = async () => {
    setBust((b) => b + 1)
  }

  return { data, videos, loading, refresh }
}

// Helpers for compact display
export function formatCompactNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`
  return n.toString()
}

// Localized number formatter using Arabic-Indic digits (٠١٢٣٤٥٦٧٨٩)
const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
export function formatLocalizedNumber(n: number): string {
  return n
    .toLocaleString('en-US')
    .replace(/[0-9]/g, (d) => ARABIC_DIGITS[Number(d)])
}