import { Router } from 'express';
import * as users from '../controllers/users';

const router = Router();

router.get('/', users.getUsers);
router.get('/:id', users.getUser);

export default router;
