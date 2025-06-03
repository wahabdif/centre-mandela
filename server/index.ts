
import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { registerRoutes } from './routes';

dotenv.config();

const app = express();

// Validation et récupération du port (par défaut 5000)
const PORT = Number.isNaN(Number(process.env.PORT))
  ? 5000
  : parseInt(process.env.PORT as string, 10);

// Middleware pour parser le JSON
app.use(express.json());

// Servir les fichiers statiques (le build React) dans /public
app.use(express.static(path.join(__dirname, 'public')));

// Enregistrer les routes API
registerRoutes(app);

// Gestion des routes non API : SSR React ou fichiers statiques
app.get('*', (req: Request, res: Response) => {
  // Si la route commence par /api et qu'elle n'a pas été prise en charge, erreur 404
  if (req.url.startsWith('/api/')) {
    return res.status(404).send('API route non trouvée.');
  }

  try {
    // Pour le moment, on renvoie une page simple sans SSR
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Mon App</title>
        </head>
        <body>
          <div id="root">Application React</div>
        </body>
      </html>
    `;
    res.status(200).send(html);
  } catch (error) {
    console.error('Erreur serveur:', error);
    res.status(500).send('Erreur serveur.');
  }
});

// Démarrer le serveur sur 0.0.0.0
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Serveur Express démarré sur http://0.0.0.0:${PORT}`);
});
