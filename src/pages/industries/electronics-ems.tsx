import Head from 'next/head';
import Section from '../../components/ui/Section';
import { Cpu, Search, Layers, AlertCircle, TrendingUp, AlertTriangle, Check, ZapOff, TrendingDown, PackageX, PackageCheck } from 'lucide-react';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';
import { DetailCTA } from '@src/components/industries/DetailCTA';
import { DetailCaseStudies } from '@src/components/industries/DetailCaseStudies';
import { meetingLink } from '@src/globals';

const EMSCopy = {
    // 1. HERO SECTION (Focus on Precision & Speed)
    hero: {
        title: "Quote with Precision. Source with Speed. Ship without Delays.",
        subtitle: "Stop losing margins to component price volatility. We automate the chaos of 500-line BOMs, spot shortages before they happen, and execute procurement instantly—using the tools you already have.",
        ctaText: "Start Your Zero-Risk Pilot",
        imageSrc: "/electronics.png",
        ctaLink: "/how-it-works"
    },

    // 2. PROBLEM SECTION (The "Volatility Killers")
    problemSection: {
        title: "Your ERP Can’t Handle a 500-Line BOM.",
        subtitle: "In EMS, static data is dangerous. You are fighting a war against lead times and price drifts using spreadsheets that are obsolete the moment you save them.",
        features: [
            {
                title: 'The "Golden Screw" Problem',
                icon: <ZapOff className="w-8 h-8 text-[#ef4444]" />,
                desc: "99% of parts in stock means 0% production. One missing resistor stalls a ₹50 Lakh shipment."
            },
            {
                title: "Margin Erosion",
                icon: <TrendingDown className="w-8 h-8 text-[#ef4444]" />,
                desc: "You quoted the chip at ₹150. By the time you buy it, it’s ₹190. Your profit just vanished."
            },
            {
                title: "Dead Inventory",
                icon: <PackageX className="w-8 h-8 text-[#ef4444]" />,
                desc: "Capital trapped in 'Just-in-Case' stock because you can't trust your real-time data."
            }
        ]
    },

    // 3. AGENT SECTION (Sourcing, Kitting, Sales)
    agentSection: {
        title: "The Supply Chain That Never Sleeps",
        subtitle: "Deploy AI Agents that scrub BOMs, nag vendors, and track kitting status 24/7.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: Search,
                title: "Component Sourcing Engine",
                subtitle: "Procurement",
                tagline: "The Automated Buyer.",
                features: [
                    { "label": "Scan", "description": "Ingests complex BOMs (Excel/PDF) and identifies every unique Part Number." },
                    { "label": "Search", "description": "Checks availability and pricing across approved vendors/APIs in seconds." },
                    { "label": "Compare", "description": "Auto-highlights the lowest price and fastest delivery options." }
                ]
            },
            {
                icon: PackageCheck,
                title: "Component Kitting Manager",
                subtitle: "Stores & Production",
                tagline: "Real-Time Kitting Control.",
                features: [
                    { "label": "Kit", "description": "Verifies physical availability of all child parts before releasing the Work Order." },
                    { "label": "Alert", "description": "Flags 'Risk Parts' (shortages) days before the line is scheduled to run." },
                    { "label": "Consume", "description": "Auto-backflushes inventory when finished goods are packed." }
                ]
            },
            {
                icon: TrendingUp,
                title: "Account Upsell Assistant",
                subtitle: "Sales",
                tagline: "Revenue Growth Autopilot.",
                features: [
                    { "label": "Analyze", "description": "Reviews historical purchasing patterns (e.g., 'Client buys PCB A -> usually needs Cable B')." },
                    { "label": "Engage", "description": "Proactively nudges clients via WhatsApp to secure orders early." },
                    { "label": "Qualify", "description": "Filters incoming RFQs to prioritize high-value OEM contracts." }
                ]
            }
        ]
    },

    // 4. CASE STUDIES (Revenue & Sourcing Wins)
    caseStudies: {
        title: "Proven in the Chaos of Indian Electronics.",
        description: "See how manufacturers are moving from spreadsheets to automated growth.",
        studies: [
            {
                badge: 'The "Revenue" Win',
                title: 'Dolphin Device (Sensor Mfg)',
                challenge: 'Sales team was reactive, missing opportunities to sell complementary components.',
                results: [
                    '<strong>+22% Revenue Uplift:</strong> AI identified upsell patterns in chat history.',
                    '<strong>+45% Qualified Leads:</strong> Filtered Grade-A leads automatically.',
                    '<strong>Growth:</strong> Scaled revenue faster without adding new sales headcount.',
                ],
                link: '#case-study-1',
            },
            {
                badge: 'The "Sourcing" Win',
                title: 'Leading Tier-2 EMS Provider',
                challenge: 'Sourcing team spent 4 days just validating prices for a single RFQ. By then, stock was gone.',
                results: [
                    '<strong>Quote in Minutes:</strong> Reduced BOM costing time from 4 days to 30 minutes.',
                    '<strong>Price Lock:</strong> Secured raw material rates instantly to protect margins.',
                    '<strong>Zero Line Stops:</strong> Predictive shortage alerts prevented "waiting for parts" downtime.',
                ],
                link: '#case-study-2',
            },
        ]
    },

    // 5. BOTTOM CTA (ROI Based)
    cta: {
        title: "Your Margins Are Thin. Your Tech Cost Shouldn't Be.",
        subtitle: "We don't charge per seat. We charge a percentage of the profit we recover. If we don't fix your supply chain, you don't pay.",
        href: meetingLink,
        ctaText: "Calculate Your Sourcing ROI"
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
                                From BOM to Quote—Instantly.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Steps */}
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Send BOM", desc: "Customer sends a BOM file (Excel/CSV) via Email." },
                                    { step: "02", title: "Agent Parses", desc: "Agentworks parses 500+ line items and checks stock against Tally + Vendors." },
                                    { step: "03", title: "Costing Sheet", desc: "Agent generates a Costing Sheet highlighting \"Risk Parts\" (long lead times)." },
                                    { step: "04", title: "Approve", desc: "You add your margin and approve the Quote on WhatsApp." }
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
