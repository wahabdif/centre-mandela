// server/vite.ts
import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

async function createServer() {
  const app = express();

  // Crée un serveur Vite en mode middleware pour dev
  const vite = await createViteServer({
    server: { middlewareMode: true },
    root: path.resolve(__dirname, '../client'),
  });

  app.use(vite.middlewares);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Dev server running at http://localhost:${PORT}`);
  });
}

createServer();
