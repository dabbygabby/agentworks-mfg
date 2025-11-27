import Head from 'next/head';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, ShoppingCart, Activity, Calculator, Clock, AlertTriangle, Eye, TrendingUp, TrendingDown, ArrowRight, Scale, EyeOff, Dices } from 'lucide-react';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';
import { DetailCTA } from '@src/components/industries/DetailCTA';
import { DetailCaseStudies } from '@src/components/industries/DetailCaseStudies';
import { meetingLink, packagingPrintingMessage, whatsappLinkGenerator } from '@src/globals';

const PackagingPrintingCopy = {
    // 1. HERO SECTION
    hero: {
        title: "The Paper Market Fluctuates Daily. Your Quotes Shouldn't.",
        subtitle: "Stop gambling on margins. Connect your WhatsApp to an AI that tracks live paper rates, calculates optimal reel sizes, and quotes profitable jobs in seconds.",
        ctaText: "See It In Action",
        imageSrc: "/packaging.png", // Ensure this image shows a Box or Reel
        ctaLink: "/how-it-works"
    },

    // 2. PROBLEM SECTION
    // Goal: Highlight "Hidden Waste" and "Excel Fatigue".
    problemSection: {
        title: "You Are Leaking Profit in 'Reel Ends' and 'Excel Errors'.",
        subtitle: "In low-margin packaging, a single calculation error or a bad deckle plan wipes out the entire profit. You are flying blind.",
        features: [
            {
                title: "The Paper Price Trap",
                icon: <TrendingDown className="w-8 h-8 text-[#ef4444]" />,
                desc: "You quoted based on last month's Kraft prices. Today, the mill increased rates by ₹2/kg. You just won a loss-making order."
            },
            {
                title: "The 'Excel' Bottleneck",
                icon: <Dices className="w-8 h-8 text-[#ef4444]" />,
                desc: "Your sales team relies on complex spreadsheets to calculate Flute + Liner + Printing. One formula error creates a pricing disaster."
            },
            {
                title: "Invisible Floor Status",
                icon: <EyeOff className="w-8 h-8 text-[#ef4444]" />,
                desc: "Is the job at Die-Cutting or Pasting? You don't know until you call the supervisor. You can't promise delivery dates with confidence."
            }
        ]
    },

    // 3. AGENT SECTION
    agentSection: {
        title: "Your specialized 'Digital Staff'",
        subtitle: "Don't hire more people to manage spreadsheets. Hire Agents that understand GSM, Deckle, and Dispatch.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: Scale,
                title: "The Paper Buyer",
                subtitle: "Procurement Agent",
                tagline: "Never overpay for Raw Material.",
                features: [
                    {
                        "label": "Ingest",
                        "description": "Reads incoming rate emails from Mills/Traders: 'Kraft 18BF is now ₹32'."
                    },
                    {
                        "label": "Compare",
                        "description": "Instantly compares against your historical purchase price and alerts you on WhatsApp."
                    },
                    {
                        "label": "Negotiate",
                        "description": "Drafts reply: 'Competitor X is offering at ₹31.5. Please match.'."
                    }
                ],
                // Maps to Global Agent: "Raw Material Negotiator"
                learnMoreLink: "/agents?agent=Raw%20Material%20Negotiator"
            },
            {
                icon: Calculator,
                title: "The Box Estimator",
                subtitle: "Sales & Costing",
                tagline: "Quotes that protect your margin.",
                features: [
                    {
                        "label": "Calculate",
                        "description": "Takes inputs (L x B x H, 5-Ply, 150 GSM) and calculates weight/cost instantly."
                    },
                    {
                        "label": "Optimize",
                        "description": "Suggests the best Reel Size (Deckle) to minimize side-trim wastage."
                    },
                    {
                        "label": "Quote",
                        "description": "Generates a PDF Quote using *Today's* paper rate, not last month's."
                    }
                ],
                // Maps to Global Agent: "Box Costing Calculator"
                learnMoreLink: "/agents?agent=Box%20Costing%20Calculator"
            },
            {
                icon: Eye,
                title: "The Floor Monitor",
                subtitle: "Production Tracking",
                tagline: "Track from Corrugation to Stitching.",
                features: [
                    {
                        "label": "Voice Input",
                        "description": "Operators send voice notes: 'Job 402, Pasting done, moving to strapping.'"
                    },
                    {
                        "label": "Live Gantt",
                        "description": "Updates the schedule instantly. Sales team sees the status without calling the floor."
                    },
                    {
                        "label": "Dispatch",
                        "description": "Auto-alerts the client: 'Your boxes are ready for pickup.'"
                    }
                ],
                // Maps to Global Agent: "Print Floor Tracker"
                learnMoreLink: "/agents?agent=Print%20Floor%20Tracker"
            }
        ]
    },

    // 4. CASE STUDIES
    caseStudies: {
        title: "Proven Results in Packaging.",
        description: "See how Box Manufacturers & Printers are securing margins.",
        studies: [
            {
                badge: 'The "Speed" Win',
                title: 'Corrugated Box Mfr (Gujarat)',
                challenge: 'Lost 40% of RFQs to competitors because calculating "Ups" and "Deckle" took too long.',
                results: [
                    '<strong>4-Hour Quoting:</strong> Reduced quoting cycle from 3 days to 4 hours.',
                    '<strong>Saved ₹8.2L:</strong> AI suggested better deckle planning, reducing side-wastage.',
                    '<strong>Zero Math Errors:</strong> Eliminated losses from wrong GSM calculations.',
                ],
                link: '#case-study-packaging-1',
            },
            {
                badge: 'The "Visibility" Win',
                title: 'Flexible Packaging Converter',
                challenge: 'Sales team spent 15+ hours/week physically checking if printing/slitting was done.',
                results: [
                    '<strong>Zero Status Calls:</strong> Sales team checks status on phone. Floor interruptions stopped.',
                    '<strong>22% Faster Dispatch:</strong> Real-time alerts on job completion reduced dispatch lag.',
                    '<strong>Happy Clients:</strong> Customers get auto-updates when material is ready.',
                ],
                link: '#case-study-packaging-2',
            },
        ]
    },

    // 5. BOTTOM CTA
    cta: {
        title: "Your Excel Sheet is Costing You Money.",
        subtitle: "Test our Box Estimator against your best sales guy. See who calculates cost faster and accurately.",
        href: whatsappLinkGenerator(packagingPrintingMessage),
        ctaText: "Test My Box Spec Now"
    }
}

const PackagingPage = () => {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Packaging & Printing | Agentworks</title>
                <meta name="description" content="Procurement is a race. Win it. Automate buying and tracking for high-volume packaging and printing." />
            </Head>

            <main>
                {/* Hero Section */}
                <IndustryHero
                    title={PackagingPrintingCopy.hero.title}
                    subtitle={PackagingPrintingCopy.hero.subtitle}
                    ctaText={PackagingPrintingCopy.hero.ctaText}
                    imageSrc={PackagingPrintingCopy.hero.imageSrc}
                    ctaLink={PackagingPrintingCopy.hero.ctaLink}
                />

                {/* The Velocity Gap (Problem) */}
                <DetailProblemSection
                    title={PackagingPrintingCopy.problemSection.title}
                    subtitle={PackagingPrintingCopy.problemSection.subtitle}
                    features={PackagingPrintingCopy.problemSection.features}
                />

                {/* The Solution: Specialized Agents */}
                <DetailAgentSection
                    title={PackagingPrintingCopy.agentSection.title}
                    ctaText={PackagingPrintingCopy.agentSection.ctaText}
                    ctaHref={PackagingPrintingCopy.agentSection.ctaHref}
                    agents={PackagingPrintingCopy.agentSection.agents}
                />
                {/* How It Works - Comparison Table Visual */}
                <Section className="">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                Stop Buying Paper Blind
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Steps */}
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Voice Request", desc: "You send a \"Material Request\" voice note (e.g., \"Need 5 tons of 300 GSM Duplex\")." },
                                    { step: "02", title: "Agent RFQs", desc: "Agent sends RFQs to your top 5 vendors automatically." },
                                    { step: "03", title: "Comparison", desc: "Agent compiles all incoming quotes into a single comparison table on WhatsApp." },
                                    { step: "04", title: "Approve", desc: "You click \"Approve Vendor B\" -> PO is generated and sent." }
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

                            {/* Visual - Comparison Table */}
                            <div className="bg-gray-50 rounded-3xl shadow-xl border border-gray-100">
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                    <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                                        <span className="font-bold text-[#022c22]">Quote Comparison: 300 GSM Duplex</span>
                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Live</span>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left">
                                            <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3">Vendor</th>
                                                    <th className="px-4 py-3">Price/Ton</th>
                                                    <th className="px-4 py-3">Delivery</th>
                                                    <th className="px-4 py-3">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-100">
                                                    <td className="px-4 py-3 font-medium text-[#022c22]">Vendor A</td>
                                                    <td className="px-4 py-3 text-red-600 flex items-center gap-1">
                                                        ₹42,500 <TrendingUp className="w-3 h-3" />
                                                    </td>
                                                    <td className="px-4 py-3 text-gray-500">3 Days</td>
                                                    <td className="px-4 py-3">
                                                        <button className="text-gray-400 hover:text-gray-600">Negotiate</button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-100 bg-green-50/50">
                                                    <td className="px-4 py-3 font-medium text-[#022c22]">Vendor B</td>
                                                    <td className="px-4 py-3 text-green-600 flex items-center gap-1">
                                                        ₹41,200 <TrendingDown className="w-3 h-3" />
                                                    </td>
                                                    <td className="px-4 py-3 text-green-700 font-medium">Tomorrow</td>
                                                    <td className="px-4 py-3">
                                                        <button className="bg-[#022c22] text-white px-3 py-1 rounded-lg text-xs hover:bg-[#022c22]/90">Approve</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 font-medium text-[#022c22]">Vendor C</td>
                                                    <td className="px-4 py-3 text-gray-600">₹42,000</td>
                                                    <td className="px-4 py-3 text-gray-500">5 Days</td>
                                                    <td className="px-4 py-3">
                                                        <button className="text-gray-400 hover:text-gray-600">Negotiate</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Case Studies */}
                <DetailCaseStudies
                    caseStudies={PackagingPrintingCopy.caseStudies.studies}
                    title={PackagingPrintingCopy.caseStudies.title}
                    description={PackagingPrintingCopy.caseStudies.description}
                />
                {/* Bottom CTA */}
                <DetailCTA
                    title={PackagingPrintingCopy.cta.title}
                    subtitle={PackagingPrintingCopy.cta.subtitle}
                    href={PackagingPrintingCopy.cta.href}
                    ctaText={PackagingPrintingCopy.cta.ctaText}
                />
            </main>
        </div>
    );
};

export default PackagingPage;
