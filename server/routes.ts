import { Router, type Request, type Response } from 'express';

const router = Router();

interface NewItem {
  name: string;
  description?: string;
}

router.get('/items/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const item = { id, name: `Item ${id}` };
  res.json(item);
});

router.post('/items', (req: Request, res: Response) => {
  const body = req.body as NewItem;
  if (!body?.name) {
    return res.status(400).json({ error: 'Le champ name est requis.' });
  }
  const newItem = { id: Date.now().toString(), ...body };
  res.status(201).json(newItem);
});

export default router;
