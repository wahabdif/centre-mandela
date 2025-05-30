import express from 'express';
import { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer, ViteDevServer } from 'vite';

export async function setupVite(app: Express, root = process.cwd(), isDev = true) {
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
        const url = req.originalUrl;

        const templatePath = resolve('index.html');
        let template = fs.readFileSync(templatePath, 'utf-8');

        template = await vite.transformIndexHtml(url, template);

        const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
        const appHtml = await render(url);

        const html = template.replace(`<!--app-html-->`, appHtml);

        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = resolve('dist/client');
    const ssrManifestPath = resolve('dist/client/ssr-manifest.json');
    const template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8');
    const { render } = require('./dist/server/entry-server.js');
    const manifest = require(ssrManifestPath);

    app.use('/assets', express.static(path.join(distPath, 'assets')));

    app.use('*', async (req: Request, res: Response) => {
      const appHtml = await render(req.originalUrl, manifest);
      const html = template.replace(`<!--app-html-->`, appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    });
  }
}
