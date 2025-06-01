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
