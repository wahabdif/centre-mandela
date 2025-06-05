import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Chargement des variables d’environnement
dotenv.config();

// Résolution pour ESM (équivalent de __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Répertoire racine du projet client
const clientRoot = path.resolve(__dirname);

// Répertoire de build vers le backend
const outDirPath = path.resolve(__dirname, '../server/public/frontend');

// Configuration Vite
export default defineConfig({
  root: clientRoot,

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(clientRoot, 'src'),         // Pour importer depuis src/
      '@shared': path.resolve(__dirname, '../shared'), // Partagé entre frontend/backend si besoin
    },
  },

  build: {
    outDir: outDirPath,
    emptyOutDir: true,
    sourcemap: true,
    target: 'esnext',
  },

  server: {
    port: 3000,
    open: true,
    strictPort: true,
    proxy: {
      '/api': {
        target: process.env.VITE_BACKEND_URL || 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  define: {
    'process.env': {
      BACKEND_URL: process.env.VITE_BACKEND_URL,
    },
  },

  optimizeDeps: {
    include: ['autoprefixer'],
  },
});
