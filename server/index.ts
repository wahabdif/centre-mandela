import express from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import contactRoutes from './routes.js'; // <-- Extension .js obligatoire en ESM

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', contactRoutes);

if (process.env.NODE_ENV === 'production') {
  // Chemin absolu vers client/dist, à ajuster si besoin
  const root = path.resolve(__dirname, '../../client/dist');
  console.log('Serving static files from:', root);

  // Vérifie si index.html existe avant d'essayer de le servir
  import { existsSync } from 'fs';
  if (!existsSync(path.join(root, 'index.html'))) {
    console.error(`Erreur : fichier index.html introuvable dans ${root}`);
  }

  app.use(express.static(root));
  app.get('*', (_, res) => {
    res.sendFile(path.join(root, 'index.html'), err => {
      if (err) {
        console.error('Erreur en envoyant index.html :', err);
        res.status(500).send('Erreur serveur');
      }
    });
  });
}

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
