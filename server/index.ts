import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Pour faire fonctionner __dirname avec les modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Dossier de build généré par Vite (client/dist → dist/client après build global)
const publicDir = path.join(__dirname, '../client'); // accessible depuis dist/server après transpilation

app.use(express.static(publicDir));

// Pour toutes les routes, renvoyer index.html (SPA)
app.get('*', (_req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
});
