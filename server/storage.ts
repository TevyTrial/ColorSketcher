// Simple storage interface - no persistence needed for current features
export interface IStorage {
  // Currently no server-side storage needed
  // All data is managed client-side for this color palette generator
}

export class MemStorage implements IStorage {
  constructor() {
    // Placeholder for potential future server-side features
  }
}

export const storage = new MemStorage();
