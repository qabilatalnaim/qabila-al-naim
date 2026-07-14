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
  youtube: { subscribers: 629, videos: 197, views: 215642 },
  facebook: { followers: 103000 },
  totals: { views: 215642, videos: 197 },
  updatedAt: '2026-07-14T00:00:00.000Z',
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