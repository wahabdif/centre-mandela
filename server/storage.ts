import fs from 'fs/promises';
import path from 'path';

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

const DATA_FILE = path.resolve('./data/contactMessages.json');

class Storage {
  private contactMessages = new Map<number, ContactMessage>();
  private contactMessageCurrentId = 1;

  constructor() {
    this.loadData().catch(console.error);
  }

  // Charger les données depuis le fichier JSON
  private async loadData(): Promise<void> {
    try {
      const data = await fs.readFile(DATA_FILE, 'utf-8');
      const parsed: ContactMessage[] = JSON.parse(data);

      // Remplir la Map avec les données existantes
      parsed.forEach((item) => {
        // Restaurer l'objet Date
        item.createdAt = new Date(item.createdAt);
        this.contactMessages.set(item.id, item);
        if (item.id >= this.contactMessageCurrentId) {
          this.contactMessageCurrentId = item.id + 1;
        }
      });

      console.log(`✅ Chargé ${parsed.length} messages depuis ${DATA_FILE}`);
    } catch (err) {
      if ((err as any).code === 'ENOENT') {
        // Fichier n'existe pas, on démarre avec une Map vide
        console.log(`ℹ️ Fichier ${DATA_FILE} introuvable, démarrage avec données vides`);
      } else {
        console.error('❌ Erreur en chargeant les données:', err);
      }
    }
  }

  // Sauvegarder les données dans le fichier JSON
  private async saveData(): Promise<void> {
    const arr = Array.from(this.contactMessages.values());
    try {
      await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
      await fs.writeFile(DATA_FILE, JSON.stringify(arr, null, 2), 'utf-8');
      console.log(`✅ Données sauvegardées (${arr.length} messages)`);
    } catch (err) {
      console.error('❌ Erreur en sauvegardant les données:', err);
    }
  }

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
      message: data.message ?? null,
      status: data.status ?? 'pending',
      createdAt,
    };

    this.contactMessages.set(id, newMessage);
    await this.saveData(); // Sauvegarder après création
    return newMessage;
  }

  async updateContactMessageStatus(id: number, status: string): Promise<ContactMessage | null> {
    const allowedStatuses = ['pending', 'read', 'archived'];
    if (!allowedStatuses.includes(status)) {
      throw new Error(`Statut invalide : ${status}`);
    }

    const existing = this.contactMessages.get(id);
    if (!existing) return null;

    const updated: ContactMessage = {
      ...existing,
      status,
    };

    this.contactMessages.set(id, updated);
    await this.saveData(); // Sauvegarder après mise à jour
    return updated;
  }

  async getContactMessageById(id: number): Promise<ContactMessage | null> {
    return this.contactMessages.get(id) ?? null;
  }
}

const storage = new Storage();
export default storage;
