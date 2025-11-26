import Head from 'next/head';
import Section from '../../components/ui/Section';
import { ArrowRightIcon, CheckCircle2, FileText, Scissors, Truck, BarChart3, Clock, ShieldCheck, ArrowRight, AlertOctagon, Ruler } from 'lucide-react';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';
import { DetailCTA } from '@src/components/industries/DetailCTA';
import { DetailCaseStudies } from '@src/components/industries/DetailCaseStudies';
import { meetingLink } from '@src/globals';

const SheetMetalCopy = {
    // 1. HERO SECTION (Focus on Velocity & Simplicity)
    hero: {
        title: "The Most Powerful Manufacturing ERP. Zero New Software to Learn.",
        subtitle: "Your floor staff already knows how to use the tool we run on—WhatsApp. Connect your machines, Tally, and team into one intelligent system without training a single person.",
        ctaText: "See How It Works",
        imageSrc: "/sheet-metal.png",
        ctaLink: "/how-it-works"
    },

    // 2. PROBLEM SECTION (The "Silent Killers")
    problemSection: {
        title: "Your Machines Are Modern. Your Process Is Manual.",
        subtitle: "You invested crores in high-speed Lasers and Turret Punches, but your profits are leaking through spreadsheets, paper travelers, and slow communication.",
        features: [
            {
                title: "The Quoting Bottleneck",
                icon: <Clock className="w-8 h-8 text-[#ef4444]" />,
                desc: "You win 0% of the bids you submit late. While your engineers calculate cut-lengths manually, your competitor has already closed the deal."
            },
            {
                title: "Un-tracked Offcuts",
                icon: <Scissors className="w-8 h-8 text-[#ef4444]" />,
                desc: "Your profit is sitting in the scrap yard. Usable sheet remnants are sold as scrap because no one tracked them back into inventory."
            },
            {
                title: "Blind Production Status",
                icon: <AlertOctagon className="w-8 h-8 text-[#ef4444]" />,
                desc: `"Is the welding done?" requires a physical walk to the floor. You can't promise delivery dates because you don't know the real-time status.`
            }
        ]
    },

    // 3. AGENT SECTION (Renamed for Clarity: Bot, Hunter, Monitor)
    agentSection: {
        title: `The Smartest Engineers You Never Hired`,
        subtitle: "Deploy AI agents that read technical drawings, track steel usage, and manage production flow 24/7—directly from the chat app your team already uses.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: Ruler,
                title: "CAD Quote Generator",
                subtitle: "Auto-Quoting",
                tagline: "The 10-Second Estimator",
                features: [
                    { "label": "Ingest", "description": "Accepts DXF, DWG, and PDF drawings directly via Email or WhatsApp." },
                    { "label": "Analyze", "description": "Instantly extracts geometry (Cut length, pierces, surface area) and bending operations." },
                    { "label": "Price", "description": "Applies your live steel rates and machine-hour costs to generate a ready-to-send PDF quote." }
                ]
            },
            {
                "icon": BarChart3,
                "title": "Scrap Recovery Tracker",
                "subtitle": "Inventory & Offcuts",
                "tagline": "The Margin Defender.",
                "features": [
                    {
                        "label": "Track",
                        "description": "Calculates the exact scrap percentage generated after a nesting job is complete."
                    },
                    {
                        "label": "Recover",
                        "description": "Identifies usable offcuts (remnants) and logs them back into Inventory as 'Usable Stock'."
                    },
                    {
                        "label": "Alert",
                        "description": "Notifies the design team to 'Use Offcuts First' when a compatible job arrives."
                    }
                ]
            },
            {
                "icon": ShieldCheck,
                "title": "Fabrication Floor Monitor",
                "subtitle": "Production Visibility",
                "tagline": "The Floor Commander.",
                "features": [
                    {
                        "label": "Input",
                        "description": "Operators dictate updates via voice notes: 'Job 502, Bending complete, moving to Powder Coating.'"
                    },
                    {
                        "label": "Sync",
                        "description": "Updates the Master Schedule instantly and recalculates delivery timelines."
                    },
                    {
                        "label": "Notify",
                        "description": "Automatically WhatsApps the client: 'Your order has moved to Assembly.'"
                    }
                ]
            }
        ]
    },

    // 4. CASE STUDIES (Swapped Order: Velocity First, Admin Second)
    caseStudies: {
        title: "From 'Guesswork' to Guaranteed Margins.",
        description: "See how Indian fabricators are using Agentworks to scale without adding more supervisors.",
        studies: [
            {
                badge: 'The "Admin" Win',
                title: 'A Leading Sheet Metal Fabrication Plant in Faridabad',
                challenge: 'Finance team spent 40 hours/week manually entering purchase bills. Month-end reconciliation took 7 full days .',
                results: [
                    '<strong>95% Finance Automation:</strong> Reduced manual data entry time from 40 hours to 2 hours per week .',
                    '<strong>Zero-Day Closing:</strong> Month-end reconciliation reduced from 7 days to near-zero .',
                    '<strong>Resource Shift:</strong> Freed up 2 Full-Time Employees to focus on revenue-generating work .',
                ],
                link: '#case-study-1',
            },
            {
                badge: 'The "Precision" Win',
                title: 'A Mid Sized Enclosures Manufacturer in Indore',
                challenge: 'Sales team lost tenders due to slow estimation cycles. Quoting complex assemblies took 7 days .',
                results: [
                    '<strong>97% Faster Quoting:</strong> Reduced time-to-quote from 7 days to 2 hours using the Quoting Agent .',
                    '<strong>Profit Impact:</strong> Generated an additional ₹45L+ in new annual profit .',
                    '<strong>Zero-Friction Adoption:</strong> Landed with a free pilot that required no training .',
                ],
                link: '#case-study-2',
            },
        ]
    },

    // 5. BOTTOM CTA (Industry Specific)
    cta: {
        title: "Stop Losing Bids to Slower Math",
        subtitle: "Your machines are fast. Your software should be too.",
        href: meetingLink,
        ctaText: "Build My Quoting Agent - Free Pilot"
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
                    subtitle={SheetMetalCopy.agentSection.subtitle}
                    ctaText={SheetMetalCopy.agentSection.ctaText}
                    ctaHref={SheetMetalCopy.agentSection.ctaHref}
                    agents={SheetMetalCopy.agentSection.agents}
                />

                {/* How It Works - Smart Quote Visual */}
                <Section className="">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                {"From Technical Drawing to Final Quote in 60 Seconds."}
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
