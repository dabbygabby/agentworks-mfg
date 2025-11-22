import React from 'react';
import Card from '../ui/Card';
import Section from '../ui/Section';

const SolutionSection = () => {
    return (
        <Section className="bg-[#022c22] text-white overflow-hidden">
            <div className="max-w-4xl mx-auto text-center mb-12 relative z-40">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    High-Performance Infrastructure <br />
                    <span className="text-[#bef264]">Zero-Friction Interface</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed">
                    We connect to the tools your team already uses, extract structured data from chaos, and write directly to your ERP.
                </p>
            </div>

            {/* Dashboard Screenshot */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 mb-0">
                <div className="rounded-[3rem] bg-white/5 p-3 border border-white/10 backdrop-blur-sm">
                    <img
                        src="/dashboard1.png"
                        alt="Platform Dashboard"
                        className="w-full h-auto rounded-[2.5rem] shadow-2xl opacity-90"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-30 -mt-20 px-4">
                {/* Step 1: The Bridge */}
                <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#bef264] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-8 text-[#bef264] font-bold text-2xl">1</div>
                    <h3 className="text-2xl font-bold mb-4">The Bridge</h3>
                    <p className="text-white/60 leading-relaxed">
                        We connect to the tools your team already uses (WhatsApp, Email, Voice Notes). No new apps to install.
                    </p>
                </Card>

                {/* Step 2: The Brain */}
                <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#bef264] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-8 text-[#bef264] font-bold text-2xl">2</div>
                    <h3 className="text-2xl font-bold mb-4">The Brain</h3>
                    <p className="text-white/60 leading-relaxed">
                        Multi-Modal AI extracts structured data from chaos—reading technical drawings, listening to machine noise, and parsing invoices.
                    </p>
                </Card>

                {/* Step 3: The System of Record */}
                <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#bef264] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-8 text-[#bef264] font-bold text-2xl">3</div>
                    <h3 className="text-2xl font-bold mb-4">The System of Record</h3>
                    <p className="text-white/60 leading-relaxed">
                        The agents write directly to your ERP (Tally, SAP, Custom SQL), creating a single, clean source of truth.
                    </p>
                </Card>
            </div>
        </Section>
    );
};

export default SolutionSection;
