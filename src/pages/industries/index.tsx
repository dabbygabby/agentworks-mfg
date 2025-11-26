import Head from 'next/head';
import { motion } from 'framer-motion';
import ProductionDashboard from '../../components/industries/ProductionDashboard';
import UniversalPhysicsSection from '../../components/industries/UniversalPhysicsSection';
import IndustriesCarousel from '@src/components/home/IndustryPathwaysSection'; // Assuming you saved the carousel component here
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { meetingLink } from '@src/globals';

// --- ANIMATION VARIANTS (Matched to HowItWorks) ---
const heroTextVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const screenVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1, ease: "easeOut", delay: 0.2 }
    }
};

const IndustriesPage = () => {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Industries | Agentworks</title>
                <meta name="description" content="Agentworks agents are purpose-built for the high-friction workflows of heavy industry. We don't just know code; we know manufacturing." />
            </Head>

            <main>
                {/* --- HERO SECTION --- */}
                {/* Using exact styling/dimensions from HowItWorks for consistency */}
                <section className="bg-[#022c22] py-24 !pb-0 overflow-hidden relative">

                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#bef264]/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold text-[#FEFCE8] pt-24 mb-8 leading-tight"
                            initial="hidden"
                            animate="visible"
                            //@ts-expect-error no error
                            variants={heroTextVariants}
                        >
                            Universal Physics <br />
                            <motion.span
                                className="text-[#bef264]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                Specific Execution
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-[#FEFCE8]/70 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            We standardized the technology so you can customize the execution. Deploy agents that follow your specific rules, not a generic template.
                        </motion.p>
                    </div>

                    <motion.div
                        className="flex w-full flex-col sm:flex-row items-center justify-center lg:justify-center gap-4 mt-0 md:mt-12"
                    >
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById('industries-carousel');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className='flex flex-row justify-center items-center gap-2 bg-[#BEF264] font-semibold text-[#022c22] px-8 py-5 rounded-full hover:bg-[#BEF264dd] transition-all hover:scale-105 active:scale-95'
                        >
                            Find Your Industry
                        </button>

                        <Link
                            href={meetingLink} target="_blank"
                            className="rounded-full flex items-center border-2 justify-center flex-row !px-10 !py-4 !text-lg border-white/20 text-white hover:bg-white/10"
                        >
                            Book a Deployment Strategy
                        </Link>
                    </motion.div>

                    {/* Animated Dashboard Container */}
                    {/* Matching dimensions: h-[800px] md:h-[600px] lg:h-[750px] */}
                    <motion.div
                        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 mt-12"
                        //@ts-expect-error no error
                        variants={screenVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="rounded-t-[3rem] bg-white/10 p-3 pt-3 pb-0 border-t border-l border-r border-white/10 backdrop-blur-md h-[500px] md:h-[600px] lg:h-[750px] overflow-hidden shadow-2xl">
                            <div className="rounded-t-[2.5rem] bg-slate-900 h-full w-full overflow-clip relative">
                                {/* Inner Shadow Overlay for depth */}
                                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none z-20" />
                                <ProductionDashboard />
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* --- INDUSTRIES CAROUSEL SECTION --- */}
                {/* Replaces the old grid with the interactive carousel */}
                <div className="relative z-20">
                    {/* Negative margin pulls it up slightly to connect visually, or keep standard padding */}
                    <IndustriesCarousel
                        title="Every Industry Breaks Differently"
                        subtitle="We identify exactly where your margin leaks and deploy agents to turn that vulnerability into your competitive advantage. See how we turn your sector's biggest pain into its biggest win."
                        hideAllIndustriesCard={true}
                    />
                </div>

                {/* --- UNIVERSAL PHYSICS SECTION --- */}
                <UniversalPhysicsSection />
            </main>
        </div>
    );
};

export default IndustriesPage;