import React, { useRef } from "react"
import { ArrowRight, ArrowRightIcon, Grid2X2 } from "lucide-react"
import Link from "next/link";
import { StepSection } from "@src/components/howItWorks/StepSection"
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Visual Imports
import InputsVisual from "@src/components/howItWorks/InputsVisual"
import InterfaceVisual from "@src/components/howItWorks/InterfaceVisual"
import BrainVisual from "@src/components/howItWorks/BrainVisual"
import FoundationVisual from "@src/components/howItWorks/FoundationVisual"
import WorkforceVisual from "@src/components/howItWorks/WorkforceVisual"
import AnimatedScreenHero from "@src/components/howItWorks/AnimatedScreenHero"
import FinalCTA from "@src/components/home/FinalCTA";

// --- ANIMATION VARIANTS ---

const heroTextVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const screenVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1, ease: "easeOut", delay: 0.2 }
    }
};

// Wrapper to animate content specifically for StepSection props
const AnimatedContent = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

const AnimatedVisual = ({ children, align }: { children: React.ReactNode, align: 'left' | 'right' }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: align === 'left' ? -2 : 2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
        className="w-full h-full"
    >
        {children}
    </motion.div>
);

export default function HowItWorks() {
    // Scroll progress for the connecting line
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen" ref={containerRef}>

            {/* --- HERO SECTION --- */}
            <section className="bg-[#022c22] py-24 !pb-0 overflow-hidden relative">

                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#bef264]/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-[#FEFCE8] pt-24 mb-8 leading-tight"
                        initial="hidden"
                        animate="visible"
                        //@ts-ignore
                        variants={heroTextVariants}
                    >
                        High-Tech Automation <br />
                        <motion.span
                            className="text-[#bef264]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Low-Tech Adoption
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="text-xl text-[#FEFCE8]/70 mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Get the power of a million-dollar digital transformation with the simplicity of sending a text message. Complexity is our problem, not yours.
                    </motion.p>
                </div>
                <motion.div
                    className="flex w-full flex-col sm:flex-row items-center justify-center lg:justify-center gap-4 mt-0 md:mt-12"
                >
                    <Link
                        href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" target="_blank"
                        className='flex flex-row justify-center items-center gap-2 bg-[#BEF264] font-semibold text-[#022c22] px-8 py-5 rounded-full hover:bg-[#BEF264dd] transition-all hover:scale-105 active:scale-95'
                    >
                        Book A Demo
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>

                    <Link
                        href="/connectors"
                        className="rounded-full flex items-center border-2 justify-center flex-row !px-10 !py-4 !text-lg border-white/20 text-white hover:bg-white/10"
                    >
                        <Grid2X2 className="w-4 h-4 mr-2" />
                        Check Your Tech Stack
                    </Link>
                </motion.div>

                {/* Animated Screen Hero */}
                <motion.div
                    className="relative z-10 w-full max-w-[1400px] mx-auto px-4 mt-12"
                    //@ts-ignore
                    variants={screenVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="rounded-t-[3rem] bg-white/10 p-3 pt-3 pb-0 border-t border-l border-r border-white/10 backdrop-blur-md h-[500px] md:h-[600px] lg:h-[750px] overflow-hidden shadow-2xl">
                        <div className="rounded-t-[2.5rem] bg-slate-900 h-full w-full overflow-clip relative">
                            {/* Inner Shadow Overlay for depth */}
                            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none z-20" />
                            <AnimatedScreenHero />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- STEPS SECTION --- */}
            <div className="relative max-w-7xl mt-12 mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-32">

                {/* THE CONNECTING LINE (Visible on Desktop) */}
                <div className="absolute left-[50%] top-40 bottom-40 w-0.5 bg-slate-100 -translate-x-1/2 hidden lg:block">
                    <motion.div
                        style={{ scaleY, transformOrigin: "top" }}
                        className="w-full h-full bg-gradient-to-b from-lime-500 via-green-500 to-slate-200"
                    />
                </div>

                {/* Step 1: The Inputs */}
                <StepSection
                    number="01"
                    title="The Inputs"
                    headline="Keep Your Current Tools."
                    content={
                        <AnimatedContent>
                            <p className="mb-4 text-slate-600 leading-relaxed">
                                Your data is trapped in Excel sheets, email threads, and paper bills. We don't replace these tools. We connect to them.
                            </p>
                            <p className="font-medium text-slate-900 mb-6 border-l-4 border-lime-500 pl-4">
                                We capture data where it lives. No migration required.
                            </p>
                            <Link href="/connectors" className="text-lime-600 font-bold hover:text-lime-700 flex items-center gap-2 transition-all hover:translate-x-1 group">
                                See All Connectors <ArrowRight className="w-4 h-4 group-hover:ml-1 transition-all" />
                            </Link>
                        </AnimatedContent>
                    }
                    imagePlaceholder="Tally, Excel, Outlook, Files"
                    visual={
                        <AnimatedVisual align="left">
                            <InputsVisual />
                        </AnimatedVisual>
                    }
                    align="left"
                />

                {/* Step 2: The Bridge */}
                <StepSection
                    number="02"
                    title="The Bridge"
                    headline="'No-Training' Interface."
                    content={
                        <AnimatedContent>
                            <p className="mb-4 text-slate-600 leading-relaxed">
                                Use WhatsApp as your interface. Send voice notes, photos, or PDFs.
                            </p>
                            <div className="space-y-3 mb-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                                        <span className="text-slate-600"><strong className="text-slate-900">Floor Manager:</strong> Voice notes for job updates.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                                        <span className="text-slate-600"><strong className="text-slate-900">Drivers:</strong> Photos of challans.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                                        <span className="text-slate-600"><strong className="text-slate-900">Sales:</strong> Forward customer PDFs.</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="font-bold text-slate-900 flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-lime-100 text-lime-700 text-xs">✓</span>
                                One entry point. Zero friction.
                            </p>
                        </AnimatedContent>
                    }
                    imagePlaceholder="WhatsApp / Direct Connectors Icon"
                    visual={
                        <AnimatedVisual align="right">
                            <InterfaceVisual />
                        </AnimatedVisual>
                    }
                    align="right"
                />

                {/* Step 3: The Brain */}
                <StepSection
                    number="03"
                    title="The Brain"
                    headline="AI That Understands."
                    content={
                        <AnimatedContent>
                            <p className="mb-4 text-slate-600 leading-relaxed">
                                No more manual data entry. Our AI extracts structured data from the chaos of real-world manufacturing.
                            </p>
                            <div className="grid grid-cols-1 gap-3 mb-8">
                                {['Voice: Transcribes notes into reports.', 'Vision: Reads handwriting and drawings.', 'Text: Understands intent in messages.'].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#022c22]" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/technology" className="text-lime-600 font-bold hover:text-lime-700 flex items-center gap-2 transition-all hover:translate-x-1 group">
                                Explore Our AI Technology <ArrowRight className="w-4 h-4 group-hover:ml-1 transition-all" />
                            </Link>
                        </AnimatedContent>
                    }
                    imagePlaceholder="AI Engine Box"
                    visual={
                        <AnimatedVisual align="left">
                            <BrainVisual />
                        </AnimatedVisual>
                    }
                    align="left"
                />

                {/* Step 4: The Foundation */}
                <StepSection
                    number="04"
                    title="The Foundation"
                    headline="Single Source of Truth."
                    content={
                        <AnimatedContent>
                            <p className="mb-6 text-slate-600 leading-relaxed text-lg">
                                AI processes inputs into a <span className="font-semibold text-[#022c22]">"Clean Data Foundation"</span>.
                            </p>
                            <div className="bg-[#022c22] p-6 rounded-2xl text-white shadow-xl shadow-green-900/20">
                                <p className="font-medium leading-relaxed opacity-90">
                                    "A live, error-free record of your operation. Reality, not just memory."
                                </p>
                            </div>
                        </AnimatedContent>
                    }
                    imagePlaceholder="Database Cylinder Icon"
                    visual={
                        <AnimatedVisual align="right">
                            <FoundationVisual />
                        </AnimatedVisual>
                    }
                    align="right"
                />

                {/* Step 5: The Workforce */}
                <StepSection
                    number="05"
                    title="The Workforce"
                    headline="Your Autonomous Team."
                    content={
                        <AnimatedContent>
                            <p className="mb-6 text-slate-600 leading-relaxed">
                                With clean data, specialized Agents execute tasks instantly.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { label: 'Quoting', desc: 'Calculates costs' },
                                    { label: 'Inventory', desc: 'Predicts shortages' },
                                    { label: 'Compliance', desc: 'Automates audits' },
                                    { label: 'Scheduling', desc: 'Tracks production' }
                                ].map((agent, i) => (
                                    <div key={i} className="border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-lime-300 transition-all">
                                        <div className="font-bold text-[#022c22] mb-1">{agent.label}</div>
                                        <div className="text-xs text-slate-500">{agent.desc}</div>
                                    </div>
                                ))}
                            </div>
                            <Link href="/agents" className="text-lime-600 font-bold hover:text-lime-700 flex items-center gap-2 transition-all hover:translate-x-1 group">
                                Explore All Agents <ArrowRight className="w-4 h-4 group-hover:ml-1 transition-all" />
                            </Link>
                        </AnimatedContent>
                    }
                    imagePlaceholder="Quoting, Inventory, Compliance Agents"
                    visual={
                        <AnimatedVisual align="left">
                            <WorkforceVisual />
                        </AnimatedVisual>
                    }
                    align="left"
                />
            </div>
            <FinalCTA />
        </div>
    )
}