import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const root = path.resolve(__dirname, "client");

  return {
    root,

    plugins: [react()],

    resolve: {
      alias: {
        "@": path.resolve(root, "src"),
        "@shared": path.resolve(__dirname, "shared"), // ../shared devient shared si tu l’as dans le root
      },
    },

    css: {
      postcss: path.resolve(root, "postcss.config.cjs"),
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
      outDir: path.resolve(__dirname, "dist"), // ../dist devient dist si tu veux le mettre à la racine
      emptyOutDir: true,

      rollupOptions: {
        input: path.resolve(root, "index.html"), // CHEMIN ABSOLU ici
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
  };
});
