import express from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import contactRoutes from './routes.js'; // Extension .js obligatoire en ESM

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', contactRoutes);

if (process.env.NODE_ENV === 'production') {
  // Le dossier où Vite build le frontend (build.outDir = ../server/public)
  const root = path.resolve(__dirname, '../public');
  console.log('Serving static files from:', root);

  app.use(express.static(root));

  // Pour toute autre route, renvoyer index.html (SPA)
  app.get('*', (_, res) => {
    res.sendFile(path.join(root, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
