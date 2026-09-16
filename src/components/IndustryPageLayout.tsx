import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';
import { IndustryContent } from '@/data/industry-content';

export default function IndustryPageLayout({ content }: { content: IndustryContent }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="relative pt-32 pb-16 px-8 md:px-16 overflow-hidden" style={{ minHeight: '480px' }}>
          <Image src={content.heroPhoto} alt="" fill className="object-cover z-0" priority sizes="100vw" />
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(4,106,56,0.4) 100%)' }}></div>
          <div className="relative z-20 max-w-5xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#00A651' }}>{content.eyebrow}</div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">{content.heroTitle}</h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl">{content.heroSubtitle}</p>
          </div>
        </section>

        <section className="py-16 px-8 md:px-16 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs font-bold text-emerald-rich uppercase tracking-widest mb-4">{content.introEyebrow}</div>
            <h2 className="text-3xl md:text-4xl font-black text-near-black mb-6 leading-tight max-w-3xl">{content.introTitle}</h2>
            <div className="max-w-3xl text-base md:text-lg text-near-black leading-relaxed">
              {content.introBody.split('\n\n').map((para, i) => (
                <p key={i} className="mb-4">{para}</p>
              ))}
            </div>
          </div>
        </section>

        {content.features.map((feature, i) => (
          <section key={i} className="py-12 px-8 md:px-16 bg-white border-t border-gray-200">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-black text-near-black mb-4">{feature.heading}</h3>
              <div className="text-base text-near-black leading-relaxed max-w-3xl">
                {feature.body.split('\n\n').map((para, j) => (
                  <p key={j} className="mb-3">{para}</p>
                ))}
              </div>
              {feature.bullets && (
                <ul className="mt-4 space-y-2 max-w-3xl">
                  {feature.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-base text-near-black">
                      <span className="text-emerald-rich font-bold flex-shrink-0">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <section className="py-16 px-8 md:px-16" style={{ background: '#FAFAFA' }}>
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black text-near-black mb-8">{content.faqTitle}</h3>
            <div className="space-y-6 max-w-3xl">
              {content.faq.map((item, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-bold text-near-black mb-2">{item.question}</h4>
                  <p className="text-base text-[#5A6970] leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-8 md:px-16 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs font-bold text-emerald-rich uppercase tracking-widest mb-6">{content.relatedTitle}</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.related.map((link, i) => (
                <a key={i} href={link.href} className="block p-6 border border-gray-200 rounded-2xl hover:border-emerald-rich hover:shadow-lg transition-all group">
                  <div className="text-lg font-bold text-near-black mb-2 group-hover:text-emerald-rich transition-colors">{link.title} →</div>
                  <p className="text-sm text-[#5A6970]">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
