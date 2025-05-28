import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir __dirname en ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration Vite
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),        // Utilisation de @ pour importer depuis /src
      '@shared': path.resolve(__dirname, '../shared') // Alias facultatif si tu veux utiliser @shared
    },
  },
  server: {
    port: 3000,               // Port pour le frontend
    open: true,               // Ouvrir automatiquement le navigateur
    strictPort: true,         // Échouer si le port est occupé
    proxy: {
      '/api': 'http://localhost:4000' // Proxy pour l'API backend Express
    },
  },
  build: {
    outDir: '../server/public', // Output dans le backend pour un serveur fullstack
    emptyOutDir: true,
    sourcemap: true,
  },
  css: {
    postcss: './postcss.config.js', // Config PostCSS (si existante)
  },
  define: {
    'process.env': process.env, // Injection des variables d'environnement
  },
});
