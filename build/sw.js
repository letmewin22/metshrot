importScripts("./js/precache-manifest.c4698f47307385fbad5d2b718b7e081d.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  console.log('Yay! Workbox is loaded !')
  workbox.precaching.precacheAndRoute([])

  self.addEventListener('fetch', event => {
    event.respondWith(
      caches
        .match(event.request)
        .then(response => response || fetch(event.request))
        .catch(() => caches.match('/'))
    )
  })

  workbox.routing.registerRoute(
    /(.*)others(.*)\.(?:png|gif|jpg|webp|jpeg)/,
    new workbox.strategies.CacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
  )

  workbox.routing.registerRoute(
    /.*\.(?:css)/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'assets',
    })
  )
  workbox.googleAnalytics.initialize()

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting()
    }
  })

  workbox.core.clientsClaim()
  workbox.precaching.precacheAndRoute(self.__precacheManifest)
} else {
  console.log("Oops! Workbox didn't load")
}

