import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  root: ".", // Puisque ce fichier est déjà dans /client

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },

  css: {
    postcss: path.resolve(__dirname, "postcss.config.cjs"),
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
      input: path.resolve(__dirname, "index.html"),
      commonjsOptions: {
        include: [/shared/, /node_modules/],
      },
    },

    base: "/",
  },

  preview: {
    allowedHosts: ["centre-mandela-qscm.onrender.com"],
  },
}));
