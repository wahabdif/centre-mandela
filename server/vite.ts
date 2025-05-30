import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction,
} from 'express';
import { createServer, type ViteDevServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';
import { fileURLToPath } from 'url';

// ✅ Récupération du __dirname compatible ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Fonction pour setup Vite en développement
export async function setupVite(app: Express, server: any): Promise<void> {
  const vite: ViteDevServer = await createServer({
    server: {
      middlewareMode: true,
      hmr: { server },
      allowedHosts: 'all',
    },
    appType: 'custom',
  });

  // Injection des middlewares Vite
  app.use(vite.middlewares);

  // Remplacement dynamique pour éviter le cache
  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;
    try {
      const indexPath = path.resolve(__dirname, '..', 'client', 'index.html');
      let template = await fs.promises.readFile(indexPath, 'utf-8');

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

// ✅ Fonction pour servir les fichiers statiques en production
export function serveStatic(app: Express): void {
  const distPath = path.resolve(__dirname, '..', 'public');

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `📦 Le dossier ${distPath} est introuvable. Lancez "npm run build" avant la mise en production.`
    );
  }

  app.use(express.static(distPath));

  app.use('*', (_req: Request, res: Response) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
}
