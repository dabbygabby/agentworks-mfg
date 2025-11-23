import Head from 'next/head';
import Image from 'next/image';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, Calendar, ClipboardList, DollarSign, AlertTriangle, Eye, Settings, Clock, Check } from 'lucide-react';

const HeavyMachineryPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Heavy Machinery & OEM | Agentworks</title>
                <meta name="description" content="Where is the order? Stop guessing. Gain absolute visibility over long-lead production cycles for heavy machinery." />
            </Head>

            <main>
                {/* Hero Section */}
                <Section className="bg-[#f7fee7] rounded-b-[3rem] pt-32 pb-20 overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold text-[#022c22] mb-6 leading-tight">
                                    Where is the Order? <span className="text-[#65a30d]">Stop Guessing</span>.
                                </h1>
                                <p className="text-xl text-[#022c22]/70 mb-8 leading-relaxed">
                                    Gain absolute visibility over long-lead production cycles. From welding to final assembly, track every sub-component without chasing supervisors on the floor.
                                </p>
                                <Button href="/connectors" variant="primary">
                                    See the Scheduling Agent
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                            <div className="relative">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50">
                                    <Image
                                        src="/heavy-machinery.png"
                                        alt="Heavy Machinery Production Schedule"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                                {/* Decorative blob */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#bef264]/20 blur-3xl -z-10 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* The Visibility Gap (Problem) */}
                <Section className="bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                Why Standard ERPs Fail in Heavy Industry.
                            </h2>
                            <p className="text-xl text-[#022c22]/70 leading-relaxed">
                                You build complex machines with lead times measured in weeks or months. A generic ERP records the start and the end of a job, but it is blind to the middle. It cannot see that the chassis is stuck in the Paint Shop or that the hydraulic pump is missing for Final Assembly.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
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
                            ].map((item, i) => (
                                <div key={i} className="bg-red-50 rounded-3xl p-8 border border-red-100">
                                    <div className="mb-4 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#022c22] mb-3">{item.title}</h3>
                                    <p className="text-[#022c22]/70">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* The Solution: Specialized Agents */}
                <Section className="bg-[#022c22] text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Intelligent Infrastructure for Assembly Lines.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Job Scheduling Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Job Scheduling Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">The Control Tower</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"Real-Time Gantt Charts."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Input:</strong> Supervisors send voice updates: "Chassis #402, Welding complete."</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Update:</strong> Instantly updates master schedule and recalculates completion date.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Alert:</strong> If a stage takes longer than planned, the Plant Head gets an alert.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Kitting Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <ClipboardList className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Kitting Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">Shortage Prevention</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"No Stalled Assembly."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Scan:</strong> Checks inventory for every child part before Work Order release.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Flag:</strong> Identifies shortages immediately (e.g., missing 12V Solenoid).</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Procure:</strong> Auto-triggers purchase requests to ensure arrival before assembly.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Commercial Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <DollarSign className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Commercial Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">Project Costing</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"Protect Your Project Margin."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Track:</strong> Allocates labor and consumable costs to Job IDs in real-time.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Compare:</strong> Constantly compares "Actual Cost vs. Quoted Cost."</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Report:</strong> Tells you exactly how much profit you made on that specific machine.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>

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
                            <div className="bg-gray-50 rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
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
                <Section className="bg-[#f7fee7] rounded-[3rem]">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                Proven Results in Heavy Engineering.
                            </h2>
                            <p className="text-xl text-[#022c22]/70">
                                See how OEMs are using Agentworks to deliver on time.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Case Study 1 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="inline-block px-4 py-1 bg-[#dcfce7] text-[#166534] rounded-full text-sm font-bold mb-6">
                                    The "Visibility" Win
                                </div>
                                <h3 className="text-2xl font-bold text-[#022c22] mb-4">Heavy Earth-Moving Equipment</h3>
                                <p className="text-[#022c22]/70 mb-6">
                                    <strong>Challenge:</strong> "Where is the part?" Visibility lost between shops. Sales promised dates they couldn't keep.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>100% Visibility:</strong> Every machine's stage is visible on a live dashboard.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>On-Time Delivery:</strong> Improved reliability by 20% due to early bottleneck detection.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Admin Reduction:</strong> Eliminated need for daily "production status meetings."</span>
                                    </div>
                                </div>
                            </div>

                            {/* Case Study 2 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="inline-block px-4 py-1 bg-[#dcfce7] text-[#166534] rounded-full text-sm font-bold mb-6">
                                    The "Finance" Win
                                </div>
                                <h3 className="text-2xl font-bold text-[#022c22] mb-4">Bird Machines (Custom Fabricator)</h3>
                                <p className="text-[#022c22]/70 mb-6">
                                    <strong>Challenge:</strong> Finance spent 40hrs/week reconciling invoices. Month-end closing took 7 days.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>95% Less Admin:</strong> Finance workload dropped from 40 hours to 2 hours per week.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Real-Time Closing:</strong> Month-end closing reduced from 7 days to near-zero.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Staffing:</strong> Freed 2 FTEs to focus on revenue tasks instead of data entry.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Bottom CTA */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                            Deliver Every Machine On Time.
                        </h2>
                        <p className="text-xl text-[#022c22]/70 mb-10">
                            Give your sales team the confidence to promise a delivery date and keep it.
                        </p>
                        <Button href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" variant="primary">
                            Consult a Production Engineer
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </Section>
            </main>
        </div>
    );
};

export default HeavyMachineryPage;
