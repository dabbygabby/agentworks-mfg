import Head from 'next/head';
import Section from '../../components/ui/Section';
import { Calendar, AlertTriangle, Clock, Check, EyeClosed, IndianRupee, HardHat, Magnet, Activity } from 'lucide-react';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';
import { DetailCTA } from '@src/components/industries/DetailCTA';
import { DetailCaseStudies } from '@src/components/industries/DetailCaseStudies';
import { heavyMachineryMessage, meetingLink, whatsappLinkGenerator } from '@src/globals';

const HeavyMachineryCopy = {
    // 1. HERO SECTION
    // Goal: Sell "Control" over the chaos of long production cycles.
    hero: {
        title: "Stop Building Machines Before You Know The Profit.",
        subtitle: "You build massive machines, but your data is weak. We track every bolt, every welder hour, and every design change in real-time. Know your exact margin before the machine leaves the gate.",
        ctaText: "See Real-Time Job Costing",
        imageSrc: "/heavy-machinery.png", // Ensure image shows a large machine/assembly line
        ctaLink: "/how-it-works"
    },

    // 2. PROBLEM SECTION
    // Goal: The "Post-Mortem" problem. Finding out too late.
    problemSection: {
        title: "You Are Managing a ₹5 Crore Order with ₹5 Notebooks.",
        subtitle: "Complex BOMs + Long Production Cycles + Manual Tracking = A financial black hole. You are flying blind until the audit happens.",
        features: [
            {
                title: "The 'Post-Mortem' P&L",
                icon: <EyeClosed className="w-8 h-8 text-[#ef4444]" />,
                desc: "You only calculate the profit *after* the machine is shipped. By then, it's too late to fix the cost overruns. You are managing history, not reality."
            },
            {
                title: "The 'Golden Screw' Delay",
                icon: <AlertTriangle className="w-8 h-8 text-[#ef4444]" />,
                desc: "5,000 Parts. 4,999 are here. One ₹50 seal is missing. The entire ₹50 Lakh machine sits idle for 10 days waiting for a courier."
            },
            {
                title: "The 'Invisible' WIP",
                icon: <Activity className="w-8 h-8 text-[#ef4444]" />,
                desc: "Is the fabrication done? Is the painting done? You have to walk 40,000 sq ft to find out. Your ERP says 'In Progress', which means nothing."
            }
        ]
    },

    // 3. AGENT SECTION
    // Goal: Map to Global Agents (Project Cost Tracker, Production Scheduler, BOM Kitting)
    agentSection: {
        title: "Your Digital Project Managers",
        subtitle: "Don't ask supervisors for updates. Ask the Agent. It tracks the time, the material, and the money.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: IndianRupee,
                title: "The Job Cost Guardian", // Global Name
                subtitle: "Real-Time P&L",
                tagline: "The Ruthless Accountant.",
                features: [
                    { "label": "Track", "description": "Allocates welder hours and consumable costs directly to Job ID #508." },
                    { "label": "Alert", "description": "Flags overruns instantly: 'Job #508 has exceeded labor budget by 15%'." },
                    { "label": "Report", "description": "Generates a 'Live P&L' for every single machine on the floor." }
                ],
                // Maps to Global Agent: "Project Cost Tracker"
                learnMoreLink: "/agents?agent=Project%20Cost%20Tracker"
            },
            {
                icon: Calendar,
                title: "The Control Tower", // Global Name
                subtitle: "Production Scheduler",
                tagline: "The Digital Floor Manager.",
                features: [
                    { "label": "Voice Update", "description": "Operators dictate status: 'Boom Welding Complete'. No typing." },
                    { "label": "Live Gantt", "description": "Updates the Master Schedule instantly. Shows delays in Red." },
                    { "label": "Predict", "description": "Warns you: 'At current speed, Machine #402 will miss the Friday delivery'." }
                ],
                // Maps to Global Agent: "Production Scheduler"
                learnMoreLink: "/agents?agent=Production%20Scheduler"
            },
            {
                icon: Magnet,
                title: "BOM Kitting Assistant", // Global Name
                subtitle: "Shortage Prevention",
                tagline: "No Missing Parts.",
                features: [
                    { "label": "Scan", "description": "Checks 5,000 BOM lines against inventory 7 days before assembly." },
                    { "label": "Flag", "description": "Identifies the 'Golden Screw' shortages instantly." },
                    { "label": "Procure", "description": "Auto-triggers POs for missing items to ensure 'Clear-to-Build'." }
                ],
                // Maps to Global Agent: "BOM Kitting Assistant"
                learnMoreLink: "/agents?agent=BOM%20Kitting%20Assistant"
            }
        ]
    },
    // 5. CASE STUDIES
    caseStudies: {
        title: "From 'Guessing' to 'Guaranteeing' Profits.",
        description: "See how Heavy Machinery OEMs are locking in their margins.",
        studies: [
            {
                badge: 'The "Margin" Win',
                title: 'Earthmoving OEM (Chennai)',
                challenge: 'Discovered 30% of machines were unprofitable only after delivery due to un-tracked rework.',
                results: [
                    '<strong>97% Accuracy:</strong> Job Costing variance dropped from ±18% to ±3%.',
                    '<strong>Saved ₹45L:</strong> Identified margin-killing design flaws mid-production.',
                    '<strong>Live P&L:</strong> Owner sees profit per machine on his phone daily.',
                ],
                link: '#case-study-1',
            },
            {
                badge: 'The "Visibility" Win',
                title: 'Hydraulic Press Mfr (Ahmedabad)',
                challenge: 'Sales team walked the 40,000 sqft floor 3x daily just to answer "Where is my machine?"',
                results: [
                    '<strong>Zero Status Calls:</strong> Dashboard shows live job progress.',
                    '<strong>18% Faster:</strong> Identified bottlenecks (Paint Shop) using voice data.',
                    '<strong>On-Time:</strong> Delivery adherence went from 71% to 94%.',
                ],
                link: '#case-study-2',
            },
        ]
    },

    // 6. CTA
    cta: {
        title: "Is Machine #5 Making Money or Losing Money?",
        subtitle: "If you have to ask your accountant, it's already too late. Track it live.",
        // Message: "Hi, I want to track Job Costing for my machines."
        href: whatsappLinkGenerator(heavyMachineryMessage),
        ctaText: "Start Live Job Costing"
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
                                    { step: "01", title: "Daily Plan", desc: "Supervisors get a WhatsApp list at 8 AM: 'Today's Target: Finish Welding Job #502'." },
                                    { step: "02", title: "Voice Update", desc: "Operator speaks: 'Job #502 Welding Done'. Agent logs time and status." },
                                    { step: "03", title: "Cost Check", desc: "Agent calculates: 'Labor Cost is within budget.' Updates the Job P&L." },
                                    { step: "04", title: "Global Sync", desc: "Sales, Design, and Purchase get a notification: 'Job #502 moved to Painting'." }
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
