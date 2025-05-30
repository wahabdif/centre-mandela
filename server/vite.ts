import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

export async function setupVite(app: express.Express, root: string = process.cwd(), isDev: boolean = true) {
  const resolve = (p: string) => path.resolve(root, p);

  if (isDev) {
    const vite = await createViteServer({
      root,
      server: { middlewareMode: true },
      appType: 'custom'
    });

    app.use(vite.middlewares);

    app.use('*', async (req: Request, res: Response, next: (err?: any) => void) => {
      try {
        const url = (req as any).originalUrl || req.url;
        const templatePath = resolve('index.html');
        let template = fs.readFileSync(templatePath, 'utf-8');

        template = await (vite.transformIndexHtml as any)(url, template);
        const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
        const appHtml = await render(url);

        const html = template.replace(`<!--app-html-->`, appHtml);
        res.setHeader('Content-Type', 'text/html'); // 🔥 Ajout du type MIME
        res.status(200).end(html);
      } catch (e) {
        (vite.ssrFixStacktrace as any)(e instanceof Error ? e : new Error(String(e)));
        next(e);
      }
    });
  } else {
    const distPath = resolve('dist/client');
    const ssrManifestPath = resolve('dist/client/ssr-manifest.json');
    const templatePath = resolve('dist/client/index.html');
    
    let template = fs.readFileSync(templatePath, 'utf-8');

    try {
      // 🔥 Ajout de gestion d'erreur pour éviter un crash si le module SSR est introuvable
      const { render } = await import('./dist/server/entry-server.js');
      const manifest = JSON.parse(fs.readFileSync(ssrManifestPath, 'utf-8'));

      app.use('/assets', express.static(path.join(distPath, 'assets'), { fallthrough: false }));

      app.use('*', async (req: Request, res: Response) => {
        const url = (req as any).originalUrl || req.url;
        const appHtml = await render(url, manifest);
        const html = template.replace(`<!--app-html-->`, appHtml);
        
        res.setHeader('Content-Type', 'text/html'); // 🔥 Ajout du type MIME
        res.status(200).end(html);
      });
    } catch (error) {
      console.error("❌ Erreur lors du chargement du module SSR :", error);
    }
  }
}
