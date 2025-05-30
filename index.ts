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
import { setupVite, serveStatic } from './vite';

// Permet d'obtenir __dirname dans un module ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Express = express();
const server = new Server(app);

// Middleware pour parser le JSON
app.use(express.json());

// Utiliser Vite en mode dev ou servir les fichiers statiques en prod
if (process.env.NODE_ENV === 'development') {
  setupVite(app, server).catch((err) => {
    console.error('Erreur lors du setup Vite:', err);
  });
} else {
  serveStatic(app);
}

// Exemple route simple
app.get('/api/ping', (_req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

// Middleware de gestion des erreurs
app.use(
  (err: unknown, _req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
    next();
  }
);

// Démarrage du serveur
const PORT = Number(process.env.PORT) || 3000;
server.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
