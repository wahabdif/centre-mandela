import { Router } from 'express';
import type { Request, Response } from 'express';

const router = Router();

// Exemple GET
router.get('/items/:id', (req: Request<{ id: string }>, res: Response) => {
  const item = { id: req.params.id, name: `Item ${req.params.id}` };
  res.json(item);
});

// POST avec typage du body
interface NewItem {
  name: string;
  description?: string;
}

router.post('/items', (req: Request<{}, {}, NewItem>, res: Response) => {
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Le champ "name" est requis.' });
  }

  const newItem = {
    id: Date.now().toString(),
    name,
    description,
  };

  res.status(201).json(newItem);
});

export default router;
