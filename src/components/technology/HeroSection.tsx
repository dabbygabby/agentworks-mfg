import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden bg-[#f7fee7]">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold text-[#022c22] mb-6 tracking-tight"
                    >
                        AI That Speaks <br />
                        <span className="text-[#65a30d]">"Manufacturing."</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#022c22]/80">
                            Generic AI models hallucinate. Ours calculate.
                        </h2>

                        <p className="text-xl text-[#022c22]/70 leading-relaxed max-w-2xl">
                            We built a Multi-Modal AI engine trained specifically on the noisy, messy, unstructured data of the factory floor.
                        </p>

                        <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#022c22]/5 inline-block">
                            <p className="text-lg font-medium text-[#022c22]">
                                <span className="font-bold text-[#65a30d]">The Promise:</span> It doesn't just "read" your data. It understands the physics, costs, and context behind it.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
