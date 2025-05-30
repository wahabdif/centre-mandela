import { Router, Request, Response } from 'express';
// Pour régler l'erreur TS2307, ajoute un fichier de déclaration dans "server/db/database.d.ts"
// ou utilise temporairement la directive @ts-ignore :
/* @ts-ignore */
import db from './db/database.js';

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
router.post('/items', (req: Request, res: Response) => {
  // Pour éviter l’erreur TS2352, on convertit req.body en unknown avant de le caster en NewItem
  const { name, description } = req.body as unknown as NewItem;
  
  if (!name) {
    return res.status(400).json({ error: 'Le champ name est requis.' });
  }

  // Utilisation de Date.now() pour générer un identifiant unique sous forme de chaîne
  const id = Date.now().toString();

  // Certains types sur .run peuvent ne pas correspondre : ici on force le typage avec "as any"
  (db.prepare('INSERT INTO items (id, name, description) VALUES (?, ?, ?)').run as any)(id, name, description);

  res.status(201).json({ id, name, description });
});

export default router;
