import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactMessageSchema,
  insertAppointmentSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API prefix for all routes
  const apiPrefix = "/api";
  
  // Contact form submission
  app.post(`${apiPrefix}/contact`, async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Save contact message to storage
      const message = await storage.createContactMessage(validatedData);
      
      res.status(201).json({
        message: "Message envoyé avec succès",
        data: message
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      
      if (error.name === "ZodError") {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        message: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer."
      });
    }
  });
  
  // Get all contact messages
  app.get(`${apiPrefix}/contact`, async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error getting contact messages:", error);
      res.status(500).json({
        message: "Une erreur s'est produite lors de la récupération des messages."
      });
    }
  });
  
  // Appointment booking
  app.post(`${apiPrefix}/appointments`, async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertAppointmentSchema.parse(req.body);
      
      // Save appointment to storage
      const appointment = await storage.createAppointment(validatedData);
      
      res.status(201).json({
        message: "Rendez-vous demandé avec succès",
        data: appointment
      });
    } catch (error) {
      console.error("Error booking appointment:", error);
      
      if (error.name === "ZodError") {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        message: "Une erreur s'est produite lors de la demande de rendez-vous. Veuillez réessayer."
      });
    }
  });
  
  // Get all appointments
  app.get(`${apiPrefix}/appointments`, async (_req: Request, res: Response) => {
    try {
      const appointments = await storage.getAppointments();
      res.status(200).json(appointments);
    } catch (error) {
      console.error("Error getting appointments:", error);
      res.status(500).json({
        message: "Une erreur s'est produite lors de la récupération des rendez-vous."
      });
    }
  });
  
  // Get appointment by ID
  app.get(`${apiPrefix}/appointments/:id`, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({
          message: "Invalid ID format"
        });
      }
      
      const appointment = await storage.getAppointmentById(id);
      
      if (!appointment) {
        return res.status(404).json({
          message: "Rendez-vous non trouvé"
        });
      }
      
      res.status(200).json(appointment);
    } catch (error) {
      console.error("Error getting appointment:", error);
      res.status(500).json({
        message: "Une erreur s'est produite lors de la récupération du rendez-vous."
      });
    }
  });
  
  // Update appointment status
  app.patch(`${apiPrefix}/appointments/:id/status`, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (isNaN(id)) {
        return res.status(400).json({
          message: "Invalid ID format"
        });
      }
      
      if (!status || typeof status !== "string") {
        return res.status(400).json({
          message: "Status is required and must be a string"
        });
      }
      
      const updatedAppointment = await storage.updateAppointmentStatus(id, status);
      
      if (!updatedAppointment) {
        return res.status(404).json({
          message: "Rendez-vous non trouvé"
        });
      }
      
      res.status(200).json({
        message: "Statut du rendez-vous mis à jour avec succès",
        data: updatedAppointment
      });
    } catch (error) {
      console.error("Error updating appointment status:", error);
      res.status(500).json({
        message: "Une erreur s'est produite lors de la mise à jour du statut du rendez-vous."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
