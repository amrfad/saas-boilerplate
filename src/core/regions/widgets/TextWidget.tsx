'use client';

import type { Widget } from '../types/Widget.types';

interface TextWidgetConfig {
  title?: string;
  content: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

export function TextWidget({ config }: Readonly<Widget<TextWidgetConfig>>) {
  const { title, content, align = 'left', size = 'md' } = config;

  const alignClass: Record<'left' | 'center' | 'right', string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const sizeClass: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <div className={`space-y-2 ${alignClass[align]}`}>
      {title && (
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      )}
      <div className={`text-muted-foreground ${sizeClass[size]}`}>
        {content}
      </div>
    </div>
  );
}
