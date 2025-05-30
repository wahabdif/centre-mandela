import type { Express, Request, Response, NextFunction } from 'express';
import { createServer, type ViteDevServer } from 'vite';
import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

export async function setupVite(app: Express, server: any): Promise<void> {
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
    try {
      const indexPath = path.resolve('client/index.html');
      let template = await fs.readFile(indexPath, 'utf-8');

      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      const html = await vite.transformIndexHtml(req.originalUrl, template);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express, dirname: string): void {
  const publicPath = path.resolve(dirname, '../public');
  const indexPath = path.resolve(publicPath, 'index.html');

  app.use(express.static(publicPath));
  app.use('*', (_req: Request, res: Response) => {
    res.sendFile(indexPath);
  });
}
