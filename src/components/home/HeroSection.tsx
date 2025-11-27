import { useState } from 'react';
import Button from '../ui/Button';
import { ArrowRightIcon, Play } from 'lucide-react';
import HeroVisual from './HeroVisual';
import VideoModal from './VideoModal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { meetingLink } from '@src/globals';

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // --- Animation Variants ---

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
                        <motion.div
                            //@ts-expect-error no error
                            variants={fadeInUpVariants}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BEF264]/10 border border-[#BEF264]/20 text-[#BEF264] text-sm font-medium mb-6"
                        >
                            <span>🔒</span>
                            <span>Zero Upfront Cost. Pay Only When We Deliver ROI.</span>
                        </motion.div>

                        <motion.h1
                            //@ts-expect-error no error
                            variants={fadeInUpVariants}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-[#FEFCE8] mb-6 leading-tight"
                        >
                            <span> Stop Managing Processes </span> <br /><span className="text-[#BEF264]">Start Protecting Profits</span>
                        </motion.h1>

                        <motion.p
                            //@ts-expect-error no error
                            variants={fadeInUpVariants}
                            className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed font-medium mt-0 md:mt-28 mx-auto lg:mx-0"
                        >
                            Turn your staff’s WhatsApp chatter into audit-ready Tally entries. Hire a Digital Workforce that quotes, tracks, and audits 24/7—without a monthly salary.
                        </motion.p>

                        <motion.div
                            //@ts-expect-error no error
                            variants={fadeInUpVariants}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-0 md:mt-32"
                        >
                            <Link
                                href={meetingLink} target="_blank"
                                className='flex flex-row justify-center items-center gap-2 bg-[#BEF264] font-semibold text-[#022c22] px-8 py-5 rounded-full hover:bg-[#BEF264dd] transition-all hover:scale-105 active:scale-95'
                            >
                                Talk to an Expert
                                <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </Link>

                            <Button
                                onClick={() => setIsModalOpen(true)}
                                className='cursor-pointer border-white border hover:bg-white/20 transition-all hover:scale-105 active:scale-95'
                            >
                                <Play className="w-4 h-4 mr-2" />
                                Watch the Video
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Hero Visual */}
                    <motion.div
                        // Increased max-w slightly to give the taller phone room to breathe
                        className="relative mx-auto w-full max-w-2xl lg:max-w-[600px] p-4 pt-0 rounded-3xl flex justify-center items-center"
                        initial="hidden"
                        animate="visible"
                        //@ts-expect-error no error
                        variants={visualEntranceVariants}
                    >
                        {/* Wrapper for the floating loop animation */}
                        {/* @ts-expect-error no error */}
                        <motion.div animate={floatingAnimation} className="w-full flex justify-center">
                            <HeroVisual forceCompact={true} />
                        </motion.div>

                        {/* Decorative Elements - Pulsing Glow */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-b from-[#bef264]/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
                            animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>

                </div>
            </div>
            <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default HeroSection;