import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link'; // Keeping Link in case the user's setup supports it, but converting usage below

// --- ANIMATION VARIANTS (Consistent with HowItWorks) ---
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

/**
 * IndustryHero component displays the specific hero for a vertical (e.g., Sheet Metal).
 * It takes data to dynamically change the copy and image.
 * * @param {object} props - The props object.
 * @param {string} props.title - The dynamic title (e.g., "Stop Bleeding Margin on Scrap...").
 * @param {string} props.subtitle - The dynamic subtitle (e.g., "Automate the flow of data...").
 * @param {string} props.ctaText - The button text (e.g., "See the Quoting Agent").
 * @param {string} props.imageSrc - The source path for the visual (e.g., "/sheet-metal.png").
 * @param {string} props.ctaLink - The link for the primary button.
 */
const IndustryHero = ({ title, subtitle, ctaText, imageSrc, ctaLink }: { title: string; subtitle: string; ctaText: string; imageSrc: string; ctaLink: string }) => {

    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#022c22]">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#bef264]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

                    {/* Left Column: Text Content */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial="hidden"
                        animate="visible"
                        variants={textContainerVariants}
                    >

                        <motion.h1
                            // @ts-ignore
                            variants={fadeInUpVariants}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-[#FEFCE8] mb-6 leading-tight"
                        >
                            {/* Dynamically insert title and highlight color accents */}
                            {title}
                        </motion.h1>

                        <motion.p
                            // @ts-ignore
                            variants={fadeInUpVariants}
                            className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0"
                        >
                            {subtitle}
                        </motion.p>

                        <motion.div
                            // @ts-ignore
                            variants={fadeInUpVariants}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8"
                        >
                            {/* Primary CTA */}
                            <a
                                href={ctaLink}
                                className='flex flex-row justify-center items-center gap-2 bg-[#BEF264] font-semibold text-[#022c22] px-8 py-5 rounded-full hover:bg-[#BEF264dd] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#BEF264]/20'
                            >
                                {ctaText}
                                <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Visual (Dashboard/Image) */}
                    <motion.div
                        className="relative mx-auto p-4 pt-0 rounded-3xl flex justify-center items-center"
                        initial="hidden"
                        animate="visible"
                        // @ts-ignore
                        variants={visualEntranceVariants}
                    >
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50 border-4 border-white/10 w-full hover:scale-[1.01] transition-transform duration-500">
                            {/* Replaced Next/Image with standard <img> tag */}
                            <img
                                src={imageSrc}
                                alt={title}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover"
                                style={{ aspectRatio: '1.5 / 1' }}
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = 'https://placehold.co/1200x800/22c55e/ffffff?text=Image+Placeholder';
                                }}
                            />
                        </div>

                        {/* Decorative Elements - Pulsing Glow */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-[#bef264]/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
                            animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default IndustryHero;