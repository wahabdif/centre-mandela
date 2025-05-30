import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// IMPORTS CORRECTS POUR NODE ESM (sans extension .js/.ts dans import)
// Bien vérifier que tsconfig.json a "moduleResolution": "node", "module": "ESNext" ou "NodeNext"
import contactRoutes from './routes.js'; // extension .js requise avec Node ESM

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware CORS + JSON parser
app.use(cors());
app.use(express.json());

// Routes API sous /api
app.use('/api', contactRoutes);

// En production, servir le build React (ou autre front) statique
if (process.env.NODE_ENV === 'production') {
  const root = path.resolve(__dirname, '../public');
  console.log('✅ Serving static files from:', root);

  app.use(express.static(root));

  // Fallback pour React Router (SPA) : renvoyer index.html pour toutes les routes inconnues
  app.get('*', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(root, 'index.html'), (err) => {
      if (err) {
        // Gérer les erreurs (ex: fichier index.html manquant)
        next(err);
      }
    });
  });
}

// Gestion globale des erreurs non attrapées (pour éviter crash silencieux)
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  // Optionnel : process.exit(1); pour forcer restart si souhaité
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  // Optionnel : process.exit(1);
});

// Start du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
