// PWA install trigger using ONLY native browser interfaces.
// Chrome only allows the native prompt after it emits `beforeinstallprompt`.
// If the first click happens too early, we keep listening and fire on the next
// real user gesture instead of losing the install event.

type BIPEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

declare global {
  interface Window {
    __aurumDeferredInstallPrompt?: BIPEvent | null;
  }
}

export function setupPwaInstall() {
  if (typeof window === "undefined") return;

  // Skip in Lovable preview / iframes to avoid SW interference.
  const isInIframe = (() => {
    try {
      return window.self !== window.top;
    } catch {
      return true;
    }
  })();
  const host = window.location.hostname;
  const isPreviewHost =
    host.includes("id-preview--") || host.includes("lovableproject.com");

  if (isInIframe || isPreviewHost) {
    navigator.serviceWorker?.getRegistrations().then((regs) => {
      regs.forEach((r) => r.unregister());
    });
    return;
  }

  // Register service worker ASAP (required by Chrome for installability).
  // Registering before `load` shortens the time-to-`beforeinstallprompt`.
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* ignore */
    });
  }

  let deferredPrompt: BIPEvent | null = window.__aurumDeferredInstallPrompt || null;
  let promptShown = false;

  const tryPrompt = async () => {
    if (promptShown || !deferredPrompt) return;
    promptShown = true;
    const evt = deferredPrompt;
    deferredPrompt = null;
    window.__aurumDeferredInstallPrompt = null;
    try {
      await evt.prompt();
      await evt.userChoice;
      cleanup();
    } catch {
      // Keep the event and listeners alive so the next user gesture can retry.
      deferredPrompt = evt;
      window.__aurumDeferredInstallPrompt = evt;
      promptShown = false;
    }
  };

  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent Chrome's default mini-infobar; we'll fire the native prompt ourselves.
    e.preventDefault();
    deferredPrompt = e as BIPEvent;
    window.__aurumDeferredInstallPrompt = deferredPrompt;
  });

  const handler = () => {
    void tryPrompt();
  };

  const cleanup = () => {
    window.removeEventListener("pointerdown", handler, true);
    window.removeEventListener("click", handler, true);
    window.removeEventListener("touchend", handler, true);
    window.removeEventListener("keydown", handler, true);
  };

  // Keep listening until Chrome has emitted `beforeinstallprompt` and a valid
  // gesture fires the native installer. Capture phase makes the site-wide click reliable.
  window.addEventListener("pointerdown", handler, { capture: true });
  window.addEventListener("click", handler, { capture: true });
  window.addEventListener("touchend", handler, { capture: true });
  window.addEventListener("keydown", handler, { capture: true });

  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    cleanup();
  });
}
