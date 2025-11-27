import Head from 'next/head';
import Section from '../../components/ui/Section';
import { Cpu, Search, Layers, AlertCircle, TrendingUp, AlertTriangle, Check, ZapOff, TrendingDown, PackageX, PackageCheck } from 'lucide-react';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';
import { DetailCTA } from '@src/components/industries/DetailCTA';
import { DetailCaseStudies } from '@src/components/industries/DetailCaseStudies';
import { electronicsEmsMessage, meetingLink, whatsappLinkGenerator } from '@src/globals';

const EMSCopy = {
    // 1. HERO SECTION
    // Goal: Address the fear of "Price Drift" (Quoting low, buying high).
    hero: {
        title: "The Component Market Moves Fast. Do You?",
        subtitle: "Stop quoting based on last week's Digikey prices. Connect your BOMs to an AI that tracks live global inventory, spots shortages instantly, and locks in margins before you accept the PO.",
        ctaText: "See It In Action",
        imageSrc: "/electronics.png", // Ensure image shows a PCB or BOM list
        ctaLink: "/how-it-works"
    },

    // 2. PROBLEM SECTION
    // Goal: Highlight the complexity of "The Mix" (High Mix, Low Volume).
    problemSection: {
        title: "500 Line Items. One Mistake. Zero Profit.",
        subtitle: "In EMS, you don't lose money on the big chips. You lose it on the tiny resistors you forgot to order.",
        features: [
            {
                title: 'The "Golden Screw"',
                icon: <ZapOff className="w-8 h-8 text-[#ef4444]" />,
                desc: "99% components in stock = 0% production. One missing ₹2 resistor stalls a ₹50 Lakh shipment. Your ERP doesn't warn you until it's too late."
            },
            {
                title: "The Quote Gap",
                icon: <TrendingDown className="w-8 h-8 text-[#ef4444]" />,
                desc: "You quoted the MCU at $4. By the time the PO arrives, the spot price is $6. You are now working for free."
            },
            {
                title: "Dead Stock Trap",
                icon: <PackageX className="w-8 h-8 text-[#ef4444]" />,
                desc: "You buy 'Safe Stock' to avoid shortages, but now your cash flow is trapped in a warehouse full of obsolete parts."
            }
        ]
    },

    // 3. AGENT SECTION
    // Goal: Position agents as "Procurement Specialists".
    agentSection: {
        title: "Your 24/7 Supply Chain Team",
        subtitle: "Don't hire more sourcing executives. Hire Agents that check 50 vendors in 5 seconds.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: Search,
                title: "The Sourcing Engine",
                subtitle: "Procurement Agent",
                tagline: "Scours the globe for the best price.",
                features: [
                    { "label": "Scan", "description": "Reads messy BOMs (Excel/PDF) and cleans Part Numbers automatically." },
                    { "label": "Search", "description": "Checks stock across Mouser, Digikey, and Local Traders instantly." },
                    { "label": "Compare", "description": "Flags 'High Risk' parts (Long Lead Time) before you quote." }
                ],
                // Maps to Global Agent: "Component Sourcing Engine"
                learnMoreLink: "/agents?agent=Component%20Sourcing%20Engine"
            },
            {
                icon: PackageCheck,
                title: "The Kit Manager",
                subtitle: "Stores Control",
                tagline: "No 'Missing Parts' at the line.",
                features: [
                    { "label": "Verify", "description": "Checks physical stock for every child-part before releasing the Job Card." },
                    { "label": "Alert", "description": "Flags shortages 3 days in advance: 'Order 100u of C24 Capacitor now'." },
                    { "label": "Backflush", "description": "Auto-deducts inventory when the finished PCB is packed." }
                ],
                // Maps to Global Agent: "Component Kitting Manager"
                learnMoreLink: "/agents?agent=Component%20Kitting%20Manager"
            },
            {
                icon: TrendingUp,
                title: "The Upsell Bot",
                subtitle: "Revenue Growth",
                tagline: "Mining gold from your chat history.",
                features: [
                    { "label": "Analyze", "description": "Notices patterns: 'Client A bought 500 PCBs, but no Cable Harness?'" },
                    { "label": "Nudge", "description": "Drafts a WhatsApp msg: 'Sir, do you need Cables for the recent order?'" },
                    { "label": "Filter", "description": "Ignores low-value inquiries to let sales focus on OEM deals." }
                ],
                // Maps to Global Agent: "Account Upsell Assistant"
                learnMoreLink: "/agents?agent=Account%20Upsell%20Assistant"
            }
        ]
    },

    // 5. CASE STUDIES
    caseStudies: {
        title: "Proven in the Chaos of Indian Electronics.",
        description: "See how EMS companies are securing stock and margins.",
        studies: [
            {
                badge: 'The "Speed" Win',
                title: 'Tier-2 EMS Provider (Noida)',
                challenge: 'Sourcing team spent 4 days validating prices for a single RFQ. By then, the stock was gone.',
                results: [
                    '<strong>30-Min Costing:</strong> Reduced BOM costing time from 4 days to 30 minutes.',
                    '<strong>Price Lock:</strong> Secured raw material rates instantly to protect margins.',
                    '<strong>Zero Stoppages:</strong> Predictive shortage alerts prevented line downtime.',
                ],
                link: '#case-study-2',
            },
            {
                badge: 'The "Growth" Win',
                title: 'Sensor Manufacturer (Pune)',
                challenge: 'Sales team was reactive, missing opportunities to sell accessories (Cables/Enclosures).',
                results: [
                    '<strong>+22% Revenue:</strong> AI identified upsell patterns in WhatsApp history.',
                    '<strong>Auto-Qualify:</strong> Filtered out low-margin leads automatically.',
                    '<strong>Efficiency:</strong> Scaled revenue without hiring new sales staff.',
                ],
                link: '#case-study-1',
            },
        ]
    },

    // 6. CTA
    cta: {
        title: "Don't let a ₹2 Resistor Stop a ₹50 Lakh Order.",
        subtitle: "Send us your toughest BOM. We will show you how fast we can source it.",
        // Message: "Hi, I have a complex BOM. I want to test the Sourcing Engine."
        href: whatsappLinkGenerator(electronicsEmsMessage),
        ctaText: "Test My BOM Now"
    }
}

const ElectronicsPage = () => {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Electronics & EMS | Agentworks</title>
                <meta name="description" content="One missing resistor shouldn't stop your line. Automate BOM sourcing and assembly schedules for EMS." />
            </Head>

            <main>
                {/* Hero Section */}
                <IndustryHero
                    title={EMSCopy.hero.title}
                    subtitle={EMSCopy.hero.subtitle}
                    ctaText={EMSCopy.hero.ctaText}
                    imageSrc={EMSCopy.hero.imageSrc}
                    ctaLink={EMSCopy.hero.ctaLink}
                />
                {/* The Component Gap (Problem) */}
                <DetailProblemSection
                    title={EMSCopy.problemSection.title}
                    subtitle={EMSCopy.problemSection.subtitle}
                    features={EMSCopy.problemSection.features}
                />
                {/* The Solution: Specialized Agents */}
                <DetailAgentSection
                    title={EMSCopy.agentSection.title}
                    ctaText={EMSCopy.agentSection.ctaText}
                    ctaHref={EMSCopy.agentSection.ctaHref}
                    agents={EMSCopy.agentSection.agents}
                />

                {/* How It Works - BOM Health Check Visual */}
                <Section className="">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                From BOM to Costing in Minutes
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Steps */}
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Upload BOM", desc: "Email your Excel BOM to the Agent. No re-formatting needed." },
                                    { step: "02", title: "Global Scan", desc: "Agent checks prices across APIs and your Local Vendor history." },
                                    { step: "03", title: "Risk Report", desc: "Receive a summary: '3 Parts are Out of Stock globally. Suggest Alternatives?'" },
                                    { step: "04", title: "Lock Price", desc: "Approve the cost and generate a valid Quote instantly." }
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
                            <div className="bg-gray-50 rounded-3xl shadow-xl border border-gray-100">
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
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Case Studies */}
                <DetailCaseStudies
                    caseStudies={EMSCopy.caseStudies.studies}
                    title={EMSCopy.caseStudies.title}
                    description={EMSCopy.caseStudies.description}
                />

                {/* Bottom CTA */}
                <DetailCTA
                    title={EMSCopy.cta.title}
                    subtitle={EMSCopy.cta.subtitle}
                    href={EMSCopy.cta.href}
                    ctaText={EMSCopy.cta.ctaText}
                />
            </main>
        </div>
    );
};

export default ElectronicsPage;
