import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { nanoid } from "nanoid";

export default defineConfig(({ mode }) => ({
  // Dossier racine de l'application client
  root: ".", 

  // Plugins utilisés dans la configuration
  plugins: [react()],

  // Alias pour une résolution facile des chemins
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),         // pour "@/components/..."
      "@client": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"), // accès au dossier partagé
    },
  },

  // Configuration de PostCSS
  css: {
    postcss: path.resolve(__dirname, "postcss.config.cjs"), // Chemin vers votre fichier PostCSS
  },

  // Type d'application pour l'intégration avec Express
  appType: "custom",

  // Configuration du serveur de développement
  server: {
    middlewareMode: mode === "development",  // Active le mode middleware uniquement en développement
    hmr: {
      port: 3000,  // Configuration du Hot Module Replacement (HMR) pour la dev
    },
    fs: {
      allow: [".."],  // Permet l'accès au dossier parent (utile pour partager des ressources)
    },
  },

  // Configuration de la construction de l'application
  build: {
    // Dossier de sortie pour la construction
    outDir: path.resolve(__dirname, "../dist"),
    emptyOutDir: true,  // Vide le dossier de sortie avant de reconstruire

    rollupOptions: {
      // Fichier d'entrée principal
      input: path.resolve(__dirname, "index.html"),

      // Gestion des modules CommonJS (inclure shared dans le build)
      commonjsOptions: {
        include: [/shared/, /node_modules/],
      },

      // Marquer certains modules comme externes si nécessaire (ex. Express, Vite, nanoid)
      external: ["vite", "nanoid", "@vitejs/plugin-react", "express"],
    },

    // Base pour les chemins relatifs des assets en production
    base: "/",
  },
}));
