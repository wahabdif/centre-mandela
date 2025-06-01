import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Résoudre __dirname dans un module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sortie du build dans le dossier public du serveur backend
const outDirPath = path.resolve(__dirname, '../server/public');

export default defineConfig({
  // Racine du projet frontend (dossier client)
  root: __dirname,

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias pour importer facilement depuis src
      '@shared': path.resolve(__dirname, '../shared'), // Alias pour code partagé frontend/backend
    },
  },

  build: {
    outDir: outDirPath,    // Sortie dans /server/public
    emptyOutDir: true,     // Vide le dossier avant build
    sourcemap: true,       // Génère les sourcemaps pour debug
    target: 'esnext',      // Cible moderne, compatible avec React 18+
    // rollupOptions: {
    //   // Ici tu peux ajouter des options Rollup si besoin (ex : externalisation)
    // },
  },

  server: {
    port: 3000,
    open: true,
    strictPort: true,
    proxy: {
      // Proxy les appels /api vers le backend Node.js
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  define: {
    'process.env': {}, // Évite les erreurs liées à l'usage de process.env dans le frontend
  },

  optimizeDeps: {
    include: ['autoprefixer'], // Forcer inclusion si besoin
  },
});
