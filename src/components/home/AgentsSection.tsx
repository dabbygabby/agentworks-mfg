import React from 'react';
import Card from '../ui/Card';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { ArrowRightIcon, Calculator, Package, ClipboardCheck, Activity } from 'lucide-react';

const AgentsSection = () => {
    return (
        <Section className="bg-[#022c22] text-white overflow-hidden">
            <div className="max-w-4xl mx-auto text-center mb-12 relative z-40">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    {"It’s Not Just Software..."} <span className="text-[#bef264]">{"It’s Your Autonomous Workforce."}</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed mb-8">
                    Stop managing processes. Start managing outcomes. From calculating quotes to predicting shortages, our agents do the work for you.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Agent 1 */}
                <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl flex flex-col">
                    <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-6 text-[#bef264] font-bold text-2xl">
                        <Calculator className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">The Precision Estimator</h3>
                    <p className="text-white/60 leading-relaxed mb-4 flex-grow">
                        Reads technical drawings (PDF/CAD) and instantly calculates raw material costs, machine time, and margins.
                    </p>
                    <div className="pt-4 border-t border-white/10">
                        <p className="text-sm font-semibold text-[#bef264]">Impact</p>
                        <p className="text-sm text-white/80">Quote in minutes, not days. Never lose a deal to speed.</p>
                    </div>
                </Card>

                {/* Agent 2 */}
                <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl flex flex-col">
                    <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-6 text-[#bef264] font-bold text-2xl">
                        <Package className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">The Shortage Preventer</h3>
                    <p className="text-white/60 leading-relaxed mb-4 flex-grow">
                        Tracks stock via voice notes, predicts shortages based on BOMs, and alerts purchasing before the line stops.
                    </p>
                    <div className="pt-4 border-t border-white/10">
                        <p className="text-sm font-semibold text-[#bef264]">Impact</p>
                        <p className="text-sm text-white/80">Zero production stoppages due to missing parts.</p>
                    </div>
                </Card>

                {/* Agent 3 */}
                <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl flex flex-col">
                    <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-6 text-[#bef264] font-bold text-2xl">
                        <ClipboardCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">The 24/7 Auditor</h3>
                    <p className="text-white/60 leading-relaxed mb-4 flex-grow">
                        Scans batch labels and CoAs, verifying expiry and specs instantly against the PO to create a digital audit trail.
                    </p>
                    <div className="pt-4 border-t border-white/10">
                        <p className="text-sm font-semibold text-[#bef264]">Impact</p>
                        <p className="text-sm text-white/80">100% Audit Readiness without the paperwork.</p>
                    </div>
                </Card>

                {/* Agent 4 */}
                <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl flex flex-col">
                    <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-6 text-[#bef264] font-bold text-2xl">
                        <Activity className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">The Control Tower</h3>
                    <p className="text-white/60 leading-relaxed mb-4 flex-grow">
                        Updates the master schedule based on floor voice notes and flags delays to the Plant Head immediately.
                    </p>
                    <div className="pt-4 border-t border-white/10">
                        <p className="text-sm font-semibold text-[#bef264]">Impact</p>
                        <p className="text-sm text-white/80">Real-time visibility. Know exactly where the order is.</p>
                    </div>
                </Card>
            </div>

            <div className="flex w-full items-center justify-center mt-8">
                <Button href="/agents" variant="accent">
                    Explore All Agents
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </Section>
    );
};

export default AgentsSection;
