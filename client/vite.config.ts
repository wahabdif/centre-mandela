import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { nanoid } from 'nanoid';

export default defineConfig(({ mode }) => ({
  root: ".", // le dossier client est la racine
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),         // pour "@/components/..."
      "@client": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },
  css: {
    postcss: path.resolve(__dirname, "postcss.config.cjs"),
  },
  appType: "custom", // pour intégration avec Express
  server: {
    middlewareMode: mode === "development",
    hmr: {
      port: 3000,
    },
    fs: {
      allow: [".."], // autoriser l'accès au dossier parent (shared)
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
    commonjsOptions: {
      include: [/shared/, /node_modules/], // inclure shared dans commonjs pour le build
    },
    base: '/',  // <-- Ajouté pour corriger les chemins des assets en production
  },
}));
