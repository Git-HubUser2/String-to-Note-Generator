const cacheName = 'v1';
const cacheAssets = [
  '/Sound_Experiment.html',
  '/style.css',
  '/script.js',
  '/icons/icon.png' // Updated icon file name
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('Service Worker: Caching Files');
      return cache.addAll(cacheAssets);
    })
  );
});

// Activate Service Worker
self.addEventListener('activate', (e) => {
  console.log('Service Worker: Activated');
});

// Fetch Event - Serve from cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cacheRes) => cacheRes || fetch(e.request))
  );
});
