import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Résoudre __dirname dans un module ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Chemin absolu vers server/public depuis client/vite.config.ts
const outDirPath = path.resolve(__dirname, '../server/public');

export default defineConfig({
  root: __dirname, // client/
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),                  // client/src
      '@shared': path.resolve(__dirname, '../shared'),      // shared à la racine
    },
  },
  build: {
    outDir: outDirPath,    // build client -> server/public
    emptyOutDir: true,     // vider server/public avant build
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  css: {
    postcss: path.resolve(__dirname, './postcss.config.js'),
  },
  define: {
    'process.env': {},
  },
});
