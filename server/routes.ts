import { Router } from 'express';
import type { Request, Response } from 'express';

const router = Router();

// GET item by ID
router.get('/items/:id', (req: Request<{ id: string }>, res: Response) => {
  const id = req.params.id;
  const item = { id, name: `Item ${id}` };
  res.json(item);
});

// POST new item
interface NewItem {
  name: string;
  description?: string;
}

router.post('/items', (req: Request<{}, {}, NewItem>, res: Response) => {
  const body = req.body;
  if (!body.name) {
    return res.status(400).json({ error: 'Le champ "name" est requis.' });
  }
  const newItem = { id: Date.now().toString(), ...body };
  res.status(201).json(newItem);
});

export default router;
