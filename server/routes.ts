import { Router, Request, Response } from 'express';

const router = Router();

interface NewItem {
  name: string;
  description?: string;
}

// GET /items/:id
router.get('/items/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const item = { id, name: `Item ${id}` };
  res.json(item);
});

// POST /items
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
