import { Router } from 'express';
import * as contact from '../controllers/contact';

const router = Router();

router.get('/', contact.getMessages);
router.post('/', contact.sendMessage);

export default router;
