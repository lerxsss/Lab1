// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  // щоб зручно імпортувати з /src
  resolve: {
    alias: { '@': resolve(__dirname, 'src') }
  },

  // мультисторінкова збірка
  build: {
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        about:    resolve(__dirname, 'about.html'),
        contacts: resolve(__dirname, 'contacts.html'),
      }
    }
  }
});
