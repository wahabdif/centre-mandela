import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { registerRoutes } from './routes'; // ou `import registerRoutes from './routes'` selon export

dotenv.config();

const app = express();

// Validation du port pour s'assurer qu'il est un nombre valide
const PORT: number = Number.isNaN(Number(process.env.PORT)) ? 3000 : parseInt(process.env.PORT, 10);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

registerRoutes(app);

app.get('*', (req, res) => {
  const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  res.sendFile(filePath, (err) => {
    const error = err as NodeJS.ErrnoException;
    if (error) {
      if (error.code === 'ENOENT') {
        res.status(404).send('Fichier non trouvé.');
      } else {
        res.status(500).send('Erreur serveur.');
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Serveur Express démarré sur http://localhost:${PORT}`);
});