import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ThemeToggle } from '@/core/theme/ThemeToggle';
import { Logo } from '@/templates/Logo';

export function DashboardHeader() {
  const t = useTranslations('Dashboard');

  return (
    <div className="flex h-16 items-center justify-between px-6">
      <div className="flex items-center gap-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            {t('overview')}
          </Link>
          <Link
            href="/dashboard/organization-profile"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            {t('organization')}
          </Link>
          <Link
            href="/dashboard/user-profile"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            {t('profile')}
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </div>
  );
}
