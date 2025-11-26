import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="relative py-24 bg-[#022c22] overflow-hidden">

            {/* --- Background Elements --- */}
            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            {/* Glowing Orbs for visual depth */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#bef264] rounded-full blur-[150px] opacity-10 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-[150px] opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Headline */}
                <motion.h2
                    className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    We Only Win <br />
                    <span className="text-[#bef264]">When You Win.</span>
                </motion.h2>

                {/* Subheadline - Sourced from Deck Page 10 [cite: 221-223] */}
                <motion.p
                    className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="font-semibold text-white">No Upfront Cost.</span> We charge based on the profit improvements we deliver. If our agents don't perform, you don't pay.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {/* Primary Action */}
                    <button
                        onClick={() => window.open('https://cal.com/rabnoor-singh/30min', '_blank')}
                        className="group relative px-8 py-4 bg-[#bef264] text-[#022c22] font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 shadow-xl shadow-[#bef264]/20"
                    >
                        <span className="relative z-10 flex items-center">
                            Start Your Zero-Risk Pilot
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    {/* Secondary Action */}
                    <button
                        onClick={() => window.location.href = '/roi-calculator'}
                        className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/10 transition-colors flex items-center"
                    >
                        <Calculator className="mr-2 w-5 h-5" />
                        Calculate Your Savings
                    </button>
                </motion.div>

                {/* Trust Signal */}
                <motion.p
                    className="mt-8 text-sm text-white/40 uppercase tracking-widest font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Trusted by 50+ Manufacturers in India
                </motion.p>

            </div>
        </section>
    );
};

export default FinalCTA;