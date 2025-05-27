export default defineConfig(({ mode }) => ({
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
    hmr: { port: 3000 },
    fs: { allow: [".."] },
  },
  build: {
    outDir: path.resolve(__dirname, "../dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: "index.html",  // <-- Ici, relatif à root 'client'
      commonjsOptions: { include: [/shared/, /node_modules/] },
      external: [
        "nanoid", "express", "vite", "@vitejs/plugin-react",
        "@replit/vite-plugin-runtime-error-modal",
        "@replit/vite-plugin-cartographer",
        "drizzle-orm/pg-core", "drizzle-zod",
      ].filter(Boolean),
    },
    base: "/",
  },
}));
