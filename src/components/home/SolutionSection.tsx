import React from 'react';
import Card from '../ui/Card';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { ArrowRightIcon, Phone, Mic, Brain, Server } from 'lucide-react';

const SolutionSection = () => {
    return (
        <Section className="bg-[#022c22] text-white overflow-hidden">
            <div className="max-w-4xl mx-auto text-center mb-12 relative z-40">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    <span className="text-[#bef264]">No Data Entry.</span> Just Results.
                </h2>
                <p className="text-xl text-white/70 leading-relaxed mb-8">
                    Your team keeps using WhatsApp and Email. We read everything, understand it, and update your ERP automatically.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl">
                    <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-8 text-[#bef264] font-bold text-2xl">
                        <Phone className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">They Send It</h3>
                    <p className="text-white/60 leading-relaxed">
                        Drivers send photos of challans. Supervisors send voice notes about breakdowns (even in Hinglish). They just use WhatsApp.
                    </p>
                </Card>

                {/* Step 2 */}
                <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl">
                    <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-8 text-[#bef264] font-bold text-2xl">
                        <Brain className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">We Translate It</h3>
                    <p className="text-white/60 leading-relaxed">
                        Agentworks extracts the data, reads the handwriting, listens to the audio, and validates the details.
                    </p>
                </Card>

                {/* Step 3 */}
                <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl">
                    <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-8 text-[#bef264] font-bold text-2xl">
                        <Server className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">ERP Gets Updated</h3>
                    <p className="text-white/60 leading-relaxed">
                        We push clean data directly into your ERP. Inventory, Job Cards, and POs update in real‑time.
                    </p>
                </Card>
            </div>

            <div className="flex w-full items-center justify-center mt-8">
                <Button href="/how-it-works" variant="accent">
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </Section>
    );
};

export default SolutionSection;
