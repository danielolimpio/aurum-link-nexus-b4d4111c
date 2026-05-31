// PWA install trigger using ONLY native browser interfaces.
// - Android/Chrome & Desktop: captures `beforeinstallprompt` and fires the
//   native install prompt as soon as both conditions are met:
//     (1) the browser has emitted the event, and
//     (2) the user has produced a gesture (click / touch / keydown).
// - iOS Safari: cannot be triggered programmatically (Apple restriction).
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

  // Register service worker ASAP (required by Chrome for installability).
  // Registering before `load` shortens the time-to-`beforeinstallprompt`.
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* ignore */
    });
  }

  let deferredPrompt: BIPEvent | null = null;
  let userGestured = false;
  let promptShown = false;

  const tryPrompt = async () => {
    if (promptShown || !deferredPrompt || !userGestured) return;
    promptShown = true;
    const evt = deferredPrompt;
    deferredPrompt = null;
    try {
      await evt.prompt();
      await evt.userChoice;
    } catch {
      // If the gesture window expired, allow a future gesture to retry.
      promptShown = false;
    } finally {
      cleanup();
    }
  };

  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent Chrome's default mini-infobar; we'll fire the native prompt ourselves.
    e.preventDefault();
    deferredPrompt = e as BIPEvent;
    // If the user already interacted, prompt immediately.
    void tryPrompt();
  });

  const handler = () => {
    userGestured = true;
    void tryPrompt();
  };

  const cleanup = () => {
    window.removeEventListener("pointerdown", handler);
    window.removeEventListener("click", handler);
    window.removeEventListener("touchend", handler);
    window.removeEventListener("keydown", handler);
  };

  // Capture the first user gesture (required for `prompt()` in some browsers).
  window.addEventListener("pointerdown", handler);
  window.addEventListener("click", handler);
  window.addEventListener("touchend", handler);
  window.addEventListener("keydown", handler);

  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    cleanup();
  });
}
