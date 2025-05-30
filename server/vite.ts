import { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import { ViteDevServer } from 'vite';

export async function setupVite(app: Express, root = process.cwd(), isDev = true) {
  if (isDev) {
    const vite = await import('vite');
    const viteServer = await vite.createServer({
      root,
      server: { middlewareMode: true },
      appType: 'custom',
    });

    app.use(viteServer.middlewares);

    app.use('*', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const url = req.originalUrl;
        const template = await viteServer.transformIndexHtml(url, `
          <!DOCTYPE html><html><body><div id="app"></div></body></html>
        `);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        viteServer.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.resolve(root, 'dist');
    app.use(express.static(distPath));
    app.use('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }
}
