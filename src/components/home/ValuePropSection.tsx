import React, { useState } from 'react';
import Card from '../ui/Card';
import Section from '../ui/Section';
import Button from '../ui/Button';
import VideoModal from './VideoModal';

const ValuePropSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Section className="bg-white border-t border-zinc-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-8">
                    Infinite Capacity. <span className="text-[#bef264]">Zero Risk.</span>
                </h2>
                <p className="text-xl text-[#022c22]/70 leading-relaxed mb-16">
                    We don't sell software licenses. We partner on outcomes. <br className="hidden md:block" />
                    Our agents deploy with no upfront cost, and we only share in the measurable profit we create.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
                    <Card variant="light" className="bg-[#f7fee7]/50 border-[#bef264]/20">
                        <div className="text-4xl font-bold text-[#022c22] mb-2">0</div>
                        <div className="text-sm font-bold text-[#022c22]/50 uppercase tracking-wider">Upfront Cost</div>
                    </Card>
                    <Card variant="light" className="bg-[#f7fee7]/50 border-[#bef264]/20">
                        <div className="text-4xl font-bold text-[#022c22] mb-2">100%</div>
                        <div className="text-sm font-bold text-[#022c22]/50 uppercase tracking-wider">Outcome Aligned</div>
                    </Card>
                    <Card variant="light" className="bg-[#f7fee7]/50 border-[#bef264]/20">
                        <div className="text-4xl font-bold text-[#022c22] mb-2">24/7</div>
                        <div className="text-sm font-bold text-[#022c22]/50 uppercase tracking-wider">Autonomous Operation</div>
                    </Card>
                </div>

                <div className="flex justify-center">
                    <Button onClick={() => setIsModalOpen(true)} variant="primary" className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                        Watch Video
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </Button>
                </div>

                <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </Section>
    );
};

export default ValuePropSection;
