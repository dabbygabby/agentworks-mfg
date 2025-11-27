import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, Phone } from 'lucide-react';

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

                {/* Subheadline */}
                <motion.div
                    className="max-w-3xl mx-auto mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-xl text-white/70 leading-relaxed mb-8">
                        Most software companies charge you whether you use it or not. We are different.
                    </p>

                    {/* Features List */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
                        {[
                            "No Setup Fees",
                            "No \"Per User\" Licenses",
                            "Pay based on Profit Improvement"
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center text-white font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                <div className="w-2 h-2 bg-[#bef264] rounded-full mr-2" />
                                {feature}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {/* Path 1: Next-Gen/Tech Savvy */}
                    <div className="flex flex-col items-center gap-2">
                        <button
                            onClick={() => window.location.href = '/roi-calculator'}
                            className="group relative px-8 py-4 bg-[#bef264] text-[#022c22] font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 shadow-xl shadow-[#bef264]/20 w-full md:w-auto"
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                <Calculator className="mr-2 w-5 h-5" />
                                Calculate Your Savings
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>

                    {/* Divider for mobile */}
                    <div className="md:hidden w-full h-px bg-white/10 my-2"></div>

                    {/* Path 2: Owner/Busy Industrialist */}
                    <div className="flex flex-col items-center gap-2">
                        <button
                            onClick={() => window.open('https://wa.me/919663097918?text=Namaste%2C%20I%20am%20interested%20in%20your%20product%20and%20would%20like%20to%20request%20a%20callback%20to%20know%20more.', '_blank')}
                            className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/10 transition-colors flex items-center justify-center w-full md:w-auto"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            Request a Callback
                        </button>
                    </div>
                </motion.div>

                {/* Trust Signal */}
                <motion.p
                    className="mt-12 text-sm text-white/40 uppercase tracking-widest font-medium"
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