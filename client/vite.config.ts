import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  // Spécifiez que le dossier `client` est la racine de l'application
  root: path.resolve(__dirname, "client"), // La racine du projet est sous 'client'

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"), // Alias pour le dossier 'src' sous 'client'
      "@shared": path.resolve(__dirname, "../shared"), // Dossier partagé situé à la racine du projet
    },
  },

  css: {
    postcss: path.resolve(__dirname, "client/postcss.config.cjs"), // Fichier PostCSS situé sous 'client'
  },

  appType: "custom", // Type d'application pour l'intégration avec Express

  server: {
    middlewareMode: mode === "development", // En mode développement uniquement
    hmr: {
      port: 3000, // Hot Module Replacement (HMR) sur le port 3000
    },
    fs: {
      allow: [".."], // Permet l'accès au dossier parent (utilisé dans un monorepo)
    },
  },

  build: {
    // Dossier de sortie à la racine du projet
    outDir: path.resolve(__dirname, "../dist"), // Le dossier 'dist' sera à la racine, pas dans 'client'

    emptyOutDir: true, // Vide le dossier 'dist' avant de construire le projet

    rollupOptions: {
      // Utilise 'client/index.html' comme point d'entrée pour le build
      input: path.resolve(__dirname, "client/index.html"), // Assurez-vous que le fichier 'index.html' est dans 'client'

      commonjsOptions: {
        include: [/shared/, /node_modules/], // Modules communs à inclure dans le build
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
