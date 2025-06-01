// services/index.ts

// CONTACT
export {
  getAllContactMessages,
  getContactMessageById,
  createContactMessage,
  updateContactMessageStatus,
} from './contact';

// NEWS
export {
  getAllNewsPosts,
  getNewsPostById,
  createNewsPost,
  deleteNewsPost,
  updateNewsPost,
} from './news';

// USERS
export {
  getUserById,
  getUserByUsername,
  getUserByEmail, // Ajouté ici
  createUser,
  verifyPassword,
  hashPassword,
  getAllUsers,
  deleteUser,
  updateUser,
} from './users';

// APPOINTMENTS
export {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment, 
} from './appointments';
