import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { ArrowRightIcon, Calculator, Package, ClipboardCheck, FileText } from 'lucide-react';

// --- DATA & CONFIGURATION ---

const SECTION_CONTENT = {
    header: {
        title: "Don't Buy Software.",
        highlight: "Hire Specialists.",
        description: "Deploy autonomous agents that work 24/7, never take sick leave, and never make math errors."
    },
    agents: [
        {
            id: 'estimator',
            icon: 'Calculator', // Represents Sales/Math
            title: "The Estimator (Sales)",
            description: "Reads PDF/CAD drawings. Checks live steel prices. Calculates Scrap.",
            resultLabel: "Result",
            resultText: "Quotes in minutes. Never lose a deal to speed."
        },
        {
            id: 'auditor',
            icon: 'ClipboardCheck', // Represents Quality/Checks
            title: "The Auditor (Quality)",
            description: "Reads batch labels and CoAs. Verifies expiry against POs instantly.",
            resultLabel: "Result",
            resultText: "100% Audit Readiness. No more rejected batches."
        },
        {
            id: 'munim',
            icon: 'FileText', // Represents Finance/Invoices
            title: "The Munim (Finance)",
            description: "Reads invoices from WhatsApp/Email. Enters vouchers into Tally.",
            resultLabel: "Result",
            resultText: "Zero Backlog. Zero Data Entry Errors."
        },
        {
            id: 'watchdog',
            icon: 'Package', // Represents Inventory/Stock
            title: "The Watchdog (Inventory)",
            description: "Tracks stock via voice notes. Predicts shortages before the line stops.",
            resultLabel: "Result",
            resultText: "No production stoppages due to missing parts."
        }
    ],
    cta: {
        text: "Meet Your New Workforce",
        href: "/agents"
    }
};

// Map string keys from JSON to actual React Components
const ICON_MAP = {
    Calculator: Calculator,
    Package: Package,
    ClipboardCheck: ClipboardCheck,
    FileText: FileText
};

// --- ANIMATION VARIANTS ---

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// --- SUB-COMPONENT: AGENT CARD ---

const AgentCard = ({ icon, title, description, resultLabel, resultText }: { icon: string, title: string, description: string, resultLabel: string, resultText: string }) => {
    //@ts-expect-error no error
    const IconComponent = ICON_MAP[icon] || Package; // Fallback icon

    return (
        <Card variant="dark" className="bg-[#022c22]/90 border-white/10 hover:border-[#bef264]/50 transition-colors relative group backdrop-blur-xl shadow-2xl flex flex-col h-full">
            <div className="w-14 h-14 bg-[#bef264]/10 rounded-2xl flex items-center justify-center mb-6 text-[#bef264] font-bold text-2xl group-hover:bg-[#bef264]/20 transition-colors">
                <IconComponent className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-white/60 leading-relaxed mb-4 flex-grow">
                {description}
            </p>
            <div className="pt-4 border-t border-white/10">
                <p className="text-sm font-semibold text-[#bef264]">{resultLabel}</p>
                <p className="text-sm text-white/80">{resultText}</p>
            </div>
        </Card>
    );
};

// --- MAIN COMPONENT ---

const AgentsSection = () => {
    const { header, agents, cta } = SECTION_CONTENT;

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
                    {header.title}<br /> <span className="text-[#bef264]">{header.highlight}</span>
                </motion.h2>
                {/* @ts-ignore */}
                <motion.p className="text-xl text-white/70 leading-relaxed mb-8" variants={itemVariants}>
                    {header.description}
                </motion.p>
            </motion.div>

            {/* --- GRID SECTION --- */}
            <motion.div
                className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                {agents.map((agent) => (
                    /* @ts-ignore */
                    <motion.div key={agent.id} variants={itemVariants}>
                        <AgentCard {...agent} />
                    </motion.div>
                ))}
            </motion.div>

            {/* --- BUTTON SECTION --- */}
            <motion.div
                className="flex w-full items-center justify-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <Button href={cta.href} variant="accent">
                    {cta.text}
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
            </motion.div>

        </Section>
    );
};

export default AgentsSection;