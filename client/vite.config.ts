import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir __dirname en ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),               // Alias @ vers /src
      '@shared': path.resolve(__dirname, '../shared'),   // Alias @shared vers ../shared
    },
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
  build: {
    outDir: path.resolve(__dirname, '../server/public'), // Sortie dans backend/public
    emptyOutDir: true,
    sourcemap: true,
  },
  css: {
    postcss: './postcss.config.js', // si tu as un fichier postcss
  },
  define: {
    'process.env': {}, // On évite d’injecter process.env complet qui peut poser problème côté client
  },
});
