import React from 'react';
import Card from '../ui/Card';
import Section from '../ui/Section';

const ProblemSection = () => {
    return (
        <Section className="bg-white">
            <div className="max-w-5xl mx-auto text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                    Your ERP is Blind to your Shop Floor
                </h2>
                <p className="text-xl text-[#022c22]/70 leading-relaxed">
                    Traditional ERPs fail because they demand behavior change from workers who are busy building products.
                    This creates a "Data Void"—where your most critical operational data is trapped in phone calls, paper scraps, and mental notes.
                </p>
            </div>

            {/* The Shift Comparison */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Old Way */}
                <Card variant="light" className="border-red-100 bg-red-50/30">
                    <h3 className="text-xl font-bold text-red-900/50 mb-8 uppercase tracking-wider">The Old Way</h3>
                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#022c22]">Stranded Data</h4>
                                <p className="text-[#022c22]/60 mt-1">Information locked in silos and personal chats.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#022c22]">Reactive Decisions</h4>
                                <p className="text-[#022c22]/60 mt-1">Acting on outdated reports from last week.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#022c22]">High Overhead</h4>
                                <p className="text-[#022c22]/60 mt-1">Expensive licenses and endless training hours.</p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Agentworks Way */}
                <Card variant="dark" className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#bef264]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <h3 className="text-xl font-bold text-[#bef264] mb-8 uppercase tracking-wider relative z-10">The Agentworks Way</h3>
                    <div className="space-y-8 relative z-10">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-[#bef264]/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-[#bef264]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Real-time Data</h4>
                                <p className="text-white/60 mt-1">Instant visibility from the shop floor.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-[#bef264]/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-[#bef264]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Predictive Actions</h4>
                                <p className="text-white/60 mt-1">AI agents that flag issues before they break.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-[#bef264]/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-[#bef264]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Zero Latency</h4>
                                <p className="text-white/60 mt-1">Immediate execution without login screens.</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </Section>
    );
};

export default ProblemSection;
