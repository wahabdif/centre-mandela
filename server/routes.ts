import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { db, contact } from './drizzle/schema';
import { eq } from 'drizzle-orm';

const router = Router();

const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  service: z.string(),
  message: z.string().nullable().optional(),
});

router.get('/api/contact', async (_req: Request, res: Response) => {
  try {
    const messages = await db.select().from(contact).orderBy(contact.createdAt);
    res.status(200).json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

router.post('/api/contact', async (req: Request, res: Response) => {
  const result = ContactSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: 'Données invalides', details: result.error });
  }

  const data = result.data;

  try {
    const inserted = await db.insert(contact).values({
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message ?? null,
      status: 'pending',
      createdAt: new Date(),
    }).returning();

    res.status(200).json(inserted[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

router.patch('/api/contact/:id/status', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const status = req.body.status;

  if (!['pending', 'read', 'archived'].includes(status)) {
    return res.status(400).json({ error: 'Statut invalide' });
  }

  try {
    const updated = await db.update(contact).set({ status }).where(eq(contact.id, id)).returning();
    res.status(200).json(updated[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

export default router;
