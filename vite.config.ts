import { defineConfig } from 'vite';
import path from 'path';
import solidPlugin from 'vite-plugin-solid';
import { macaronVitePlugin } from '@macaron-css/vite';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  plugins: [
    solidPlugin(),
    macaronVitePlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'es6',
  },
});
