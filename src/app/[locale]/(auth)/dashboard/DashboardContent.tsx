'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { Region } from '@/core/regions/Region';
import { useRegion } from '@/core/regions/useRegion';
import { MessageState } from '@/features/dashboard/MessageState';
import { TitleBar } from '@/features/dashboard/TitleBar';
import { SponsorLogos } from '@/features/sponsors/SponsorLogos';
import { DashboardLayout } from '@/layouts/dashboard/DashboardLayout';
import { DashboardHeader } from '@/layouts/partials/headers/DashboardHeader';
import { NavigationSidebar } from '@/layouts/partials/sidebars/NavigationSidebar';

export function DashboardContent() {
  const t = useTranslations('DashboardIndex');
  const { addWidget } = useRegion();

  useEffect(() => {
    // Add widgets to stats region
    addWidget('dashboard-stats', {
      id: 'overview-stats',
      type: 'stats',
      priority: 1,
      config: {
        title: '📊 Dashboard Overview',
        stats: [
          {
            label: 'Total Users',
            value: '2,543',
            icon: '👥',
            change: { value: '+12.5%', trend: 'up' as const },
          },
          {
            label: 'Active Projects',
            value: '18',
            icon: '📁',
            change: { value: '+3', trend: 'up' as const },
          },
          {
            label: 'Tasks Completed',
            value: '142',
            icon: '✅',
            change: { value: '+28', trend: 'up' as const },
          },
        ],
        layout: 'grid',
        columns: 3,
      },
    });

    // Add widgets to quick actions region
    addWidget('quick-actions', {
      id: 'action-cards',
      type: 'card',
      priority: 1,
      config: {
        title: '🚀 Quick Start',
        description: 'Get started by customizing your dashboard and exploring the templating system.',
        variant: 'elevated',
        link: {
          href: '/demo',
          label: 'View Demo',
        },
      },
    });

    // Add widgets to recent activity region
    addWidget('recent-activity', {
      id: 'activity-list',
      type: 'list',
      priority: 1,
      config: {
        title: '📋 Recent Activity',
        items: [
          {
            id: '1',
            title: 'Templating Framework Implemented',
            description: '4 systems successfully integrated: Theme, Layout, Region, and Widget',
            icon: '✅',
            badge: 'Complete',
            meta: 'Today',
          },
          {
            id: '2',
            title: 'Dark Mode Theme System',
            description: 'Light and dark mode support with theme toggle',
            icon: '🌙',
            badge: 'Active',
            meta: 'TURN 1',
          },
          {
            id: '3',
            title: 'Layout System with Partials',
            description: 'BaseLayout, LandingLayout, DashboardLayout created',
            icon: '📐',
            badge: 'Active',
            meta: 'TURN 2',
          },
          {
            id: '4',
            title: 'Region & Widget System',
            description: '5 widget types with dynamic rendering',
            icon: '🗺️',
            badge: 'Active',
            meta: 'TURN 3',
          },
        ],
        variant: 'bordered',
        showIndex: false,
      },
    });
  }, [addWidget]);

  return (
    <DashboardLayout
      header={<DashboardHeader />}
      sidebar={<NavigationSidebar />}
    >
      <div className="space-y-8">
        <TitleBar
          title={t('title_bar')}
          description={t('title_bar_description')}
        />

        {/* Stats Region */}
        <Region id="dashboard-stats" className="rounded-lg bg-card p-6" />

        {/* Quick Actions Region */}
        <Region id="quick-actions" className="rounded-lg" />

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <Region id="recent-activity" className="rounded-lg bg-card p-6" />

          {/* Original Message State */}
          <div className="rounded-lg bg-card p-6">
            <MessageState
              icon={(
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5" />
                </svg>
              )}
              title={t('message_state_title')}
              description={t.rich('message_state_description', {
                code: chunks => (
                  <code className="bg-secondary text-secondary-foreground">
                    {chunks}
                  </code>
                ),
              })}
              button={(
                <>
                  <div className="mt-2 text-xs font-light text-muted-foreground">
                    {t.rich('message_state_alternative', {
                      url: () => (
                        <a
                          className="text-blue-500 hover:text-blue-600"
                          href="https://nextjs-boilerplate.com/pro-saas-starter-kit"
                        >
                          Next.js Boilerplate SaaS
                        </a>
                      ),
                    })}
                  </div>

                  <div className="mt-7">
                    <SponsorLogos />
                  </div>
                </>
              )}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
