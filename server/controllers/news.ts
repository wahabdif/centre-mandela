import * as db from "../db/index";
import { newsPostSchema } from '../../shared/zod';
import { Request, Response } from 'express';


// Récupérer toutes les actualités
export async function getNews(req: Request, res: Response) {
  const news = await db.getAllNewsPosts();
  res.json(news);
}

// Créer une actualité
export async function createNews(req: Request, res: Response) {
  const result = newsPostSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json({ error: result.error });

  // authorId doit être fourni dans le body ou via l'utilisateur authentifié
  const { authorId } = req.body;
  if (!authorId) return res.status(400).json({ error: "authorId is required" });

  const post = await db.createNewsPost({ ...result.data, authorId });
  res.status(201).json(post);
}

// Supprimer une actualité
export async function deleteNews(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  await db.deleteNewsPost(id);
  res.status(204).send();
}

// Récupérer une actualité par ID
export async function getNewsById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  const post = await db.getNewsPostById(id);
  if (!post) return res.status(404).json({ error: "News post not found" });

  res.json(post);
}

// Mettre à jour une actualité
export async function updateNews(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  const result = newsPostSchema.partial().safeParse(req.body);
  if (!result.success) return res.status(400).json({ error: result.error });

}

// Mettre à jour le statut d'une actualité
export async function updateNewsStatus(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  const { status } = req.body;
  if (!status) return res.status(400).json({ error: "Status is required" });


}

export {};