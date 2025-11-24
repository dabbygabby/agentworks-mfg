import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck } from 'lucide-react';

const SecuritySection = () => {
    return (
        <section className="py-20 px-4 md:px-8 bg-[#022c22] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Security & Privacy <br />
                            <span className="text-[#bef264]">Enterprise-Grade Standards.</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Your data is your IP. We protect it with banking-grade standards and ensure it never leaves your control.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="p-3 bg-white/10 rounded-xl shrink-0 h-fit">
                                    <Lock className="w-6 h-6 text-[#bef264]" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Encryption</h4>
                                    <p className="text-gray-400">All data in transit and at rest is encrypted using AES-256 standards.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 bg-white/10 rounded-xl shrink-0 h-fit">
                                    <Shield className="w-6 h-6 text-[#bef264]" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Isolation</h4>
                                    <p className="text-gray-400">Your data is siloed. We never train our public models on your proprietary pricing or customer lists.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 bg-white/10 rounded-xl shrink-0 h-fit">
                                    <FileCheck className="w-6 h-6 text-[#bef264]" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Compliance</h4>
                                    <p className="text-gray-400">Designed for GDPR and DPDP (India) compliance from day one.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex justify-center"
                    >
                        <div className="absolute inset-0 bg-[#bef264]/20 blur-[100px] rounded-full" />
                        <Shield className="w-64 h-64 text-[#bef264] relative z-10 opacity-90" strokeWidth={1} />
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <Lock className="w-24 h-24 text-[#022c22]" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
