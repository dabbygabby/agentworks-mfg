import Head from 'next/head';
import HeroSection from '../components/home/HeroSection';
import PainPointSection from '../components/home/PainPointSection';
import SolutionTeaserSection from '../components/home/SolutionTeaserSection';
import SolutionSection from '../components/home/SolutionSection';
import IndustryPathwaysSection from '../components/home/IndustryPathwaysSection';
import ValuePropSection from '../components/home/ValuePropSection';
import SocialProofSection from '../components/home/SocialProofSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Agentworks | The Operating System for Next Gen Manufacturing</title>
        <meta name="description" content="Deploy an autonomous AI workforce that lives in your existing tools. No new apps. No training. Just infinite operational capacity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <PainPointSection />
        <SolutionTeaserSection />
        <SolutionSection />
        <IndustryPathwaysSection />
        <ValuePropSection />
        <SocialProofSection />
      </div>
    </>
  );
}
