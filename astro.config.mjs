import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://connectea.net',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
