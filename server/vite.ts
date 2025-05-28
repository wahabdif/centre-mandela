/// <reference types="node" />

import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger, type ViteDevServer } from "vite";
import { type Server } from "http";
import { fileURLToPath } from "url";
import { nanoid } from "nanoid";

// @ts-ignore — Import de config ESM sans types (temporaire, peut être remplacé par une déclaration .d.ts)
import viteConfig from "../vite.config.js";

// Obtenir __dirname dans un module ES
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Log avec horodatage
 */
export function log(message: string, source = "express"): void {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

/**
 * Configure Vite comme middleware Express (mode développement)
 */
export async function setupVite(app: Express, server: Server): Promise<void> {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true,
  };

  const vite: ViteDevServer = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg: string, options?: any) => {
        viteLogger.error(msg, options);
        process.exit(1); // Quitte en cas d'erreur critique
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(__dirname, "..", "client", "index.html");
      let template = await fs.promises.readFile(clientTemplate, "utf-8");

      // Injecter version dans le script principal pour forcer un rafraîchissement
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      // Laisser Vite transformer le template (injection HMR, etc.)
      const page = await vite.transformIndexHtml(url, template);

      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

/**
 * Sert les fichiers statiques en production
 */
export function serveStatic(app: Express): void {
  const distPath = path.resolve(__dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Répertoire introuvable : ${distPath}. Veuillez exécuter "npm run build" d'abord.`
    );
  }

  app.use(express.static(distPath));

  // Fallback SPA : toutes les routes renvoient vers index.html
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
