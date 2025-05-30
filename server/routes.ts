import { Router, type Request, type Response } from 'express';

const router = Router();

// Exemple route GET avec paramètre
router.get('/items/:id', (req: Request<{ id: string }>, res: Response) => {
  const id = req.params.id;
  // Simuler une récupération d'élément
  const item = { id, name: 'Item ' + id };
  res.json(item);
});

// Exemple route POST avec body typé
interface NewItem {
  name: string;
  description?: string;
}

router.post('/items', (req: Request<{}, {}, NewItem>, res: Response) => {
  const body = req.body;
  if (!body?.name) {
    return res.status(400).json({ error: 'Le champ name est requis.' });
  }
  // Simuler création d'item avec ID aléatoire
  const newItem = { id: Date.now().toString(), ...body };
  res.status(201).json(newItem);
});

export default router;
