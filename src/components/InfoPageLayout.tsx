import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';
import { InfoPage } from '@/data/info-pages';

export default function InfoPageLayout({ content }: { content: InfoPage }) {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-8 md:px-16 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-bold text-emerald-rich uppercase tracking-widest mb-4">{content.eyebrow}</div>
          <h1 className="text-4xl md:text-5xl font-light text-near-black mb-6 leading-tight">{content.title}</h1>
          <p className="text-lg text-near-black leading-relaxed mb-12">{content.intro}</p>
          <div className="space-y-12">
            {content.sections.map((section, i) => (
              <section key={i}>
                {section.heading && <h2 className="text-2xl font-bold text-near-black mb-4">{section.heading}</h2>}
                {section.body.split('\n\n').map((para, j) => (
                  <p key={j} className="text-base text-near-black leading-relaxed mb-4">{para}</p>
                ))}
              </section>
            ))}
          </div>
          {content.relatedPages && content.relatedPages.length > 0 && (
            <div className="mt-20 pt-12 border-t border-gray-200">
              <h3 className="text-sm font-bold text-emerald-rich uppercase tracking-widest mb-8">Related</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.relatedPages.map((link, i) => (
                  <a key={i} href={link.href} className="block p-6 border border-gray-200 rounded-2xl hover:border-emerald-rich hover:shadow-lg transition-all group">
                    <h4 className="text-lg font-bold text-near-black mb-2 group-hover:text-emerald-rich transition-colors">{link.title} →</h4>
                    <p className="text-sm text-[#5A6970] leading-relaxed">{link.description}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
