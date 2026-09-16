import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';
import { PRIVACY_EN, PRIVACY_FR } from '@/data/legal-content';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = locale === 'fr' ? PRIVACY_FR : PRIVACY_EN;
  const eyebrow = locale === 'fr' ? 'JURIDIQUE' : 'LEGAL';

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-8 md:px-16 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-bold text-emerald-rich uppercase tracking-widest mb-4">{eyebrow}</div>
          <h1 className="text-4xl md:text-5xl font-light text-near-black mb-4 leading-tight">{content.title}</h1>
          <p className="text-sm text-gray-500 mb-10">{content.lastUpdated}</p>
          <p className="text-lg text-near-black leading-relaxed mb-12">{content.intro}</p>
          <div className="space-y-10">
            {content.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-2xl font-bold text-near-black mb-4">{section.heading}</h2>
                {section.body.split('\n\n').map((para, j) => (<p key={j} className="text-base text-near-black leading-relaxed mb-4">{para}</p>))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
