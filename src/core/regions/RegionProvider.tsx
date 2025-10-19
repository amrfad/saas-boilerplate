'use client';

import type { ReactNode } from 'react';
import { createContext, useCallback, useMemo, useState } from 'react';

import type {
  RegionContextValue,
  RegionDefinition,
  WidgetPlacement,
} from './types/Region.types';

const RegionContext = createContext<RegionContextValue | undefined>(undefined);

interface RegionProviderProps {
  readonly children: ReactNode;
  readonly initialRegions?: RegionDefinition[];
}

export function RegionProvider({
  children,
  initialRegions = [],
}: Readonly<RegionProviderProps>) {
  const [regions, setRegions] = useState<RegionDefinition[]>(initialRegions);

  const registerRegion = useCallback((region: RegionDefinition) => {
    setRegions((prev) => {
      const exists = prev.some((r) => r.id === region.id);
      if (exists) {
        return prev.map((r) => (r.id === region.id ? region : r));
      }
      return [...prev, region];
    });
  }, []);

  const unregisterRegion = useCallback((regionId: string) => {
    setRegions((prev) => prev.filter((r) => r.id !== regionId));
  }, []);

  const addWidget = useCallback(
    (regionId: string, widget: WidgetPlacement) => {
      setRegions((prev) =>
        prev.map((region) => {
          if (region.id !== regionId) return region;

          const widgets = [...(region.widgets || []), widget].sort(
            (a, b) => (a.priority || 10) - (b.priority || 10),
          );

          return { ...region, widgets };
        }),
      );
    },
    [],
  );

  const removeWidget = useCallback(
    (regionId: string, widgetId: string) => {
      setRegions((prev) =>
        prev.map((region) => {
          if (region.id !== regionId) return region;

          const widgets = (region.widgets || []).filter(
            (w) => w.id !== widgetId,
          );

          return { ...region, widgets };
        }),
      );
    },
    [],
  );

  const getRegion = useCallback(
    (regionId: string) => {
      return regions.find((r) => r.id === regionId);
    },
    [regions],
  );

  const value = useMemo<RegionContextValue>(
    () => ({
      regions,
      registerRegion,
      unregisterRegion,
      addWidget,
      removeWidget,
      getRegion,
    }),
    [regions, registerRegion, unregisterRegion, addWidget, removeWidget, getRegion],
  );

  return (
    <RegionContext.Provider value={value}>{children}</RegionContext.Provider>
  );
}

export { RegionContext };
