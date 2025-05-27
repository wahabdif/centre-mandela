import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  root: path.resolve(__dirname, "client"), // Le dossier client est la racine pour Vite

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"), // Répertoire source dans client
      "@client": path.resolve(__dirname, "client/src"), // Répertoire client
      "@shared": path.resolve(__dirname, "../shared"), // Répertoire partagé (relatif à la racine)
    },
  },

  css: {
    postcss: path.resolve(__dirname, "client/postcss.config.cjs"), // Fichier PostCSS situé dans le dossier client
  },

  appType: "custom", // Type d'application pour l'intégration avec Express

  server: {
    middlewareMode: mode === "development", // Active le mode middleware uniquement en développement
    hmr: {
      port: 3000, // Port pour le Hot Module Replacement
    },
    fs: {
      allow: [".."], // Accès au dossier parent
    },
  },

  build: {
    outDir: path.resolve(__dirname, "client/../dist"), // Dossier de sortie en dehors de client
    emptyOutDir: true, // Vide le dossier de sortie avant de construire

    rollupOptions: {
      input: path.resolve(__dirname, "client/index.html"), // Fichier d'entrée dans client

      commonjsOptions: {
        include: [/shared/, /node_modules/], // Inclut les modules partagés et node_modules
      },

      external: [
        "nanoid", // Exclure nanoid du bundle
        "express", // Exclure express du bundle
        "vite", // Exclure Vite du bundle
        "@vitejs/plugin-react", // Exclure le plugin React de Vite
        "@replit/vite-plugin-runtime-error-modal", // Exclure le plugin de runtime error modal
        "@replit/vite-plugin-cartographer", // Exclure le plugin cartographer
        "drizzle-orm/pg-core", // Exclure le module pg-core de drizzle-orm
        "drizzle-zod", // Exclure drizzle-zod
      ].filter(Boolean), // Retirer les éléments null ou undefined de la liste
    },

    base: "/", // Base pour les chemins relatifs des assets en production
  },
}));
