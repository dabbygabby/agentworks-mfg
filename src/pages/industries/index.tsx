import Head from 'next/head';
import Section from '../../components/ui/Section';
import IndustryCard from '../../components/industries/IndustryCard';
import UniversalPhysicsSection from '../../components/industries/UniversalPhysicsSection';
import { industries } from "../../components/industries/consts"

const IndustriesPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Industries | Agentworks</title>
                <meta name="description" content="Agentworks agents are purpose-built for the high-friction workflows of heavy industry. We don't just know code; we know manufacturing." />
            </Head>
            <main>
                {/* Hero Section */}
                <Section className="bg-[#f7fee7] rounded-b-[3rem] py-24 !pb-0 overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#022c22] mb-8 leading-tight">
                            Engineered for the Reality of the <span className="text-[#65a30d]">Shop Floor</span>
                        </h1>
                        <p className="text-xl text-[#022c22]/70 mb-8 leading-relaxed">
                            {'Standard software assumes a clean, linear process. You operate in a world of urgent changes and volatile variables. We built Agentworks to handle the messy reality of actual production, where things rarely go exactly to plan.'}
                        </p>
                    </div>

                    {/* Dashboard Image */}
                    <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 mt-12 translate-y-12">
                        <div className="rounded-[3rem] bg-white/40 p-3 border border-[#022c22]/10 backdrop-blur-sm">
                            <img
                                src="/dashboard2.png"
                                alt="Agentworks Dashboard"
                                className="w-full h-auto rounded-[2.5rem] shadow-2xl opacity-90"
                            />
                        </div>
                    </div>
                </Section>

                {/* Primary Verticals Grid */}
                <Section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {industries.map((industry, index) => (
                            <div key={index} className={index === industries.length - 1 ? "lg:col-span-2" : ""}>
                                <IndustryCard {...industry} />
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Universal Physics Section */}
                <UniversalPhysicsSection />
            </main>
        </div>
    );
};

export default IndustriesPage;
