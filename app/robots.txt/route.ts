import { site } from '@/lib/site';

export const dynamic = 'force-static';

export async function GET() {
  const base = site.url.replace(/\/$/, '');
  const body = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${base}/sitemap.xml
Host: ${base}
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
