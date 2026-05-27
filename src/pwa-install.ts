// PWA install trigger using ONLY native browser interfaces.
// - Android/Chrome & Desktop: captures `beforeinstallprompt` and fires the
//   native install banner on the first user gesture (click/touch/keydown).
// - iOS Safari: cannot be triggered programmatically (Apple restriction);
//   the user must use the native Share → Add to Home Screen flow.
// No custom modals or dialogs are rendered.

type BIPEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

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

  // Register minimal service worker (required by Chrome for installability).
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* ignore */
      });
    });
  }

  let deferredPrompt: BIPEvent | null = null;
  let promptShown = false;

  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent Chrome's default mini-infobar; we'll trigger the native prompt on user gesture.
    e.preventDefault();
    deferredPrompt = e as BIPEvent;
  });

  const fireNativePrompt = async () => {
    if (promptShown || !deferredPrompt) return;
    promptShown = true;
    try {
      await deferredPrompt.prompt();
      await deferredPrompt.userChoice;
    } catch {
      /* ignore */
    } finally {
      deferredPrompt = null;
      cleanup();
    }
  };

  const handler = () => {
    void fireNativePrompt();
  };

  const cleanup = () => {
    window.removeEventListener("click", handler);
    window.removeEventListener("touchend", handler);
    window.removeEventListener("keydown", handler);
  };

  // Fire on the first user gesture (required by browsers for prompt()).
  window.addEventListener("click", handler, { once: false });
  window.addEventListener("touchend", handler, { once: false });
  window.addEventListener("keydown", handler, { once: false });

  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    cleanup();
  });
}
