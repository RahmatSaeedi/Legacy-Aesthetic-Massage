// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://legacy-massage.ca',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Help search engines understand crawl priority/cadence.
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date('2026-06-09'),
    }),
  ],
  build: {
    // Emit /services/deep-tissue-massage/index.html for clean, stable URLs.
    format: 'directory',
  },
  image: {
    // Allow optimizing the owner photos pulled from the live site if ever referenced remotely.
    domains: ['legacy-massage.ca'],
  },
});
