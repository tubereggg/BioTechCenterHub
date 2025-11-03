// Replit Auth integration - routes configuration
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated, isAdmin } from "./replitAuth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup Replit Auth middleware
  await setupAuth(app);

  // Auth route - get current user with role
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Admin route - set user role (admin only)
  app.post('/api/admin/set-role', isAdmin, async (req: any, res) => {
    try {
      const { userId, role } = req.body;
      
      // Validate request body
      if (!userId || typeof userId !== 'string') {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      if (!role || (role !== 'user' && role !== 'admin')) {
        return res.status(400).json({ message: "Invalid role - must be 'user' or 'admin'" });
      }
      
      const user = await storage.setUserRole(userId, role);
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      res.json(user);
    } catch (error) {
      console.error("Error setting user role:", error);
      res.status(500).json({ message: "Failed to set user role" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
