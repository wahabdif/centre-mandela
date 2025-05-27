import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const root = path.resolve(__dirname);

  return {
    root,
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(root, "src"),
        "@shared": path.resolve(__dirname, "../shared"),
      },
    },
    css: {
      postcss: path.resolve(root, "postcss.config.cjs"),
    },
    appType: "custom", // si tu intègres Express
    server: {
      middlewareMode: mode === "development",
      hmr: { port: 3000 },
      fs: { allow: [".."] },
    },
    build: {
      outDir: path.resolve(__dirname, "../dist/client"),
      emptyOutDir: true,
      rollupOptions: {
        input: path.resolve(root, "index.html"),
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
