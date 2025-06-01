import * as db from "../db/index";
import { newsPostSchema } from '../../shared/zod';
import { Request, Response } from 'express';

export async function getNews(req: Request, res: Response) {
  const news = await db.getAllNewsPosts();
  res.json(news);
}

export async function createNews(req: Request, res: Response) {
  const result = newsPostSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json({ error: result.error });

  const post = await db.createNewsPost(result.data);
  res.status(201).json(post);
}
export async function deleteNews(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  await db.deleteNewsPost(id);
  res.status(204).send();
}
export async function getNewsById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  const post = await db.getNewsPostById(id);
  if (!post) return res.status(404).json({ error: "News post not found" });

  res.json(post);
}
export async function updateNews(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  const result = newsPostSchema.partial().safeParse(req.body);
  if (!result.success) return res.status(400).json({ error: result.error });

  const post = await db.updateNewsPost(id, result.data);
  if (!post) return res.status(404).json({ error: "News post not found" });

  res.json(post);
}
// Mettre à jour le statut d'une actualité
export async function updateNewsStatus(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  const { status } = req.body;
  if (!status) return res.status(400).json({ error: "Status is required" });

  const post = await db.updateNewsPost(id, { status });
  if (!post) return res.status(404).json({ error: "News post not found" });

  res.json(post);
}
