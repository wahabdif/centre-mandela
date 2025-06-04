import { Router } from 'express';
import * as appointmentCtrl from '../controllers/appointmentController';
import * as userCtrl from '../controllers/userController';
import * as contactCtrl from '../controllers/contactController';
import * as authCtrl from '../controllers/authController';
import * as newsCtrl from '../controllers/newsController';

const router = Router();

// Appointments
router.get('/appointments', appointmentCtrl.getAllAppointments);
router.post('/appointments', appointmentCtrl.createAppointment);

// Users
router.get('/users', userCtrl.getAllUsers);
router.post('/users', userCtrl.createUser);

// Contact
router.post('/contact', contactCtrl.submitContactForm);

// Auth
router.post('/login', authCtrl.login);

// News
router.get('/news', newsCtrl.getAllNews);

export default router;
