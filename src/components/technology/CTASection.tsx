import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-[#f7fee7]">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-[#022c22] mb-6">
                        See the Brain in Action
                    </h2>
                    <p className="text-xl md:text-2xl text-[#022c22]/70 mb-10 max-w-2xl mx-auto">
                        Send us your messiest handwritten invoice or a complex drawing. We'll show you how the AI reads it.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery"
                            variant="primary"
                            className="!text-lg !px-8 !py-4 w-full sm:w-auto"
                        >
                            Book a Tech Demo
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
