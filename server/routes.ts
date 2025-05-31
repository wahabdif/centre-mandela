import type { Request } from 'express';
import { Router, Response } from 'express';
import db from './db/db.js';
// Assurez-vous que './db/db.js' exporte une instance de base de données (par exemple, Database de better-sqlite3)
// Si ce n'est pas le cas, modifiez './db/db.js' pour exporter l'instance correcte

// Si db est de type Number, corrigez le fichier './db/db.js' pour qu'il exporte bien l'instance de la base de données.
// Par exemple, dans './db/db.js', il devrait y avoir quelque chose comme :
// import Database from 'better-sqlite3';
// const db = new Database('database.sqlite');
// export default db;

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
    // Vérifiez que db est bien l'instance de la base de données et non Number
    const statement = db.prepare('SELECT * FROM items WHERE id = ?');
    const item = statement.get(id);

    if (!item) {
      return res.status(404).json({ error: 'Élément non trouvé.' });
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
    const id = Date.now().toString(); // Correction : Conversion explicite en chaîne
    db.prepare('INSERT INTO items (id, name, description) VALUES (?, ?, ?)').run(id, name, description);
    return res.status(201).json({ id, name, description });
    // La ligne suivante est inutile car la réponse a déjà été envoyée
    // res.status(201).json({ id, name, description });
  } catch (error) {
    console.error('Erreur lors de l\'insertion de l\'élément:', error);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
});

export default router;