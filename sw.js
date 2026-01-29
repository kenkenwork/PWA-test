// キャッシュの名前
const CACHE_NAME = 'pwa-sample-cache-v1';
// キャッシュするファイル
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// インストール時にファイルをキャッシュする
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// ネットワークがオフラインでもキャッシュから表示する
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});