import express, { Request, Response } from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// ✅ Corrigé : pas d'extension .js/.ts dans les imports NodeNext
import contactRoutes from './routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes API
app.use('/api', contactRoutes);

// ✅ Fichiers statiques en production
if (process.env.NODE_ENV === 'production') {
  const root = path.resolve(__dirname, '../public');
  console.log('✅ Serving static files from:', root);

  app.use(express.static(root));

  // ✅ Fallback React Router (en typant bien `req`, `res`)
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(root, 'index.html'));
  });
}

// ✅ Gestion des erreurs globales
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('❌ Unhandled Rejection:', reason);
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
