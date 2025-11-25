import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { TrendingUp, Clock, FileCheck } from 'lucide-react';
import Link from 'next/link';

// --- DATA ---
const caseStudies = [
    {
        id: 1,
        category: "Heavy Fabrication",
        stat: 95,
        suffix: "%",
        label: "Reduction in Finance Admin",
        desc: "Month-end reconciliation reduced from 7 days to near-zero. Freed 2 staff members for revenue-generating work.",
        icon: FileCheck,
        // Updated for Dark Card: Lighter text, low opacity background
        color: "text-blue-300 bg-blue-500/10",
    },
    {
        id: 2,
        category: "Electronics (EMS)",
        stat: 22,
        suffix: "%",
        label: "Revenue Uplift",
        desc: "AI identified upsell opportunities hidden in chat history, increasing qualified leads by 45% without adding sales staff.",
        icon: TrendingUp,
        // Updated for Dark Card
        color: "text-green-300 bg-green-500/10",
    },
    {
        id: 3,
        category: "Process Manufacturing",
        stat: 3,
        suffix: "% pt",
        label: "Net Margin Increase",
        desc: "Quoting cycle reduced from 7 days to 2 hours. Locked in raw material prices faster to prevent margin leakage.",
        icon: Clock,
        // Updated for Dark Card
        color: "text-purple-300 bg-purple-500/10",
    }
];

// --- COUNT UP COMPONENT ---
const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString();
            }
        });
    }, [springValue]);

    return (
        <span className="flex items-baseline">
            <span ref={ref} className="font-bold">0</span>
            <span>{suffix}</span>
        </span>
    );
};

const ImpactSection = () => {
    return (
        <section className="py-24 text-gray-900 overflow-hidden relative">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                        Proven in the Chaos of <br /> <span className="text-[#64B564]">Indian Manufacturing</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We don't just sell software. We deliver P&L outcomes. See how manufacturers are moving from Chaos to automated growth.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caseStudies.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            // CHANGED: Dark Green Background, White Text
                            className="bg-[#022c22] text-white rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl"
                        >
                            {/* Top Label */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2 rounded-lg ${item.color}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-bold tracking-wide uppercase text-white/50">
                                    {item.category}
                                </span>
                            </div>

                            {/* Big Number */}
                            <div className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                                <Counter value={item.stat} suffix={item.suffix} />
                            </div>

                            {/* Label */}
                            <h3 className="text-xl font-bold mb-4 text-white">
                                {item.label}
                            </h3>

                            {/* Description */}
                            <p className="text-white/70 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="inline-flex flex-col items-center">
                        <p className="text-gray-500 mb-4 text-sm uppercase tracking-widest font-semibold">
                            Join 50+ Manufacturers
                        </p>
                        <Link
                            href="/success-stories"
                            className="bg-[#bef264] text-[#022c22] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#bef264]/80 hover:scale-105 transition-all shadow-lg"
                        >
                            See Detailed Case Studies
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ImpactSection;