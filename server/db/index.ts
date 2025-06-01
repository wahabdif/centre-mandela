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
  getUserByEmail, // <-- ajout ici
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
  updateAppointmentStatus,
  updateAppointment,
  deleteAppointment,
  InsertAppointment
} from './appointments';