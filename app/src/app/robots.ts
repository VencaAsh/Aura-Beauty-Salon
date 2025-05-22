import { MetadataRoute } from 'next';

// Required for static export
export const dynamic = 'force-static';
// Set revalidation to false for static export
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.aurabeautysalon.cz/sitemap.xml',
    host: 'https://www.aurabeautysalon.cz',
  };
}
