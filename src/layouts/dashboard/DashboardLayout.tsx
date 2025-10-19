import type { ReactNode } from 'react';

import { BaseLayout } from '../base/BaseLayout';

export interface DashboardLayoutProps {
  readonly children: ReactNode;
  readonly header?: ReactNode;
  readonly sidebar?: ReactNode;
  readonly className?: string;
}

export function DashboardLayout({
  children,
  header,
  sidebar,
  className = '',
}: DashboardLayoutProps) {
  return (
    <BaseLayout
      header={header}
      sidebar={sidebar}
      className={`bg-muted/50 ${className}`}
    >
      <div className="container mx-auto p-6">
        {children}
      </div>
    </BaseLayout>
  );
}
