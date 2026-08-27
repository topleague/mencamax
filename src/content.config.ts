import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    cover: image().optional(),
    coverUrl: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Susanta'),
    authorAvatar: z.string().optional(),
    layout: z.enum(['classic', 'split']).default('classic'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
