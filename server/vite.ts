import express, { type Express, type Request, type Response, type NextFunction, type RequestHandler } from 'express';
import * as vite from 'vite';  // Importer tout
import fs from 'fs';
import path from 'path';
import { Server } from 'http';
import { nanoid } from 'nanoid';
import { fileURLToPath } from 'url';

const createServer = (vite as any).createServer;  // Extraction forcée

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setupVite(app: Express, server: Server): Promise<void> {
  const viteServer = await createServer({
    server: {
      middlewareMode: true,
      hmr: { server },
      allowedHosts: 'all',
    },
    appType: 'custom',
  });

  app.use(viteServer.middlewares as unknown as RequestHandler);

  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    try {
      const indexPath = path.resolve(__dirname, '..', 'client', 'index.html');
      let template = await fs.promises.readFile(indexPath, 'utf-8');

      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      const page = await viteServer.transformIndexHtml(url, template);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(page);
    } catch (e) {
      viteServer.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express): void {
  const distPath = path.resolve(__dirname, 'public');

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Répertoire introuvable : ${distPath}. Veuillez exécuter "npm run build" d'abord.`
    );
  }

  app.use(express.static(distPath));
  app.use('*', (_req: Request, res: Response) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
}
