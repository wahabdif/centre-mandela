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
        "@shared": path.resolve(root, "../shared"),
      },
    },

    css: {
      postcss: path.resolve(root, "postcss.config.cjs"),
    },

    appType: "custom",

    server: {
      middlewareMode: mode === "development",
      hmr: { port: 3000 },
      fs: { allow: [".."] },
    },

    build: {
      outDir: path.resolve(root, "../dist/server/public"),
      emptyOutDir: true,
      rollupOptions: {
        input: path.resolve(root, "index.html"),
        // commonjsOptions deprecated in vite v5, on peut gérer les externals si besoin
        external: ["shared"],
      },
      base: "/",
    },

    preview: {
      host: "0.0.0.0",
      port: Number(process.env.PORT) || 4173,
      allowedHosts: ["centre-mandela-qscm.onrender.com"],
    },
  };
});
