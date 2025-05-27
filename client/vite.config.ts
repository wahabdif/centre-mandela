import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

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
    postcss: path.resolve(__dirname, "postcss.config.cjs"), // Chemin vers le fichier PostCSS
  },

  appType: "custom", // Type d'application pour l'intégration avec Express

  server: {
    middlewareMode: mode === "development", // Mode middleware uniquement en développement
    hmr: {
      port: 3000, // Hot Module Replacement (HMR) pour la dev
    },
    fs: {
      allow: [".."], // Permet l'accès au dossier parent
    },
  },

  build: {
    outDir: path.resolve(__dirname, "../dist"), // Dossier de sortie pour la build
    emptyOutDir: true, // Vide le dossier de sortie avant de reconstruire

    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),

      commonjsOptions: {
        include: [/shared/, /node_modules/], // Inclure les modules nécessaires
      },

      external: [
        "nanoid", // Exclure nanoid du bundle (elle sera utilisée au runtime)
        "express", // Exclure express, si nécessaire
        mode === "production" ? "vite" : null, // Exclure vite uniquement en mode production
        mode === "production" ? "@vitejs/plugin-react" : null, // Exclure plugin-react en mode production
      ].filter(Boolean), // Filtrer les valeurs nulles (en fonction du mode)

      // Autres options Rollup si nécessaires...
    },

    base: "/", // Base pour les chemins relatifs des assets en production
  },
}));
