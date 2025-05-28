import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes'; // ajuste le chemin si besoin

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

// Ici on monte ton routeur qui gère /contact (GET, POST, PATCH)
app.use(router);

app.listen(PORT, () => {
  console.log(`Serveur backend en écoute sur http://localhost:${PORT}`);
});
