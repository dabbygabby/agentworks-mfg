import React from "react"
import ArchitectureDiagram from "@src/components/AnimatedDiagrams/HowItWorks"
import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 px-4 sm:px-6 lg:px-8 max-w-full mx-auto text-center bg-lime-50/50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Complex Automation. <span className="text-lime-600">Zero Friction.</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                        We don't ask you to change how you work. We just make your existing tools intelligent.
                    </p>
                    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12">
                        <ArchitectureDiagram />
                    </section>
                </div>
            </section>
            {/* <div className="w-full flex flex-col text-center mx-auto p-12 px-64 text-3xl font-bold text-slate-700 mb-8 items-center justify-center shadow-sm border border-slate-100 bg-[#022c22] text-white overflow-hidden">
                <p className="mb-4">
                    Most software implementations fails because it forces your team to learn a new system. Agentworks is different. We build a bridge between the chaos of the shop floor and the structure of your ERP.
                </p>
            </div> */}

            {/* Animated Diagram Section */}


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
                                Your data is trapped in Excel sheets, email threads, and paper bills. We don’t replace these tools. We connect to them.
                            </p>
                            <p className="font-medium text-slate-900 mb-6">
                                We capture data where it lives. No migration required.
                            </p>
                            <button className="text-lime-600 font-semibold hover:text-lime-700 flex items-center gap-2 transition-colors">
                                See All Connectors <ArrowRight className="w-4 h-4" />
                            </button>
                        </>
                    }
                    imagePlaceholder="Tally, Excel, Outlook, Files"
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
                    align="left"
                />

            </div>
        </div>
    )
}

interface StepSectionProps {
    number: string;
    title: string;
    headline: string;
    content: React.ReactNode;
    imagePlaceholder: string;
    align: 'left' | 'right';
}

function StepSection({ number, title, headline, content, imagePlaceholder, align }: StepSectionProps) {
    return (
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
            {/* Text Content */}
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-3 text-lime-600 font-bold tracking-wider uppercase text-sm">
                    <span className="text-3xl opacity-20">{number}</span>
                    <span>{title}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    {headline}
                </h2>
                <div className="text-lg text-slate-600 leading-relaxed">
                    {content}
                </div>
            </div>

            {/* Image Placeholder */}
            <div className="flex-1 w-full">
                <div className="aspect-[4/3] w-full bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-center hover:border-lime-400 transition-colors group">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <div className="w-8 h-8 bg-slate-200 rounded-full" />
                    </div>
                    <p className="text-slate-400 font-medium">Image Placeholder</p>
                    <p className="text-sm text-slate-400 mt-2">{imagePlaceholder}</p>
                </div>
            </div>
        </div>
    )
}