import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Résoudre __dirname dans un module ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Chemin absolu vers le dossier public du serveur où sera généré le build client
const outDirPath = path.resolve(__dirname, '../server/public');

console.log('vite root:', __dirname);
console.log('vite outDir:', outDirPath);

export default defineConfig({
  root: __dirname, // Le dossier client comme racine
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),                // Alias vers client/src
      '@shared': path.resolve(__dirname, '../shared'),    // Alias vers shared à la racine
    },
  },
  build: {
    outDir: outDirPath,   // Sortie build dans server/public
    emptyOutDir: true,    // Vide le dossier public avant build
    sourcemap: true,      // Génère les sourcemaps pour debug
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',  // Proxy vers backend en dev
        changeOrigin: true,
        secure: false,
      },
    },
  },
  css: {
    postcss: path.resolve(__dirname, './postcss.config.js'),
  },
  define: {
    'process.env': {},  // Evite erreurs sur process.env côté client
  },
});
