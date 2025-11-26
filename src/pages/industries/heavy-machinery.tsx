import Head from 'next/head';
import Section from '../../components/ui/Section';
import { Calendar, AlertTriangle, Clock, Check, EyeClosed, IndianRupee, HardHat, Magnet } from 'lucide-react';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';
import { DetailCTA } from '@src/components/industries/DetailCTA';
import { DetailCaseStudies } from '@src/components/industries/DetailCaseStudies';
import { meetingLink } from '@src/globals';

const HeavyMachineryCopy = {
    // 1. HERO SECTION (Focus on Profit & Visibility)
    hero: {
        title: "Turn Every Machine Into Profit—Not a Guess.",
        subtitle: "Stop quoting blind and losing on the floor. We turn your shop floor chaos into live P&L visibility, so you know exactly which jobs print money—before the machine even starts.",
        ctaText: "Calculate Your Hidden Margin Leak",
        imageSrc: "/heavy-machinery.png",
        ctaLink: "/roi-calculator"
    },

    // 2. PROBLEM SECTION (The "Financial Fear")
    problemSection: {
        title: "Your ERP Shows 'Profitable.' Your Bank Account Says Otherwise.",
        subtitle: "You're building ₹50 Lakh machines with 5,000-part BOMs. One missing component stalls the line. One design change kills your margin. And you usually find out 30 days after dispatch.",
        features: [
            {
                title: "Margin Blindness",
                icon: <EyeClosed className="w-8 h-8 text-[#ef4444]" />,
                desc: "You quoted ₹45L based on last quarter's steel prices. Actual cost today? ₹48L. You just shipped a ₹3 Lakh loss and celebrated it as revenue."
            },
            {
                title: "BOM Russian Roulette",
                icon: <AlertTriangle className="w-8 h-8 text-[#ef4444]" />,
                desc: "4,873 components. Your ERP says you have them all. But one ₹250 hydraulic seal is missing. A ₹1.2 Cr order sits idle for 6 days."
            },
            {
                title: "The 'Friday' Lie",
                icon: <Calendar className="w-8 h-8 text-[#ef4444]" />,
                desc: "Sales promises Friday delivery because 'Inventory' showed the sub-assembly was ready. Reality? Production is still at welding. The customer finds out before you do."
            }
        ]
    },

    // 3. AGENT SECTION (The "Nervous System")
    agentSection: {
        title: "From Blind Quotes to Bulletproof Margins",
        subtitle: "It’s not just software; it’s a nervous system. Your operators speak. Our AI calculates. Your P&L updates in real-time.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: IndianRupee, // Or Calculator
                title: "Job Cost Guardian",
                subtitle: "Finance & Costing",
                tagline: "The Ruthless Accountant",
                features: [
                    { "label": "Track", "description": "Allocates every specific welder's hours and every consumable bolt directly to the Job ID." },
                    { "label": "Alert", "description": "Flags cost overruns the moment actuals exceed estimates—mid-job, not post-mortem." },
                    { "label": "Report", "description": "Generates machine-wise P&L: 'Excavator #2401 made ₹4.2L. Crusher #2405 lost ₹80K.'" }
                ]
            },
            {
                icon: HardHat, // Or Radio
                title: "Shopfloor Command Center",
                subtitle: "Operations",
                tagline: "The Floor Manager",
                features: [
                    { "label": "Input", "description": "Operators don't type. They send voice notes: 'Job 5893, Boom fabrication complete.'" },
                    { "label": "Update", "description": "Gantt charts refresh instantly. Sales sees 'Welding done, Paint Shop next' without calling anyone." },
                    { "label": "Notify", "description": "Auto-alerts the Plant Head if any stage exceeds the planned duration by >10%." }
                ]
            },
            {
                icon: Magnet, // Or PackageCheck
                title: "BOM Kitting Agent",
                subtitle: "Procurement",
                tagline: "The Shortage Preventer",
                features: [
                    { "label": "Scan", "description": "Cross-checks all 5,000 BOM items against live inventory 7 days before Work Order release." },
                    { "label": "Flag", "description": "Highlights the 'Golden Screw' instantly: 'Missing: 12x M24 Bolts, Lead Time 4 days.'" },
                    { "label": "Procure", "description": "Auto-triggers purchase requests to ensure parts arrive before assembly begins." }
                ]
            }
        ]
    },

    // 4. CASE STUDIES (Margin & Visibility)
    caseStudies: {
        title: "From Guessing Costs to Guaranteeing Profits.",
        description: "How two Indian heavy machinery manufacturers stopped bleeding margin and started controlling their floor.",
        studies: [
            {
                badge: 'The "Margin" Win',
                title: 'Earthmoving Equipment Manufacturer',
                challenge: 'Quoted 40+ custom machines annually. Discovered 30% were unprofitable only after delivery due to un-tracked rework costs.',
                results: [
                    '<strong>97% Quote Accuracy:</strong> Variance dropped from ±18% to ±3%.',
                    '<strong>Recovered ₹45L:</strong> Identified and rejected margin-killing deals.',
                    '<strong>Real-Time P&L:</strong> Owners see per-machine profitability updating live.',
                ],
                link: '#case-study-1',
            },
            {
                badge: 'The "Visibility" Win',
                title: 'Hydraulic Press Manufacturer',
                challenge: 'Constant "Where is my order?" calls. Sales team physically walked the 40,000 sqft floor 3x daily to find machine status.',
                results: [
                    '<strong>Zero Status Calls:</strong> Dashboard shows live job progress.',
                    '<strong>18% Faster Delivery:</strong> Identified bottlenecks using voice data.',
                    '<strong>NPS Lift:</strong> On-time delivery went from 71% to 94%.',
                ],
                link: '#case-study-2',
            },
        ]
    },

    // 5. BOTTOM CTA (Profit Focused)
    cta: {
        title: "Stop Losing Margin on Your Most Complex Jobs.",
        subtitle: "You didn't get into heavy machinery to play accountant. Let our agents track the rupees while you build what moves the world.",
        href: meetingLink,
        ctaText: "Show Me My Profit Leaks"
    }
}

const HeavyMachineryPage = () => {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Heavy Machinery & OEM | Agentworks</title>
                <meta name="description" content="Where is the order? Stop guessing. Gain absolute visibility over long-lead production cycles for heavy machinery." />
            </Head>

            <main>
                {/* Hero Section */}
                <IndustryHero
                    title={HeavyMachineryCopy.hero.title}
                    subtitle={HeavyMachineryCopy.hero.subtitle}
                    ctaText={HeavyMachineryCopy.hero.ctaText}
                    imageSrc={HeavyMachineryCopy.hero.imageSrc}
                    ctaLink={HeavyMachineryCopy.hero.ctaLink}
                />
                {/* The Visibility Gap (Problem) */}
                <DetailProblemSection
                    title={HeavyMachineryCopy.problemSection.title}
                    subtitle={HeavyMachineryCopy.problemSection.subtitle}
                    features={HeavyMachineryCopy.problemSection.features}
                />
                {/* The Solution: Specialized Agents */}
                <DetailAgentSection
                    title={HeavyMachineryCopy.agentSection.title}
                    ctaText={HeavyMachineryCopy.agentSection.ctaText}
                    ctaHref={HeavyMachineryCopy.agentSection.ctaHref}
                    agents={HeavyMachineryCopy.agentSection.agents}
                />

                {/* How It Works - Digital Job Card Visual */}
                <Section className="">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                Every Machine. Every Stage. Every Rupee. Visible.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Steps */}
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Daily Plan", desc: "Production Manager receives a \"Daily Plan\" on WhatsApp at 8 AM." },
                                    { step: "02", title: "Operator Update", desc: "Operator snaps a photo of the finished sub-assembly (e.g., JCB Bucket)." },
                                    { step: "03", title: "Agent Tracks", desc: "Agent reads Job ID from photo/tag and updates status to \"Ready for QC.\"" },
                                    { step: "04", title: "Sales Notified", desc: "Sales team receives a notification: \"Job #5893 is on track for Friday dispatch.\"" }
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

                            {/* Visual - Digital Job Card */}
                            <div className="bg-gray-50 rounded-3xl shadow-xl border border-gray-100">
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                    <div className="p-4 border-b border-gray-100 bg-[#022c22] text-white flex justify-between items-center">
                                        <div>
                                            <div className="text-xs text-white/70 uppercase tracking-wider">Job Card</div>
                                            <div className="font-bold text-lg">#5893 - Excavator Bucket</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-white/70">Due Date</div>
                                            <div className="font-bold text-[#bef264]">Fri, 24 Nov</div>
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-6">
                                        {/* Progress Bar */}
                                        <div>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="font-bold text-[#022c22]">Overall Progress</span>
                                                <span className="text-[#022c22]">65%</span>
                                            </div>
                                            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#bef264] w-[65%]"></div>
                                            </div>
                                        </div>

                                        {/* Stages */}
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-4 h-4" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-sm font-bold text-[#022c22]">Fabrication</div>
                                                    <div className="text-xs text-gray-500">Completed yesterday</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 animate-pulse">
                                                    <Clock className="w-4 h-4" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-sm font-bold text-[#022c22]">Welding</div>
                                                    <div className="text-xs text-blue-600 font-medium">In Progress - Station 4</div>
                                                </div>
                                                <div className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                                    On Track
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 opacity-50">
                                                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center flex-shrink-0">
                                                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-sm font-bold text-[#022c22]">Paint Shop</div>
                                                    <div className="text-xs text-gray-500">Scheduled for Tomorrow</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 opacity-50">
                                                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center flex-shrink-0">
                                                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-sm font-bold text-[#022c22]">Final Assembly</div>
                                                    <div className="text-xs text-gray-500">Pending</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            <span className="text-xs text-gray-600">Live Update</span>
                                        </div>
                                        <button className="text-xs text-[#022c22] font-bold hover:underline">View Full Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Case Studies */}
                <DetailCaseStudies
                    caseStudies={HeavyMachineryCopy.caseStudies.studies}
                    title={HeavyMachineryCopy.caseStudies.title}
                    description={HeavyMachineryCopy.caseStudies.description}
                />

                {/* Bottom CTA */}
                <DetailCTA
                    title={HeavyMachineryCopy.cta.title}
                    subtitle={HeavyMachineryCopy.cta.subtitle}
                    href={HeavyMachineryCopy.cta.href}
                    ctaText={HeavyMachineryCopy.cta.ctaText}
                />
            </main>
        </div>
    );
};

export default HeavyMachineryPage;
