import Head from 'next/head';
import Image from 'next/image';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, FileText, Scissors, Truck, BarChart3, Clock, ShieldCheck } from 'lucide-react';

const SheetMetalPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Sheet Metal & Fabrication | Agentworks</title>
                <meta name="description" content="Stop bleeding margin on scrap and slow quotes. Automate your fabrication workflow with Agentworks." />
            </Head>

            <main>
                {/* Hero Section */}
                <Section className="bg-[#f7fee7] rounded-b-[3rem] pt-32 pb-20 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold text-[#022c22] mb-6 leading-tight">
                                    Stop Bleeding Margin on <span className="text-[#65a30d]">Scrap</span> and <span className="text-[#65a30d]">Slow Quotes</span>.
                                </h1>
                                <p className="text-xl text-[#022c22]/70 mb-8 leading-relaxed">
                                    From laser cutting to powder coating, automate the flow of data as efficiently as you automate the flow of metal.
                                </p>
                                <Button href="/connectors" variant="primary">
                                    See the Quoting Agent
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                            <div className="relative">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50">
                                    <Image
                                        src="/sheet-metal.png"
                                        alt="Sheet Metal Fabrication Dashboard"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                                {/* Decorative blob */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#bef264]/20 blur-3xl -z-10 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* The Fabrication Gap (Problem) */}
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                Why Standard ERPs Fail in Fabrication.
                            </h2>
                            <p className="text-xl text-[#022c22]/70 leading-relaxed">
                                You deal in volatile raw material prices and complex custom orders. A generic ERP sees a "sheet of steel." It doesn't understand nesting efficiency, offcut management, or laser machine time.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Quoting is Slow",
                                    icon: <Clock className="w-8 h-8 text-[#ef4444]" />,
                                    desc: "Engineers spend hours calculating perimeter cut-lengths and bend deductions manually."
                                },
                                {
                                    title: "Scrap is Invisible",
                                    icon: <Scissors className="w-8 h-8 text-[#ef4444]" />,
                                    desc: "You pay for the whole sheet, but you only bill for the part. The \"scrap\" eats your profit if not tracked."
                                },
                                {
                                    title: "WIP is a Black Hole",
                                    icon: <Truck className="w-8 h-8 text-[#ef4444]" />,
                                    desc: "Once a job leaves the laser, nobody knows if it’s at bending, welding, or coating without physically walking the floor."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-red-50 rounded-3xl p-8 border border-red-100">
                                    <div className="mb-4 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#022c22] mb-3">{item.title}</h3>
                                    <p className="text-[#022c22]/70">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* The Solution: Specialized Agents */}
                <Section className="bg-[#022c22] text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Intelligent Infrastructure for Metalworks.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Commercial Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Commercial Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">Auto-Quoting</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"Quote in Minutes, Not Days."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Ingest:</strong> Accepts PDF, DXF, and CAD files via Email or WhatsApp.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Analyze:</strong> Instantly extracts geometry (surface area, perimeter, bends/holes).</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Price:</strong> Connects to live steel rates and machine-hour costs.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Inventory Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <BarChart3 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Inventory Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">Scrap & Stock</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"Turn Offcuts into Profit."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Tracking:</strong> Calculates exact scrap percentage when a job is nested.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Re-use:</strong> Identifies and logs usable offcuts back into inventory.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Procurement:</strong> Auto-alerts purchasing when sheet sizes hit minimums.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Production Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Production Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">Shop Floor Visibility</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"The Control Tower."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Input:</strong> Operators dictate updates via voice notes (e.g., "Bending complete").</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Action:</strong> Updates Master Schedule and notifies Sales immediately.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Result:</strong> Real-time status on every job, accessible from your phone.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* How It Works */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                No New Software to Learn.
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Connecting Line */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#e5e7eb] -z-10 -translate-y-1/2"></div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {[
                                    { step: "01", title: "Email Drawing", desc: "Customer emails a PDF/DXF." },
                                    { step: "02", title: "Agent Analyzes", desc: "Checks geometry & steel prices." },
                                    { step: "03", title: "Draft Quote", desc: "Generates quote in your format." },
                                    { step: "04", title: "Approve", desc: "You click 'Approve' on WhatsApp." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg text-center">
                                        <div className="w-12 h-12 bg-[#bef264] rounded-full flex items-center justify-center text-[#022c22] font-bold text-xl mx-auto mb-4">
                                            {item.step}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#022c22] mb-2">{item.title}</h3>
                                        <p className="text-sm text-[#022c22]/70">{item.desc}</p>
                                    </div>
                                ))}
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
