import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

// Résolution ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dossier source client
const clientRoot = path.resolve(__dirname);

// Dossier de build dans le backend Express
const outDirPath = path.resolve(__dirname, '../server/public/frontend');

export default defineConfig({
  root: clientRoot, // Assure que Vite part du dossier client

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(clientRoot, 'src'),
      '@shared': path.resolve(__dirname, '../shared'),
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
