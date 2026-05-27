// Gera public/sitemap.xml automaticamente com lastmod = data atual.
// Executado pelo plugin Vite em scripts/vite-sitemap-plugin.ts no dev e no build.
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const BASE_URL = "https://aurumfoundation.top";

interface Entry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  image?: { loc: string; title?: string };
}

const entries: Entry[] = [
  {
    path: "/",
    changefreq: "weekly",
    priority: "1.0",
    image: {
      loc: `${BASE_URL}/og-image.jpg`,
      title: "Aurum Foundation - Plataforma de Investimento em USDT",
    },
  },
  { path: "/share/ex-ai-bot", changefreq: "monthly", priority: "0.9" },
  { path: "/share/zeus-ai-bot", changefreq: "monthly", priority: "0.9" },
  { path: "/share/flash-loans", changefreq: "monthly", priority: "0.9" },
  { path: "/share/neo-bank", changefreq: "monthly", priority: "0.9" },
  { path: "/share/card", changefreq: "monthly", priority: "0.9" },
  { path: "/share/exchange", changefreq: "monthly", priority: "0.9" },
  { path: "/share/token", changefreq: "monthly", priority: "0.9" },
  { path: "/contato", changefreq: "monthly", priority: "0.7" },
  { path: "/sitemap", changefreq: "monthly", priority: "0.5" },
];

export function generateSitemap(): string {
  const lastmod = new Date().toISOString().split("T")[0];

  const urls = entries
    .map((e) => {
      const lines = [
        "  <url>",
        `    <loc>${BASE_URL}${e.path}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
      ];
      if (e.changefreq) lines.push(`    <changefreq>${e.changefreq}</changefreq>`);
      if (e.priority) lines.push(`    <priority>${e.priority}</priority>`);
      if (e.image) {
        lines.push(
          "    <image:image>",
          `      <image:loc>${e.image.loc}</image:loc>`,
          e.image.title ? `      <image:title>${e.image.title}</image:title>` : "",
          "    </image:image>",
        );
      }
      lines.push("  </url>");
      return lines.filter(Boolean).join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}

export function writeSitemap() {
  const xml = generateSitemap();
  const outPath = resolve(process.cwd(), "public/sitemap.xml");
  writeFileSync(outPath, xml, "utf8");
  console.log(`[sitemap] wrote ${outPath} (${entries.length} URLs)`);
}
