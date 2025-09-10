import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { insertColorPaletteSchema } from "@shared/schema";
import { storage } from "./storage";
import { randomUUID } from "crypto";

const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Share a color palette
  app.post("/api/share-palette", async (req, res) => {
    try {
      const validation = insertColorPaletteSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ error: "Invalid palette data" });
      }

      // Create a full palette with server-generated fields
      const palette = {
        id: randomUUID(),
        ...validation.data,
        createdAt: new Date().toISOString(),
      };

      const sharedPalette = await storage.createSharedPalette(palette);
      res.json({
        shareId: sharedPalette.shareId,
        shareUrl: `${req.protocol}://${req.get('host')}/shared/${sharedPalette.shareId}`,
        palette: sharedPalette.palette
      });
    } catch (error) {
      console.error("Share palette error:", error);
      res.status(500).json({ error: "Failed to share palette" });
    }
  });

  // Get a shared palette
  app.get("/api/shared/:shareId", async (req, res) => {
    try {
      const { shareId } = req.params;
      const sharedPalette = await storage.getSharedPalette(shareId);
      
      if (!sharedPalette) {
        return res.status(404).json({ error: "Shared palette not found" });
      }

      // Increment view count and get updated palette
      await storage.incrementViewCount(shareId);
      const updatedPalette = await storage.getSharedPalette(shareId);
      
      res.json({
        palette: sharedPalette.palette,
        viewCount: updatedPalette?.viewCount || sharedPalette.viewCount,
        createdAt: sharedPalette.createdAt
      });
    } catch (error) {
      console.error("Get shared palette error:", error);
      res.status(500).json({ error: "Failed to load shared palette" });
    }
  });

  // Image upload endpoint for server-side processing
  app.post("/api/upload-image", upload.single("image"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No image file provided" });
      }

      // For now, we'll return success - color extraction is handled client-side
      // This endpoint could be extended for server-side image processing if needed
      res.json({ 
        message: "Image uploaded successfully",
        filename: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype
      });
    } catch (error) {
      console.error("Image upload error:", error);
      res.status(500).json({ error: "Failed to process image" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
