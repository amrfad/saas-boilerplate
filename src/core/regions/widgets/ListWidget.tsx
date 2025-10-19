'use client';

import type { Widget } from '../types/Widget.types';

interface ListItem {
  id?: string;
  title: string;
  description?: string;
  icon?: string;
  badge?: string;
  meta?: string;
}

interface ListWidgetConfig {
  title?: string;
  items: ListItem[];
  variant?: 'default' | 'bordered' | 'divided';
  showIndex?: boolean;
}

export function ListWidget({ config }: Readonly<Widget<ListWidgetConfig>>) {
  const { title, items, variant = 'default', showIndex = false } = config;

  const getVariantClass = () => {
    const variantClasses: Record<'default' | 'bordered' | 'divided', string> = {
      default: '',
      bordered: 'border rounded-lg',
      divided: 'divide-y',
    };
    return variantClasses[variant];
  };

  return (
    <div className="space-y-4">
      {title && (
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      )}

      <ul className={getVariantClass()}>
        {items.map((item: ListItem, index: number) => (
          <li
            key={item.id || index}
            className="flex items-start gap-3 p-4 transition-colors hover:bg-accent/50"
          >
            {showIndex && (
              <div className="flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </div>
            )}

            {item.icon && (
              <span className="text-2xl">{item.icon}</span>
            )}

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-medium text-foreground">{item.title}</h4>
                {item.badge && (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {item.badge}
                  </span>
                )}
              </div>

              {item.description && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              )}

              {item.meta && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {item.meta}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
