import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction,
  type RequestHandler,
} from 'express';
import { createServer, type ViteDevServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { Server } from 'http';
import { nanoid } from 'nanoid';
import { fileURLToPath } from 'url';

// Obtenir __dirname dans un module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Initialise et configure Vite en mode middleware pour Express.
 * Permet d’utiliser Vite en mode dev avec hot reload.
 * 
 * @param app - Instance Express
 * @param server - Instance HTTP Server (pour HMR)
 */
export async function setupVite(app: Express, server: Server): Promise<void> {
  // Création du serveur Vite en middlewareMode
  const viteServer: ViteDevServer = await createServer({
    server: {
      middlewareMode: true,
      hmr: { server },
      allowedHosts: 'all',
    },
    appType: 'custom',
  });

  // Utilisation des middlewares Vite dans Express
  app.use(viteServer.middlewares);

  // Fallback pour toutes les autres routes : serve le index.html transformé par Vite
  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    try {
      // Chemin vers le template HTML source (dev)
      const indexPath = path.resolve(__dirname, '..', 'client', 'index.html');

      // Lecture du fichier HTML en UTF-8
      let template = await fs.promises.readFile(indexPath, 'utf-8');

      // Pour bust le cache JS en dev, on ajoute un query param unique
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      // Transformation par Vite : injection HMR, import maps, etc.
      const html = await viteServer.transformIndexHtml(url, template);

      // Envoi du HTML transformé
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
      // Correction des stack traces avec Vite (source maps)
      viteServer.ssrFixStacktrace(error as Error);
      // Passer l’erreur au middleware error handler
      next(error);
    }
  });
}

/**
 * Middleware pour servir les fichiers statiques en production.
 * Utilise le dossier 'public' généré par le build Vite.
 * 
 * @param app - Instance Express
 */
export function serveStatic(app: Express): void {
  // Chemin vers le dossier public en production (build)
  const distPath = path.resolve(__dirname, '..', 'public');

  // Vérification que le dossier public existe
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Répertoire introuvable : ${distPath}. Veuillez exécuter "npm run build" avant de lancer en production.`
    );
  }

  // Servir les fichiers statiques
  app.use(express.static(distPath));

  // Fallback : pour toutes les routes, renvoyer index.html (SPA)
  app.use('*', (_req: Request, res: Response) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
}
