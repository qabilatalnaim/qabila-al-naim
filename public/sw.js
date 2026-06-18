// Service Worker for قبيلة السادة النعيم PWA
const CACHE_NAME = 'qabila-al-naim-v1'
const RUNTIME_CACHE = 'qabila-runtime-v1'

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
        // Continue even if some files fail
        return Promise.resolve()
      })
    })
  )
  self.skipWaiting()
})

// Activate: حذف الـ cache القديم
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== RUNTIME_CACHE)
          .map((name) => caches.delete(name))
      )
    })
  )
  self.clients.claim()
})

// Fetch: استراتيجية "Stale While Revalidate" للملفات
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip cross-origin requests
  if (url.origin !== location.origin) return

  // Skip API calls (لو أضفنا API مستقبلاً)
  if (url.pathname.startsWith('/api/')) return

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          // Update cache with new response
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone()
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return networkResponse
        })
        .catch(() => {
          // Network failed, return cached version
          return cachedResponse
        })

      // Return cached version immediately, then update
      return cachedResponse || fetchPromise
    })
  )
})

// Listen for messages from the app
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
