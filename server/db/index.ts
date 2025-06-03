// services.ts

// === TYPES ===
interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  status: 'new' | 'read' | 'archived';
}

interface NewsPost {
  id: number;
  title: string;
  content: string;
  publishedAt: Date;
}

interface User {
  id: number;
  username: string;
  email: string;
  passwordHash: string;
}

interface Appointment {
  id: number;
  userId: number;
  date: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
}

// === DATA STORE (en mémoire) ===
let contactMessages: ContactMessage[] = [];
let newsPosts: NewsPost[] = [];
let users: User[] = [];
let appointments: Appointment[] = [];

let nextContactId = 1;
let nextNewsId = 1;
let nextUserId = 1;
let nextAppointmentId = 1;

// === CONTACT FUNCTIONS ===

export function getAllContactMessages(): ContactMessage[] {
  return [...contactMessages];
}

export function getContactMessageById(id: number): ContactMessage | undefined {
  return contactMessages.find(msg => msg.id === id);
}

export function createContactMessage(name: string, email: string, message: string): ContactMessage {
  const newMsg: ContactMessage = {
    id: nextContactId++,
    name,
    email,
    message,
    status: 'new',
  };
  contactMessages.push(newMsg);
  return newMsg;
}

export function updateContactMessageStatus(id: number, status: 'new' | 'read' | 'archived'): ContactMessage | undefined {
  const msg = getContactMessageById(id);
  if (msg) {
    msg.status = status;
    return msg;
  }
  return undefined;
}

// === NEWS FUNCTIONS ===

export function getAllNewsPosts(): NewsPost[] {
  return [...newsPosts];
}

export function getNewsPostById(id: number): NewsPost | undefined {
  return newsPosts.find(post => post.id === id);
}

export function createNewsPost(title: string, content: string): NewsPost {
  const newPost: NewsPost = {
    id: nextNewsId++,
    title,
    content,
    publishedAt: new Date(),
  };
  newsPosts.push(newPost);
  return newPost;
}

export function updateNewsPost(id: number, updatedFields: Partial<Omit<NewsPost, 'id' | 'publishedAt'>>): NewsPost | undefined {
  const post = getNewsPostById(id);
  if (post) {
    if (updatedFields.title !== undefined) post.title = updatedFields.title;
    if (updatedFields.content !== undefined) post.content = updatedFields.content;
    return post;
  }
  return undefined;
}

export function deleteNewsPost(id: number): boolean {
  const index = newsPosts.findIndex(post => post.id === id);
  if (index >= 0) {
    newsPosts.splice(index, 1);
    return true;
  }
  return false;
}

// === USER FUNCTIONS ===

export function createUser(username: string, email: string, passwordHash: string): User {
  const newUser: User = { id: nextUserId++, username, email, passwordHash };
  users.push(newUser);
  return newUser;
}

export function getUserById(id: number): User | undefined {
  return users.find(user => user.id === id);
}

export function getUserByUsername(username: string): User | undefined {
  return users.find(user => user.username === username);
}

export function getUserByEmail(email: string): User | undefined {
  return users.find(user => user.email === email);
}

export function getUserByUsernameOrEmail(identifier: string): User | undefined {
  return users.find(user => user.username === identifier || user.email === identifier);
}

export function getUserByIdOrUsername(identifier: number | string): User | undefined {
  if (typeof identifier === 'number') {
    return getUserById(identifier);
  }
  return getUserByUsername(identifier);
}

export function verifyPassword(user: User, passwordHash: string): boolean {
  return user.passwordHash === passwordHash;
}

export function hashPassword(password: string): string {
  // Simplifié : en vrai, utilise bcrypt ou autre
  return `hashed_${password}`;
}

export function getAllUsers(): User[] {
  return [...users];
}

export function deleteUser(id: number): boolean {
  const index = users.findIndex(u => u.id === id);
  if (index >= 0) {
    users.splice(index, 1);
    return true;
  }
  return false;
}

export function deleteUserByEmail(email: string): boolean {
  const index = users.findIndex(u => u.email === email);
  if (index >= 0) {
    users.splice(index, 1);
    return true;
  }
  return false;
}

export function updateUser(id: number, updatedFields: Partial<Omit<User, 'id'>>): User | undefined {
  const user = getUserById(id);
  if (user) {
    if (updatedFields.username !== undefined) user.username = updatedFields.username;
    if (updatedFields.email !== undefined) user.email = updatedFields.email;
    if (updatedFields.passwordHash !== undefined) user.passwordHash = updatedFields.passwordHash;
    return user;
  }
  return undefined;
}

export function updateUserByUsername(username: string, updatedFields: Partial<Omit<User, 'id'>>): User | undefined {
  const user = getUserByUsername(username);
  if (user) {
    if (updatedFields.username !== undefined) user.username = updatedFields.username;
    if (updatedFields.email !== undefined) user.email = updatedFields.email;
    if (updatedFields.passwordHash !== undefined) user.passwordHash = updatedFields.passwordHash;
    return user;
  }
  return undefined;
}

export function updateUserPassword(id: number, newPasswordHash: string): User | undefined {
  const user = getUserById(id);
  if (user) {
    user.passwordHash = newPasswordHash;
    return user;
  }
  return undefined;
}

export function updateUserEmail(id: number, newEmail: string): User | undefined {
  const user = getUserById(id);
  if (user) {
    user.email = newEmail;
    return user;
  }
  return undefined;
}

// === APPOINTMENTS FUNCTIONS ===

export function getAllAppointments(): Appointment[] {
  return [...appointments];
}

export function getAppointmentById(id: number): Appointment | undefined {
  return appointments.find(app => app.id === id);
}

export function createAppointment(userId: number, date: Date): Appointment {
  const newApp: Appointment = {
    id: nextAppointmentId++,
    userId,
    date,
    status: 'pending',
  };
  appointments.push(newApp);
  return newApp;
}

export function updateAppointment(id: number, updatedFields: Partial<Omit<Appointment, 'id'>>): Appointment | undefined {
  const app = getAppointmentById(id);
  if (app) {
    if (updatedFields.userId !== undefined) app.userId = updatedFields.userId;
    if (updatedFields.date !== undefined) app.date = updatedFields.date;
    if (updatedFields.status !== undefined) app.status = updatedFields.status;
    return app;
  }
  return undefined;
}

export function updateAppointmentStatus(id: number, status: 'pending' | 'confirmed' | 'cancelled'): Appointment | undefined {
  const app = getAppointmentById(id);
  if (app) {
    app.status = status;
    return app;
  }
  return undefined;
}

export function deleteAppointment(id: number): boolean {
  const index = appointments.findIndex(app => app.id === id);
  if (index >= 0) {
    appointments.splice(index, 1);
    return true;
  }
  return false;
}
// UPDATE by username
export async function updateUserByUsername(username: string, updates: UpdateUser): Promise<User | undefined> {
  const result = await db
    .update(users)
    .set(updates)
    .where(eq(users.username, username))
    .returning();
  return result[0];
}

// UPDATE password (avec hash)
export async function updateUserPassword(id: number, newPassword: string): Promise<User | undefined> {
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const result = await db
    .update(users)
    .set({ password: hashedPassword })
    .where(eq(users.id, id))
    .returning();
  return result[0];
}

// UPDATE email
export async function updateUserEmail(id: number, newEmail: string): Promise<User | undefined> {
  const result = await db
    .update(users)
    .set({ email: newEmail })
    .where(eq(users.id, id))
    .returning();
  return result[0];
}

// DELETE user by id
export async function deleteUser(id: number): Promise<boolean> {
  const result = await db.delete(users).where(eq(users.id, id));
  return result > 0;
}

// DELETE user by email
export async function deleteUserByEmail(email: string): Promise<boolean> {
  const result = await db.delete(users).where(eq(users.email, email));
  return result > 0;
}

