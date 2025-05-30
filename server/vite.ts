import express, { Request, Response } from 'express';
import type { NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

export async function setupVite(app: express.Application, root = process.cwd(), isDev = true) {
  const resolve = (p: string) => path.resolve(root, p);

  if (isDev) {
    const vite = await createViteServer({
      root,
      server: { middlewareMode: true },
      appType: 'custom'
    });

    app.use(vite.middlewares);

    app.use('*', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const url = req.originalUrl || req.url;

        const templatePath = resolve('index.html');
        let template = fs.readFileSync(templatePath, 'utf-8');

        template = await vite.transformIndexHtml(url, template);

        const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
        const appHtml = await render(url);

        const html = template.replace(`<!--app-html-->`, appHtml);

        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e instanceof Error ? e : new Error(String(e)));
        next(e);
      }
    });
  } else {
    const distPath = resolve('dist/client');
    const ssrManifestPath = resolve('dist/client/ssr-manifest.json');
    const template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8');

    // @ts-ignore: Ignorer temporairement l'absence de déclaration pour ce module
    const { render } = await import('./dist/server/entry-server.js'); 
    const manifest = JSON.parse(fs.readFileSync(ssrManifestPath, 'utf-8'));

    app.use('/assets', express.static(path.join(distPath, 'assets')));

    app.use('*', async (req: Request, res: Response) => {
      const url = req.originalUrl || req.url;
      const appHtml = await render(url, manifest);
      const html = template.replace(`<!--app-html-->`, appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    });
  }
}
