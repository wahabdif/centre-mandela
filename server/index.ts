import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction,
} from 'express';
import { createServer, type ViteDevServer } from 'vite';
import fs from 'fs';
import path from 'path';
import http from 'http'; // ✅
import { nanoid } from 'nanoid';
import { fileURLToPath } from 'url';
import { setupVite, serveStatic } from './vite.js'; // ✅ extension

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Express = express();
const server = http.createServer(app); // ✅

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  setupVite(app, server).catch((err) => {
    console.error('Erreur lors du setup Vite:', err);
  });
} else {
  serveStatic(app);
}

app.get('/api/ping', (_req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

app.use(
  (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
);

const PORT = parseInt(process.env.PORT || '3000', 10); // ✅ plus sûr
server.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
