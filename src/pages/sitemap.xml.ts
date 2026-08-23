// /sitemap.xml existierte bisher nicht (Astro/@astrojs/sitemap erzeugt
// standardmäßig /sitemap-index.xml, das robots.txt bereits korrekt
// referenziert). Dieser Alias sorgt zusätzlich dafür, dass der häufig
// erwartete Pfad /sitemap.xml ebenfalls mit Status 200 antwortet, indem
// er auf denselben, automatisch generierten Sitemap-Index verweist.
import { site } from "../config/site";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${site.url}/sitemap-0.xml</loc></sitemap></sitemapindex>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
