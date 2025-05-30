import express, { type Request, type Response, type NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import contactRoutes from './routes.js';
import viteServer from './vite.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use('/api', contactRoutes);

// Middleware Vite pour le SSR/dev
viteServer(app);

// Serveur statique
app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

// Pour toutes les autres routes, renvoyer index.html (cas SPA)
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'index.html'));
});

// Middleware d'erreur
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Erreur serveur :', err);
  res.status(500).json({ error: 'Erreur interne du serveur' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
