import { useEffect, useRef, useState, ImgHTMLAttributes } from "react";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Max retries before showing the placeholder permanently. Default 3. */
  maxRetries?: number;
  /** Minimum natural width to consider the image "valid". Default 4. */
  minWidth?: number;
  /** Custom placeholder class */
  placeholderClassName?: string;
}

/**
 * SmartImage: renders an <img> with automatic retry, size validation and a
 * skeleton placeholder while loading — prevents broken-icon flashes on first
 * load caused by cache misses, flaky CDN or transient network errors.
 */
const SmartImage = ({
  src,
  alt,
  maxRetries = 3,
  minWidth = 4,
  className = "",
  placeholderClassName = "",
  onLoad,
  onError,
  ...rest
}: SmartImageProps) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">("loading");
  const [currentSrc, setCurrentSrc] = useState(src);
  const retryCount = useRef(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    retryCount.current = 0;
    setStatus("loading");
    setCurrentSrc(src);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [src]);

  const scheduleRetry = () => {
    if (retryCount.current >= maxRetries) {
      setStatus("failed");
      return;
    }
    retryCount.current += 1;
    const delay = 300 * Math.pow(2, retryCount.current - 1); // 300ms, 600ms, 1200ms
    timerRef.current = window.setTimeout(() => {
      // cache-bust to force re-fetch
      const sep = src.includes("?") ? "&" : "?";
      setCurrentSrc(`${src}${sep}r=${retryCount.current}`);
    }, delay);
  };

  return (
    <>
      {status !== "loaded" && (
        <div
          className={`absolute inset-0 bg-gradient-to-br from-muted/40 to-muted/10 animate-pulse ${placeholderClassName}`}
          aria-hidden="true"
        />
      )}
      <img
        {...rest}
        src={currentSrc}
        alt={alt}
        className={`${className} ${status === "loaded" ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        onLoad={(e) => {
          const img = e.currentTarget;
          if (img.naturalWidth < minWidth) {
            scheduleRetry();
            return;
          }
          setStatus("loaded");
          onLoad?.(e);
        }}
        onError={(e) => {
          scheduleRetry();
          onError?.(e);
        }}
      />
    </>
  );
};

export default SmartImage;
