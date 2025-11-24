import React from "react"
import ArchitectureDiagram from "@src/components/AnimatedDiagrams/HowItWorks"
import { ArrowRight } from "lucide-react"
import Link from "next/link";
import { StepSection } from "@src/components/howItWorks/StepSection"

import InputsVisual from "@src/components/howItWorks/InputsVisual"

import InterfaceVisual from "@src/components/howItWorks/InterfaceVisual"

import BrainVisual from "@src/components/howItWorks/BrainVisual"

import FoundationVisual from "@src/components/howItWorks/FoundationVisual"

import WorkforceVisual from "@src/components/howItWorks/WorkforceVisual"

import AnimatedScreenHero from "@src/components/howItWorks/AnimatedScreenHero"

export default function HowItWorks() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Animated Screen */}
            <section className="bg-[#f7fee7] py-24 !pb-0 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#022c22] mb-8 leading-tight">
                        Complex Automation. <span className="text-[#65a30d]">Zero Friction.</span>
                    </h1>
                    <p className="text-xl text-[#022c22]/70 mb-8 leading-relaxed">
                        We don't ask you to change how you work. We just make your existing tools intelligent.
                    </p>
                </div>

                {/* Animated Screen Hero */}
                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 mt-12">
                    <div className="rounded-t-[3rem] bg-white/40 p-3 pt-3 pb-0 border-t border-l border-r border-[#022c22]/10 backdrop-blur-sm h-[800px] md:h-[600px] lg:h-[750px] overflow-hidden">
                        <div className="rounded-t-[2.5rem] shadow-2xl h-full w-full overflow-clip">
                            <AnimatedScreenHero />
                        </div>
                    </div>
                </div>
            </section>
            {/* Steps Section */}
            <div className="max-w-7xl mt-12 mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-32">

                {/* Step 1: The Inputs */}
                <StepSection
                    number="01"
                    title="The Inputs"
                    headline="Keep Your Current Tools."
                    content={
                        <>
                            <p className="mb-4">
                                Your data is trapped in Excel sheets, email threads, and paper bills. We don't replace these tools. We connect to them.
                            </p>
                            <p className="font-medium text-slate-900 mb-6">
                                We capture data where it lives. No migration required.
                            </p>
                            <Link href="/connectors" className="text-lime-600 font-semibold hover:text-lime-700 flex items-center gap-2 transition-colors">
                                See All Connectors <ArrowRight className="w-4 h-4" />
                            </Link>
                        </>
                    }
                    imagePlaceholder="Tally, Excel, Outlook, Files"
                    visual={<InputsVisual />}
                    align="left"
                />

                {/* Step 2: The Bridge */}
                <StepSection
                    number="02"
                    title="The Bridge"
                    headline="'No-Training' Interface."
                    content={
                        <>
                            <p className="mb-4">
                                Use WhatsApp as your interface. Send voice notes, photos, or PDFs.
                            </p>
                            <div className="space-y-3 mb-6">
                                <ul className="space-y-2 list-disc list-inside text-slate-600 ml-2">
                                    <li><span className="font-medium text-slate-800">Floor Manager:</span> Voice notes for job updates.</li>
                                    <li><span className="font-medium text-slate-800">Drivers:</span> Photos of challans.</li>
                                    <li><span className="font-medium text-slate-800">Sales:</span> Forward customer PDFs.</li>
                                </ul>
                            </div>
                            <p className="font-medium text-slate-900">
                                One entry point. Zero friction.
                            </p>
                        </>
                    }
                    imagePlaceholder="WhatsApp / Direct Connectors Icon"
                    visual={<InterfaceVisual />}
                    align="right"
                />

                {/* Step 3: The Brain */}
                <StepSection
                    number="03"
                    title="The Brain"
                    headline="AI That Understands."
                    content={
                        <>
                            <p className="mb-4">
                                No more manual data entry. Our AI extracts structured data from the chaos of real-world manufacturing.
                            </p>
                            <div className="space-y-3 mb-6">
                                <ul className="space-y-2 list-disc list-inside text-slate-600 ml-2">
                                    <li><span className="font-medium text-slate-800">Voice:</span> Transcribes notes into reports.</li>
                                    <li><span className="font-medium text-slate-800">Vision:</span> Reads handwriting and drawings.</li>
                                    <li><span className="font-medium text-slate-800">Text:</span> Understands intent in messages.</li>
                                </ul>
                            </div>
                            <button className="text-lime-600 font-semibold hover:text-lime-700 flex items-center gap-2 transition-colors">
                                Explore Our AI Technology <ArrowRight className="w-4 h-4" />
                            </button>
                        </>
                    }
                    imagePlaceholder="AI Engine Box"
                    visual={<BrainVisual />}
                    align="left"
                />

                {/* Step 4: The Foundation */}
                <StepSection
                    number="04"
                    title="The Foundation"
                    headline="Single Source of Truth."
                    content={
                        <>
                            <p className="mb-4">
                                AI processes inputs into a "Clean Data Foundation".
                            </p>
                            <p className="font-medium text-slate-900">
                                A live, error-free record of your operation. Reality, not just memory.
                            </p>
                        </>
                    }
                    imagePlaceholder="Database Cylinder Icon"
                    visual={<FoundationVisual />}
                    align="right"
                />

                {/* Step 5: The Workforce */}
                <StepSection
                    number="05"
                    title="The Workforce"
                    headline="Your Autonomous Team."
                    content={
                        <>
                            <p className="mb-4">
                                With clean data, specialized Agents execute tasks instantly.
                            </p>
                            <div className="space-y-3 mb-6">
                                <ul className="space-y-2 list-disc list-inside text-slate-600 ml-2">
                                    <li><span className="font-medium text-slate-800">Quoting:</span> Calculates costs instantly.</li>
                                    <li><span className="font-medium text-slate-800">Inventory:</span> Predicts shortages.</li>
                                    <li><span className="font-medium text-slate-800">Compliance:</span> Automates audits.</li>
                                    <li><span className="font-medium text-slate-800">Scheduling:</span> Tracks production.</li>
                                </ul>
                            </div>
                            <button className="text-lime-600 font-semibold hover:text-lime-700 flex items-center gap-2 transition-colors">
                                Explore All Agents <ArrowRight className="w-4 h-4" />
                            </button>
                        </>
                    }
                    imagePlaceholder="Quoting, Inventory, Compliance Agents"
                    visual={<WorkforceVisual />}
                    align="left"
                />

            </div>
        </div>
    )
}

