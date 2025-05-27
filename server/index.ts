import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Pour que __dirname fonctionne dans un module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Dossier de build généré par Vite
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

// Rediriger toutes les routes (sauf les fichiers) vers index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
});
