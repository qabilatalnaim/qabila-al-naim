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
  source: 'live' | 'fallback' | 'cache'
}

const FALLBACK_STATS: SocialStats = {
  youtube: { subscribers: 614, videos: 184, views: 211000 },
  facebook: { followers: 103000 },
  totals: { views: 211000, videos: 184 },
  updatedAt: '2026-07-01T00:00:00.000Z',
  source: 'fallback',
}

/**
 * useSocialStats — fetches live social media stats from /api/social-stats.
 *
 * Strategy:
 * 1. Try the API. If 200 OK, use live data.
 * 2. On network error or non-200, use hard-coded fallback (current shown values).
 * 3. Updates every 6 hours (matches server cache TTL).
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

    // Re-fetch every 6 hours
    const interval = window.setInterval(load, 6 * 60 * 60 * 1000)

    return () => {
      cancelled = true
      controller.abort()
      window.clearInterval(interval)
    }
  }, [])

  return { stats, loading }
}

// Helpers for compact display
export function formatCompactNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`
  return n.toString()
}