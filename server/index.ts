import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { registerRoutes } from './routes';

dotenv.config();

const app = express();

// Validation du port avec une méthode claire et sûre
const portEnv = process.env.PORT;
const PORT: number = portEnv && !isNaN(Number(portEnv)) ? Number(portEnv) : 3000;

// Middleware de log simple pour chaque requête
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Enregistrement des routes personnalisées
registerRoutes(app);

// Route "catch-all" pour une SPA React avec React Router côté client
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'public', 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Erreur lors de l\'envoi du fichier index.html:', err);
      if (!res.headersSent) {
        res.status(500).send('Erreur serveur.');
      }
    }
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur Express démarré sur http://localhost:${PORT}`);
});
