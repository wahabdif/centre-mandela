import { Router, type Request, type Response } from 'express';

const router = Router();

// ✅ Exemple route GET avec paramètre typé
router.get('/items/:id', (req: Request<{ id: string }>, res: Response) => {
  const id = req.params.id;
  // Simuler une récupération d'élément
  const item = { id, name: 'Item ' + id };
  res.json(item);
});

// ✅ Interface pour le corps de la requête POST
interface NewItem {
  name: string;
  description?: string;
}

// ✅ Route POST avec typage explicite
router.post('/items', (req: Request<{}, {}, NewItem>, res: Response) => {
  const body = req.body;

  if (!body?.name) {
    return res.status(400).json({ error: 'Le champ name est requis.' });
  }

  // Ne pas utiliser `Number` comme nom de variable
  const generatedId = Date.now().toString();
  const newItem = { id: generatedId, ...body };

  res.status(201).json(newItem);
});

export default router;
