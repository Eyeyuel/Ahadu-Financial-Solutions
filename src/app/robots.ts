import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.ahadufinancial.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Allow Search & AI Discovery Crawlers
      {
        userAgent: ['Googlebot', 'Bingbot', 'DuckDuckBot', 'GPTBot', 'ClaudeBot', 'PerplexityBot'],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
