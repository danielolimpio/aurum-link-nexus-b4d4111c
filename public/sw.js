// Aurum Foundation SW — v3 (2026-07-02)
// Purpose: PWA installability only. Zero HTML/asset caching to prevent
// stale hashed asset references causing broken images on deploy.
const VERSION = "aurum-pwa-v3";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Nuke ALL previous caches from prior SW versions
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

// Minimal pass-through fetch handler (required for installability).
// Never intercepts responses — browser handles caching via HTTP headers.
self.addEventListener("fetch", (event) => {
  // no-op: let the network handle everything
});
