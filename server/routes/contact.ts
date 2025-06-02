import { Router } from 'express';
import * as contact from '../controllers/contact';

const router = Router();

/**
 * GET /api/contact/messages
 * Récupère tous les messages de contact
 */
router.get('/', contact.getMessages);

/**
 * POST /api/contact/send
 * Envoie un message
 */
router.post('/', contact.sendMessage);

export default router;
