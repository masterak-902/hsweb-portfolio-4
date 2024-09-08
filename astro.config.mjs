import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: {
      prefixDefaultLocale: true
    },
    fallback: {
      en: 'ja'
    }
  },

  output: 'hybrid',
  adapter: cloudflare()
});