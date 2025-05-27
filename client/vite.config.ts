import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  // La racine du projet sous 'client'
  root: path.resolve(__dirname, "client"),

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },

  css: {
    postcss: path.resolve(__dirname, "client/postcss.config.cjs"),
  },

  appType: "custom", // Pour intégration Express par exemple

  server: {
    middlewareMode: mode === "development",
    hmr: {
      port: 3000,
    },
    fs: {
      allow: [".."], // Autorise l'accès au dossier parent (monorepo)
    },
  },

  build: {
    // Sortie dans ../dist (au niveau racine projet)
    outDir: path.resolve(__dirname, "../dist"),
    emptyOutDir: true,

    rollupOptions: {
      // Point d'entrée relatif à la racine (client/index.html)
      input: "index.html",

      commonjsOptions: {
        include: [/shared/, /node_modules/],
      },

      external: [
        "nanoid",
        "express",
        "vite",
        "@vitejs/plugin-react",
        "@replit/vite-plugin-runtime-error-modal",
        "@replit/vite-plugin-cartographer",
        "drizzle-orm/pg-core",
        "drizzle-zod",
      ].filter(Boolean),
    },

    base: "/",
  },
}));
