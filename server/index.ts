import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes'; // Suppression de l'extension `.js`

dotenv.config();

const app = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());
app.use('/api', routes);

// Middleware de gestion des erreurs
app.use((err: unknown, req: Request, res: Response, next: (err?: any) => void) => {
  if (err instanceof Error) {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
  } else if (typeof err === 'string') {
    console.error(err);
    res.status(500).json({ error: err });
  } else {
    console.error('Erreur inconnue:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Ajout explicite du Content-Type pour éviter le téléchargement du fichier au lieu de l'affichage
app.get('*', (req: Request, res: Response) => {
  const filePath = path.join(__dirname, 'public', 'index.html');

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Erreur lors de l\'envoi du fichier:', err);
      res.status(500).send('Erreur lors du chargement du fichier.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});