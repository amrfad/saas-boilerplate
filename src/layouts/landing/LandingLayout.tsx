import type { ReactNode } from 'react';

import { BaseLayout } from '../base/BaseLayout';

export interface LandingLayoutProps {
  readonly children: ReactNode;
  readonly header?: ReactNode;
  readonly footer?: ReactNode;
  readonly className?: string;
}

export function LandingLayout({
  children,
  header,
  footer,
  className = '',
}: LandingLayoutProps) {
  return (
    <BaseLayout
      header={header}
      footer={footer}
      className={`bg-background ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </BaseLayout>
  );
}
