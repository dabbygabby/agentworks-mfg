import Head from 'next/head';
import Image from 'next/image';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, FileText, Scissors, Truck, BarChart3, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';

const SheetMetalCopy = {
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
                    title="Sheet Metal & Fabrication"
                    subtitle="Stop bleeding margin on scrap and slow quotes. Automate your fabrication workflow with Agentworks."
                    ctaText="See the Quoting Agent"
                    imageSrc="/sheet-metal.png"
                    ctaLink="/connectors"
                />
                <DetailProblemSection
                    title="Why Standard ERPs Fail in Fabrication."
                    subtitle="You deal in volatile raw material prices and complex custom orders. A generic ERP sees a 'sheet of steel.' It doesn't understand nesting efficiency, offcut management, or laser machine time."
                    features={[
                        {
                            title: "Quoting is Slow",
                            icon: <Clock className="w-8 h-8 text-[#ef4444]" />,
                            desc: "Engineers spend hours calculating perimeter cut-lengths and bend deductions manually."
                        },
                        {
                            title: "Scrap is Invisible",
                            icon: <Scissors className="w-8 h-8 text-[#ef4444]" />,
                            desc: "You pay for the whole sheet, but you only bill for the part. The 'scrap' eats your profit if not tracked."
                        },
                        {
                            title: "WIP is a Black Hole",
                            icon: <Truck className="w-8 h-8 text-[#ef4444]" />,
                            desc: "Once a job leaves the laser, nobody knows if it’s at bending, welding, or coating without physically walking the floor."
                        }
                    ]}
                />
                <DetailAgentSection
                    title={SheetMetalCopy.agentSection.title}
                    ctaText={SheetMetalCopy.agentSection.ctaText}
                    ctaHref={SheetMetalCopy.agentSection.ctaHref}
                    agents={SheetMetalCopy.agentSection.agents}
                />

                {/* How It Works - Smart Quote Visual */}
                <Section className="bg-white">
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
                            <div className="bg-gray-50 rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
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
                <Section className="bg-[#f7fee7] rounded-[3rem]">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                Proven Results on the Factory Floor.
                            </h2>
                            <p className="text-xl text-[#022c22]/70">
                                See how fabricators are using Agentworks to unlock capacity.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Case Study 1 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="inline-block px-4 py-1 bg-[#dcfce7] text-[#166534] rounded-full text-sm font-bold mb-6">
                                    The "Finance" Win
                                </div>
                                <h3 className="text-2xl font-bold text-[#022c22] mb-4">Heavy Equipment Fabricator</h3>
                                <p className="text-[#022c22]/70 mb-6">
                                    <strong>Challenge:</strong> Finance team drowning in reconciliation (40 hrs/week). Month-end took 7 days.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>95% Reduction</strong> in finance admin time (40 hrs → 2 hrs).</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>2 FTEs Freed</strong> to focus on revenue tasks.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Month-End</strong> reduced from 7 days to near-zero.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Case Study 2 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="inline-block px-4 py-1 bg-[#dcfce7] text-[#166534] rounded-full text-sm font-bold mb-6">
                                    The "Velocity" Win
                                </div>
                                <h3 className="text-2xl font-bold text-[#022c22] mb-4">High-Mix Laser Cutting Shop</h3>
                                <p className="text-[#022c22]/70 mb-6">
                                    <strong>Challenge:</strong> Engineers spent 80% of day manually calculating cut-lengths. Quoting was the bottleneck.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Quoting Speed:</strong> Reduced cycle time from 7 days to 2 hours.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Margin Uplift:</strong> +3% increase due to precision costing.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Accuracy:</strong> Eliminated manual calculation errors.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Bottom CTA */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                            Ready to Automate Your Fabrication Workflow?
                        </h2>
                        <p className="text-xl text-[#022c22]/70 mb-10">
                            Let an engineer analyze your quoting process. No cost. No obligation.
                        </p>
                        <Button href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" variant="primary">
                            Consult an Engineer
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </Section>
            </main>
        </div>
    );
};

export default SheetMetalPage;
