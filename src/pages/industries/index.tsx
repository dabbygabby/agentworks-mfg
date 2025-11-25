import Head from 'next/head';
import Section from '../../components/ui/Section';
import IndustryCard from '../../components/industries/IndustryCard';
import UniversalPhysicsSection from '../../components/industries/UniversalPhysicsSection';
import { industries } from "../../components/industries/consts"
import ProductionDashboard from '../../components/industries/ProductionDashboard';

const IndustriesPage = () => {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Industries | Agentworks</title>
                <meta name="description" content="Agentworks agents are purpose-built for the high-friction workflows of heavy industry. We don't just know code; we know manufacturing." />
            </Head>
            <main>
                {/* Hero Section */}
                <Section className="bg-[#022c22] py-24 !pb-0 overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#FEFCE8] pt-24 mb-8 leading-tight">
                            Engineered for the Reality of the <span className="text-[#bef264]">Shop Floor</span>
                        </h1>
                        <p className="text-xl text-[#FEFCE8]/70 mb-8 leading-relaxed">
                            {'Standard software assumes a clean, linear process. You operate in a world of urgent changes and volatile variables. We built Agentworks to handle the messy reality of actual production, where things rarely go exactly to plan.'}
                        </p>
                    </div>

                    {/* Production Dashboard */}
                    <div className="relative z-10 w-full max-w-[1400px] mx-auto mt-12">
                        <div className="rounded-t-[3rem] bg-white/40 p-3 pt-3 pb-0 border-t border-l border-r border-[#022c22]/10 backdrop-blur-sm h-[500px] md:h-[600px] lg:h-[750px] overflow-hidden">
                            <div className="rounded-t-[2.5rem] shadow-2xl h-full w-full overflow-clip">
                                <ProductionDashboard />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Primary Verticals Grid */}
                <Section className="">
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
