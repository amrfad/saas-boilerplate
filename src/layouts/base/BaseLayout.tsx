import type { ReactNode } from 'react';

import { Slot } from '@/core/templating/slots/Slot';

export interface BaseLayoutProps {
  readonly children: ReactNode;
  readonly header?: ReactNode;
  readonly footer?: ReactNode;
  readonly sidebar?: ReactNode;
  readonly className?: string;
}

export function BaseLayout({
  children,
  header,
  footer,
  sidebar,
  className = '',
}: BaseLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {header && (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Slot id="header" name="Header">
            {header}
          </Slot>
        </header>
      )}

      <div className="flex flex-1">
        {sidebar && (
          <aside className="hidden w-64 border-r bg-background lg:block">
            <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
              <Slot id="sidebar" name="Sidebar">
                {sidebar}
              </Slot>
            </div>
          </aside>
        )}

        <main className="flex-1">
          <Slot id="content" name="Main Content">
            {children}
          </Slot>
        </main>
      </div>

      {footer && (
        <footer className="border-t bg-background">
          <Slot id="footer" name="Footer">
            {footer}
          </Slot>
        </footer>
      )}
    </div>
  );
}
