import Head from 'next/head';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, FileText, AlertTriangle, Search, BarChart3, Clock, ShieldCheck, Microscope, RefreshCw, AlertOctagon, ArrowRight } from 'lucide-react';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';
import { DetailCTA } from '@src/components/industries/DetailCTA';
import { DetailCaseStudies } from '@src/components/industries/DetailCaseStudies';
import { meetingLink } from '@src/globals';

const PharmaChemicalCopy = {
    hero: {
        title: "100% Audit Readiness. Zero Paperwork.",
        subtitle: "Run a cGMP-Compliant Plant Using Only Voice & WhatsApp. We turn shop-floor chatter into validated Batch Manufacturing Records (BMR), automate QC logs, and enforce FEFO inventory control.",
        ctaText: "Start Your Zero-Risk Pilot",
        imageSrc: "/pharma.png",
        ctaLink: "/connectors"
    },
    problemSection: {
        title: "Your Lab is Digital. Your Floor is Analog.",
        subtitle: "You invest in high-end ERPs, but your operators still run on notebooks and memory. This disconnect causes '483 Observations', dead stock, and yield gaps that generic software can't catch.",
        features: [
            {
                title: "The \"Yield Gap\"",
                icon: <BarChart3 className="w-8 h-8 text-[#ef4444]" />,
                desc: "You only find out a batch has low potency or high moisture content after it is finished. Real-time deviation control is impossible on paper."
            },
            {
                title: "Data Integrity Risks",
                icon: <FileText className="w-8 h-8 text-[#ef4444]" />,
                desc: "One '483 Observation' from the FDA or a failed customer audit due to missing paperwork can shut down your line for weeks."
            },
            {
                title: "Invisible Inventory",
                icon: <AlertOctagon className="w-8 h-8 text-[#ef4444]" />,
                desc: "Expired raw materials (dead stock) and 'lost' solvents in the warehouse eat 5-10% of your bottom line annually."
            }
        ]
    },
    agentSection: {
        title: "The Digital QA That Never Sleeps.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: ShieldCheck,
                title: "Quality Agent",
                subtitle: "Batch & Audit",
                tagline: '"The 24/7 Auditor."',
                features: [
                    {
                        label: "Ingest",
                        description: "Reads batch labels, CoAs, and GRNs via photo to create digital entry."
                    },
                    {
                        label: "Verify",
                        description: "Instantly cross-checks received material against PO specs and expiry constraints."
                    },
                    {
                        label: "Trace",
                        description: "Creates a digital thread to trace every batch to its final customer in seconds."
                    }
                ]
            },
            {
                icon: AlertTriangle,
                title: "Stores Agent",
                subtitle: "Expiry Watchdog",
                tagline: '"Shelf-Life Guardian."',
                features: [
                    {
                        label: "Monitor",
                        description: "Continuously scans inventory age across the warehouse."
                    },
                    {
                        label: "Alert",
                        description: 'Triggers "Use First" alerts to production for batches nearing expiry.'
                    },
                    {
                        label: "Reconcile",
                        description: 'Automates "Physical vs. System" stock checks using voice notes.'
                    }
                ]
            },
            {
                icon: RefreshCw,
                title: "Sales Agent",
                subtitle: "Distributor Management",
                tagline: '"Revenue Velocity."',
                features: [
                    {
                        label: "Predict",
                        description: 'Analyzes buying patterns to forecast needs (e.g., "Client X needs 500L every 20 days").'
                    },
                    {
                        label: "Nudge",
                        description: 'Proactively contacts distributors via WhatsApp to book orders before they run out.'
                    },
                    {
                        label: "Protect",
                        description: "Quotes based on current raw material indices to protect margins from volatility."
                    }
                ]
            }
        ]
    },
    caseStudies: {
        "title": "Compliance Without the Chaos.",
        "description": "See how Indian manufacturers are using Agentworks to secure their margins.",
        "studies": [
            {
                "badge": "The \"Margin\" Win",
                "title": "Top 10 Condom Manufacturer (Maharashtra)",
                "challenge": "Sales teams quoting based on static lists, missing raw material spikes. 7-day quote cycle.",
                "results": [
                    "<strong>Speed:</strong> Quoting cycle reduced from 7 days to 2 hours.",
                    "<strong>Margin Uplift:</strong> +3 Point Increase (18% → 21%).",
                    "<strong>Profit Impact:</strong> Generated ₹45 Lakhs in additional annual profit."
                ],
                "link": "#case-study-condom-manufacturer"
            },
            {
                "badge": "The \"Procurement\" Win",
                "title": "Packaging Manufacturing Leader",
                "challenge": "Slow procurement decisions leading to losses on R&D projects and material delays.",
                "results": [
                    "<strong>Loss Prevention:</strong> Avoided ₹5 Lakhs in losses by halting low-ROI R&D projects.",
                    "<strong>Speed:</strong> Procurement cycle time dropped from 10 days to 2 hours.",
                    "<strong>Execution:</strong> Enabled better decisions and faster execution."
                ],
                "link": "#case-study-packaging"
            }
        ]
    },
    cta: {
        title: "Your Plant. Your Rules. Our Agents.",
        subtitle: "Whether you make APIs, Formulations, or Specialty Chems—if your team can send a Voice Note, they are already trained to use Agentworks.",
        href: meetingLink,
        ctaText: "Book a 15-Min Strategy Call"
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
                <Section className="">
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
                <DetailCaseStudies
                    caseStudies={PharmaChemicalCopy.caseStudies.studies}
                    title={PharmaChemicalCopy.caseStudies.title}
                    description={PharmaChemicalCopy.caseStudies.description}
                />

                {/* Bottom CTA */}
                <DetailCTA
                    title={PharmaChemicalCopy.cta.title}
                    subtitle={PharmaChemicalCopy.cta.subtitle}
                    href={PharmaChemicalCopy.cta.href}
                    ctaText={PharmaChemicalCopy.cta.ctaText}
                />
            </main>
        </div>
    );
};

export default PharmaPage;
