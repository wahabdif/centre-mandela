import { Request, Response } from 'express';
import { db } from '../db/sqlite';
import { newsPosts } from '../../shared/schema';

export const getAllNews = async (_req: Request, res: Response) => {
  const result = await db.select().from(newsPosts).orderBy(newsPosts.createdAt).all();
  res.json(result);
};
