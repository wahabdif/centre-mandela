// ------------------------------
// ROUTES AUTHENTIFICATION
// ------------------------------

import { Router } from 'express';
import * as auth from '../controllers/userController';

const router = Router();

// Route de connexion
router.post('/login', auth.login);

export default router;
