'use client';

import { Button } from '@/components/ui/button';

import { useTheme } from './useTheme';

export function ThemeToggle() {
  const { mode, toggleMode } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleMode}
      aria-label="Toggle theme"
      className="size-9"
    >
      {mode === 'light' ? (
        <span className="text-lg">🌙</span>
      ) : (
        <span className="text-lg">☀️</span>
      )}
    </Button>
  );
}
