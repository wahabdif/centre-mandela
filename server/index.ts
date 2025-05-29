import express, { Request, Response } from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import contactRoutes from './routes.js'; // Obligatoire avec module: "NodeNext"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', contactRoutes);

// Production: servir les fichiers statiques
if (process.env.NODE_ENV === 'production') {
  const root = path.resolve(__dirname, '../public');
  console.log('✅ Serving static files from:', root);

  app.use(express.static(root));

  // Fallback pour SPA (React Router)
  app.get('*', (_: Request, res: Response) => {
    res.sendFile(path.join(root, 'index.html'));
  });
}

// Global error logging
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('❌ Unhandled Rejection:', reason);
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
