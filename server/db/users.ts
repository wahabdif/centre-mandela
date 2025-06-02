// CONTACT
import {
  getAllContactMessages,
  getContactMessageById,
  createContactMessage,
  updateContactMessageStatus,
} from './contact';

// NEWS
import {
  getAllNewsPosts,
  getNewsPostById,
  createNewsPost,
  deleteNewsPost,
  updateNewsPost,
} from './news';

// USERS
import {
  getUserById,
  getUserByUsername,
  getUserByEmail,
  createUser,
  createUserWithEmail,
  verifyPassword,
  hashPassword,
  getAllUsers,
  deleteUser,
  deleteUserByEmail,
  updateUser,
  updateUserByUsername,
  updateUserPassword,
  updateUserEmail,
  getUserByUsernameOrEmail,
  getUserByIdOrUsername,
} from './users';

// APPOINTMENTS
import {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment,
} from './appointments';

// ✅ Export centralisé
export {
  // CONTACT
  getAllContactMessages,
  getContactMessageById,
  createContactMessage,
  updateContactMessageStatus,

  // NEWS
  getAllNewsPosts,
  getNewsPostById,
  createNewsPost,
  deleteNewsPost,
  updateNewsPost,

  // USERS
  getUserById,
  getUserByUsername,
  getUserByEmail,
  createUser,
  createUserWithEmail,
  verifyPassword,
  hashPassword,
  getAllUsers,
  deleteUser,
  deleteUserByEmail,
  updateUser,
  updateUserByUsername,
  updateUserPassword,
  updateUserEmail,
  getUserByUsernameOrEmail,
  getUserByIdOrUsername,

  // APPOINTMENTS
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment,
};
