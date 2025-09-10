import { z } from "zod";

export const colorPaletteSchema = z.object({
  id: z.string(),
  colors: z.array(z.string()).min(4).max(6),
  theme: z.string().optional(),
  createdAt: z.string(),
});

export const imageUploadSchema = z.object({
  file: z.instanceof(File),
});

export type ColorPalette = z.infer<typeof colorPaletteSchema>;
export type ImageUpload = z.infer<typeof imageUploadSchema>;
