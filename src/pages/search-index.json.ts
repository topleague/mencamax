import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const index = posts.map(p => ({
    title: p.data.title,
    excerpt: p.data.excerpt ?? '',
    tags: p.data.tags,
    url: `/${p.id}/`,
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
}
