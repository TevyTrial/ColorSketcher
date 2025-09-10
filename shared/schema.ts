import { z } from "zod";

export const colorPaletteSchema = z.object({
  id: z.string(),
  colors: z.array(z.string()).min(4).max(6),
  theme: z.string().optional(),
  createdAt: z.string(),
  shareId: z.string().optional(),
  name: z.string().optional(),
});

export const insertColorPaletteSchema = z.object({
  colors: z.array(z.string()).min(4).max(6),
  theme: z.string().optional(),
  name: z.string().optional(),
});

export const imageUploadSchema = z.object({
  file: z.instanceof(File),
});

export const shareablePaletteSchema = z.object({
  shareId: z.string(),
  palette: colorPaletteSchema,
  createdAt: z.string(),
  viewCount: z.number().default(0),
});

export type ColorPalette = z.infer<typeof colorPaletteSchema>;
export type InsertColorPalette = z.infer<typeof insertColorPaletteSchema>;
export type ImageUpload = z.infer<typeof imageUploadSchema>;
export type ShareablePalette = z.infer<typeof shareablePaletteSchema>;
