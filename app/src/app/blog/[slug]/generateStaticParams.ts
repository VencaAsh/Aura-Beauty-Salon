// Required for static export
export const dynamic = 'force-static';

// Blog posts data
const blogPosts = [
  {
    slug: 'letni-glow-up-akce-dopreje-si-zarivou-promenu',
  },
  {
    slug: 'aura-beauty-salon-misto-kde-zari-vase-prirozena-krasa',
  }
];

// Generate static paths for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
