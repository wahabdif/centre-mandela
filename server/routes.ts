import { Router, Request, Response } from 'express';
/* @ts-ignore */
import db from './db/db.js';

const router = Router();

interface NewItem {
  name: string;
  description?: string;
}

// Interface personnalisée pour typer req.params
interface RequestWithId extends Request {
  params: { id: string };
}

// GET /items/:id
router.get('/items/:id', (req: RequestWithId, res: Response) => {
  try {
    const { id } = req.params;
    const item = db.prepare('SELECT * FROM items WHERE id = ?').get(id);

    if (!item) {
      return res.status(404).json({ error: 'Item non trouvé.' });
    }
    res.json(item);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'élément:', error);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
});

// POST /items
router.post('/items', (req: Request, res: Response) => {
  try {
    const { name, description } = req.body as Partial<NewItem>;

    if (!name) {
      return res.status(400).json({ error: 'Le champ name est requis.' });
    }

    // Utilisation correcte de Date.now() pour générer un ID unique
    const id = Date.now().toString();

    db.prepare('INSERT INTO items (id, name, description) VALUES (?, ?, ?)').run(id, name, description);

    res.status(201).json({ id, name, description });
  } catch (error) {
    console.error('Erreur lors de l\'insertion de l\'élément:', error);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
});

export default router;