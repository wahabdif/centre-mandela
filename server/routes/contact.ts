// ------------------------------
// ROUTES CONTACT
// ------------------------------

import { Router } from 'express';
import {
  getAllContactMessages,
  getContactMessageById,
  createContactMessage,
  updateContactMessageStatus,
  sendMessage,
} from '../controllers/contactController';

const router = Router();

// GET /api/contact — Liste tous les messages
router.get('/', getAllContactMessages);

// GET /api/contact/:id — Récupère un message par ID
router.get('/:id', getContactMessageById);

// POST /api/contact — Crée un nouveau message
router.post('/', createContactMessage);

// PATCH /api/contact/:id/status — Met à jour le statut lu/non lu
router.patch('/:id/status', updateContactMessageStatus);

// POST /api/contact/send — Envoie un message (ex: email)
router.post('/send', sendMessage);

export default router;
