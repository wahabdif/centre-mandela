// server/routes.ts
import { Router, Request, Response } from 'express';
import { z } from 'zod';
import pool from './db/db';

const router = Router();

const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  service: z.string(),
  message: z.string().nullable().optional(),
});

// GET /api/contact
router.get('/contact', async (_req: Request, res: Response) => {
  try {
    const { rows } = await pool.query('SELECT * FROM contact ORDER BY "createdAt" DESC');
    return res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
});

// POST /api/contact
router.post('/contact', async (req: Request, res: Response) => {
  const result = ContactSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: 'Données invalides', details: result.error.format() });
  }

  const { name, email, phone, service, message } = result.data;

  try {
    const insertQuery = `
      INSERT INTO contact (name, email, phone, service, message, status, "createdAt")
      VALUES ($1, $2, $3, $4, $5, 'pending', NOW())
      RETURNING *;
    `;

    const values = [name, email, phone, service, message ?? null];

    const { rows } = await pool.query(insertQuery, values);
    return res.status(200).json(rows[0]);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
});

// PATCH /api/contact/:id/status
router.patch('/contact/:id/status', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { status } = req.body;

  if (!['pending', 'read', 'archived'].includes(status)) {
    return res.status(400).json({ error: 'Statut invalide' });
  }

  try {
    const updateQuery = `UPDATE contact SET status = $1 WHERE id = $2 RETURNING *;`;
    const { rows } = await pool.query(updateQuery, [status, id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Message non trouvé' });
    }

    return res.status(200).json(rows[0]);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
});

export default router;
