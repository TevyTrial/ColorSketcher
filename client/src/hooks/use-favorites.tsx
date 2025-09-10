import { useState, useEffect, useCallback } from 'react';
import type { ColorPalette } from '@shared/schema';

const STORAGE_KEY = 'colorFavorites';
const MAX_FAVORITES = 20;

export function useFavorites() {
  const [favorites, setFavorites] = useState<ColorPalette[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse favorites from localStorage:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const saveFavorite = useCallback((colors: string[], theme?: string) => {
    const newFavorite: ColorPalette = {
      id: Date.now().toString(),
      colors,
      theme,
      createdAt: new Date().toISOString(),
    };

    setFavorites(prev => {
      const updated = [newFavorite, ...prev].slice(0, MAX_FAVORITES);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const deleteFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const updated = prev.filter(fav => fav.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    favorites,
    saveFavorite,
    deleteFavorite,
    clearFavorites,
  };
}
