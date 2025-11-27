import Head from 'next/head';
import Section from '../../components/ui/Section';
import { FileText, AlertTriangle, BarChart3, ShieldCheck, RefreshCw, AlertOctagon } from 'lucide-react';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';
import { DetailCTA } from '@src/components/industries/DetailCTA';
import { DetailCaseStudies } from '@src/components/industries/DetailCaseStudies';
import { digitalTraceabilityMessage, whatsappLinkGenerator } from '@src/globals';

const PharmaChemicalCopy = {
    // 1. HERO SECTION
    // Goal: Address the "Paperwork vs. Reality" gap.
    hero: {
        title: "Pass Every Audit. Zero New Paperwork.",
        subtitle: "Run a cGMP-Compliant plant using the tool your operators already know—WhatsApp. We turn shop-floor voice notes into validated Batch Manufacturing Records (BMR) and enforce FEFO automatically.",
        ctaText: "Meet The BMR Guardian",
        imageSrc: "/pharma.png", // Ensure image shows a Batch Record or Lab Report
        ctaLink: "/agents?agent=The%20BMR%20Guardian"
    },

    // 2. PROBLEM SECTION
    // Goal: Highlight "Data Integrity" and "Yield Loss".
    problemSection: {
        title: "Your Lab is Digital. Your Floor is Dangerous.",
        subtitle: "You invest in high-end ERPs, but your operators still fill logbooks at the end of the shift from memory. This 'Data Gap' is a compliance ticking time bomb.",
        features: [
            {
                title: "The 'End-of-Shift' Lie", // Strong hook
                icon: <FileText className="w-8 h-8 text-[#ef4444]" />,
                desc: "Operators fill QC logs hours after the actual check. You have no real-time data integrity, putting your license at risk during audits."
            },
            {
                title: "The Yield Leak",
                icon: <BarChart3 className="w-8 h-8 text-[#ef4444]" />,
                desc: "You only discover low potency or high moisture *after* the batch is finished. You need real-time deviation alerts, not post-mortem reports."
            },
            {
                title: "The Expiry Trap",
                icon: <AlertOctagon className="w-8 h-8 text-[#ef4444]" />,
                desc: "Your ERP says 'Use Batch A', but the worker grabs 'Batch B' because it's closer. FEFO fails on the floor, leading to expired dead stock."
            }
        ]
    },

    // 3. AGENT SECTION
    // Goal: Map to Global Agents (Quality Auditor, Expiry Watchdog, Distributor Refill)
    agentSection: {
        title: "Your 24/7 Quality & Stores Team",
        subtitle: "Don't hire more QA staff to check paperwork. Hire Agents that verify CoAs and enforce FEFO logic instantly.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: ShieldCheck,
                title: "The Quality Auditor", // Global Name
                subtitle: "QC & Compliance",
                tagline: "The Zero-Defect Guardian.",
                features: [
                    {
                        "label": "Ingest",
                        "description": "Reads incoming CoAs and Lab Reports via photo. Digitizes specifications instantly."
                    },
                    {
                        "label": "Verify",
                        "description": "Cross-checks received material against PO specs. Flags 'Out of Spec' material before unloading."
                    },
                    {
                        "label": "Trace",
                        "description": "Creates a searchable 'Digital Passport' for every batch. Retrieve records in 3 seconds."
                    }
                ],
                // Maps to Global Agent: "The Quality Auditor"
                learnMoreLink: "/agents?agent=The%20Quality%20Auditor"
            },
            {
                icon: AlertTriangle,
                title: "Expiry Watchdog", // Global Name
                subtitle: "Stores Management",
                tagline: "Shelf-Life Guardian.",
                features: [
                    {
                        "label": "Monitor",
                        "description": "Scans inventory age daily. Identifies batches nearing expiry."
                    },
                    {
                        "label": "Alert",
                        "description": "Triggers 'Use First' alerts to Production. Enforces FEFO (First Expired First Out) strictly."
                    },
                    {
                        "label": "Audit",
                        "description": "Automates stock-taking via voice notes: 'Batch 202, 5 drums remaining'."
                    }
                ],
                // Maps to Global Agent: "Expiry Watchdog"
                learnMoreLink: "/agents?agent=Expiry%20Watchdog"
            },
            {
                icon: RefreshCw,
                title: "Distributor Refill Manager", // Global Name
                subtitle: "Sales Automation",
                tagline: "Never miss a re-order.",
                features: [
                    {
                        "label": "Predict",
                        "description": "Analyzes consumption: 'Client X buys 500L Solvent every 20 days. They are due tomorrow.'"
                    },
                    {
                        "label": "Nudge",
                        "description": "Sends auto-WhatsApp: 'Sir, your stock might be low. Shall we book 500L?'"
                    },
                    {
                        "label": "Protect",
                        "description": "Quotes based on *today's* raw material index to protect margins."
                    }
                ],
                // Maps to Global Agent: "Distributor Refill Manager"
                learnMoreLink: "/agents?agent=Distributor%20Refill%20Manager"
            }
        ]
    },

    // 5. CASE STUDIES
    caseStudies: {
        title: "Compliance Without the Chaos.",
        description: "See how Indian Pharma & Chemical plants are securing their operations.",
        studies: [
            {
                badge: 'The "Margin" Win',
                title: 'Condom Manufacturer (Maharashtra)',
                challenge: 'Sales teams were quoting using old Latex prices, missing spikes in raw material costs.',
                results: [
                    '<strong>2 Hour Cycle:</strong> Quoting reduced from 7 days to 2 hours.',
                    '<strong>+3% Margin:</strong> Real-time pricing uplifted net margin from 18% to 21%.',
                    '<strong>₹45L Profit:</strong> Direct bottom-line impact in Year 1.',
                ],
                link: '#case-study-condom-manufacturer',
            },
            {
                badge: 'The "Procurement" Win',
                title: 'Specialty Chemical Leader',
                challenge: 'Slow decisions on R&D procurement caused project delays and material wastage.',
                results: [
                    '<strong>Loss Prevention:</strong> Halted low-ROI R&D projects by tracking material costs instantly.',
                    '<strong>Speed:</strong> Purchase decision cycle dropped from 10 days to 2 hours.',
                    '<strong>Better Data:</strong> Management now sees real-time R&D spend visibility.',
                ],
                link: '#case-study-packaging',
            },
        ]
    },

    // 6. CTA
    // Goal: Challenge their "Audit Readiness".
    cta: {
        title: "Can You Find 'Batch #2904' Records in 30 Seconds?",
        subtitle: "If an auditor asks for a record today, will you panic or search? Test our Digital Traceability now.",
        href: whatsappLinkGenerator(digitalTraceabilityMessage),
        ctaText: "Test Audit Readiness"
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
                    title={PharmaChemicalCopy.hero.title}
                    subtitle={PharmaChemicalCopy.hero.subtitle}
                    ctaText={PharmaChemicalCopy.hero.ctaText}
                    imageSrc={PharmaChemicalCopy.hero.imageSrc}
                    ctaLink={PharmaChemicalCopy.hero.ctaLink}
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
                                    { step: "01", title: "Snap Label", desc: "Storekeeper snaps a photo of the drum label/CoA upon arrival." },
                                    { step: "02", title: "AI Verify", desc: "Agent validates Batch No & Expiry against the PO. Alerts if 'Short Expiry'." },
                                    { step: "03", title: "Digital Entry", desc: "Inventory is updated in Tally/ERP with a 'FEFO Priority' tag." },
                                    { step: "04", title: "Voice Issue", desc: "Operator speaks: 'Issuing Batch A to Line 1'. Agent confirms if it's the correct batch." }
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
