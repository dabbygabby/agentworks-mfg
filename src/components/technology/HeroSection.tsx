import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowRightIcon, Box } from 'lucide-react';
import TechnologyHeroVisual from './TechnologyHeroVisual'; // Assuming this exists based on your code
import Button from '../ui/Button'; // Assuming this exists based on your code

const HeroSection = () => {
    // --- Animation Variants (Replicated from Homepage) ---

    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            }
        }
    };

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const visualEntranceVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4
            }
        }
    };

    const floatingAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#022c22]">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

                    {/* Left Column: Text Content */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial="hidden"
                        animate="visible"
                        variants={textContainerVariants}
                    >
                        <motion.h1
                            //@ts-ignore
                            variants={fadeInUpVariants}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-[#FEFCE8] mb-6 leading-tight"
                        >
                            AI That Speaks <br />
                            <span className="text-[#BEF264]">&quot;Manufacturing.&quot;</span>
                        </motion.h1>

                        {/* Sub-headline added to fit Tech page content */}
                        <motion.h2
                            //@ts-ignore
                            variants={fadeInUpVariants}
                            className="text-xl md:text-2xl font-semibold text-white/90 mb-6"
                        >
                            Generic AI models hallucinate. Ours calculate.
                        </motion.h2>

                        <motion.p
                            //@ts-ignore
                            variants={fadeInUpVariants}
                            className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed font-medium mt-0 mx-auto lg:mx-0"
                        >
                            We built a Multi-Modal AI engine trained specifically on the noisy, messy, unstructured data of the factory floor. It doesn't just &quot;read&quot; your data; it understands the physics, costs, and context behind it.
                        </motion.p>

                        <motion.div
                            //@ts-ignore
                            variants={fadeInUpVariants}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 md:mt-12"
                        >
                            <Link
                                href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery"
                                target="_blank"
                                className='flex flex-row justify-center items-center gap-2 bg-[#BEF264] font-semibold text-[#022c22] px-8 py-5 rounded-full hover:bg-[#BEF264dd] transition-all hover:scale-105 active:scale-95'
                            >
                                Book a Tech Demo
                                <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </Link>

                            <Link
                                href="/industries"
                                className='flex flex-row justify-center items-center gap-2 cursor-pointer border-white text-white font-medium px-8 py-5 rounded-full border hover:bg-white/10 transition-all hover:scale-105 active:scale-95'
                            >
                                <Box className="w-4 h-4 mr-2" />
                                Explore Use Cases
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Hero Visual */}
                    <motion.div
                        className="relative mx-auto w-full max-w-2xl lg:max-w-[600px] p-4 pt-0 flex justify-center items-center"
                        initial="hidden"
                        animate="visible"
                        //@ts-ignore
                        variants={visualEntranceVariants}
                    >
                        {/* Wrapper for the floating loop animation */}
                        <motion.div
                            //@ts-ignore
                            animate={floatingAnimation} className="w-full flex justify-center relative z-10">
                            <TechnologyHeroVisual />
                        </motion.div>

                        {/* Decorative Elements - Pulsing Glow (Copied from Homepage) */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-b from-[#bef264]/20 to-transparent rounded-full blur-3xl -z-0 pointer-events-none"
                            animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;