import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(express.json());
app.use('/api', routes);

// Middleware de gestion des erreurs
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err instanceof Error ? err.stack : err);
  res.status(500).json({ error: err instanceof Error ? err.message : 'Erreur serveur' });
});

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
