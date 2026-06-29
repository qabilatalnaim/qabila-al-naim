// Service Worker for قبيلة السادة النعيم PWA
// Version bumped on each deployment to force cache invalidation
const VERSION = '2026-06-29'
const CACHE_NAME = `qabila-al-naim-${VERSION}`
const RUNTIME_CACHE = `qabila-runtime-${VERSION}`

// الملفات المهمة للتشغيل offline
const PRECACHE_URLS = [
  '/',
  '/history',
  '/town',
  '/camels',
  '/horses',
  '/sheep',
  '/wasm',
  '/poetry',
  '/coffee',
  '/traditions',
  '/tent',
  '/manifest.json',
  '/images/logo.webp',
  '/images/banner.webp',
  '/images/tribe-logo-calligraphy.webp',
  '/images/tribe-flag.webp',
]

// Install: تخزين الملفات الأساسية
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS).catch((err) => {
        console.log('Cache addAll error:', err)
        return Promise.resolve()
      })
    })
  )
  // Force activation of new SW
  self.skipWaiting()
})

// Activate: حذف كل الـ caches القديمة
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== RUNTIME_CACHE && name.startsWith('qabila-'))
          .map((name) => {
            console.log('Deleting old cache:', name)
            return caches.delete(name)
          })
      )
    })
  )
  self.clients.claim()
})

// Fetch: استراتيجية "Stale While Revalidate"
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip cross-origin requests
  if (url.origin !== location.origin) return

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone()
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return networkResponse
        })
        .catch(() => cachedResponse)

      return cachedResponse || fetchPromise
    })
  )
})

// Listen for skip waiting
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
