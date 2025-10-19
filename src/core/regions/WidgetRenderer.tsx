'use client';

import type { WidgetPlacement } from './types/Region.types';
import type { Widget } from './types/Widget.types';

// Import all available widgets
import { CardWidget } from './widgets/CardWidget';
import { ListWidget } from './widgets/ListWidget';
import { MenuWidget } from './widgets/MenuWidget';
import { StatsWidget } from './widgets/StatsWidget';
import { TextWidget } from './widgets/TextWidget';

interface WidgetRendererProps {
  readonly widget: WidgetPlacement;
}

// Widget registry - maps widget types to components
const WIDGET_REGISTRY: Record<string, React.ComponentType<any>> = {
  text: TextWidget,
  card: CardWidget,
  menu: MenuWidget,
  stats: StatsWidget,
  list: ListWidget,
};

export function WidgetRenderer({ widget }: Readonly<WidgetRendererProps>) {
  const WidgetComponent = WIDGET_REGISTRY[widget.type];

  if (!WidgetComponent) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Widget type "${widget.type}" not found in registry`);
    }
    return null;
  }

  const widgetData: Widget = {
    id: widget.id,
    type: widget.type,
    config: widget.config || {},
  };

  return (
    <div data-widget-id={widget.id} data-widget-type={widget.type}>
      <WidgetComponent {...widgetData} />
    </div>
  );
}
