import { Router, type Request, type Response } from "express";
import {
  insertContactMessageSchema,
  insertAppointmentSchema,
} from "@shared/schema.js";
import { storage } from "./storage.js";

const router = Router();
const apiPrefix = "/api";

function isZodError(error: unknown): error is { name: string; errors: unknown } {
  return (
    typeof error === "object" &&
    error !== null &&
    "name" in error &&
    (error as any).name === "ZodError"
  );
}

// Route racine
router.get("/", (_req: Request, res: Response) => {
  res.send("Bienvenue sur l'API du Centre Mandela !");
});

// POST /api/contact
router.post(`${apiPrefix}/contact`, async (req: Request, res: Response) => {
  try {
    const validatedData = insertContactMessageSchema.parse(req.body);
    const message = await storage.createContactMessage(validatedData);
    res.status(201).json({ message: "Message envoyé avec succès", data: message });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    if (isZodError(error)) {
      return res.status(400).json({ message: "Validation error", errors: error.errors });
    }
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// GET /api/contact
router.get(`${apiPrefix}/contact`, async (_req: Request, res: Response) => {
  try {
    const messages = await storage.getContactMessages();
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error getting contact messages:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// POST /api/appointments
router.post(`${apiPrefix}/appointments`, async (req: Request, res: Response) => {
  try {
    const validatedData = insertAppointmentSchema.parse(req.body);
    const appointment = await storage.createAppointment(validatedData);
    res.status(201).json({ message: "Rendez-vous enregistré", data: appointment });
  } catch (error) {
    console.error("Error booking appointment:", error);
    if (isZodError(error)) {
      return res.status(400).json({ message: "Validation error", errors: error.errors });
    }
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// GET /api/appointments
router.get(`${apiPrefix}/appointments`, async (_req: Request, res: Response) => {
  try {
    const appointments = await storage.getAppointments();
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error getting appointments:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// GET /api/appointments/:id
router.get(`${apiPrefix}/appointments/:id`, async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ message: "ID invalide" });

    const appointment = await storage.getAppointmentById(id);
    if (!appointment) return res.status(404).json({ message: "Non trouvé" });

    res.status(200).json(appointment);
  } catch (error) {
    console.error("Error getting appointment:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// PATCH /api/appointments/:id/status
router.patch(`${apiPrefix}/appointments/:id/status`, async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { status } = req.body;

    if (isNaN(id)) return res.status(400).json({ message: "ID invalide" });
    if (!status || typeof status !== "string") {
      return res.status(400).json({ message: "Statut invalide" });
    }

    const updated = await storage.updateAppointmentStatus(id, status);
    if (!updated) return res.status(404).json({ message: "Non trouvé" });

    res.status(200).json({ message: "Statut mis à jour", data: updated });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export default router;
