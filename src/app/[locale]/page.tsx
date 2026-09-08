import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import Solutions from '@/components/sections/Solutions';
import OnePlatform from '@/components/sections/OnePlatform';
import Features from '@/components/sections/Features';
import MeetVela from '@/components/sections/MeetVela';
import Insights from '@/components/sections/Insights';

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
    </>
  );
}
