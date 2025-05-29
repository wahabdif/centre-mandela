// server/storage.ts

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string | null;
  status: string;
  createdAt: Date;
};

export type InsertContactMessage = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string | null;
  status?: string;
};

class Storage {
  private contactMessages = new Map<number, ContactMessage>();
  private contactMessageCurrentId = 1;

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return [...this.contactMessages.values()].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createContactMessage(data: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageCurrentId++;
    const createdAt = new Date();

    const newMessage: ContactMessage = {
      id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message ?? null, // compatibilité strict
      status: data.status ?? 'pending',
      createdAt,
    };

    this.contactMessages.set(id, newMessage);
    return newMessage;
  }

  async updateContactMessageStatus(id: number, status: string): Promise<ContactMessage | null> {
    const existing = this.contactMessages.get(id);
    if (!existing) return null;

    const updated: ContactMessage = {
      ...existing,
      status,
    };

    this.contactMessages.set(id, updated);
    return updated;
  }

  async getContactMessageById(id: number): Promise<ContactMessage | null> {
    return this.contactMessages.get(id) ?? null;
  }
}

const storage = new Storage();
export default storage;
