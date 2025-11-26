import Head from 'next/head';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, FileText, Scissors, Truck, BarChart3, Clock, ShieldCheck, ArrowRight, AlertOctagon } from 'lucide-react';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';
import { DetailCTA } from '@src/components/industries/DetailCTA';
import { DetailCaseStudies } from '@src/components/industries/DetailCaseStudies';

const SheetMetalCopy = {
    // 1. HERO SECTION (Focus on Velocity & Simplicity)
    hero: {
        title: "Stop Losing Bids Because You Quote Too Slow.",
        subtitle: "Turn DXFs into professional quotes in minutes using WhatsApp. No complex software. No data entry. We don't replace your systems; we feed them.",
        ctaText: "Get a Sample Quote",
        imageSrc: "/sheet-metal.png",
        ctaLink: "/agents"
    },

    // 2. PROBLEM SECTION (The "Silent Killers")
    problemSection: {
        title: "The 'Silent Killers' of Fabrication Profits.",
        subtitle: "The laser is fast, but the paperwork is slow. Standard ERPs treat metal like retail items—they don't understand cuts, pierces, or offcuts.",
        features: [
            {
                title: "The Quoting Bottleneck",
                icon: <Clock className="w-8 h-8 text-[#ef4444]" />,
                desc: "Your engineers burn hours manually calculating cut-lengths and pierces. By the time you send the price, the customer has gone with the guy who quoted yesterday."
            },
            {
                title: "The 'Invisible' Scrap",
                icon: <Scissors className="w-8 h-8 text-[#ef4444]" />,
                desc: "You pay for the whole sheet, but quote for the part. If you aren't tracking usable offcuts and nesting efficiency in real-time, you are giving away margin."
            },
            {
                title: "The 'Where is it?' Game",
                icon: <AlertOctagon className="w-8 h-8 text-[#ef4444]" />,
                desc: "A customer calls about their order. You have to physically walk to the welding station or hunt down an operator to find out if it's done."
            }
        ]
    },

    // 3. AGENT SECTION (Renamed for Clarity: Bot, Hunter, Monitor)
    agentSection: {
        title: "Your Shop Runs on Metal. Agentworks Runs the Data.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: FileText,
                title: "The Quoting Bot",
                subtitle: "Sales & Estimation",
                tagline: "Stop counting holes manually.",
                features: [
                    { "label": "Read", "description": "Forward a customer email with PDF/DXF directly to Agentworks." },
                    { "label": "Calc", "description": "Instantly calculates surface area, cut path, pierces, and bends." },
                    { "label": "Price", "description": "Checks live steel rates and machine costs to generate a draft quote." }
                ]
            },
            {
                icon: BarChart3,
                title: "The Scrap Hunter",
                subtitle: "Inventory & Offcuts",
                tagline: "Turn the 'bone pile' into cash.",
                features: [
                    { "label": "Capture", "description": "Tracks nesting data from your laser software automatically." },
                    { "label": "Save", "description": "Calculates 'usable scrap' left on a sheet and logs it to inventory." },
                    { "label": "Alert", "description": "Reminds you to use an offcut instead of a new sheet for small jobs." }
                ]
            },
            {
                icon: ShieldCheck,
                title: "The Floor Monitor",
                subtitle: "Production Tracking",
                tagline: "Get updates without nagging.",
                features: [
                    { "label": "Input", "description": "Operators send Voice Notes via WhatsApp: 'Job 304, Bending complete.'" },
                    { "label": "Action", "description": "AI transcribes voice, updates the Schedule, and notifies the Office." },
                    { "label": "Result", "description": "View real-time status of every job on your phone, from anywhere." }
                ]
            }
        ]
    },

    // 4. CASE STUDIES (Swapped Order: Velocity First, Admin Second)
    caseStudies: {
        title: "Proven Results on the Factory Floor.",
        description: "See how fabricators are using Agentworks to unlock capacity.",
        studies: [
            {
                badge: 'The "Velocity" Win',
                title: 'High-Mix Laser Cutting Shop',
                challenge: 'Engineers spent 6 hours/day manually calculating cut-lengths. Quoting was the bottleneck.',
                results: [
                    '<strong>Quoting Time:</strong> Reduced from 4 days to 2 hours.',
                    '<strong>Win Rate:</strong> Increased 18% (First to quote wins).',
                    '<strong>Accuracy:</strong> Zero manual calculation errors.',
                ],
                link: '#case-study-2',
            },
            {
                badge: 'The "Admin" Win',
                title: 'Heavy Equipment Fabricator',
                challenge: 'Floor staff refused to fill out job cards. Office didn\'t know job status.',
                results: [
                    '<strong>Adoption:</strong> 100% staff usage (via WhatsApp Voice).',
                    '<strong>Visibility:</strong> Real-time WIP tracking without walking the floor.',
                    '<strong>Finance:</strong> Month-end reconciliation dropped from 7 days to 4 hours.',
                ],
                link: '#case-study-1',
            },
        ]
    },

    // 5. BOTTOM CTA (Challenge Based)
    cta: {
        title: "Send us your messiest drawing.",
        subtitle: "Challenge us. Upload a complex DXF file and see how fast Agentworks can quote it. No cost. No obligation.",
        href: "https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery",
        ctaText: "Test Agentworks Free"
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
                    ctaText={SheetMetalCopy.agentSection.ctaText}
                    ctaHref={SheetMetalCopy.agentSection.ctaHref}
                    agents={SheetMetalCopy.agentSection.agents}
                />

                {/* How It Works - Smart Quote Visual */}
                <Section className="">
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
