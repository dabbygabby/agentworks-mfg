import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Smartphone, Brain, Sparkles } from 'lucide-react';

// --- Mock Section Component ---
const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <section className={`py-16 px-4 md:px-8 ${className}`}>
        {children}
    </section>
);

// --- Data for the Cards ---
const features = [
    {
        id: 1,
        title: "Zero Friction Input",
        subtitle: "The Solution is in Their Pocket.",
        description: "Your staff doesn't need to learn a new app. If they can send a voice note to a friend, they are already trained to use Agentworks. We capture the work where it happens, not where you wish it happened.",
        icon: Smartphone,
        color: "#64A30E"
    },
    {
        id: 2,
        title: "The Intelligent Layer",
        subtitle: "Give Your Existing Tools a Brain.",
        description: "We don't replace your spreadsheets or your ERP. We layer intelligence on top of them. Our AI filters the noise, understands the context, and turns static rows and columns into live, active data.",
        icon: Brain,
        color: "#EAB308"
    },
    {
        id: 3,
        title: "Messy to Structured",
        subtitle: "We Speak \"Shop Floor.\"",
        description: "Generic software breaks when people use slang, accents, or handwriting. Agentworks thrives on it. We translate the messy reality of the floor into the structured data your office needs.",
        icon: Sparkles,
        color: "#F97316"
    }
];

// --- Image Placeholder Component ---
const ImagePlaceholder = ({ feature }: { feature: typeof features[0] }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#FEFCE8] relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #022c22 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                }}
            />

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="z-10 text-center p-8"
            >
                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon size={40} style={{ color: feature.color }} />
                </div>
                <h3 className="text-3xl font-bold text-[#022c22] mb-2">{feature.title}</h3>
                <p className="text-[#022c22]/60 font-medium">{feature.subtitle}</p>

                {/* Mock Graphic Representation */}
                <div className="mt-8 bg-white p-4 rounded-xl shadow-sm border border-[#022c22]/5 max-w-xs mx-auto">
                    <div className="h-2 w-1/2 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                </div>
            </motion.div>
        </div>
    );
};

const SolutionTeaserSection = () => {
    const [activeindex, setActiveIndex] = useState(0);
    const [isAutoRotating, setIsAutoRotating] = useState(true);

    // Auto-rotation logic
    useEffect(() => {
        if (!isAutoRotating) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 5000); // Rotate every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoRotating]);

    return (
        <Section className="">
            {/* Header Content */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6 leading-tight">
                    The Only Upgrade That Requires <span className="text-[#64A30E]">Zero Training</span>
                </h2>
                <p className="text-xl text-[#022c22]/70 max-w-2xl mx-auto">
                    Turn the tool your staff already loves into the most powerful, error-free data terminal in your factory.
                </p>
            </div>

            {/* Main Interactive Card */}
            <div className="max-w-7xl mx-auto bg-[#022c22] rounded-[2.5rem] p-4 md:p-6 overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">

                    {/* Left Column: Rotating Interactive List */}
                    {/* UPDATED: Added h-full, flex-col, and justify-between to manage vertical space */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full py-4 md:py-8 pl-4 md:pl-8 pr-4">

                        {/* Wrapper for the list content to center it vertically in the available space */}
                        <div className="flex-1 flex flex-col justify-center">
                            <div
                                className="space-y-6"
                                onMouseEnter={() => setIsAutoRotating(false)}
                                onMouseLeave={() => setIsAutoRotating(true)}
                            >
                                {features.map((feature, index) => {
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
                                                        transition={{ duration: 0.3 }}
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

                        {/* CTA Button: Fixed at bottom */}
                        <div className="mt-8 pt-8 border-t border-white/10 shrink-0">
                            <button className="group flex items-center gap-2 text-[#022c22] font-semibold bg-[#bef264] hover:bg-[#bef264ee] transition-colors px-6 py-2 rounded-full">
                                See How It Works
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Visual Display */}
                    <div className="lg:col-span-7 h-[500px] lg:h-[650px]">
                        <div className="w-full h-full bg-[#FEFCE8] rounded-3xl overflow-hidden shadow-inner relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeindex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="w-full h-full"
                                >
                                    <ImagePlaceholder feature={features[activeindex]} />
                                </motion.div>
                            </AnimatePresence>

                            {/* Pagination Dots (Mobile/Visual Indicator) */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                                {features.map((_, idx) => (
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
            </div>
        </Section>
    );
};

export default SolutionTeaserSection;