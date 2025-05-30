import express, { Request, Response } from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import contactRoutes from './routes.js'; // Nécessaire avec module: "NodeNext"

// Permet d'obtenir __dirname dans un contexte ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares essentiels
app.use(cors());              // Autoriser les requêtes cross-origin
app.use(express.json());      // Parser le JSON dans le corps des requêtes

// Route principale pour l'API
app.use('/api', contactRoutes);

// En production, servir les fichiers statiques (build frontend)
if (process.env.NODE_ENV === 'production') {
  const root = path.resolve(__dirname, '../public');
  console.log('✅ Serving static files from:', root);

  app.use(express.static(root));

  // Fallback pour React Router - servir index.html pour toute route non gérée
  app.get('*', (_: Request, res: Response) => {
    res.sendFile(path.join(root, 'index.html'));
  });
}

// Gestion des erreurs globales inattendues
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason) => {
  console.error('❌ Unhandled Rejection:', reason);
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
