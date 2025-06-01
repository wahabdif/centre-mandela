import { Router } from 'express';
import * as users from '../controllers/users';

const router = Router();

router.get('/', users.getUsers);
router.get('/:id', users.getUser);
router.put('/:id', users.updateUser); // Ajout d'une route pour la mise à jour d'un utilisateur
router.delete('/:id', users.deleteUser); // Ajout d'une route pour la suppression d'un utilisateur

export default router;