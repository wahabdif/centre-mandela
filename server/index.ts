import express from 'express';
import type { Express, Request, Response, NextFunction } from 'express';
import { createServer } from 'http';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { setupVite, serveStatic } from './vite.js';
import apiRoutes from './routes.js';

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Express = express();
const server = createServer(app);

app.use(express.json());

// Routes API
app.use('/api', apiRoutes);

// En dev : Vite
if (process.env.NODE_ENV === 'development') {
  setupVite(app, server).catch((err) => {
    console.error('Erreur setup Vite:', err);
  });
} else {
  // En prod : statique
  serveStatic(app, __dirname);
}

// Middleware erreur global
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Erreur serveur' });
});

// Lancement serveur
const PORT = Number(process.env.PORT) || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
