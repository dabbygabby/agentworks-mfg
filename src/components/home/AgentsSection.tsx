import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { ArrowRightIcon, Calculator, Package, ClipboardCheck, Activity } from 'lucide-react';

// --- ANIMATION VARIANTS ---

// Container controls the timing of children (Stagger effect)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between each child appearing
            delayChildren: 0.1,    // Initial delay
        }
    }
};

// Item controls the actual movement (Fade Up)
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const AgentsSection = () => {
    return (
        <Section className="bg-[#022c22] text-white overflow-hidden">

            {/* --- HEADER SECTION --- */}
            <motion.div
                className="max-w-4xl mx-auto text-center mb-12 relative z-40"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* @ts-ignore */}
                <motion.h2 className="text-3xl md:text-5xl font-bold mb-6" variants={itemVariants}>
                    {"It’s Not Just Software"}<br /> <span className="text-[#bef264]">{"It’s Your AI Workforce"}</span>
                </motion.h2>
                {/* @ts-ignore */}
                <motion.p className="text-xl text-white/70 leading-relaxed mb-8" variants={itemVariants}>
                    Stop managing processes. Start managing outcomes. From calculating quotes to predicting shortages, our agents do the work for you.
                </motion.p>
            </motion.div>

            {/* --- GRID SECTION --- */}
            <motion.div
                className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }} // Triggers slightly earlier than header
                variants={containerVariants}
            >
                {/* Agent 1 */}
                {/* @ts-ignore */}
                <motion.div variants={itemVariants}>
                    <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl flex flex-col h-full">
                        <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-6 text-[#bef264] font-bold text-2xl group-hover:bg-[#bef264]/20 transition-colors">
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
                </motion.div>

                {/* Agent 2 */}
                {/* @ts-ignore */}
                <motion.div variants={itemVariants}>
                    <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl flex flex-col h-full">
                        <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-6 text-[#bef264] font-bold text-2xl group-hover:bg-[#bef264]/20 transition-colors">
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
                </motion.div>

                {/* Agent 3 */}
                {/* @ts-ignore */}
                <motion.div variants={itemVariants}>
                    <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl flex flex-col h-full">
                        <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-6 text-[#bef264] font-bold text-2xl group-hover:bg-[#bef264]/20 transition-colors">
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
                </motion.div>

                {/* Agent 4 */}
                {/* @ts-ignore */}
                <motion.div variants={itemVariants}>
                    <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl flex flex-col h-full">
                        <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-6 text-[#bef264] font-bold text-2xl group-hover:bg-[#bef264]/20 transition-colors">
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
                </motion.div>
            </motion.div>

            {/* --- BUTTON SECTION --- */}
            <motion.div
                className="flex w-full items-center justify-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }} // Appears after cards are done
            >
                <Button href="/agents" variant="accent">
                    Explore All Agents
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
            </motion.div>

        </Section>
    );
};

export default AgentsSection;