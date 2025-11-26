import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/technology/HeroSection';
import ChallengeSection from '../components/technology/ChallengeSection';
import CoreEngineSection from '../components/technology/CoreEngineSection';
import CleanDataSection from '../components/technology/CleanDataSection';
import VerticalKnowledgeSection from '../components/technology/VerticalKnowledgeSection';
import SecuritySection from '../components/technology/SecuritySection';
import CTASection from '../components/technology/CTASection';
import IndustriesCarousel from '@src/components/home/IndustryPathwaysSection'; // Assuming you saved the carousel component here
import FinalCTA from '@src/components/home/FinalCTA';


const TechnologyPage = () => {
    return (
        <div className="min-h-screen font-sans text-[#022c22]">
            <Head>
                <title>Technology | Agentworks - AI That Speaks Manufacturing</title>
                <meta name="description" content="Our Multi-Modal AI engine is trained specifically on the noisy, messy, unstructured data of the factory floor. It understands physics, costs, and context." />
            </Head>
            <main>
                <HeroSection />
                <ChallengeSection />
                <CoreEngineSection />
                <CleanDataSection />
                <IndustriesCarousel
                    hideAllIndustriesCard={true}
                />
                <SecuritySection />
                <FinalCTA />
            </main>
        </div>
    );
};

export default TechnologyPage;
