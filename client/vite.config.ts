import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  root: path.resolve(__dirname, "client"), // Dossier racine du projet (client)

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"), // Si vous avez des fichiers dans 'client/src', l'alias @ pointe vers ce dossier
      "@shared": path.resolve(__dirname, "../shared"), // Répertoire partagé situé à la racine
    },
  },

  css: {
    postcss: path.resolve(__dirname, "client/postcss.config.cjs"), // Fichier PostCSS dans 'client'
  },

  appType: "custom", // Type d'application pour l'intégration avec Express

  server: {
    middlewareMode: mode === "development",
    hmr: {
      port: 3000, // Port pour le Hot Module Replacement
    },
    fs: {
      allow: [".."], // Accès au dossier parent (utile dans un monorepo)
    },
  },

  build: {
    outDir: path.resolve(__dirname, "client/../dist"), // Dossier de sortie à la racine du projet (dist)

    rollupOptions: {
      // Ici, Vite utilise déjà 'client/index.html' en entrée, donc pas besoin de spécifier 'input'
      input: path.resolve(__dirname, "client/index.html"), // Fichier d'entrée du build

      commonjsOptions: {
        include: [/shared/, /node_modules/],
      },

      external: [
        "nanoid", "express", "vite", "@vitejs/plugin-react", 
        "@replit/vite-plugin-runtime-error-modal", 
        "@replit/vite-plugin-cartographer", 
        "drizzle-orm/pg-core", "drizzle-zod",
      ].filter(Boolean),
    },

    base: "/", // Base pour les chemins relatifs des assets en production
  },
}));
