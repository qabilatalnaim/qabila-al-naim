// /api/vitals.js
// Receives Web Vitals metrics from client-side web-vitals library.
// Stores them in memory (can be extended to a database or external analytics service).

const vitalsStore = []
const MAX_ENTRIES = 1000

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const metric = {
      ...req.body,
      receivedAt: new Date().toISOString(),
      userAgent: req.headers['user-agent'] || 'unknown',
      ip: req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown',
    }

    vitalsStore.push(metric)
    if (vitalsStore.length > MAX_ENTRIES) {
      vitalsStore.shift()
    }

    // Log for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('[Vitals]', metric.n, metric.v, metric.r)
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Vitals API error:', error)
    return res.status(400).json({ error: 'Invalid metric data' })
  }
}
