import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { DemoDashboard } from './DemoDashboard';

export async function generateMetadata(props: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Demo',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function DemoPage(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);

  return <DemoDashboard />;
}
