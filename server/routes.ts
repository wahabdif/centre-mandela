import { Router, type Request, type Response } from 'express';
import { z } from 'zod';
import db from './db/db.js'; // Extension .js obligatoire en Node ESM

const router = Router();

// === Schéma Zod pour validation des données de contact ===
const ContactSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  service: z.string().min(1, "Le service est requis"),
  message: z.string().nullable().optional(),
});

// === GET /api/contact ===
// Retourne tous les messages triés par date décroissante
router.get('/contact', (_req: Request, res: Response) => {
  try {
    const rows = db.prepare('SELECT * FROM contact ORDER BY datetime(createdAt) DESC').all();
    res.status(200).json(rows);
  } catch (err) {
    console.error('Erreur lors de la récupération des messages :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// === POST /api/contact ===
// Crée un nouveau message après validation des données
router.post('/contact', (req: Request, res: Response) => {
  const result = ContactSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: 'Données invalides',
      details: result.error.format(),
    });
  }

  const { name, email, phone, service, message } = result.data;

  try {
    const stmt = db.prepare(`
      INSERT INTO contact (name, email, phone, service, message, status, createdAt)
      VALUES (?, ?, ?, ?, ?, 'pending', datetime('now'))
    `);
    const info = stmt.run(name, email, phone, service, message ?? null);

    const inserted = db.prepare('SELECT * FROM contact WHERE id = ?').get(info.lastInsertRowid);
    res.status(201).json(inserted);
  } catch (err) {
    console.error('Erreur lors de l\'insertion du message :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// === PATCH /api/contact/:id/status ===
// Met à jour le statut d'un message spécifique
router.patch('/contact/:id/status', (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({ error: 'ID invalide' });
  }

  const { status } = req.body as { status?: string };

  const validStatuses = ['pending', 'read', 'archived'] as const;

  if (!status || !validStatuses.includes(status as (typeof validStatuses)[number])) {
    return res.status(400).json({ error: 'Statut invalide' });
  }

  try {
    const updateStmt = db.prepare('UPDATE contact SET status = ? WHERE id = ?');
    const info = updateStmt.run(status, id);

    if (info.changes === 0) {
      return res.status(404).json({ error: 'Message non trouvé' });
    }

    const updated = db.prepare('SELECT * FROM contact WHERE id = ?').get(id);
    res.status(200).json(updated);
  } catch (err) {
    console.error('Erreur lors de la mise à jour du statut :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

export default router;
