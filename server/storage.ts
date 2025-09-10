import { type ShareablePalette, type ColorPalette } from "@shared/schema";
import { randomUUID } from "crypto";

// Storage interface for palette sharing functionality
export interface IStorage {
  // Shareable palettes
  getSharedPalette(shareId: string): Promise<ShareablePalette | undefined>;
  createSharedPalette(palette: ColorPalette): Promise<ShareablePalette>;
  incrementViewCount(shareId: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private sharedPalettes: Map<string, ShareablePalette>;

  constructor() {
    this.sharedPalettes = new Map();
  }

  async getSharedPalette(shareId: string): Promise<ShareablePalette | undefined> {
    return this.sharedPalettes.get(shareId);
  }

  async createSharedPalette(palette: ColorPalette): Promise<ShareablePalette> {
    const shareId = randomUUID().substring(0, 8); // Short, shareable ID
    const sharedPalette: ShareablePalette = {
      shareId,
      palette: { ...palette, shareId },
      createdAt: new Date().toISOString(),
      viewCount: 0,
    };
    this.sharedPalettes.set(shareId, sharedPalette);
    return sharedPalette;
  }

  async incrementViewCount(shareId: string): Promise<void> {
    const sharedPalette = this.sharedPalettes.get(shareId);
    if (sharedPalette) {
      sharedPalette.viewCount++;
      this.sharedPalettes.set(shareId, sharedPalette);
    }
  }
}

export const storage = new MemStorage();
