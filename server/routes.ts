import { Router, type Request, type Response } from 'express';
import { z } from 'zod';
import db from './db/db.js';

const router = Router();

// === Schéma Zod pour validation ===
const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  service: z.string(),
  message: z.string().nullable().optional(),
});

// === GET /api/contact ===
router.get('/contact', (_req: Request, res: Response) => {
  try {
    const rows = db.prepare('SELECT * FROM contact ORDER BY createdAt DESC').all();
    res.status(200).json(rows);
  } catch (err) {
    console.error('Erreur lors de la récupération des messages :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// === POST /api/contact ===
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
    res.status(200).json(inserted);
  } catch (err) {
    console.error('Erreur lors de l\'insertion du message :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// === PATCH /api/contact/:id/status ===
router.patch('/contact/:id/status', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { status } = req.body as { status: string };

  const validStatuses = ['pending', 'read', 'archived'] as const;

  if (!validStatuses.includes(status as (typeof validStatuses)[number])) {
    return res.status(400).json({ error: 'Statut invalide' });
  }

  try {
    const updateStmt = db.prepare(`
      UPDATE contact
      SET status = ?
      WHERE id = ?
    `);
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
