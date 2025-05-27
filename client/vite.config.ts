import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  // Le dossier `client` est la racine de l'application
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

  appType: "custom",

  server: {
    middlewareMode: mode === "development",
    hmr: {
      port: 3000,
    },
    fs: {
      allow: [".."],
    },
  },

  build: {
    outDir: path.resolve(__dirname, "../dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: "index.html", // Chemin RELATIF à `root`, donc 'client/index.html'
      commonjsOptions: {
        include: [/shared/, /node_modules/],
      },
      // external: [...]
    },
    base: "/",
  },
}));
