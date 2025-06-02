// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Charge les variables d'environnement depuis .env
dotenv.config();

// Résout __dirname dans un module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin de sortie pour le build frontend (dans le backend Express)
const outDirPath = path.resolve(__dirname, '../server/public/frontend');

// Définition de la configuration Vite
export default defineConfig({
  root: __dirname, // Racine du projet client

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias vers src/
      '@shared': path.resolve(__dirname, '../shared'), // Code partagé frontend/backend
    },
  },

  build: {
    outDir: outDirPath,        // Dossier de build dans le backend
    emptyOutDir: true,         // Vide avant chaque build
    sourcemap: true,           // Pour faciliter le debug
    target: 'esnext',          // Cible moderne compatible avec React 18+
  },

  server: {
    port: 3000,
    open: true,
    strictPort: true,
    proxy: {
      '/api': {
        target: process.env['VITE_BACKEND_URL'] || 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  define: {
    // Injecte dynamiquement les variables d'environnement dans le code frontend
    'process.env': {
      BACKEND_URL: process.env['VITE_BACKEND_URL'],
    },
  },

  optimizeDeps: {
    include: ['autoprefixer'], // Inclusion forcée si nécessaire
  },
});
