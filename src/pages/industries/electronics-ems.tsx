import Head from 'next/head';
import Image from 'next/image';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, Cpu, Zap, Search, Layers, AlertCircle, BarChart3, TrendingUp, AlertTriangle, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';
import { DetailCTA } from '@src/components/industries/DetailCTA';
import { DetailCaseStudies } from '@src/components/industries/DetailCaseStudies';

const EMSCopy = {
    hero: {
        title: "Electronics and EMS",
        subtitle: "Where is the order? Stop guessing. Gain absolute visibility over long-lead production cycles for heavy machinery.",
        ctaText: "See the Sourcing Agent",
        imageSrc: "/electronics.png",
        ctaLink: "/connectors"
    },
    problemSection: {
        title: "Why Standard ERPs Fail in Electronics.",
        subtitle: "You deal in Bills of Materials (BOMs) with thousands of line items. A generic ERP treats a complex IC the same way it treats a screw. It doesn't track market availability, obsolescence, or cross-reference alternatives.",
        features: [
            {
                title: "The \"Golden Screw\"",
                icon: <AlertCircle className="w-8 h-8 text-[#ef4444]" />,
                desc: "Your warehouse is full of expensive PCBs and processors, but you can't ship because a generic capacitor is out of stock."
            },
            {
                title: "Sourcing Hell",
                icon: <Search className="w-8 h-8 text-[#ef4444]" />,
                desc: "Procurement teams spend 6 hours a day just checking stock availability across DigiKey, Mouser, and local vendors for a single BOM."
            },
            {
                title: "Dead Inventory",
                icon: <Layers className="w-8 h-8 text-[#ef4444]" />,
                desc: "Excess components pile up from Minimum Order Quantities (MOQs), eating your cash flow."
            }
        ]
    },
    agentSection: {
        title: "Intelligent Infrastructure for EMS.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: Cpu,
                title: "Sourcing Agent",
                subtitle: "The Automated Buyer",
                tagline: '"Clear-to-Build in Minutes."',
                features: [
                    {
                        label: "Scan",
                        description: "Ingests BOM (Excel/PDF) and identifies every Part Number."
                    },
                    {
                        label: "Search",
                        description: "Checks availability/pricing across vendors and APIs instantly."
                    },
                    {
                        label: "Compare",
                        description: "Highlights lowest price and fastest delivery automatically."
                    }
                ]
            },
            {
                icon: TrendingUp,
                title: "Sales Agent",
                subtitle: "Revenue Growth",
                tagline: '"Upsell on Autopilot."',
                features: [
                    {
                        label: "Analyze",
                        description: 'Reviews history to find patterns (e.g., "Buy A → Need B").'
                    },
                    {
                        label: "Engage",
                        description: 'Nudges clients via WhatsApp: "Need wiring harness for this batch?"'
                    },
                    {
                        label: "Qualify",
                        description: "Filters leads to prioritize high-value OEM contracts."
                    }
                ]
            },
            {
                icon: Layers,
                title: "Inventory Agent",
                subtitle: "Store Control",
                tagline: '"Real-Time Kitting."',
                features: [
                    {
                        label: "Kit",
                        description: "Checks if all components are physically available before production."
                    },
                    {
                        label: "Alert",
                        description: "Flags shortages before line stoppages occur."
                    },
                    {
                        label: "Consume",
                        description: 'Deducts from stock via "Backflush" when unit is packed.'
                    }
                ]
            }
        ]
    },
    caseStudies: {
        studies: [
            {
                "badge": "The \"Revenue\" Win",
                "title": "Dolphin Device (Sensor Mfg)",
                "challenge": "Reactive sales team missing upsell opportunities.",
                "results": [
                    "<strong>Revenue Uplift:</strong> +22% Increase via AI-identified upsells.",
                    "<strong>Lead Quality:</strong> +45% Increase in qualified leads (Grade-A).",
                    "<strong>Efficiency:</strong> Growing faster with the same team size."
                ],
                "link": "#case-study-dolphin"
            },
            {
                "badge": "The \"Sourcing\" Win",
                "title": "PCB Assembly Provider",
                "challenge": "Quoting took 2 days. Prices changed before quote acceptance, eating margins.",
                "results": [
                    "<strong>Speed:</strong> BOM Costing reduced from 2 days to 30 minutes.",
                    "<strong>Accuracy:</strong> Real-time flagging of \"Out of Stock\" components.",
                    "<strong>Win Rate:</strong> 15% increase in orders due to faster turnaround."
                ],
                "link": "#case-study-pcb"
            }
        ],
        title: "Proven Results in EMS.",
        description: "See how fabricators are using Agentworks to unlock capacity.",
    },
    cta: {
        title: "Ready to Audit-Proof Your Operations?",
        subtitle: "Stop losing money to expired stock and slow paperwork.",
        href: "https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery",
        ctaText: "Consult an Engineer"
    }
}

const ElectronicsPage = () => {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Electronics & EMS | Agentworks</title>
                <meta name="description" content="One missing resistor shouldn't stop your line. Automate BOM sourcing and assembly schedules for EMS." />
            </Head>

            <main>
                {/* Hero Section */}
                <IndustryHero
                    title={EMSCopy.hero.title}
                    subtitle={EMSCopy.hero.subtitle}
                    ctaText={EMSCopy.hero.ctaText}
                    imageSrc={EMSCopy.hero.imageSrc}
                    ctaLink={EMSCopy.hero.ctaLink}
                />
                {/* The Component Gap (Problem) */}
                <DetailProblemSection
                    title={EMSCopy.problemSection.title}
                    subtitle={EMSCopy.problemSection.subtitle}
                    features={EMSCopy.problemSection.features}
                />
                {/* The Solution: Specialized Agents */}
                <DetailAgentSection
                    title={EMSCopy.agentSection.title}
                    ctaText={EMSCopy.agentSection.ctaText}
                    ctaHref={EMSCopy.agentSection.ctaHref}
                    agents={EMSCopy.agentSection.agents}
                />

                {/* How It Works - BOM Health Check Visual */}
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                From BOM to Quote—Instantly.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Steps */}
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Send BOM", desc: "Customer sends a BOM file (Excel/CSV) via Email." },
                                    { step: "02", title: "Agent Parses", desc: "Agentworks parses 500+ line items and checks stock against Tally + Vendors." },
                                    { step: "03", title: "Costing Sheet", desc: "Agent generates a Costing Sheet highlighting \"Risk Parts\" (long lead times)." },
                                    { step: "04", title: "Approve", desc: "You add your margin and approve the Quote on WhatsApp." }
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

                            {/* Visual - BOM Health Check */}
                            <div className="bg-gray-50 rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                    <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                                        <span className="font-bold text-[#022c22]">BOM Health Analysis</span>
                                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Processing</span>
                                    </div>
                                    <div className="p-4 grid grid-cols-3 gap-4 border-b border-gray-100">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#022c22]">482</div>
                                            <div className="text-xs text-gray-500">Total Parts</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-green-600">479</div>
                                            <div className="text-xs text-gray-500">Available</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-red-600">3</div>
                                            <div className="text-xs text-gray-500">Risk Items</div>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left">
                                            <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3">Part No.</th>
                                                    <th className="px-4 py-3">Status</th>
                                                    <th className="px-4 py-3">Lead Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-100">
                                                    <td className="px-4 py-3 font-medium text-[#022c22]">STM32F405RGT6</td>
                                                    <td className="px-4 py-3">
                                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex w-fit items-center gap-1">
                                                            <Check className="w-3 h-3" /> In Stock
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-gray-500">2 Days</td>
                                                </tr>
                                                <tr className="border-b border-gray-100 bg-red-50/50">
                                                    <td className="px-4 py-3 font-medium text-[#022c22]">CAP-10UF-25V</td>
                                                    <td className="px-4 py-3">
                                                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs flex w-fit items-center gap-1">
                                                            <AlertTriangle className="w-3 h-3" /> Shortage
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-red-600 font-medium">14 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 font-medium text-[#022c22]">RES-10K-0603</td>
                                                    <td className="px-4 py-3">
                                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex w-fit items-center gap-1">
                                                            <Check className="w-3 h-3" /> In Stock
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-gray-500">1 Day</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="mt-4 flex gap-2 justify-end">
                                    <button className="text-xs bg-[#022c22] text-white px-3 py-2 rounded-lg hover:bg-[#022c22]/90 transition-colors">
                                        Find Alternatives
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Case Studies */}
                <DetailCaseStudies
                    caseStudies={EMSCopy.caseStudies.studies}
                    title={EMSCopy.caseStudies.title}
                    description={EMSCopy.caseStudies.description}
                />

                {/* Bottom CTA */}
                <DetailCTA
                    title={EMSCopy.cta.title}
                    subtitle={EMSCopy.cta.subtitle}
                    href={EMSCopy.cta.href}
                    ctaText={EMSCopy.cta.ctaText}
                />
            </main>
        </div>
    );
};

export default ElectronicsPage;
