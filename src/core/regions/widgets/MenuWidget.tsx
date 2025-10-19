'use client';

import Link from 'next/link';

import type { Widget } from '../types/Widget.types';

interface MenuItem {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
}

interface MenuWidgetConfig {
  title?: string;
  items: MenuItem[];
  orientation?: 'vertical' | 'horizontal';
  variant?: 'default' | 'pills' | 'underline';
}

export function MenuWidget({ config }: Readonly<Widget<MenuWidgetConfig>>) {
  const {
    title,
    items,
    orientation = 'vertical',
    variant = 'default',
  } = config;

  const orientationClass: Record<'vertical' | 'horizontal', string> = {
    vertical: 'flex-col space-y-1',
    horizontal: 'flex-row space-x-2',
  };

  const getItemClass = () => {
    const base =
      'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors';

    const variantClasses: Record<'default' | 'pills' | 'underline', string> = {
      default: 'hover:bg-accent hover:text-accent-foreground',
      pills: 'hover:bg-primary hover:text-primary-foreground',
      underline: 'hover:border-b-2 hover:border-primary rounded-none',
    };

    return `${base} ${variantClasses[variant]}`;
  };

  return (
    <nav className="space-y-2">
      {title && (
        <h3 className="mb-2 px-3 text-sm font-semibold tracking-tight text-foreground">
          {title}
        </h3>
      )}

      <div className={`flex ${orientationClass[orientation]}`}>
        {items.map((item: MenuItem, index: number) => (
          <Link
            key={index}
            href={item.href}
            className={getItemClass()}
          >
            {item.icon && <span className="text-lg">{item.icon}</span>}
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
