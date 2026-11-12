import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Moi bai la mot file .md hoac .mdx trong `src/content/blog/`.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			// Chu de cua bai, vi du 'Sách'. Bo trong cung duoc.
			topic: z.string().optional(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog };
