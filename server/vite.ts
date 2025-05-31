import http from 'http';
import fs from 'fs';
import path from 'path';
import { createServer as createViteServer } from 'vite';

export async function setupVite(root: string = process.cwd(), isDev: boolean = true) {
  const resolve = (p: string) => path.resolve(root, p);

  const server = http.createServer(async (req, res) => {
    try {
      const url = req.url || '/';
      const templatePath = resolve(isDev ? 'index.html' : 'dist/client/index.html');

      if (!fs.existsSync(templatePath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('❌ Fichier index.html introuvable.');
        return;
      }

      let template = fs.readFileSync(templatePath, 'utf-8');

      if (isDev) {
        const vite = await createViteServer({
          root,
          server: { middlewareMode: true },
          appType: 'custom'
        });

        // Transform the template using Vite
        template = await vite.transformIndexHtml(url, template);

        const ssrModule = await vite.ssrLoadModule('/src/entry-server.tsx').catch(() => {
          throw new Error("Le module 'entry-server.tsx' est introuvable. Vérifiez votre configuration.");
        });

        const appHtml = await ssrModule.render(url);

        const html = template.replace(`<!--app-html-->`, appHtml);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      } else {
        const ssrManifestPath = resolve('dist/client/ssr-manifest.json');

        if (!fs.existsSync(ssrManifestPath)) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('❌ Fichiers nécessaires introuvables.');
          return;
        }

        const manifest = JSON.parse(fs.readFileSync(ssrManifestPath, 'utf-8'));
        const ssrModule = await import('./dist/server/entry-server.js').catch(() => {
          throw new Error("Le module 'entry-server.js' est introuvable. Vérifiez votre configuration.");
        });

        const appHtml = await ssrModule.render(url, manifest);

        const html = template.replace(`<!--app-html-->`, appHtml);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      }
    } catch (error) {
      console.error('❌ Erreur lors du traitement de la requête :', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Erreur serveur.');
    }
  });

  server.listen(3000, () => {
    console.log(`Serveur démarré sur http://localhost:3000`);
  });
}