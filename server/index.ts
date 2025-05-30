import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes.js';

dotenv.config();

const app = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());
app.use('/api', routes);

// Middleware de gestion des erreurs
app.use((err: unknown, req: Request, res: Response, next: (err?: any) => void) => {
  console.error(err instanceof Error ? err.stack : err);
  res.status(500).json({ error: err instanceof Error ? err.message : 'Erreur serveur' });
});

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Ajout explicite du Content-Type pour éviter le téléchargement du fichier au lieu de l'affichage
app.get('*', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html'); // Définit le bon type MIME
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
