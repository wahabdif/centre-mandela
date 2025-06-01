import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { registerRoutes } from './routes';

dotenv.config();

const app = express();

// Validation du port avec une méthode claire
const portEnv = process.env.PORT;
const PORT: number = portEnv && !isNaN(Number(portEnv)) ? Number(portEnv) : 3000;

// Middleware simple de logging des requêtes
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

registerRoutes(app);

// Route générique pour SPA (React Router côté client)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
    if (err) {
      console.error('Erreur lors de l\'envoi du fichier index.html:', err);
      res.status(500).send('Erreur serveur.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Serveur Express démarré sur http://localhost:${PORT}`);
});
