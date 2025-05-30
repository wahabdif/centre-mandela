import { Router, type Request, type Response } from 'express';
import { z } from 'zod';
import {
  getAllContactMessages,
  createContactMessage,
  updateContactMessageStatus,
  getContactMessageById,
} from './db/db.js'; // ✅ extension .js obligatoire en ESM + tsconfig NodeNext

const router = Router();

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(5),
  service: z.string().min(1),
  message: z.string().nullable().optional(),
});

// === GET /api/contact ===
router.get('/contact', (_req: Request, res: Response) => {
  try {
    const rows = getAllContactMessages();
    res.status(200).json(rows);
  } catch (err) {
    console.error('Erreur récupération messages :', err);
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

  try {
    const created = createContactMessage(result.data);
    res.status(201).json(created);
  } catch (err) {
    console.error('Erreur insertion :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// === PATCH /api/contact/:id/status ===
const StatusSchema = z.enum(['pending', 'read', 'archived']);

router.patch('/contact/:id/status', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const result = StatusSchema.safeParse(req.body.status);

  if (!Number.isFinite(id)) {
    return res.status(400).json({ error: 'ID invalide' });
  }

  if (!result.success) {
    return res.status(400).json({ error: 'Statut invalide' });
  }

  try {
    const updated = updateContactMessageStatus(id, result.data);
    if (!updated) {
      return res.status(404).json({ error: 'Message non trouvé' });
    }
    res.status(200).json(updated);
  } catch (err) {
    console.error('Erreur mise à jour statut :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// === GET /api/contact/:id ===
router.get('/contact/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isFinite(id)) {
    return res.status(400).json({ error: 'ID invalide' });
  }

  try {
    const message = getContactMessageById(id);
    if (!message) {
      return res.status(404).json({ error: 'Message non trouvé' });
    }
    res.status(200).json(message);
  } catch (err) {
    console.error('Erreur récupération message :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

export default router;
