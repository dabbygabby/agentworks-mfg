import React from 'react';
import { Database, Shield, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const OperatingSystemSection = () => {
    const features = [
        {
            icon: <Database className="w-8 h-8 text-[#BEF264]" />,
            title: "Tally & ERP Native",
            description: "We don't replace your Tally. We feed it. 100% Data Integrity Guaranteed."
        },
        {
            icon: <Shield className="w-8 h-8 text-[#BEF264]" />,
            title: "Bank-Grade Security",
            description: "Your data never leaves your control. Encrypted and Private."
        },
        {
            icon: <MessageCircle className="w-8 h-8 text-[#BEF264]" />,
            title: "No New Apps",
            description: "Works entirely on WhatsApp. If your staff can send a voice note, they are already trained."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section className="py-16 md:py-24 bg-[#022c22]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="max-w-6xl mx-auto"
                >
                    <motion.h2
                        // @ts-ignore
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold text-center text-[#FEFCE8] mb-16"
                    >
                        The Operating System for Indian Manufacturing
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                // @ts-ignore
                                variants={itemVariants}
                                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                            >
                                <div className="mb-6 p-4 rounded-full bg-[#BEF264]/10 border border-[#BEF264]/20">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-[#FEFCE8] mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-white/70 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-8 pt-8 w-full items-center justify-center flex">
                        <Link
                            href="/how-it-works"
                            className="group flex w-56 items-center gap-2 text-[#022c22] font-semibold bg-[#bef264] hover:bg-[#bef264ee] transition-colors px-6 py-2 rounded-full">
                            See How It Works
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OperatingSystemSection;
