import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://connectea.net',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
