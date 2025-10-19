import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { LandingLayout } from '@/layouts/landing/LandingLayout';
import { DefaultFooter } from '@/layouts/partials/footers/DefaultFooter';
import { LandingHeader } from '@/layouts/partials/headers/LandingHeader';
import { CTA } from '@/templates/CTA';
import { DemoBanner } from '@/templates/DemoBanner';
import { FAQ } from '@/templates/FAQ';
import { Features } from '@/templates/Features';
import { Hero } from '@/templates/Hero';
import { Pricing } from '@/templates/Pricing';
import { Sponsors } from '@/templates/Sponsors';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const IndexPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <LandingLayout header={<LandingHeader />} footer={<DefaultFooter />}>
      <DemoBanner />
      <Hero />
      <Sponsors />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
    </LandingLayout>
  );
};

export default IndexPage;
