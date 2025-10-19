'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';

import { WidgetRenderer } from './WidgetRenderer';
import { useRegion } from './useRegion';

interface RegionProps {
  readonly id: string;
  readonly name?: string;
  readonly className?: string;
  readonly children?: ReactNode;
  readonly maxWidgets?: number;
}

export function Region({
  id,
  name,
  className,
  children,
  maxWidgets,
}: Readonly<RegionProps>) {
  const { registerRegion, unregisterRegion, getRegion } = useRegion();

  useEffect(() => {
    registerRegion({
      id,
      name: name || id,
      widgets: [],
      maxWidgets,
    });

    return () => {
      unregisterRegion(id);
    };
  }, [id, name, maxWidgets, registerRegion, unregisterRegion]);

  const region = getRegion(id);
  const widgets = region?.widgets || [];

  return (
    <div data-region={id} className={className}>
      {/* Render widgets */}
      {widgets.map((widget) => (
        <WidgetRenderer key={widget.id} widget={widget} />
      ))}

      {/* Render static children if provided */}
      {children}
    </div>
  );
}
