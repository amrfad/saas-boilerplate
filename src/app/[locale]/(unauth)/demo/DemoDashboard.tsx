'use client';

import { useEffect } from 'react';

import { Region } from '@/core/regions/Region';
import { useRegion } from '@/core/regions/useRegion';
import { LandingLayout } from '@/layouts/landing/LandingLayout';
import { DefaultFooter } from '@/layouts/partials/footers/DefaultFooter';
import { LandingHeader } from '@/layouts/partials/headers/LandingHeader';

export function DemoDashboard() {
  const { addWidget } = useRegion();

  useEffect(() => {
    // Add widgets to hero region
    addWidget('hero', {
      id: 'hero-text',
      type: 'text',
      priority: 1,
      config: {
        title: '🎨 Welcome to the Templating Framework Demo',
        content:
          'This page demonstrates the Region & Widget System that was built in TURN 3. Widgets are dynamically rendered in different regions.',
        align: 'center',
        size: 'lg',
      },
    });

    // Add widgets to stats region
    addWidget('stats', {
      id: 'dashboard-stats',
      type: 'stats',
      priority: 1,
      config: {
        title: '📊 System Overview',
        stats: [
          {
            label: 'Total Widgets',
            value: '5',
            icon: '🧩',
            change: { value: '+100%', trend: 'up' as const },
          },
          {
            label: 'Active Regions',
            value: '4',
            icon: '🗺️',
            change: { value: '4/4', trend: 'neutral' as const },
          },
          {
            label: 'Layouts Created',
            value: '3',
            icon: '📐',
            change: { value: '+200%', trend: 'up' as const },
          },
        ],
        layout: 'grid',
        columns: 3,
      },
    });

    // Add widgets to features region
    addWidget('features', {
      id: 'text-widget-card',
      type: 'card',
      priority: 1,
      config: {
        title: '📝 Text Widget',
        description:
          'Display text content with customizable alignment and size. Perfect for headings, paragraphs, and announcements.',
        variant: 'elevated',
      },
    });

    addWidget('features', {
      id: 'card-widget-card',
      type: 'card',
      priority: 2,
      config: {
        title: '🎴 Card Widget',
        description:
          'Display content in beautiful cards with optional images and links. Supports multiple variants for different styles.',
        variant: 'elevated',
      },
    });

    addWidget('features', {
      id: 'menu-widget-card',
      type: 'card',
      priority: 3,
      config: {
        title: '📋 Menu Widget',
        description:
          'Create navigation menus with icons and badges. Supports vertical and horizontal orientations.',
        variant: 'elevated',
      },
    });

    addWidget('features', {
      id: 'stats-widget-card',
      type: 'card',
      priority: 4,
      config: {
        title: '📊 Stats Widget',
        description:
          'Display statistics with trend indicators. Supports grid and inline layouts with customizable columns.',
        variant: 'elevated',
      },
    });

    addWidget('features', {
      id: 'list-widget-card',
      type: 'card',
      priority: 5,
      config: {
        title: '📜 List Widget',
        description:
          'Render lists of items with icons, badges, and metadata. Supports different variants and numbering.',
        variant: 'elevated',
      },
    });

    // Add widgets to navigation region
    addWidget('navigation', {
      id: 'demo-menu',
      type: 'menu',
      priority: 1,
      config: {
        title: '🧭 Quick Navigation',
        items: [
          { label: 'Home', href: '/', icon: '🏠' },
          { label: 'Dashboard', href: '/dashboard', icon: '📊' },
          { label: 'Documentation', href: '#', icon: '📚', badge: 'New' },
          { label: 'Settings', href: '#', icon: '⚙️' },
        ],
        orientation: 'vertical',
        variant: 'default',
      },
    });

    // Add widgets to content region
    addWidget('content', {
      id: 'implementation-list',
      type: 'list',
      priority: 1,
      config: {
        title: '✅ What Was Implemented in TURN 3',
        items: [
          {
            id: '1',
            title: 'Region System',
            description:
              'Dynamic content areas that can hold multiple widgets with priority-based rendering.',
            icon: '🗺️',
            badge: 'Core',
          },
          {
            id: '2',
            title: 'Widget Renderer',
            description:
              'Registry-based system for rendering different widget types with type-safe configurations.',
            icon: '🎨',
            badge: 'Core',
          },
          {
            id: '3',
            title: '5 Widget Types',
            description:
              'TextWidget, CardWidget, MenuWidget, StatsWidget, and ListWidget - all fully functional.',
            icon: '🧩',
            badge: 'Complete',
          },
          {
            id: '4',
            title: 'RegionProvider Context',
            description:
              'React Context for managing regions and widgets across the application.',
            icon: '⚛️',
            badge: 'Core',
          },
        ],
        variant: 'bordered',
        showIndex: true,
      },
    });
  }, [addWidget]);

  return (
    <LandingLayout header={<LandingHeader />} footer={<DefaultFooter />}>
      <div className="space-y-12 py-12">
        {/* Hero Region */}
        <Region id="hero" className="text-center" />

        {/* Stats Region */}
        <Region id="stats" className="rounded-lg bg-muted/30 p-8" />

        {/* Navigation Region - 2 Column Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          <Region id="navigation" className="rounded-lg border bg-card p-6" />

          {/* Content Region */}
          <div className="md:col-span-2">
            <Region id="content" className="rounded-lg border bg-card p-6" />
          </div>
        </div>

        {/* Features Region - Grid Layout */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold">
            🎯 Available Widgets
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Region id="features" className="contents" />
          </div>
        </div>

        {/* System Info */}
        <div className="rounded-lg border bg-gradient-to-r from-primary/10 to-primary/5 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold">🚀 TURN 3 Complete!</h3>
          <p className="text-lg text-muted-foreground">
            Region & Widget System successfully implemented.
            <br />
            Ready to proceed to TURN 4: Integration & Demo
          </p>
        </div>
      </div>
    </LandingLayout>
  );
}
