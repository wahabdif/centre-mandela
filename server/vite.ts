/// <reference types="node" />

import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction,
  type RequestHandler,
} from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";  // Correction ici : createServer au lieu de createViteServer
import { Server } from "http";
import { nanoid } from "nanoid";
import { fileURLToPath } from "url";

// Correction de __dirname en environnement ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Logger avec horodatage
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
 * Middleware Vite pour Express en mode développement
 */
export async function setupVite(app: Express, server: Server): Promise<void> {
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      hmr: { server },
      allowedHosts: "all",
    },
    appType: "custom",
  });

  app.use(vite.middlewares as unknown as RequestHandler);

  app.use("*", async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(__dirname, "..", "client", "index.html");
      let template = await fs.promises.readFile(clientTemplate, "utf-8");

      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

/**
 * Sert les fichiers statiques générés en production
 */
export function serveStatic(app: Express): void {
  const distPath = path.resolve(__dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Répertoire introuvable : ${distPath}. Veuillez exécuter "npm run build" d'abord.`
    );
  }

  app.use(express.static(distPath));

  app.use("*", (_req: Request, res: Response) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
