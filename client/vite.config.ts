import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: ".", // client est la racine du projet client (depuis client/)
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"), // accès code partagé
    },
  },
  build: {
    outDir: "../dist/client", // build React sort dans dist/client au niveau racine
    emptyOutDir: true,
    sourcemap: true, // utile en dev ou debug
    // base: "/", // optionnel, surtout si tu déploies sous un chemin custom
  },
  server: {
    port: 3000,
    strictPort: true,
  },
});
