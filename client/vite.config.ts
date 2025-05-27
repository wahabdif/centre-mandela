import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  root: ".", // Déjà dans /client

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
    host: true,
    port: 5173,
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: 5173,
    },
    fs: {
      allow: [".."],
    },
    middlewareMode: mode === "development" ? false : undefined, // pas toujours utile
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
    port: 4173,
    host: true,
    allowedHosts: ["centre-mandela-qscm.onrender.com"],
  },
}));
