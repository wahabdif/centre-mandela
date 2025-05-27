import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // alias pratique pour src
    },
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    // Proxy si besoin de rediriger vers backend en dev
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  css: {
    // Configuration Tailwind etc si besoin
    postcss: './postcss.config.js',
  },
  define: {
    'process.env': process.env, // si besoin compatibilité env
  },
});
