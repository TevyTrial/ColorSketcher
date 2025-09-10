import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";

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
