var cacheName = "v1Cache";

const cacheFiles = [
  "./images/image-1.jpg",
  "./images/image-2.jpg",
  "./images/image-3.jpg",
  "./images/image-4.jpg",
  "./images/image-5.jpg",
  "./images/image-6.jpg",
  "./images/image-7.jpg",
  "./images/image-8.jpg",
  "./images/image-9.jpg",
  "./images/image-10.jpg",
  "./index.html",
  "./about-us.html",
  "./main.js",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(cacheFiles);
    })
  );
});

// Intercept fetch requests
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
