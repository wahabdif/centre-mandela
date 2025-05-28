import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage.js"; // <- extension .js obligatoire ici
import {
  insertContactMessageSchema,
  insertAppointmentSchema,
} from "@shared/schema";

function isZodError(error: unknown): error is { name: string; errors: unknown } {
  return (
    typeof error === "object" &&
    error !== null &&
    "name" in error &&
    (error as any).name === "ZodError"
  );
}

export async function registerRoutes(app: Express): Promise<Server> {
  const apiPrefix = "/api";

  // Route racine
  app.get("/", (_req: Request, res: Response) => {
    res.send("Bienvenue sur l'API du Centre Mandela !");
  });

  // POST /api/contact
  app.post(`${apiPrefix}/contact`, async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ message: "Message envoyé avec succès", data: message });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      if (isZodError(error)) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Erreur lors de l'envoi du message. Veuillez réessayer." });
    }
  });

  // GET /api/contact
  app.get(`${apiPrefix}/contact`, async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error getting contact messages:", error);
      res.status(500).json({ message: "Erreur lors de la récupération des messages." });
    }
  });

  // POST /api/appointments
  app.post(`${apiPrefix}/appointments`, async (req: Request, res: Response) => {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(validatedData);
      res.status(201).json({ message: "Rendez-vous demandé avec succès", data: appointment });
    } catch (error) {
      console.error("Error booking appointment:", error);
      if (isZodError(error)) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Erreur lors de la demande de rendez-vous. Veuillez réessayer." });
    }
  });

  // GET /api/appointments
  app.get(`${apiPrefix}/appointments`, async (_req: Request, res: Response) => {
    try {
      const appointments = await storage.getAppointments();
      res.status(200).json(appointments);
    } catch (error) {
      console.error("Error getting appointments:", error);
      res.status(500).json({ message: "Erreur lors de la récupération des rendez-vous." });
    }
  });

  // GET /api/appointments/:id
  app.get(`${apiPrefix}/appointments/:id`, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Format d'ID invalide" });
      }
      const appointment = await storage.getAppointmentById(id);
      if (!appointment) {
        return res.status(404).json({ message: "Rendez-vous non trouvé" });
      }
      res.status(200).json(appointment);
    } catch (error) {
      console.error("Error getting appointment:", error);
      res.status(500).json({ message: "Erreur lors de la récupération du rendez-vous." });
    }
  });

  // PATCH /api/appointments/:id/status
  app.patch(`${apiPrefix}/appointments/:id/status`, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id, 10);
      const { status } = req.body;

      if (isNaN(id)) {
        return res.status(400).json({ message: "Format d'ID invalide" });
      }
      if (!status || typeof status !== "string") {
        return res.status(400).json({ message: "Le statut est requis et doit être une chaîne" });
      }

      const updatedAppointment = await storage.updateAppointmentStatus(id, status);
      if (!updatedAppointment) {
        return res.status(404).json({ message: "Rendez-vous non trouvé" });
      }

      res.status(200).json({
        message: "Statut du rendez-vous mis à jour avec succès",
        data: updatedAppointment,
      });
    } catch (error) {
      console.error("Error updating appointment status:", error);
      res.status(500).json({ message: "Erreur lors de la mise à jour du statut du rendez-vous." });
    }
  });

  // Création et retour du serveur HTTP
  const httpServer = createServer(app);
  return httpServer;
}
