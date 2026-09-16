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
          <div className="space-y-10">
            {content.sections.map((section, i) => (
              <section key={i}>
                {section.heading && <h2 className="text-2xl font-bold text-near-black mb-4">{section.heading}</h2>}
                <p className="text-base text-near-black leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
