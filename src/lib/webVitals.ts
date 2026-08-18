/**
 * Web Vitals monitoring - tracks Core Web Vitals for performance insights.
 * Uses web-vitals v6 library to report LCP, INP, CLS, FCP, TTFB.
 * Metrics are sent to console (dev) and Vercel Analytics (prod).
 */
import { onCLS, onFCP, onLCP, onTTFB, onINP, type Metric } from 'web-vitals'

function sendToAnalytics(metric: Metric) {
  // Dev: console log
  if (import.meta.env.DEV) {
    const emoji = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌'
    console.log(`${emoji} [${metric.name}] ${metric.value.toFixed(2)} (${metric.rating})`)
  }

  // Prod: send to Vercel Analytics
  if (import.meta.env.PROD) {
    const body = JSON.stringify({
      id: metric.id,
      d: metric.delta,
      n: metric.name,
      r: metric.rating,
      v: metric.value,
    })
    // Use sendBeacon for reliability
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/vitals', body)
    } else {
      fetch('/api/vitals', { method: 'POST', body, keepalive: true })
    }
  }
}

export function reportWebVitals() {
  onCLS(sendToAnalytics)
  onFCP(sendToAnalytics)
  onLCP(sendToAnalytics)
  onTTFB(sendToAnalytics)
  onINP(sendToAnalytics)
}
