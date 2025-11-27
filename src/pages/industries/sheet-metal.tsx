import Head from 'next/head';
import Section from '../../components/ui/Section';
import { ArrowRightIcon, CheckCircle2, FileText, Scissors, Truck, BarChart3, Clock, ShieldCheck, ArrowRight, AlertOctagon, Ruler } from 'lucide-react';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';
import { DetailCTA } from '@src/components/industries/DetailCTA';
import { DetailCaseStudies } from '@src/components/industries/DetailCaseStudies';
import { meetingLink, sheetMetalQuotingMessage, whatsappLinkGenerator, whatsappLinkSheetMetalQuoting } from '@src/globals';

const SheetMetalCopy = {
    // 1. HERO SECTION (Focus on Velocity & Simplicity)
    hero: {
        title: "Fill Your Machines. Stop The Leakage.",
        subtitle: "Your lasers are fast. Your quoting is slow. Connect your WhatsApp, Tally, and Shop Floor to an intelligent layer that quotes in seconds and tracks every inch of scrap.",
        ctaText: "See It In Action", // More active
        imageSrc: "/sheet-metal.png",
        ctaLink: "/how-it-works"
    },

    // 2. PROBLEM SECTION (The "Silent Killers")
    problemSection: {
        title: "High-Speed Lasers. Low-Speed Data.",
        subtitle: "You invested Crores in fiber lasers to cut faster. But your profit is stuck in slow spreadsheets and un-tracked scrap.",
        features: [
            {
                title: "The Quoting Gamble", // Stronger than "Bottleneck"
                icon: <Clock className="w-8 h-8 text-[#ef4444]" />,
                desc: "Steel prices change daily. If your sales team quotes using last week's Excel sheet, you are donating your margin to the customer."
            },
            {
                title: "The Invisible Scrap",
                icon: <Scissors className="w-8 h-8 text-[#ef4444]" />,
                desc: "Your profit is sitting in the scrap yard. Usable offcuts are sold as 'Bhangar' because no one tracked them back into inventory."
            },
            {
                title: "Blind Production",
                icon: <AlertOctagon className="w-8 h-8 text-[#ef4444]" />,
                desc: "You don't know if the bending is done until you walk to the machine. You can't promise delivery dates because you can't see the floor."
            }
        ]
    },

    // 3. AGENT SECTION (Renamed for Clarity: Bot, Hunter, Monitor)
    agentSection: {
        title: `The Smartest Team You Never Hired`,
        subtitle: "Don't buy tools. Hire Agents. They read drawings, track steel, and update Tally 24/7.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: Ruler,
                title: "The Estimator (CAD Specialist)", // Renamed to sound like a role
                subtitle: "Auto-Quoting Agent",
                tagline: "Quotes in 60 seconds. Not 2 days.",
                features: [
                    { "label": "Ingest", "description": "Reads DXF/DWG/PDF files directly from WhatsApp or Email." },
                    { "label": "Physics", "description": "Calculates Cut Length, Pierce Count, and Nitrogen cost instantly." },
                    { "label": "Price", "description": "Connects to your live Steel Rates to ensure you never quote a loss." }
                ],
                learnMoreLink: "/agents?agent=The%20CAD%20Estimator"
            },
            {
                "icon": BarChart3,
                "title": "The Scrap Guardian", // Stronger name
                "subtitle": "Inventory & Offcuts",
                "tagline": "Turns 'Scrap' into 'Stock'.",
                features: [
                    {
                        "label": "Track",
                        "description": "Calculates exact scrap % after every Nesting job."
                    },
                    {
                        "label": "Recover",
                        "description": "Identifies usable offcuts (e.g. >500mm) and logs them back into Tally as stock."
                    },
                    {
                        "label": "Alert",
                        "description": "Alerts Design Team: 'Use the 4mm Offcut for this job' before cutting a fresh sheet."
                    }
                ],
                learnMoreLink: "/agents?agent=The%20Scrap%20Guardian"
            },
            {
                "icon": ShieldCheck,
                "title": "The Floor Commander",
                "subtitle": "Production Visibility",
                "tagline": "Real-time status without the meetings.",
                features: [
                    {
                        "label": "Listen",
                        "description": "Operators send voice notes: 'Job 502, Bending done.' No typing required."
                    },
                    {
                        "label": "Update",
                        "description": "Updates the Master Schedule and identifies bottlenecks instantly."
                    },
                    {
                        "label": "Notify",
                        "description": "Alerts Sales immediately so they can update the client."
                    }
                ],
                learnMoreLink: "/agents?agent=The%20Floor%20Commander"
            }
        ]
    },

    // 4. CASE STUDIES (Swapped Order: Velocity First, Admin Second)
    caseStudies: {
        title: "From 'Guesswork' to Guaranteed Margins.",
        description: "See how Indian fabricators are using Agentworks to scale.",
        studies: [
            {
                badge: 'The "Revenue" Win',
                title: 'Enclosure Manufacturer (Indore)',
                challenge: 'Sales team lost tenders due to slow estimation. Quoting complex assemblies took 7 days.',
                results: [
                    '<strong>97% Faster Quoting:</strong> Reduced time-to-quote from 7 days to 2 hours.',
                    '<strong>₹45L Profit Added:</strong> Won more bids by being the first to quote.',
                    '<strong>Zero Training:</strong> Staff started using it on Day 1 via WhatsApp.',
                ],
                link: '#case-study-2',
            },
            {
                badge: 'The "Cash Flow" Win',
                title: 'Fabrication Plant (Faridabad)',
                challenge: 'Finance team spent 40 hours/week manually entering purchase bills. Reconciliation was a nightmare.',
                results: [
                    '<strong>95% Automation:</strong> Reduced manual data entry to just 2 hours/week.',
                    '<strong>Zero-Day Closing:</strong> Books are closed daily, not monthly.',
                    '<strong>Staff Upgraded:</strong> Freed 2 accountants to focus on tax planning.',
                ],
                link: '#case-study-1',
            },
        ]
    },

    // 6. BOTTOM CTA
    cta: {
        title: "Your Competitor Just Quoted the Job You Are Still Calculating.",
        subtitle: "Speed wins tenders. Stop using Excel and start quoting in seconds.",
        href: whatsappLinkGenerator(sheetMetalQuotingMessage),
        ctaText: "Get The Quoting Agent"
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
                                {"From Drawing to Quote in 60 Seconds."}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Steps */}
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Email Drawing", desc: "Customer emails a PDF/DXF file directly to your sales inbox." },
                                    { step: "02", title: "AI Analysis", desc: "Agent extracts geometry (Cut Length, Pierces) and checks live Steel Rates." },
                                    { step: "03", title: "Draft Quote", desc: "Generates a professional PDF quote with your margin logic applied." },
                                    { step: "04", title: "One-Click Approve", desc: "You get a WhatsApp summary. Click 'Approve' to send it to the client." }
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
