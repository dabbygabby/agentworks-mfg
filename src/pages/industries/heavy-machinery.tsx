import Head from 'next/head';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, Calendar, ClipboardList, DollarSign, AlertTriangle, Eye, Settings, Clock, Check, ArrowRight } from 'lucide-react';
import IndustryHero from '@src/components/industries/IndustryHeroSection';
import { DetailProblemSection } from '@src/components/industries/DetailProblemSection';
import { DetailAgentSection } from '@src/components/industries/DetailAgentSection';
import { DetailCTA } from '@src/components/industries/DetailCTA';
import { DetailCaseStudies } from '@src/components/industries/DetailCaseStudies';

const HeavyMachineryCopy = {
    hero: {
        title: "Heavy Machinery & OEM",
        subtitle: "Where is the order? Stop guessing. Gain absolute visibility over long-lead production cycles for heavy machinery.",
        ctaText: "See the Scheduling Agent",
        imageSrc: "/heavy-machinery.png",
        ctaLink: "/connectors"
    },
    problemSection: {
        title: "Why Standard ERPs Fail in Heavy Industry.",
        subtitle: "You build complex machines with lead times measured in weeks or months. A generic ERP records the start and the end of a job, but it is blind to the middle. It cannot see that the chassis is stuck in the Paint Shop or that the hydraulic pump is missing for Final Assembly.",
        features: [
            {
                title: "The Production Black Hole",
                icon: <Eye className="w-8 h-8 text-[#ef4444]" />,
                desc: "Sales teams have to physically walk the floor to answer customer questions about delivery dates."
            },
            {
                title: "WIP Blindness",
                icon: <AlertTriangle className="w-8 h-8 text-[#ef4444]" />,
                desc: "You have crores of rupees tied up in \"Work In Progress,\" but no clear view of which stage (Fabrication, Machining, Assembly) is the actual bottleneck."
            },
            {
                title: "Sub-Assembly Chaos",
                icon: <Settings className="w-8 h-8 text-[#ef4444]" />,
                desc: "One missing flange or bolt stops the assembly of a ₹50 Lakh machine."
            }
        ]
    },
    agentSection: {
        title: "Intelligent Infrastructure for Assembly Lines.",
        ctaText: "Explore All Agents",
        ctaHref: "/agents",
        agents: [
            {
                icon: Calendar,
                title: "Job Scheduling Agent",
                subtitle: "The Control Tower",
                tagline: '"Real-Time Gantt Charts."',
                features: [
                    {
                        label: "Input",
                        description: 'Supervisors send voice updates: "Chassis #402, Welding complete."'
                    },
                    {
                        label: "Update",
                        description: "Instantly updates master schedule and recalculates completion date."
                    },
                    {
                        label: "Alert",
                        description: "If a stage takes longer than planned, the Plant Head gets an alert."
                    }
                ]
            },
            {
                icon: ClipboardList,
                title: "Kitting Agent",
                subtitle: "Shortage Prevention",
                tagline: '"No Stalled Assembly."',
                features: [
                    {
                        label: "Scan",
                        description: "Checks inventory for every child part before Work Order release."
                    },
                    {
                        label: "Flag",
                        description: "Identifies shortages immediately (e.g., missing 12V Solenoid)."
                    },
                    {
                        label: "Procure",
                        description: "Auto-triggers purchase requests to ensure arrival before assembly."
                    }
                ]
            },
            {
                icon: DollarSign,
                title: "Commercial Agent",
                subtitle: "Project Costing",
                tagline: '"Protect Your Project Margin."',
                features: [
                    {
                        label: "Track",
                        description: "Allocates labor and consumable costs to Job IDs in real-time."
                    },
                    {
                        label: "Compare",
                        description: 'Constantly compares "Actual Cost vs. Quoted Cost."'
                    },
                    {
                        label: "Report",
                        description: "Tells you exactly how much profit you made on that specific machine."
                    }
                ]
            }
        ]
    },
    caseStudies: {
        title: "See How they are using Agentworks",
        description: "See how fabricators are using Agentworks to unlock capacity.",
        studies: [
            {
                "badge": "The \"Visibility\" Win",
                "title": "Heavy Earth-Moving Equipment",
                "challenge": "\"Where is the part?\" Visibility lost between shops. Sales promised dates they couldn't keep.",
                "results": [
                    "<strong>100% Visibility:</strong> Every machine's stage is visible on a live dashboard.",
                    "<strong>On-Time Delivery:</strong> Improved reliability by 20% due to early bottleneck detection.",
                    "<strong>Admin Reduction:</strong> Eliminated need for daily \"production status meetings.\""
                ],
                "link": "#case-study-heavy-equipment"
            },
            {
                "badge": "The \"Finance\" Win",
                "title": "Bird Machines (Custom Fabricator)",
                "challenge": "Finance spent 40hrs/week reconciling invoices. Month-end closing took 7 days.",
                "results": [
                    "<strong>95% Less Admin:</strong> Finance workload dropped from 40 hours to 2 hours per week.",
                    "<strong>Real-Time Closing:</strong> Month-end closing reduced from 7 days to near-zero.",
                    "<strong>Staffing:</strong> Freed 2 FTEs to focus on revenue tasks instead of data entry."
                ],
                "link": "#case-study-bird-machines"
            }
        ]
    },
    cta: {
        title: "Ready to automate your heavy machinery quoting process?",
        subtitle: "Let an engineer analyze your quoting process. No cost. No obligation.",
        href: "https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery",
        ctaText: "Consult an Engineer"
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
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                Floor Updates via WhatsApp—No Data Entry.
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
