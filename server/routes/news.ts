// ------------------------------
// ROUTES NEWS
// ------------------------------

import { Router } from 'express';
import {
  getAllNews,
  getNewsById,
} from '../controllers/newsController';

const router = Router();

// GET /api/news — Liste tous les articles
router.get('/', getAllNews);

// GET /api/news/:id — Récupère un article par ID
router.get('/:id', getNewsById);

export default router;
