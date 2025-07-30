self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("gamehub-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./favicon.ico",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
