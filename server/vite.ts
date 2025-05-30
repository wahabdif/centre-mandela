import { createServer, type ViteDevServer } from 'vite';
import express from 'express';
import type { Express, Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { nanoid } from 'nanoid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setupVite(app: Express, server: any): Promise<void> {
  const vite: ViteDevServer = await createServer({
    server: {
      middlewareMode: true,
      hmr: { server },
      allowedHosts: true
    },
    appType: 'custom'
  });

  app.use(vite.middlewares);

  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;
    try {
      const indexPath = path.resolve(__dirname, '..', '..', 'client', 'index.html');
      let template = await fs.promises.readFile(indexPath, 'utf-8');
      template = template.replace('src="/src/main.tsx"', `src="/src/main.tsx?v=${nanoid()}`);
      const html = await vite.transformIndexHtml(url, template);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
      vite.ssrFixStacktrace(error as Error);
      next(error);
    }
  });
}

export function serveStatic(app: Express, baseDir: string): void {
  const publicDir = path.resolve(baseDir, 'public');
  if (!fs.existsSync(publicDir)) {
    throw new Error(`❌ Dossier 'public' manquant : ${publicDir}`);
  }

  app.use(express.static(publicDir));

  app.use('*', (_req: Request, res: Response) => {
    res.sendFile(path.resolve(publicDir, 'index.html'));
  });
}
