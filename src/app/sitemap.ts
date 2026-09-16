import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.getnovala.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'en-CA': SITE_URL,
          'fr-CA': `${SITE_URL}/fr`,
        },
      },
    },
    {
      url: `${SITE_URL}/fr`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
