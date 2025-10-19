'use client';

import type { Widget } from '../types/Widget.types';

interface CardWidgetConfig {
  title: string;
  description?: string;
  image?: string;
  link?: {
    href: string;
    label: string;
  };
  variant?: 'default' | 'outlined' | 'elevated';
}

export function CardWidget({ config }: Readonly<Widget<CardWidgetConfig>>) {
  const { title, description, image, link, variant = 'default' } = config;

  const variantClass: Record<'default' | 'outlined' | 'elevated', string> = {
    default: 'bg-card border',
    outlined: 'border-2',
    elevated: 'bg-card shadow-lg',
  };

  return (
    <div className={`rounded-lg p-6 ${variantClass[variant]}`}>
      {image && (
        <div className="mb-4">
          <img
            src={image}
            alt={title}
            className="h-48 w-full rounded-md object-cover"
          />
        </div>
      )}

      <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>

      {description && (
        <p className="mb-4 text-muted-foreground">{description}</p>
      )}

      {link && (
        <a
          href={link.href}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          {link.label}
          <svg
            className="ml-1 size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      )}
    </div>
  );
}
