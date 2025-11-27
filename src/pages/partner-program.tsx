import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import { whatsappLinkGenerator } from '../globals';

export default function PartnerProgram() {
    return (
        <div className="bg-[#022C23] min-h-screen text-white font-sans selection:bg-[#BEF264] selection:text-[#022C23] flex flex-col">
            <Head>
                <title>Partner Program | Agentworks</title>
                <meta name="description" content="Join the Agentworks Partner Program. Coming Soon." />
            </Head>

            {/* Ambient Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#BEF264]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#BEF264]/5 rounded-full blur-[150px]" />
            </div>

            <main className="flex-grow flex items-center justify-center relative z-10 px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center p-4 bg-[#BEF264]/10 rounded-full mb-8"
                    >
                        <Users className="w-12 h-12 text-[#BEF264]" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Partner Program <br />
                        <span className="text-[#BEF264]">Coming Soon.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
                    >
                        We are building a network of industry experts, system integrators, and technology partners to bring the autonomous workforce to every factory floor.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <a
                            href={whatsappLinkGenerator("Hi, I'm interested in the Agentworks Partner Program.")}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#BEF264] text-[#022C23] text-lg font-bold rounded-xl hover:bg-[#d9f99d] transition-all shadow-[0_0_20px_rgba(190,242,100,0.3)] hover:shadow-[0_0_30px_rgba(190,242,100,0.5)] gap-2 group"
                        >
                            Get Early Access
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
