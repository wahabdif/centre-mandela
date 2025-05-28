import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour autoriser les requêtes CORS depuis le frontend
app.use(cors());

// Middleware pour parser le JSON dans les requêtes
app.use(express.json());

// Route de test simple
app.get('/api/ping', (_req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

// Ici, tu peux ajouter d'autres routes API, par exemple:
// app.post('/api/contact', (req: Request, res: Response) => { ... });

app.listen(PORT, () => {
  console.log(`Serveur backend en écoute sur http://localhost:${PORT}`);
});
