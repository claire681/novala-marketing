import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import Solutions from '@/components/sections/Solutions';
import OnePlatform from '@/components/sections/OnePlatform';
import Features from '@/components/sections/Features';
import MeetVela from '@/components/sections/MeetVela';
import Insights from '@/components/sections/Insights';
import Testimonial from '@/components/sections/Testimonial';
import FAQ from '@/components/sections/FAQ';
import CTABand from '@/components/sections/CTABand';
import Newsletter from '@/components/sections/Newsletter';
import Footer from '@/components/sections/Footer';
import OnboardingPopup from '@/components/OnboardingPopup';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <TrustStrip />
      <Solutions />
      <OnePlatform />
      <Features />
      <MeetVela />
      <Insights />
      <Testimonial />
      <FAQ />
      <CTABand />
      <Newsletter />
      <Footer />
      <OnboardingPopup />
    </>
  );
}
