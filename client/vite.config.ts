import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  // Déjà dans `client/`, donc pas besoin de redéfinir root
  root: ".", // ou omettre carrément la propriété

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
      input: path.resolve(__dirname, "index.html"), // car index.html est dans client/
      commonjsOptions: {
        include: [/shared/, /node_modules/],
      },
    },

    base: "/",
  },
}));
