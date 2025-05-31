import { Router, Request, Response } from 'express';
import db from './db/db.js';

const router = Router();

router.get('/items/:id', (req: Request, res: Response) => { // Ajout des types Request et Response
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

router.post('/items', (req: Request, res: Response) => { // Ajout des types Request et Response
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Le champ name est requis.' });
    }

    const id = Date.now().toString();
    db.prepare('INSERT INTO items (id, name, description) VALUES (?, ?, ?)').run(id, name, description);

    res.status(201).json({ id, name, description });
  } catch (error) {
    console.error('Erreur lors de l\'insertion de l\'élément:', error);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
});