'use client';

import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import type { ThemeContextValue, ThemeMode } from './types/Theme.types';

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

export interface ThemeProviderProps {
  readonly children: ReactNode;
  readonly defaultMode?: ThemeMode;
  readonly storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultMode = 'light',
  storageKey = 'saas-theme-mode',
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(storageKey) as ThemeMode | null;
    if (stored === 'light' || stored === 'dark') {
      setMode(stored);
      applyTheme(stored);
    } else {
      applyTheme(defaultMode);
    }
  }, [storageKey, defaultMode]);

  const applyTheme = (newMode: ThemeMode) => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(newMode);
  };

  const setModeHandler = (newMode: ThemeMode) => {
    setMode(newMode);
    localStorage.setItem(storageKey, newMode);
    applyTheme(newMode);
  };

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setModeHandler(newMode);
  };

  const value = useMemo(
    () => ({ mode, setMode: setModeHandler, toggleMode }),
    [mode],
  );

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
