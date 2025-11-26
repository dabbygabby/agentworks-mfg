import Head from 'next/head';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, ShoppingCart, Activity, Calculator, Clock, AlertTriangle, Eye, TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';
import { DetailCTA } from '@src/components/industries/DetailCTA';
import { DetailCaseStudies } from '@src/components/industries/DetailCaseStudies';

const PackagingPrintingCopy = {
    hero: {
        title: "Procurement is a race",
        subtitle: "Win it. Automate buying and tracking for high-volume packaging and printing.",
        ctaText: "See the Procurement Agent",
        imageSrc: "/packaging.png",
        ctaLink: "/connectors"
    },
    problemSection: {
        title: "Why Standard ERPs Fail in Packaging & Printing.",
        subtitle: `You operate on "Just-in-Time" delivery and volatile paper/ink prices. A generic ERP is a system of record, not a system of action. It doesn't help you negotiate with 10 vendors simultaneously, and it can't tell you if a job is stuck at Lamination or Die-Cutting without a phone call.`,
        features: [
            {
                title: "Procurement Drag",
                icon: <Clock className="w-8 h-8 text-[#ef4444]" />,
                desc: "You lose margins because comparing vendor quotes takes too long. By the time you decide, the price has moved."
            },
            {
                title: "Inventory Leaks",
                icon: <AlertTriangle className="w-8 h-8 text-[#ef4444]" />,
                desc: "Dead stock (leftover reels/sheets) piles up because no one knows it exists during the next estimate."
            },
            {
                title: "Production Blindness",
                icon: <Eye className="w-8 h-8 text-[#ef4444]" />,
                desc: "You have 50 jobs running. Knowing exactly which stage (Printing, Pasting, Cutting) each one is at requires chasing floor supervisors."
            }
        ]
    },
    agentSection: {
        title: "Intelligent Infrastructure for High-Volume Press.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: ShoppingCart,
                title: "Procurement Agent",
                subtitle: "Vendor Negotiation",
                tagline: '"The Ruthless Buyer."',
                features: [
                    {
                        label: "Ingest",
                        description: "Reads vendor quotes from Email and WhatsApp instantly."
                    },
                    {
                        label: "Compare",
                        description: "Auto-compares quotes against historical prices and market indices."
                    },
                    {
                        label: "Negotiate",
                        description: 'Automates follow-ups: "Your quote is 2% higher. Can you match?"'
                    }
                ]
            },
            {
                icon: Activity,
                title: "Operations Agent",
                subtitle: "Live Floor Visibility",
                tagline: '"Live Floor Visibility."',
                features: [
                    {
                        label: "Input",
                        description: 'Operators send voice updates: "Job 105, Printing done."'
                    },
                    {
                        label: "Track",
                        description: "Updates central dashboard and flags schedule delays."
                    },
                    {
                        label: "Notify",
                        description: 'Alerts dispatch team when job hits "Finished Goods".'
                    }
                ]
            },
            {
                icon: Calculator,
                title: "Costing Agent",
                subtitle: "Precision Estimates",
                tagline: '"Precision Estimates."',
                features: [
                    {
                        label: "Calculate",
                        description: "Calculates exact paper tonnage and ink coverage from dimensions."
                    },
                    {
                        label: "Optimize",
                        description: "Suggests optimal reel size/layout to minimize wastage."
                    },
                    {
                        label: "Quote",
                        description: "Generates customer-ready quote protecting your margin."
                    }
                ]
            }
        ]
    },
    caseStudies: {
        title: "Proven Results in Packaging.",
        description: "See how high-volume presses are using Agentworks to protect margins.",
        studies: [
            {
                badge: "The \"Procurement\" Win",
                title: "A Leading Packaging Brand in India",
                "challenge": "Procurement team spent days collating quotes. Production delayed by slow decisions.",
                "results": [
                    "<strong>90% Faster Cycles:</strong> Procurement cycle time dropped from 10 days to 2 hours.",
                    "<strong>Loss Prevention:</strong> Avoided ₹5 Lakhs in losses by halting low-ROI R&D.",
                    "<strong>Decision Speed:</strong> Enabled \"Same-Day Ordering\" for critical materials."
                ],
                "link": "#case-study-packaging-india"
            },
            {
                "badge": "The \"Visibility\" Win",
                "title": "Corrugated Box Manufacturer",
                "challenge": "Constant \"Where is my order?\" calls. Sales team had to physically check machine status.",
                "results": [
                    "<strong>Zero Follow-ups:</strong> Sales team has live status on their phone.",
                    "<strong>On-Time Delivery:</strong> Improved dispatch timelines by 15%.",
                    "<strong>Customer Satisfaction:</strong> Automated WhatsApp updates on dispatch."
                ],
                "link": "#case-study-corrugated-box"
            }
        ]
    },
    cta: {
        title: "Ready to Audit-Proof Your Operations?",
        subtitle: "Stop losing money to expired stock and slow paperwork.",
        href: "https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery",
        ctaText: "Consult an Engineer"
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
                                Smart Procurement—Without the Email Chaos.
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
