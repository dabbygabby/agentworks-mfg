import React from 'react';
import Section from '../ui/Section';
import Link from 'next/link';
import { Hourglass, ArrowRight, Eye, ChartBarDecreasing } from 'lucide-react';
import { motion } from 'framer-motion';

// Create a motion-enabled version of the Next.js Link component
const MotionLink = motion(Link);

const PainPointSection = () => {
    const painPoints = [
        {
            icon: Eye,
            headline: () => { return ("Visibility Leaks") },
            copy: "Your system reflects yesterday, but your floor operates in now. You are driving your business while looking in the rearview mirror.",
            cta: "See the Live Dashboard",
            href: "/how-it-works",
            color: "green"
        },
        {
            icon: ChartBarDecreasing,
            headline: () => { return ("Margin Leaks") },
            copy: "Quoting based on static spreadsheets means you are guessing. You only find out you lost money after the job has shipped.",
            cta: "See the Quoting Agent",
            href: "/how-it-works",
            color: "green"
        },
        {
            icon: Hourglass,
            headline: () => { return ("Time Leaks") },
            copy: "You are the highest-paid data entry clerk in the building. Every screenshot you manually forward is time stolen from growing your business.",
            cta: "Automate Data Entry",
            href: "/how-it-works",
            color: "green"
        }
    ];

    const colorClasses = {
        green: "bg-[#022c22]",
    };

    const iconColorClasses = {
        blue: "text-blue-600",
        orange: "text-orange-600",
        red: "text-red-600",
        green: "text-[#022c22]",
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between each item appearing
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30 // Start 30px lower
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.21, 0.47, 0.32, 0.98] // Custom "soothing" ease-out curve
            }
        }
    };

    return (
        <Section className="">
            <motion.div
                className="max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }} // Triggers when element is 100px into view
                variants={containerVariants}
            >
                {/* Animated Header */}
                <motion.div
                    //@ts-expect-error no error
                    variants={itemVariants}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                        Your System Says One Thing. <br />
                        Your <span className="text-[#65a30d]">Balance Sheet</span> Says Another.
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                        Whether you run on SAP, Tally, or Excel. <br className="hidden md:block" />
                        Manual updates mean you are managing history, not reality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {painPoints.map((point, index) => {
                        const Icon = point.icon;
                        return (
                            <MotionLink
                                key={index}
                                href={point.href}
                                //@ts-expect-error no error
                                variants={itemVariants} // Inherits the stagger from parent
                                //@ts-expect-error no error
                                className={`group p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${colorClasses[point.color]}`}
                            >
                                {/* @ts-expect-error no error */}
                                <div className={`w-14 h-14 rounded-2xl bg-[#BEF264] flex items-center justify-center mb-6 ${iconColorClasses[point.color]} shadow-sm group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {point.headline()}
                                </h3>
                                <p className="mb-6 leading-relaxed text-[#BEF264]">
                                    {point.copy}
                                </p>
                                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                                    {point.cta}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </MotionLink>
                        );
                    })}
                </div>
            </motion.div>
        </Section>
    );
};

export default PainPointSection;