import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { nanoid } from "nanoid";

export default defineConfig(({ mode }) => ({
  root: ".", // Dossier racine de l'application client

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@client": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },

  css: {
    postcss: path.resolve(__dirname, "postcss.config.cjs"),
  },

  appType: "custom", // Type d'application pour l'intégration avec Express

  server: {
    middlewareMode: mode === "development", // Active le mode middleware uniquement en développement
    hmr: {
      port: 3000, // Hot Module Replacement pour le développement
    },
    fs: {
      allow: [".."], // Accès au dossier parent
    },
  },

  build: {
    outDir: path.resolve(__dirname, "../dist"),
    emptyOutDir: true,

    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),

      commonjsOptions: {
        include: [/shared/, /node_modules/],
      },

      external: [
        // Exclure certains modules en fonction du rôle dans le projet
        mode === 'production' ? 'vite' : null, 
        mode === 'production' ? '@vitejs/plugin-react' : null, 
        'nanoid', 
        'express'
      ].filter(Boolean), // Retirer les éléments `null` de la liste
    },

    base: "/", // Base pour les chemins relatifs des assets en production
  },
}));
