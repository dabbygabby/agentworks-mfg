import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import TechnologyHeroVisual from './TechnologyHeroVisual';

const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden bg-[#f7fee7]">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-[#022c22] mb-6 tracking-tight">
                            AI That Speaks <br />
                            <span className="text-[#65a30d]">"Manufacturing."</span>
                        </h1>

                        <h2 className="text-2xl font-semibold text-[#022c22]/80 mb-6">
                            Generic AI models hallucinate. Ours calculate.
                        </h2>

                        <p className="text-lg text-[#022c22]/70 leading-relaxed mb-8">
                            We built a Multi-Modal AI engine trained specifically on the noisy, messy, unstructured data of the factory floor. It doesn't just "read" your data; it understands the physics, costs, and context behind it.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery"
                                variant="primary"
                                className="!px-8 !py-3"
                            >
                                Book a Tech Demo
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                href="/success-stories"
                                variant="outline"
                                className="!px-8 !py-3 bg-white hover:bg-gray-50"
                            >
                                Explore Use Cases
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <TechnologyHeroVisual />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
