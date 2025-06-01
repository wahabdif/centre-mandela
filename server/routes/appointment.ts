import { Router } from 'express';
import * as appointments from '../controllers/appointments';

const router = Router();

router.get('/', appointments.getAppointments);
router.post('/', appointments.createAppointment);

export default router;
