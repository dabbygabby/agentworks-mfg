import React from 'react';
import Card from '../ui/Card';
import Section from '../ui/Section';

const ValuePropSection = () => {
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
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
            </div>
        </Section>
    );
};

export default ValuePropSection;
