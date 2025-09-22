export function generateRandomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

export function generateHarmoniousColors(count: number = 5): string[] {
  const colors: string[] = [];
  const baseHue = Math.floor(Math.random() * 360);
  
  for (let i = 0; i < count; i++) {
    const hue = (baseHue + (i * 60)) % 360;
    const saturation = 50 + Math.random() * 50;
    const lightness = 40 + Math.random() * 40;
    colors.push(hslToHex(hue, saturation, lightness));
  }
  
  return colors;
}

export function hslToHex(h: number, s: number, l: number): string {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function extractColorsFromCanvas(canvas: HTMLCanvasElement): string[] {
  const ctx = canvas.getContext('2d');
  if (!ctx) return [];
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const colorCounts: { [key: string]: number } = {};
  const step = Math.floor(imageData.data.length / 4000); // Sample pixels
  
  for (let i = 0; i < imageData.data.length; i += step * 4) {
    const r = imageData.data[i];
    const g = imageData.data[i + 1];
    const b = imageData.data[i + 2];
    const a = imageData.data[i + 3];
    
    if (a > 128) { // Only consider non-transparent pixels
      const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      colorCounts[hex] = (colorCounts[hex] || 0) + 1;
    }
  }
  
  // Sort by frequency and return top 5 colors
  const sortedColors = Object.entries(colorCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([color]) => color);
  
  return sortedColors.length > 0 ? sortedColors : generateHarmoniousColors(5);
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export const THEME_PALETTES = {
  sunset: ['#FF6B6B', '#FF8E53', '#FFE66D', '#FF7F7F', '#FFB347'],
  ocean: ['#4ECDC4', '#44A08D', '#096DD9', '#73D3FF', '#00CED1'],
  forest: ['#52C41A', '#73D13D', '#237804', '#A0D468', '#8FBC8F'],
  pastel: ['#FFB7C5', '#C7CEEA', '#B5EAD7', '#FFE5B4', '#F0E6FF'],
  retro: ['#FF7F50', '#F4A460', '#DDA0DD', '#20B2AA', '#CD853F'],
  minimalist: ['#2F2F2F', '#5F5F5F', '#8F8F8F', '#BFBFBF', '#E0E0E0']
} as const;

export type ThemeKey = keyof typeof THEME_PALETTES;
