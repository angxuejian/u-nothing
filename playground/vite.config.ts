import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@u-nothing': fileURLToPath(new URL('../packages/u-nothing/src', import.meta.url)),
      '@theme': fileURLToPath(new URL('../packages/theme/src', import.meta.url)),
    },
  },
});
