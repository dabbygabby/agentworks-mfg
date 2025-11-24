import Head from 'next/head';
import Image from 'next/image';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, FileText, AlertTriangle, Search, BarChart3, Clock, ShieldCheck, Microscope, RefreshCw, AlertOctagon, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PharmaPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Pharma & Chemicals | Agentworks</title>
                <meta name="description" content="Compliance without the chaos. Automate batch tracking, expiry management, and audit trails for process manufacturing." />
            </Head>

            <main>
                {/* Hero Section */}
                <Section className="bg-[#f7fee7] rounded-b-[3rem] pt-32 pb-20 overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold text-[#022c22] mb-6 leading-tight">
                                    Compliance Without the <span className="text-[#65a30d]">Chaos</span>.
                                </h1>
                                <p className="text-xl text-[#022c22]/70 mb-8 leading-relaxed">
                                    Automate batch tracking, expiry management, and audit trails without adding a single sheet of paper to the floor.
                                </p>
                                <Button href="/connectors" variant="primary">
                                    See the Compliance Agent
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                            <div className="relative">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50">
                                    <Image
                                        src="/pharma.png"
                                        alt="Pharma Compliance Dashboard"
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

                {/* The Compliance Gap (Problem) */}
                <Section className="bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                Why Standard ERPs Fail in Process Manufacturing.
                            </h2>
                            <p className="text-xl text-[#022c22]/70 leading-relaxed">
                                In Pharma and Chemicals, the paperwork is often heavier than the product. A generic ERP tracks financial value, but it fails to track process integrity. It doesn't force FIFO or validate a batch number before a mix.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
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
                                Intelligent Infrastructure for Process Industries.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Compliance Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Compliance Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">Batch & Audit</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"The 24/7 Quality Auditor."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Ingest:</strong> Reads batch labels, CoAs, and GRNs via photo.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Verify:</strong> Instantly cross-checks received material against PO and expiry.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Trace:</strong> Creates a digital thread. Find every customer for a recalled batch in seconds.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Sales Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <RefreshCw className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Sales Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">Recurring Revenue</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"Never Miss a Refill."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Predict:</strong> Analyzes buying patterns (e.g., "Client X buys 500L every 20 days").</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Nudge:</strong> Proactively WhatsApps distributor: "Order due next week. Book now?"</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Protect:</strong> Quotes based on today's raw material indices to protect margin.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Inventory Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Inventory Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">Expiry Guard</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"Zero Expired Inventory."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Monitor:</strong> Continuously scans inventory age.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Alert:</strong> Triggers "Use First" alert to production for near-expiry batches.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Reconcile:</strong> Automates "Physical vs. System" check using voice notes.</span>
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

                {/* How It Works - Vertical Stepper */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                From Warehouse to Ledger—Zero Friction.
                            </h2>
                        </div>

                        <div className="relative pl-8 md:pl-0">
                            {/* Vertical Line */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#e5e7eb] -translate-x-1/2"></div>

                            <div className="space-y-12">
                                {[
                                    { step: "01", title: "Snap Photo", desc: "Warehouse staff snaps a photo of a drum's label upon arrival." },
                                    { step: "02", title: "Extract Data", desc: "Agentworks extracts Batch No, Mfg Date, and Expiry Date." },
                                    { step: "03", title: "Update ERP", desc: "Agent updates Tally/ERP inventory and sets a \"Expiry Alert.\"" },
                                    { step: "04", title: "Voice Issue", desc: "When production starts, operator speaks Batch No to \"issue\" material." }
                                ].map((item, i) => (
                                    <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        {/* Step Number Bubble */}
                                        <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-[#bef264] rounded-full border-4 border-white flex items-center justify-center z-10 shadow-lg">
                                            <span className="text-[#022c22] font-bold text-xl">{item.step}</span>
                                        </div>

                                        {/* Content Card */}
                                        <div className="w-full md:w-[calc(50%-40px)] ml-12 md:ml-0">
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow">
                                                <h3 className="text-xl font-bold text-[#022c22] mb-3">{item.title}</h3>
                                                <p className="text-[#022c22]/70">{item.desc}</p>
                                            </div>
                                        </div>

                                        {/* Empty space for the other side */}
                                        <div className="hidden md:block w-[calc(50%-40px)]"></div>
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
                                Proven Results in Process Manufacturing.
                            </h2>
                            <p className="text-xl text-[#022c22]/70">
                                See how Indian chemical plants are automating the hard stuff.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Case Study 1 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="inline-block px-4 py-1 bg-[#dcfce7] text-[#166534] rounded-full text-sm font-bold mb-6">
                                    The "Margin" Win
                                </div>
                                <h3 className="text-2xl font-bold text-[#022c22] mb-4">Top 10 Condom Manufacturer</h3>
                                <p className="text-[#022c22]/70 mb-6">
                                    <strong>Challenge:</strong> Sales teams quoting based on static lists, missing raw material spikes. 7-day quote cycle.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Speed:</strong> Quoting cycle reduced from 7 days to 2 hours.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Margin Uplift:</strong> +3% Point Increase (18% → 21%).</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Profit Impact:</strong> Generated ₹45 Lakhs in additional annual profit.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Case Study 2 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="inline-block px-4 py-1 bg-[#dcfce7] text-[#166534] rounded-full text-sm font-bold mb-6">
                                    The "Audit" Win
                                </div>
                                <h3 className="text-2xl font-bold text-[#022c22] mb-4">Mid-Sized API & Solvent Manufacturer</h3>
                                <p className="text-[#022c22]/70 mb-6">
                                    <strong>Challenge:</strong> Manual store-keeping. Monthly reconciliation paused production for 2 days.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Compliance:</strong> 100% Digital Audit Trail created automatically.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Efficiency:</strong> Month-end reconciliation reduced from 2 days to 4 hours.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Loss Prevention:</strong> Identified ₹5L of near-expiry stock in time.</span>
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
                            Audit-Proof Your Operations.
                        </h2>
                        <p className="text-xl text-[#022c22]/70 mb-10">
                            Stop losing money to expired stock and slow paperwork.
                        </p>
                        <Button href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" variant="primary">
                            Consult a Process Engineer
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </Section>
            </main>
        </div>
    );
};

export default PharmaPage;
