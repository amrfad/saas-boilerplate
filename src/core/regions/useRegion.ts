'use client';

import { useContext } from 'react';

import { RegionContext } from './RegionProvider';

export function useRegion() {
  const context = useContext(RegionContext);

  if (context === undefined) {
    throw new Error('useRegion must be used within a RegionProvider');
  }

  return context;
}
