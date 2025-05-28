import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Résoudre __dirname dans un module ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: __dirname, // Définit le dossier racine de Vite sur /client
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),                  // Alias vers client/src
      '@shared': path.resolve(__dirname, '../shared'),      // Alias vers shared à la racine
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../server/public'),    // Sortie build dans server/public
    emptyOutDir: true,
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
    postcss: path.resolve(__dirname, './postcss.config.js'), // Résolu correctement
  },
  define: {
    'process.env': {}, // Empêche les erreurs de process.env côté client
  },
});
