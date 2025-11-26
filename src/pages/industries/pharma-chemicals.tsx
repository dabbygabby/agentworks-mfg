import Head from 'next/head';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, FileText, AlertTriangle, Search, BarChart3, Clock, ShieldCheck, Microscope, RefreshCw, AlertOctagon, ArrowRight } from 'lucide-react';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';

const PharmaChemicalCopy = {
    hero: {
        title: "Compliance without the chaos",
        subtitle: "Automate batch tracking, expiry management, and audit trails without adding a single sheet of paper to the floor.",
        ctaText: "See the Compliance Agent",
        imageSrc: "/pharma.png",
        ctaLink: "/connectors"
    },
    problemSection: {
        title: "Why Standard ERPs Fail in Pharma & Chemicals.",
        subtitle: "In Pharma and Chemicals, the paperwork is often heavier than the product. A generic ERP tracks financial value, but it fails to track process integrity. It doesn't force FIFO or validate a batch number before a mix.",
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
        title: "Intelligent Infrastructure for Process Industries.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: ShieldCheck,
                title: "Compliance Agent",
                subtitle: "Batch & Audit",
                tagline: '"The 24/7 Quality Auditor."',
                features: [
                    {
                        label: "Ingest",
                        description: "Reads batch labels, CoAs, and GRNs via photo."
                    },
                    {
                        label: "Verify",
                        description: "Instantly cross-checks received material against PO and expiry."
                    },
                    {
                        label: "Trace",
                        description: "Creates a digital thread. Find every customer for a recalled batch in seconds."
                    }
                ]
            },
            {
                icon: RefreshCw,
                title: "Sales Agent",
                subtitle: "Recurring Revenue",
                tagline: '"Never Miss a Refill."',
                features: [
                    {
                        label: "Predict",
                        description: 'Analyzes buying patterns (e.g., "Client X buys 500L every 20 days").'
                    },
                    {
                        label: "Nudge",
                        description: 'Proactively WhatsApps distributor: "Order due next week. Book now?"'
                    },
                    {
                        label: "Protect",
                        description: "Quotes based on today's raw material indices to protect margin."
                    }
                ]
            },
            {
                icon: AlertTriangle,
                title: "Inventory Agent",
                subtitle: "Expiry Guard",
                tagline: '"Zero Expired Inventory."',
                features: [
                    {
                        label: "Monitor",
                        description: "Continuously scans inventory age."
                    },
                    {
                        label: "Alert",
                        description: 'Triggers "Use First" alert to production for near-expiry batches.'
                    },
                    {
                        label: "Reconcile",
                        description: 'Automates "Physical vs. System" check using voice notes.'
                    }
                ]
            }
        ]
    }
}

const PharmaPage = () => {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Pharma & Chemicals | Agentworks</title>
                <meta name="description" content="Compliance without the chaos. Automate batch tracking, expiry management, and audit trails for process manufacturing." />
            </Head>

            <main>
                <IndustryHero
                    title="Compliance without the chaos"
                    subtitle="Automate batch tracking, expiry management, and audit trails without adding a single sheet of paper to the floor."
                    ctaText="See the Compliance Agent"
                    imageSrc="/pharma.png"
                    ctaLink="/connectors"
                />

                {/* The Compliance Gap (Problem) */}
                <DetailProblemSection
                    title={PharmaChemicalCopy.problemSection.title}
                    subtitle={PharmaChemicalCopy.problemSection.subtitle}
                    features={PharmaChemicalCopy.problemSection.features}
                />
                {/* The Solution: Specialized Agents */}
                <DetailAgentSection
                    title={PharmaChemicalCopy.agentSection.title}
                    ctaText={PharmaChemicalCopy.agentSection.ctaText}
                    ctaHref={PharmaChemicalCopy.agentSection.ctaHref}
                    agents={PharmaChemicalCopy.agentSection.agents}
                />
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
