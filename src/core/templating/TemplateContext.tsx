'use client';

import { createContext, useMemo, useState, type ReactNode } from 'react';

import type {
  LayoutDefinition,
  TemplateContextValue,
  TemplateDefinition,
} from './types/Template.types';

export const TemplateContext = createContext<TemplateContextValue | undefined>(
  undefined,
);

export interface TemplateProviderProps {
  readonly children: ReactNode;
}

export function TemplateProvider({ children }: TemplateProviderProps) {
  const [currentTemplate, setCurrentTemplate] =
    useState<TemplateDefinition | null>(null);
  const [currentLayout, setCurrentLayout] = useState<LayoutDefinition | null>(
    null,
  );

  const setTemplate = (templateId: string) => {
    // In a real implementation, this would load template from registry
    // For now, just a placeholder
    setCurrentTemplate({ id: templateId, name: templateId, layoutId: '' });
  };

  const value = useMemo(
    () => ({ currentTemplate, currentLayout, setTemplate }),
    [currentTemplate, currentLayout],
  );

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  );
}
