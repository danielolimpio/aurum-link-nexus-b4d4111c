// Minimal service worker — required by Chrome to enable the native
// `beforeinstallprompt` event (installability criterion).
// Pass-through fetch with no caching to avoid stale content.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Network-only; do not cache anything.
  event.respondWith(fetch(event.request).catch(() => Response.error()));
});
