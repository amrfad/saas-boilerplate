import type { ReactNode } from 'react';

export interface TemplateDefinition {
  id: string;
  name: string;
  description?: string;
  layoutId: string;
}

export interface LayoutDefinition {
  id: string;
  name: string;
  slots: string[];
}

export interface TemplateContextValue {
  currentTemplate: TemplateDefinition | null;
  currentLayout: LayoutDefinition | null;
  setTemplate: (templateId: string) => void;
}

export interface SlotProps {
  id: string;
  name: string;
  children?: ReactNode;
  fallback?: ReactNode;
}

export interface FillProps {
  slot: string;
  children: ReactNode;
  priority?: number;
}
