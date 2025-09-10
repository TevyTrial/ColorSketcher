import { useState, useCallback } from 'react';
import { generateHarmoniousColors, THEME_PALETTES, type ThemeKey } from '@/utils/color-utils';

export function useColorPalette() {
  const [currentColors, setCurrentColors] = useState<string[]>(() => 
    generateHarmoniousColors(5)
  );
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey | null>(null);

  const generateRandomPalette = useCallback(() => {
    setCurrentColors(generateHarmoniousColors(5));
    setSelectedTheme(null);
  }, []);

  const selectTheme = useCallback((theme: ThemeKey) => {
    setCurrentColors(THEME_PALETTES[theme]);
    setSelectedTheme(theme);
  }, []);

  const setColors = useCallback((colors: string[]) => {
    setCurrentColors(colors);
    setSelectedTheme(null);
  }, []);

  return {
    currentColors,
    selectedTheme,
    generateRandomPalette,
    selectTheme,
    setColors,
  };
}
