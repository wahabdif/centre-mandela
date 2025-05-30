import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Résoudre les chemins avec import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Définir le répertoire de sortie dans le dossier public du serveur
const outDirPath = path.resolve(__dirname, '../server/public');

export default defineConfig({
  // Vite utilise le dossier `client` comme racine
  root: __dirname,

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Permet `@/locales/...` etc.
      '@shared': path.resolve(__dirname, '../shared'),
    },
  },

  build: {
    outDir: outDirPath,
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

  define: {
    'process.env': {}, // Empêche les erreurs liées à process.env
  },

  optimizeDeps: {
    include: ['autoprefixer'], // Ajout pour forcer l’inclusion d’autoprefixer
  },
});
