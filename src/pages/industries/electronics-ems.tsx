import Head from 'next/head';
import Image from 'next/image';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, Cpu, Zap, Search, Layers, AlertCircle, BarChart3, TrendingUp, AlertTriangle, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ElectronicsPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Electronics & EMS | Agentworks</title>
                <meta name="description" content="One missing resistor shouldn't stop your line. Automate BOM sourcing and assembly schedules for EMS." />
            </Head>

            <main>
                {/* Hero Section */}
                <Section className="bg-[#f7fee7] rounded-b-[3rem] pt-32 pb-20 overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold text-[#022c22] mb-6 leading-tight">
                                    One Missing Resistor Shouldn't <span className="text-[#65a30d]">Stop Your Line</span>.
                                </h1>
                                <p className="text-xl text-[#022c22]/70 mb-8 leading-relaxed">
                                    Manage massive BOMs, volatile component sourcing, and complex assembly schedules without drowning in spreadsheets.
                                </p>
                                <Button href="/connectors" variant="primary">
                                    See the Sourcing Agent
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                            <div className="relative">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50">
                                    <Image
                                        src="/electronics.png"
                                        alt="Electronics Sourcing Dashboard"
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

                {/* The Component Gap (Problem) */}
                <Section className="bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                Why Standard ERPs Fail in Electronics.
                            </h2>
                            <p className="text-xl text-[#022c22]/70 leading-relaxed">
                                You deal in Bills of Materials (BOMs) with thousands of line items. A generic ERP treats a complex IC the same way it treats a screw. It doesn't track market availability, obsolescence, or cross-reference alternatives.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
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
                                Intelligent Infrastructure for EMS.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Sourcing Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Sourcing Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">The Automated Buyer</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"Clear-to-Build in Minutes."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Scan:</strong> Ingests BOM (Excel/PDF) and identifies every Part Number.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Search:</strong> Checks availability/pricing across vendors and APIs instantly.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Compare:</strong> Highlights lowest price and fastest delivery automatically.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Sales Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Sales Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">Revenue Growth</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"Upsell on Autopilot."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Analyze:</strong> Reviews history to find patterns (e.g., "Buy A &rarr; Need B").</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Engage:</strong> Nudges clients via WhatsApp: "Need wiring harness for this batch?"</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Qualify:</strong> Filters leads to prioritize high-value OEM contracts.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Inventory Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <Layers className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Inventory Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">Store Control</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"Real-Time Kitting."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Kit:</strong> Checks if all components are physically available before production.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Alert:</strong> Flags shortages before line stoppages occur.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Consume:</strong> Deducts from stock via "Backflush" when unit is packed.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex w-full items-center justify-center mt-12">
                            <Link href="/agents" className="bg-[#bef264] font-semibold hover:bg-lime-400 text-[#022c22] px-6 py-2 rounded-full flex items-center gap-2 transition-colors">
                                Explore All Agents <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </Section>

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
                <Section className="bg-[#f7fee7] rounded-[3rem]">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                Proven Results in Electronics.
                            </h2>
                            <p className="text-xl text-[#022c22]/70">
                                See how EMS providers are using AI to scale revenue and speed.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Case Study 1 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="inline-block px-4 py-1 bg-[#dcfce7] text-[#166534] rounded-full text-sm font-bold mb-6">
                                    The "Revenue" Win
                                </div>
                                <h3 className="text-2xl font-bold text-[#022c22] mb-4">Dolphin Device (Sensor Mfg)</h3>
                                <p className="text-[#022c22]/70 mb-6">
                                    <strong>Challenge:</strong> Reactive sales team missing upsell opportunities.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Revenue Uplift:</strong> +22% Increase via AI-identified upsells.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Lead Quality:</strong> +45% Increase in qualified leads (Grade-A).</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Efficiency:</strong> Growing faster with the same team size.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Case Study 2 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="inline-block px-4 py-1 bg-[#dcfce7] text-[#166534] rounded-full text-sm font-bold mb-6">
                                    The "Sourcing" Win
                                </div>
                                <h3 className="text-2xl font-bold text-[#022c22] mb-4">PCB Assembly Provider</h3>
                                <p className="text-[#022c22]/70 mb-6">
                                    <strong>Challenge:</strong> Quoting took 2 days. Prices changed before quote acceptance, eating margins.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Speed:</strong> BOM Costing reduced from 2 days to 30 minutes.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Accuracy:</strong> Real-time flagging of "Out of Stock" components.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Win Rate:</strong> 15% increase in orders due to faster turnaround.</span>
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
                            Tame Your Bill of Materials.
                        </h2>
                        <p className="text-xl text-[#022c22]/70 mb-10">
                            Stop losing days to spreadsheet costing. Get a clear-to-build report in minutes.
                        </p>
                        <Button href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" variant="primary">
                            Consult an EMS Expert
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </Section>
            </main>
        </div>
    );
};

export default ElectronicsPage;
