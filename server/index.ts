import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import { Server } from 'http';
import { setupVite, serveStatic } from './vite.js';
import router from './routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = new Server(app);

app.use(express.json());

// Routes
app.use('/api', router);

// Vite middleware ou fichiers statiques
if (process.env.NODE_ENV === 'development') {
  setupVite(app, server).catch(console.error);
} else {
  serveStatic(app, __dirname);
}

// Middleware erreur
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Erreur serveur interne' });
});

// Lancement serveur
const PORT = Number(process.env.PORT) || 3000;
server.listen(PORT, () => {
  console.log(`✅ Serveur en ligne : http://localhost:${PORT}`);
});
