import type { Plugin } from "vite";
import { writeSitemap } from "./generate-sitemap";

// Plugin Vite: regenera public/sitemap.xml com lastmod atual em dev e build.
export function sitemapPlugin(): Plugin {
  return {
    name: "aurum-sitemap-generator",
    apply: () => true,
    buildStart() {
      try {
        writeSitemap();
      } catch (err) {
        console.warn("[sitemap] generation failed:", err);
      }
    },
  };
}
