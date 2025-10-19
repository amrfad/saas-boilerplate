import type { ReactNode } from 'react';

export interface RegionDefinition {
  id: string;
  name: string;
  widgets?: WidgetPlacement[];
  maxWidgets?: number;
}

export interface WidgetPlacement {
  id: string;
  type: string;
  config?: Record<string, any>;
  priority?: number;
}

export interface RegionContextValue {
  regions: RegionDefinition[];
  registerRegion: (region: RegionDefinition) => void;
  unregisterRegion: (regionId: string) => void;
  addWidget: (regionId: string, widget: WidgetPlacement) => void;
  removeWidget: (regionId: string, widgetId: string) => void;
  getRegion: (regionId: string) => RegionDefinition | undefined;
}

export interface RegionProps {
  id: string;
  name?: string;
  className?: string;
  children?: ReactNode;
  maxWidgets?: number;
}
