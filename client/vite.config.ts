import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  root: path.resolve(__dirname, "client"), // Dossier racine est déjà 'client'

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"), // Répertoire source dans client
      "@client": path.resolve(__dirname, "client/src"), // Répertoire client
      "@shared": path.resolve(__dirname, "../shared"), // Répertoire partagé
    },
  },

  css: {
    postcss: path.resolve(__dirname, "client/postcss.config.cjs"), // Fichier PostCSS situé dans 'client'
  },

  appType: "custom",

  server: {
    middlewareMode: mode === "development",
    hmr: {
      port: 3000,
    },
    fs: {
      allow: [".."], // Autorise l'accès au dossier parent
    },
  },

  build: {
    outDir: path.resolve(__dirname, "client/../dist"), // Dossier de sortie à la racine
    emptyOutDir: true,

    rollupOptions: {
      // Utilisation de l'entrée par défaut de Vite, soit 'client/index.html'
      input: path.resolve(__dirname, "client/index.html"), // Ce chemin doit être correct

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

    base: "/",
  },
}));
