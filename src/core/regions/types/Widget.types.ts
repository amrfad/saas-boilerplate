import type { ComponentType } from 'react';

export interface WidgetDefinition {
  id: string;
  name: string;
  component: ComponentType<any>;
  category?: string;
}

export interface Widget<TConfig = Record<string, any>> {
  id: string;
  type: string;
  config: TConfig;
}
