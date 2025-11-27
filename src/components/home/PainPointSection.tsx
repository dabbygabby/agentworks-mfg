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
            icon: ChartBarDecreasing,
            headline: () => { return ("Margin Lag") },
            quote: "You quoted based on last week’s prices.",
            reality: "The price of steel/raw material fluctuated on Tuesday.",
            lag: "Your sales team is still using the old Excel sheet to quote on Thursday because the new purchase bills haven't been entered into the system yet.",
            cost: "You win the order, but you’ve already lost your margin before the machine even starts.",
            cta: "Stop Quoting Blind",
            href: "/agents?agent=The%20Precision%20Estimator",
            color: "green"
        },
        {
            icon: Eye,
            headline: () => { return ("Cash Lag") },
            quote: "Your tax credit is stuck in a WhatsApp chat.",
            reality: "A vendor sent a material bill on WhatsApp on Monday.",
            lag: "It sits in your Accountant's \"Pending\" pile until Friday.",
            cost: "Your Tally shows a high tax liability. You pay cash for GST, not realizing you had Input Tax Credit (ITC) sitting in your phone that you could have used.",
            cta: "Stop Missing Tax Credits",
            href: "/connectors#tally",
            color: "green"
        },
        {
            icon: Hourglass,
            headline: () => { return ("Status Lag") },
            quote: "You are the last to know the line stopped.",
            reality: "A machine broke down or a batch was rejected on Wednesday morning.",
            lag: "You only find out on Friday when the customer calls asking why the delivery hasn't arrived.",
            cost: "You are managing by \"Post-Mortem\"—explaining delays after they happen, instead of fixing them when they happen.",
            cta: "Stop Chasing Updates",
            href: "/how-it-works",
            color: "green"
        }
    ];

    const colorClasses: Record<string, string> = {
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
                        {"You Can't Fix Monday's Problems"}  <br />
                        {"with Friday's Reports"}
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                        Your factory operates in real-time. But your data waits for a typist. <br className="hidden md:block" />
                        This "Data Lag" is where your margins disappear.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {painPoints.map((point, index) => {
                        const Icon = point.icon;
                        return (
                            <motion.div
                                key={index}
                                //@ts-expect-error no error
                                variants={itemVariants}
                                className="h-full"
                            >
                                <Link
                                    href={point.href}
                                    className={`group p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${colorClasses[point.color]} flex flex-col h-full`}
                                >
                                    {/* Header */}
                                    <div className="flex items-center gap-4 mb-6">
                                        {/* @ts-ignore */}
                                        <div className={`w-12 h-12 rounded-xl bg-[#BEF264] flex items-center justify-center ${iconColorClasses[point.color]} shadow-sm group-hover:scale-110 transition-transform shrink-0`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white leading-tight">
                                            {point.headline()}
                                        </h3>
                                    </div>

                                    {/* Content Stack */}
                                    <div className="space-y-6 flex-grow">
                                        {/* Quote */}
                                        <div className="relative pl-4 border-l-2 border-[#BEF264]/30">
                                            <p className="text-lg text-white/90 italic font-medium">
                                                "{point.quote}"
                                            </p>
                                        </div>

                                        {/* The Reality */}
                                        <div>
                                            <h4 className="text-[#BEF264] text-sm font-bold uppercase tracking-wider mb-2">The Reality</h4>
                                            <p className="text-white/80 text-sm leading-relaxed">
                                                {point.reality}
                                            </p>
                                        </div>

                                        {/* The Lag */}
                                        <div>
                                            <h4 className="text-[#BEF264] text-sm font-bold uppercase tracking-wider mb-2">The Lag</h4>
                                            <p className="text-white/80 text-sm leading-relaxed">
                                                {point.lag}
                                            </p>
                                        </div>

                                        {/* The Cost */}
                                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                            <h4 className="text-red-400 text-sm font-bold uppercase tracking-wider mb-2">The Cost</h4>
                                            <p className="text-white/90 text-sm leading-relaxed font-medium">
                                                {point.cost}
                                            </p>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center text-[#BEF264] font-bold group-hover:gap-3 gap-2 transition-all">
                                        {point.cta}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </Section>
    );
};

export default PainPointSection;