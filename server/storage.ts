import type { User, InsertUser, Appointment, InsertAppointment, ContactMessage, InsertContactMessage } from "../shared/schema.js";
import Database from "better-sqlite3";

// Ouvrir la base de données SQLite
const db = new Database("database.sqlite");

// Création des tables si elles n'existent pas
db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  createdAt INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  createdAt INTEGER NOT NULL
);
`);

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Appointment methods
  getAppointments(): Promise<Appointment[]>;
  getAppointment(id: number): Promise<Appointment | undefined>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  updateAppointmentStatus(id: number, status: string): Promise<Appointment | undefined>;

  // Contact methods
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class SqliteStorage implements IStorage {
  getNewsPosts(category: string | undefined) {
    throw new Error("Method not implemented.");
  }
  getNewsPost(arg0: number) {
    throw new Error("Method not implemented.");
  }
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const row = db.prepare("SELECT * FROM users WHERE id = ?").get(id) as User | undefined;
    return row;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const row = db.prepare("SELECT * FROM users WHERE username = ?").get(username) as User | undefined;
    return row;
  }

  async createUser(user: InsertUser): Promise<User> {
    const stmt = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    const info = stmt.run(user.username, user.password);
    return { id: info.lastInsertRowid as number, ...user };
  }

  // Appointment methods
  async getAppointments(): Promise<Appointment[]> {
    return db.prepare("SELECT * FROM appointments").all() as Appointment[];
  }

  async getAppointment(id: number): Promise<Appointment | undefined> {
    const row = db.prepare("SELECT * FROM appointments WHERE id = ?").get(id) as Appointment | undefined;
    return row;
  }

  async createAppointment(appointment: InsertAppointment): Promise<Appointment> {
    const stmt = db.prepare(
      "INSERT INTO appointments (name, email, phone, service, message, status, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)"
    );
    const now = Date.now();
    const info = stmt.run(
      appointment.name,
      appointment.email,
      appointment.phone,
      appointment.service,
      appointment.message || "",
      "pending",
      now
    );
    return {
      id: info.lastInsertRowid as number,
      ...appointment,
      status: "pending",
      createdAt: now,
    };
  }

  async updateAppointmentStatus(id: number, status: string): Promise<Appointment | undefined> {
    db.prepare("UPDATE appointments SET status = ? WHERE id = ?").run(status, id);
    return this.getAppointment(id);
  }

  // Contact methods
  async getContactMessages(): Promise<ContactMessage[]> {
    return db.prepare("SELECT * FROM contact_messages").all() as ContactMessage[];
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const now = Date.now();
    const stmt = db.prepare(
      "INSERT INTO contact_messages (name, email, phone, message, createdAt) VALUES (?, ?, ?, ?, ?)"
    );
    const info = stmt.run(
      message.name,
      message.email,
      message.phone,
      message.message,
      now
    );
    return {
      id: info.lastInsertRowid as number,
      ...message,
      createdAt: now,
      status: "pending",      // Ajouté pour correspondre au type ContactMessage
      httpStatus: "pending",  // Ajouté pour correspondre au type ContactMessage
    };
  }
}

// Instance unique
export const storage = new SqliteStorage();