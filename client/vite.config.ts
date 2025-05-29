import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Corriger les chemins absolus
const clientDir = __dirname;
const publicDir = path.resolve(__dirname, '../server/public');

export default defineConfig({
  root: clientDir,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(clientDir, 'src'),
      '@shared': path.resolve(clientDir, '../shared'),
    },
  },
  build: {
    outDir: publicDir,
    emptyOutDir: true,
    sourcemap: true,
  },
  css: {
    postcss: path.resolve(clientDir, './postcss.config.js'),
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
    'process.env': {},
  },
});
