import type { Request, Response } from 'express';
import * as db from '../db';
import { newsPostSchema } from '../../shared/zod';

export async function getAllNews(req: Request, res: Response) {
  try {
    const news = await db.getAllNewsPosts();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des actualités.' });
  }
}

export async function getNewsById(req: Request<{ id: string }>, res: Response) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'ID invalide.' });

    const news = await db.getNewsPostById(id);
    if (!news) return res.status(404).json({ error: 'Actualité introuvable.' });

    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l’actualité.' });
  }
}

export async function createNews(req: Request, res: Response) {
  try {
    const parsed = newsPostSchema
      .omit({ id: true, createdAt: true })
      .safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ error: 'Données invalides.', details: parsed.error.flatten() });
    }

    const data = {
      ...parsed.data,
      createdAt: new Date().toISOString(),
      authorId: 1, // Remplacer par req.user.id si authentification active
    };

    const created = await db.createNewsPost(data);
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de l’actualité.' });
  }
}

export async function deleteNews(req: Request<{ id: string }>, res: Response) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'ID invalide.' });

    const deleted = await db.deleteNewsPost(id);
    if (!deleted) return res.status(404).json({ error: 'Actualité introuvable.' });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l’actualité.' });
  }
}

export async function updateNews(req: Request<{ id: string }>, res: Response) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'ID invalide.' });

    const parsed = newsPostSchema
      .omit({ id: true, createdAt: true })
      .safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ error: 'Données invalides.', details: parsed.error.flatten() });
    }

    const updated = await db.updateNewsPost(id, parsed.data);
    if (!updated) return res.status(404).json({ error: 'Actualité introuvable.' });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l’actualité.' });
  }
}
