import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname),

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },

  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
    base: "/",
  },

  server: {
    hmr: { port: 3000 },
    fs: { allow: [".."] },
  },

  preview: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 4173,
  },
});
