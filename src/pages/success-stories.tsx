import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Rocket } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SuccessStoriesPage = () => {
    return (
        <>
            <Head>
                <title>Success Stories | Agentworks</title>
                <meta name="description" content="Read how Agentworks is transforming manufacturing operations." />
            </Head>

            <div className="flex flex-col min-h-screen bg-[#022c22]">
                <Navbar />

                <main className="flex-grow flex items-center justify-center relative overflow-hidden px-4">
                    {/* Background Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#bef264]/10 rounded-full blur-3xl -translate-y-1/2" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#bef264]/5 rounded-full blur-3xl translate-y-1/2" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center relative z-10 py-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 inline-flex items-center justify-center p-4 bg-[#bef264]/10 rounded-full text-[#bef264]"
                        >
                            <Rocket className="w-8 h-8 md:w-12 md:h-12" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
                        >
                            Success Stories <br />
                            <span className="text-[#bef264]">Coming Soon</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
                        >
                            We are compiling detailed case studies of how Indian manufacturers are using Agentworks to automate operations and drive growth. Stay tuned for real-world examples of transformation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#bef264] text-[#022c22] rounded-full font-bold text-lg hover:bg-[#bef264]/90 transition-all hover:scale-105 shadow-lg shadow-[#bef264]/20"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back to Home
                            </Link>
                        </motion.div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default SuccessStoriesPage;
