import Head from 'next/head';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, FileText, Scissors, Truck, BarChart3, Clock, ShieldCheck, ArrowRight, AlertOctagon } from 'lucide-react';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';
import { DetailCTA } from '@src/components/industries/DetailCTA';
import { DetailCaseStudies } from '@src/components/industries/DetailCaseStudies';

const SheetMetalCopy = {
    hero: {
        title: "Sheet Metal & Fabrication",
        subtitle: "Stop bleeding margin on scrap and slow quotes. Automate your fabrication workflow with Agentworks.",
        ctaText: "See the Quoting Agent",
        imageSrc: "/sheet-metal.png",
        ctaLink: "/connectors"
    },
    problemSection: {
        title: "Why Standard ERPs Fail in Sheet Metal & Fabrication.",
        subtitle: "In Sheet Metal & Fabrication, the paperwork is often heavier than the product. A generic ERP tracks financial value, but it fails to track process integrity. It doesn't force FIFO or validate a batch number before a mix.",
        features: [
            {
                title: "The \"Dead Stock\" Trap",
                icon: <AlertOctagon className="w-8 h-8 text-[#ef4444]" />,
                desc: "Raw materials expire in the warehouse because the ERP didn't alert the floor manager in time."
            },
            {
                title: "Audit Panic",
                icon: <FileText className="w-8 h-8 text-[#ef4444]" />,
                desc: "Preparing for a drug inspection or tax audit involves digging through thousands of physical papers to reconcile batch numbers."
            },
            {
                title: "Margin Leakage",
                icon: <BarChart3 className="w-8 h-8 text-[#ef4444]" />,
                desc: "Sales teams quote prices based on old raw material costs, ignoring the sudden spike in solvent or precursor prices."
            }
        ]
    },
    agentSection: {
        title: "Intelligent Infrastructure for Metalworks.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: FileText,
                title: "Commercial Agent",
                subtitle: "Auto-Quoting",
                tagline: '"Quote in Minutes, Not Days."',
                features: [
                    {
                        label: "Ingest",
                        description: "Accepts PDF, DXF, and CAD files via Email or WhatsApp."
                    },
                    {
                        label: "Analyze",
                        description: "Instantly extracts geometry (surface area, perimeter, bends/holes)."
                    },
                    {
                        label: "Price",
                        description: "Connects to live steel rates and machine-hour costs."
                    }
                ]
            },
            {
                icon: BarChart3,
                title: "Inventory Agent",
                subtitle: "Scrap & Stock",
                tagline: '"Turn Offcuts into Profit."',
                features: [
                    {
                        label: "Tracking",
                        description: "Calculates exact scrap percentage when a job is nested."
                    },
                    {
                        label: "Re-use",
                        description: "Identifies and logs usable offcuts back into inventory."
                    },
                    {
                        label: "Procurement",
                        description: "Auto-alerts purchasing when sheet sizes hit minimums."
                    }
                ]
            },
            {
                icon: ShieldCheck,
                title: "Production Agent",
                subtitle: "Shop Floor Visibility",
                tagline: '"The Control Tower."',
                features: [
                    {
                        label: "Input",
                        description: 'Operators dictate updates via voice notes (e.g., "Bending complete").'
                    },
                    {
                        label: "Action",
                        description: "Updates Master Schedule and notifies Sales immediately."
                    },
                    {
                        label: "Result",
                        description: "Real-time status on every job, accessible from your phone."
                    }
                ]
            }
        ]
    },
    caseStudies: {
        title: "See How they are using Agentworks",
        description: "See how fabricators are using Agentworks to unlock capacity.",
        studies: [
            {
                badge: 'The "Finance" Win',
                title: 'Heavy Equipment Fabricator',
                challenge: 'Finance team drowning in reconciliation (40 hrs/week). Month-end took 7 days.',
                results: [
                    '<strong>95% Reduction</strong> in finance admin time (40 hrs → 2 hrs).',
                    '<strong>2 FTEs Freed</strong> to focus on revenue tasks.',
                    '<strong>Month-End</strong> reduced from 7 days to near-zero.',
                ],
                link: '#case-study-1',
            },
            {
                badge: 'The "Velocity" Win',
                title: 'High-Mix Laser Cutting Shop',
                challenge: 'Engineers spent 80% of day manually calculating cut-lengths. Quoting was the bottleneck.',
                results: [
                    '<strong>Quoting Speed:</strong> Reduced cycle time from 7 days to 2 hours.',
                    '<strong>Margin Uplift:</strong> +3% increase due to precision costing.',
                    '<strong>Accuracy:</strong> Eliminated manual calculation errors.',
                ],
                link: '#case-study-2',
            },
        ]
    },
    cta: {
        title: "Ready to Automate Your Fabrication Workflow?",
        subtitle: "Let an engineer analyze your quoting process. No cost. No obligation.",
        href: "https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery",
        ctaText: "Consult an Engineer"
    }
}

const SheetMetalPage = () => {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Sheet Metal & Fabrication | Agentworks</title>
                <meta name="description" content="Stop bleeding margin on scrap and slow quotes. Automate your fabrication workflow with Agentworks." />
            </Head>

            <main>
                <IndustryHero
                    title={SheetMetalCopy.hero.title}
                    subtitle={SheetMetalCopy.hero.subtitle}
                    ctaText={SheetMetalCopy.hero.ctaText}
                    imageSrc={SheetMetalCopy.hero.imageSrc}
                    ctaLink={SheetMetalCopy.hero.ctaLink}
                />
                <DetailProblemSection
                    title={SheetMetalCopy.problemSection.title}
                    subtitle={SheetMetalCopy.problemSection.subtitle}
                    features={SheetMetalCopy.problemSection.features}
                />
                <DetailAgentSection
                    title={SheetMetalCopy.agentSection.title}
                    ctaText={SheetMetalCopy.agentSection.ctaText}
                    ctaHref={SheetMetalCopy.agentSection.ctaHref}
                    agents={SheetMetalCopy.agentSection.agents}
                />

                {/* How It Works - Smart Quote Visual */}
                <Section className="">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                No New Software to Learn.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Steps */}
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Email Drawing", desc: "Customer emails a PDF/DXF file directly to your sales inbox." },
                                    { step: "02", title: "Agent Analyzes", desc: "Agent extracts geometry (cut length, pierces) and applies your steel rates." },
                                    { step: "03", title: "Draft Quote", desc: "Generates a professional PDF quote in your company format." },
                                    { step: "04", title: "Approve", desc: "You receive a WhatsApp summary. Click 'Approve' to send it to the client." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-12 h-12 rounded-full bg-[#bef264] flex items-center justify-center text-[#022c22] font-bold text-xl flex-shrink-0">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#022c22] mb-2">{item.title}</h3>
                                            <p className="text-[#022c22]/70">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Visual - Smart Quote Analysis */}
                            <div className="bg-gray-50 rounded-3xl shadow-xl border border-gray-100">
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                    <div className="p-4 border-b border-gray-100 bg-[#022c22] text-white flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <FileText className="w-4 h-4 text-[#bef264]" />
                                            <span className="font-bold">Automated CAD Analysis</span>
                                        </div>
                                        <span className="text-xs bg-[#bef264] text-[#022c22] px-2 py-1 rounded-full font-bold">Ready</span>
                                    </div>

                                    <div className="p-6">
                                        {/* File Info */}
                                        <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-[#022c22]">bracket_mount_v2.dxf</div>
                                                <div className="text-xs text-gray-500">Detected: Mild Steel, 2mm</div>
                                            </div>
                                        </div>

                                        {/* Extracted Data Grid */}
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="text-center p-2 bg-gray-50 rounded-lg">
                                                <div className="text-xs text-gray-500 mb-1">Cut Length</div>
                                                <div className="font-bold text-[#022c22]">1240mm</div>
                                            </div>
                                            <div className="text-center p-2 bg-gray-50 rounded-lg">
                                                <div className="text-xs text-gray-500 mb-1">Pierces</div>
                                                <div className="font-bold text-[#022c22]">8</div>
                                            </div>
                                            <div className="text-center p-2 bg-gray-50 rounded-lg">
                                                <div className="text-xs text-gray-500 mb-1">Bends</div>
                                                <div className="font-bold text-[#022c22]">4</div>
                                            </div>
                                        </div>

                                        {/* Cost Breakdown */}
                                        <div className="space-y-3 border-t border-gray-100 pt-4">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Material (MS 2mm)</span>
                                                <span className="font-medium text-[#022c22]">$12.00</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Laser Time (45s)</span>
                                                <span className="font-medium text-[#022c22]">$4.00</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Bending (4 ops)</span>
                                                <span className="font-medium text-[#022c22]">$3.00</span>
                                            </div>
                                            <div className="flex justify-between text-lg font-bold border-t border-gray-100 pt-3 mt-2">
                                                <span className="text-[#022c22]">Total Quote</span>
                                                <span className="text-[#022c22]">$19.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                                        <button className="bg-[#022c22] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#022c22]/90 flex items-center gap-2 transition-colors">
                                            Send Quote <ArrowRightIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Case Studies */}
                <DetailCaseStudies
                    caseStudies={SheetMetalCopy.caseStudies.studies}
                    title={SheetMetalCopy.caseStudies.title}
                    description={SheetMetalCopy.caseStudies.description}
                />
                {/* Bottom CTA */}
                <DetailCTA
                    title={SheetMetalCopy.cta.title}
                    subtitle={SheetMetalCopy.cta.subtitle}
                    href={SheetMetalCopy.cta.href}
                    ctaText={SheetMetalCopy.cta.ctaText}
                />
            </main>
        </div>
    );
};

export default SheetMetalPage;
