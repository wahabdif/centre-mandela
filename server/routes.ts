import { Router, Request, Response } from 'express';
import db from './db/database.js'; // N'oublie pas l'extension .js pour la résolution en mode node16/nodenext

const router = Router();

interface NewItem {
  name: string;
  description?: string;
}

// Définition d'une interface personnalisée pour typer req.params
interface RequestWithId extends Request {
  params: {
    id: string;
  };
}

// GET /items/:id
router.get('/items/:id', (req: RequestWithId, res: Response) => {
  const { id } = req.params;
  const item = db.prepare('SELECT * FROM items WHERE id = ?').get(id);

  if (!item) {
    return res.status(404).json({ error: 'Item non trouvé.' });
  }

  res.json(item);
});

// POST /items
router.post('/items', (req: Request, res: Response) => {
  const { name, description } = req.body as NewItem;

  if (!name) {
    return res.status(400).json({ error: 'Le champ name est requis.' });
  }

  // Utilise Date.now() pour générer un identifiant unique
  const id = Date.now().toString();

  // Si TS signale une erreur sur .run, on force le typage avec 'as any'
  (db.prepare('INSERT INTO items (id, name, description) VALUES (?, ?, ?)').run as any)(id, name, description);

  res.status(201).json({ id, name, description });
});

export default router;
