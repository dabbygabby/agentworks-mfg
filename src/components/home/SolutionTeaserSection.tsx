import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Smartphone, Brain, Sparkles } from 'lucide-react';
import Link from 'next/link';

// --- Custom Visual Imports ---
import InterfaceVisual from "@src/components/howItWorks/InterfaceVisual";
import BrainVisual from "@src/components/howItWorks/BrainVisual";
import WorkforceVisual from "@src/components/howItWorks/WorkforceVisual";

// --- Mock Section Component ---
const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <section className={`py-16 px-4 md:px-8 ${className}`}>
        {children}
    </section>
);

// --- Data for the Cards ---
// Defined *outside* component to prevent recreation on re-renders, 
// though we will dynamically render the visual inside the loop.
const featuresData = [
    {
        id: 1,
        title: "Zero Friction Input",
        subtitle: "The Solution is in Their Pocket.",
        description: "Your floor staff uses WhatsApp like they always do. Voice notes, photos of chalan, or scribbled notes.",
        icon: Smartphone,
        color: "#64A30E",
        VisualComponent: InterfaceVisual
    },
    {
        id: 2,
        title: "The Intelligent Layer",
        subtitle: "Making Sense of the Chaos.",
        description: "Our AI ignores the background noise and factory slang. It extracts the truth: Who, What, When, and How Much.",
        icon: Brain,
        color: "#EAB308",
        VisualComponent: BrainVisual
    },
    {
        id: 3,
        title: "Your Digital Employees",
        subtitle: "Agents That Actually Do the Work.",
        description: "It’s not just data entry; it’s execution. Specialized digital employees perform intelligent tasks—generating quotes, managing inventory, and auditing compliance—turning your raw data into business results.",
        icon: Sparkles,
        color: "#F97316",
        VisualComponent: WorkforceVisual
    }
];

// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const fadeInUpVariants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98] // Soothing ease-out
        }
    }
};

const SolutionTeaserSection = () => {
    const [activeindex, setActiveIndex] = useState(0);
    const [isAutoRotating, setIsAutoRotating] = useState(true);

    // Callback to advance to the next slide
    // This will be passed into the visual components
    const handleVisualComplete = () => {
        if (isAutoRotating) {
            setActiveIndex((prev) => (prev + 1) % featuresData.length);
        }
    };

    return (
        <Section className="">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Header Content */}
                <motion.div
                    // @ts-ignore
                    variants={fadeInUpVariants}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6 leading-tight">
                        The Only Upgrade That Requires <span className="text-[#64A30E]">Zero Training</span>
                    </h2>
                    <p className="text-xl text-[#022c22]/70 max-w-2xl mx-auto">
                        Turn the tool your staff already loves into the most powerful, error-free data terminal in your factory.
                    </p>
                </motion.div>

                {/* Main Interactive Card */}
                <motion.div
                    // @ts-ignore
                    variants={fadeInUpVariants}
                    className="max-w-7xl mx-auto bg-[#022c22] rounded-[2.5rem] p-4 md:p-6 overflow-hidden shadow-2xl"
                >
                    <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">

                        {/* Left Column: Rotating Interactive List */}
                        <div className="lg:col-span-5 flex flex-col justify-between h-full py-4 md:py-8 pl-4 md:pl-8 pr-4">

                            {/* Wrapper for the list content */}
                            <div className="flex-1 flex flex-col justify-center">
                                <div
                                    className="space-y-6"
                                    onMouseEnter={() => setIsAutoRotating(false)}
                                    onMouseLeave={() => setIsAutoRotating(true)}
                                >
                                    {featuresData.map((feature, index) => {
                                        const isActive = activeindex === index;
                                        return (
                                            <div
                                                key={feature.id}
                                                onClick={() => setActiveIndex(index)}
                                                className={`cursor-pointer transition-all duration-300 group relative ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                                                    }`}
                                            >
                                                {/* Progress Bar for Active State */}
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="activeBar"
                                                        className="absolute -left-6 md:-left-8 top-0 bottom-0 w-1 rounded-r-full"
                                                        style={{ backgroundColor: feature.color }}
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                    />
                                                )}

                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className={`text-xl md:text-2xl font-bold text-white transition-colors`}>
                                                        {feature.title}
                                                    </h3>
                                                    {isActive && (
                                                        <motion.span
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                            className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20"
                                                        >
                                                            0{index + 1}
                                                        </motion.span>
                                                    )}
                                                </div>

                                                <h4 className="text-[#64A30E] font-medium mb-3 text-lg">
                                                    {feature.subtitle}
                                                </h4>

                                                <AnimatePresence mode="wait">
                                                    {isActive && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                            className="overflow-hidden"
                                                        >
                                                            <p className="text-white/80 leading-relaxed pb-4">
                                                                {feature.description}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-8 pt-8 border-t border-white/10 shrink-0">
                                <Link
                                    href="/how-it-works"
                                    className="group flex w-56 items-center gap-2 text-[#022c22] font-semibold bg-[#bef264] hover:bg-[#bef264ee] transition-colors px-6 py-2 rounded-full">
                                    See How It Works
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Visual Display */}
                        <div className="lg:col-span-7 h-[500px] lg:h-[650px]">
                            {/* Visual Container */}
                            <div className="w-full h-full bg-[#FEFCE8] rounded-3xl overflow-hidden shadow-inner relative flex items-center justify-center">

                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none"
                                    style={{
                                        backgroundImage: 'radial-gradient(circle at 2px 2px, #022c22 1px, transparent 0)',
                                        backgroundSize: '24px 24px'
                                    }}
                                />

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeindex}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                                        className="w-full h-full flex items-center justify-center"
                                    >
                                        {/* Render the specific visual component for this feature */}
                                        {(() => {
                                            const FeatureVisual = featuresData[activeindex].VisualComponent;
                                            return <FeatureVisual isTeaser={true} onComplete={handleVisualComplete} />;
                                        })()}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Pagination Dots */}
                                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                                    {featuresData.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveIndex(idx)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeindex === idx ? 'w-8 bg-[#022c22]' : 'bg-[#022c22]/20'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </motion.div>
        </Section>
    );
};

export default SolutionTeaserSection;