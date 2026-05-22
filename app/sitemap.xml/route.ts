import { site, services } from '@/lib/site';
import { articles } from '@/lib/articles-data';

export const dynamic = 'force-static';

interface Entry {
  loc: string;
  changefreq?: 'weekly' | 'monthly' | 'yearly';
  priority?: number;
}

function buildSitemap(): string {
  const base = site.url.replace(/\/$/, '');
  const now = new Date().toISOString();

  const staticEntries: Entry[] = [
    { loc: `${base}/`, changefreq: 'weekly', priority: 1 },
    { loc: `${base}/about`, changefreq: 'monthly', priority: 0.7 },
    { loc: `${base}/services`, changefreq: 'monthly', priority: 0.8 },
    { loc: `${base}/water-101`, changefreq: 'weekly', priority: 0.7 },
    { loc: `${base}/service-area`, changefreq: 'monthly', priority: 0.7 },
    { loc: `${base}/book`, changefreq: 'monthly', priority: 0.9 },
    { loc: `${base}/contact`, changefreq: 'yearly', priority: 0.5 },
  ];

  const serviceEntries: Entry[] = services.map((s) => ({
    loc: `${base}/services/${s.slug}`,
    changefreq: 'monthly',
    priority: 0.7,
  }));

  const articleEntries: Entry[] = articles.map((a) => ({
    loc: `${base}/water-101/${a.slug}`,
    changefreq: 'monthly',
    priority: 0.6,
  }));

  const all = [...staticEntries, ...serviceEntries, ...articleEntries];

  const urls = all
    .map(
      (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${e.changefreq || 'monthly'}</changefreq>
    <priority>${(e.priority ?? 0.5).toFixed(1)}</priority>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export async function GET() {
  return new Response(buildSitemap(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
