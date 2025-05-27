import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  root: ".", // le dossier client est la racine
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),         // pour "@/components/..."
      "@client": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },
  css: {
    postcss: path.resolve(__dirname, "postcss.config.cjs"),
  },
  appType: "custom", // pour intégration avec Express
  server: {
    middlewareMode: mode === "development", // Utilisé uniquement en dev
    hmr: {
      port: 3000,
    },
    fs: {
      allow: [".."], // autoriser l'accès au dossier parent (shared)
    },
  },
  preview: {
    // Utile uniquement si tu fais un vite preview sur Render (peu probable)
    allowedHosts: ["centre-mandela-qscm.onrender.com"],
  },
  build: {
    outDir: path.resolve(__dirname, "../dist"), // sortie pour Express
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
    commonjsOptions: {
      include: [/shared/, /node_modules/], // inclure "shared" pour build
    },
    base: "/", // nécessaire pour que les assets soient correctement résolus
  },
}));
