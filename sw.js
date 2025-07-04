const CACHE_NAME = 'mr-d-portfolio-v1';
   const ASSETS_TO_CACHE = [
     '/',
     '/index.html',
     '/css/style.css',
     '/js/main.js',
     '/images/MRD.png'
     // Add other critical assets
   ];

   self.addEventListener('install', (event) => {
     event.waitUntil(
       caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
     );
   });

   self.addEventListener('fetch', (event) => {
     event.respondWith(
       caches.match(event.request).then(response => response || fetch(event.request))
     );
   });
