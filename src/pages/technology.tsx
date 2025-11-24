import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/technology/HeroSection';
import ChallengeSection from '../components/technology/ChallengeSection';
import CoreEngineSection from '../components/technology/CoreEngineSection';
import InteractiveDemo from '../components/technology/InteractiveDemo';
import CleanDataSection from '../components/technology/CleanDataSection';
import VerticalKnowledgeSection from '../components/technology/VerticalKnowledgeSection';
import SecuritySection from '../components/technology/SecuritySection';
import CTASection from '../components/technology/CTASection';

const TechnologyPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-[#022c22]">
            <Head>
                <title>Technology | Agentworks - AI That Speaks Manufacturing</title>
                <meta name="description" content="Our Multi-Modal AI engine is trained specifically on the noisy, messy, unstructured data of the factory floor. It understands physics, costs, and context." />
            </Head>
            <main>
                <HeroSection />
                <ChallengeSection />
                <CoreEngineSection />
                <InteractiveDemo />
                <CleanDataSection />
                <VerticalKnowledgeSection />
                <SecuritySection />
                <CTASection />
            </main>
        </div>
    );
};

export default TechnologyPage;
