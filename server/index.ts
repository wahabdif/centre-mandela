import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { registerRoutes } from './routes';
import { render } from './ssr'; // Fonction SSR React que tu dois avoir

dotenv.config();

const app = express();

// Validation et récupération du port (par défaut 3000)
const PORT = Number.isNaN(Number(process.env.PORT)) 
  ? 3000 
  : parseInt(process.env.PORT as string, 10);

// Middleware pour parser le JSON
app.use(express.json());

// Servir les fichiers statiques (le build React) dans /public
app.use(express.static(path.join(__dirname, 'public')));

// Enregistrer les routes API
registerRoutes(app);

// Gestion des routes non API : SSR React ou fichiers statiques
app.get('*', (req, res) => {
  // Si la route commence par /api et qu'elle n'a pas été prise en charge, erreur 404
  if (req.url.startsWith('/api/')) {
    return res.status(404).send('API route non trouvée.');
  }

  try {
    // Tenter de rendre la page React côté serveur
    const html = render(req.url);
    res.status(200).send(html);
  } catch (error) {
    console.error('Erreur SSR:', error);
    res.status(500).send('Erreur serveur.');
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur Express démarré sur http://localhost:${PORT}`);
});
