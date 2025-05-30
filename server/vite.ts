import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import { createServer, type ViteDevServer } from 'vite';
import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setupVite(app: express.Express, server: any): Promise<void> {
  const vite: ViteDevServer = await createServer({
    server: {
      middlewareMode: true,
      hmr: { server },
      allowedHosts: 'all',
    },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl || req.url;
    try {
      const indexPath = path.resolve(__dirname, '..', 'client', 'index.html');
      let template = await fs.readFile(indexPath, 'utf-8');

      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      const html = await vite.transformIndexHtml(url, template);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
      vite.ssrFixStacktrace(error as Error);
      next(error);
    }
  });
}

export function serveStatic(app: express.Express): void {
  const distPath = path.resolve(__dirname, '..', 'public');

  if (!fs.stat(distPath)) {
    throw new Error(
      `📦 Le dossier ${distPath} est introuvable. Lancez "npm run build" avant la mise en production.`
    );
  }

  app.use(express.static(distPath));

  app.use('*', (_req: Request, res: Response) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
}
