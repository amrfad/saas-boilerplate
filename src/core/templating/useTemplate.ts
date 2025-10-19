'use client';

import { useContext } from 'react';

import { TemplateContext } from './TemplateContext';

export function useTemplate() {
  const context = useContext(TemplateContext);

  if (context === undefined) {
    throw new Error('useTemplate must be used within a TemplateProvider');
  }

  return context;
}
