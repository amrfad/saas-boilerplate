'use client';

import type { Widget } from '../types/Widget.types';

interface StatItem {
  label: string;
  value: string | number;
  change?: {
    value: string;
    trend: 'up' | 'down' | 'neutral';
  };
  icon?: string;
}

interface StatsWidgetConfig {
  title?: string;
  stats: StatItem[];
  layout?: 'grid' | 'inline';
  columns?: 2 | 3 | 4;
}

export function StatsWidget({ config }: Readonly<Widget<StatsWidgetConfig>>) {
  const { title, stats, layout = 'grid', columns = 3 } = config;

  const gridClass: Record<2 | 3 | 4, string> = {
    2: 'grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  };

  const getTrendColor = (trend: 'up' | 'down' | 'neutral') => {
    return {
      up: 'text-green-600',
      down: 'text-red-600',
      neutral: 'text-muted-foreground',
    }[trend];
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'neutral') => {
    return {
      up: '↑',
      down: '↓',
      neutral: '→',
    }[trend];
  };

  if (layout === 'inline') {
    return (
      <div className="space-y-2">
        {title && (
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        )}
        <div className="flex flex-wrap gap-6">
          {stats.map((stat: StatItem, index: number) => (
            <div key={index} className="flex items-center gap-2">
              {stat.icon && <span className="text-2xl">{stat.icon}</span>}
              <div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
                <div className="text-xl font-bold">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {title && (
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      )}

      <div className={`grid gap-4 ${gridClass[columns]}`}>
        {stats.map((stat: StatItem, index: number) => (
          <div
            key={index}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
              {stat.icon && <span className="text-2xl">{stat.icon}</span>}
            </div>

            <div className="mt-2 flex items-baseline gap-2">
              <div className="text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              {stat.change && (
                <div
                  className={`text-sm font-medium ${getTrendColor(stat.change.trend)}`}
                >
                  {getTrendIcon(stat.change.trend)} {stat.change.value}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
