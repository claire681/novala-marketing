import Header from '@/components/Header';
import FadeIn from '@/components/FadeIn';
import Hero from '@/components/sections/Hero';
import TrustLogos from '@/components/sections/TrustLogos';
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
      <TrustLogos />
      <FadeIn><TrustStrip /></FadeIn>
      <FadeIn><Solutions /></FadeIn>
      <FadeIn><OnePlatform /></FadeIn>
      <FadeIn><Features /></FadeIn>
      <FadeIn><MeetVela /></FadeIn>
      <FadeIn><Insights /></FadeIn>
      <FadeIn><Testimonial /></FadeIn>
      <FadeIn><FAQ /></FadeIn>
      <FadeIn><CTABand /></FadeIn>
      <FadeIn><Newsletter /></FadeIn>
      <FadeIn><Footer /></FadeIn>
      <OnboardingPopup />
    </>
  );
}
