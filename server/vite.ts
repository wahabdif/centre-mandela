import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction,
} from 'express';
import { createServer, type ViteDevServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { Server } from 'http';
import { nanoid } from 'nanoid';
import { fileURLToPath } from 'url';

// Permet d'obtenir __dirname dans un module ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Configure Vite en middleware dans Express pour le mode développement.
 *
 * @param app - L'application Express
 * @param server - Le serveur HTTP natif (nécessaire pour le HMR de Vite)
 */
export async function setupVite(app: Express, server: Server): Promise<void> {
  const vite: ViteDevServer = await createServer({
    server: {
      middlewareMode: true,
      hmr: { server },
      allowedHosts: 'all',
    },
    appType: 'custom',
  });

  // Utilise les middlewares Vite (gestion du hot reload, assets, etc.)
  app.use(vite.middlewares);

  // Toutes les autres routes => retour du index.html transformé (SPA fallback)
  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    try {
      const indexPath = path.resolve(__dirname, '..', 'client', 'index.html');
      let template = await fs.promises.readFile(indexPath, 'utf-8');

      // Anti-cache en dev : ajout d’un query param aléatoire
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

/**
 * Sert les fichiers statiques Vite en production (dossier public).
 *
 * @param app - L'application Express
 */
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
