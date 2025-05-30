import { Router, Request, Response } from 'express';
import db from './db/database';

const router = Router();

interface NewItem {
  name: string;
  description?: string;
}

// GET /items/:id
router.get('/items/:id', (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const item = db.prepare('SELECT * FROM items WHERE id = ?').get(id);

  if (!item) {
    return res.status(404).json({ error: 'Item non trouvé.' });
  }

  res.json(item);
});

// POST /items
router.post('/items', (req: Request<{}, {}, NewItem>, res: Response) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Le champ name est requis.' });
  }

  const id = Date.now().toString();

  db.prepare('INSERT INTO items (id, name, description) VALUES (?, ?, ?)').run(id, name, description ?? null);

  res.status(201).json({ id, name, description });
});

export default router;
