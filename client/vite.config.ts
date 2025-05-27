import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  root: path.resolve(__dirname, "client"), // Le dossier racine de l'app est 'client'

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"), // Alias pour src dans client
      "@shared": path.resolve(__dirname, "../shared"), // Répertoire partagé
    },
  },

  css: {
    postcss: path.resolve(__dirname, "client/postcss.config.cjs"), // Fichier PostCSS dans 'client'
  },

  appType: "custom", // Type d'application pour l'intégration avec Express

  server: {
    middlewareMode: mode === "development", // En mode développement uniquement
    hmr: {
      port: 3000, // Port pour Hot Module Replacement
    },
    fs: {
      allow: [".."], // Accès au dossier parent
    },
  },

  build: {
    outDir: path.resolve(__dirname, "dist"), // Dossier de sortie à la racine

    emptyOutDir: true, // Vide le dossier 'dist' avant le build

    rollupOptions: {
      // Vite résout automatiquement le fichier 'index.html' situé dans 'client'
      input: path.resolve(__dirname, "client/index.html"), // Fichier d'entrée dans 'client'

      commonjsOptions: {
        include: [/shared/, /node_modules/], // Modules à inclure dans le build
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
