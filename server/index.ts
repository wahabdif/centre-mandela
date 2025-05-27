import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Pour faire fonctionner __dirname avec les modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Dossier du build Vite (frontend) — ici dans client/dist
const publicDir = path.join(__dirname, '../client/dist');

console.log('Dossier public statique :', publicDir);

// Servir les fichiers statiques du build frontend
app.use(express.static(publicDir));

// Pour toutes les routes, renvoyer index.html (SPA)
app.get('*', (_req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
});
