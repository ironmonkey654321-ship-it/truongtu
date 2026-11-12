// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://truongtu.truongtu.workers.dev',
	integrations: [mdx(), sitemap()],
	// Toan bo trang dung mot font: Be Vietnam Pro.
	// Astro tai font ve luc build va phuc vu tu chinh trang nay,
	// nguoi xem khong phai goi sang Google Fonts.
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Be Vietnam Pro',
			cssVariable: '--font-be-vietnam',
			weights: [400, 500, 600, 700],
			styles: ['normal', 'italic'],
			subsets: ['latin', 'vietnamese'],
			fallbacks: ['Segoe UI', 'system-ui', 'sans-serif'],
		},
	],
});
