import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
  build: {
    outDir: '../server/public',
    emptyOutDir: true,
    sourcemap: true,
  },
  css: {
    postcss: './postcss.config.js',
  },
  define: {
    'process.env': process.env,
  },
});
