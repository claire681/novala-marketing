import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';
import FeaturesTabs from './FeaturesTabs';
import { FEATURES_EN, FEATURES_FR } from '@/data/features-content';

export default async function FeaturesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = locale === 'fr' ? FEATURES_FR : FEATURES_EN;

  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">{content.title}</h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">{content.subtitle}</p>
          </div>

          <FeaturesTabs features={content.features} />

          <div className="rounded-3xl p-12 text-center mt-16" style={{ background: 'linear-gradient(135deg, #023E22, #046A38)' }}>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{content.ctaHeading}</h2>
            <p className="text-lg text-white/85 mb-8">{content.ctaSubheading}</p>
            <a href="https://www.getnovala.com/pricing" className="inline-block bg-emerald-bright hover:bg-white hover:text-emerald-deep text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors">{content.ctaButton} →</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
