import { Router, Request, Response } from 'express';

const router = Router();

// Interface pour la validation partielle du corps de requête POST /items
interface NewItem {
  name: string;
  description?: string;
}

// GET /items/:id — récupère un item fictif par son id
router.get('/items/:id', (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const item = { id, name: `Item ${id}` };
  res.json(item);
});

// POST /items — création d’un nouvel item avec validation simple
router.post('/items', (req: Request<{}, {}, NewItem>, res: Response) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Le champ name est requis.' });
  }

  const newItem = {
    id: Date.now().toString(),
    name,
    description,
  };

  res.status(201).json(newItem);
});

export default router;
