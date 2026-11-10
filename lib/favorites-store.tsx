'use client';

import { Product } from './types';
import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';

interface FavoritesContextType {
  favorites: Product[];
  isFavorite: (productId: string) => boolean;
  toggleFavorite: (product: Product) => void;
  removeFavorite: (productId: string) => void;
  totalFavorites: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [mounted, setMounted] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('montalie-favorites');
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // fallback safe
    }
  }, []);

  // Persist favorites to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('montalie-favorites', JSON.stringify(favorites));
    }
  }, [favorites, mounted]);

  const isFavorite = useCallback(
    (productId: string) => favorites.some((item) => item.id === productId),
    [favorites]
  );

  const toggleFavorite = useCallback((product: Product) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  }, []);

  const removeFavorite = useCallback((productId: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const totalFavorites = favorites.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite,
        removeFavorite,
        totalFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
