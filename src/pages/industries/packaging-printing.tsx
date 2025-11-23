import Head from 'next/head';
import Image from 'next/image';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, ShoppingCart, Activity, Calculator, Clock, AlertTriangle, Eye, TrendingUp, TrendingDown } from 'lucide-react';

const PackagingPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Packaging & Printing | Agentworks</title>
                <meta name="description" content="Procurement is a race. Win it. Automate buying and tracking for high-volume packaging and printing." />
            </Head>

            <main>
                {/* Hero Section */}
                <Section className="bg-[#f7fee7] rounded-b-[3rem] pt-32 pb-20 overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold text-[#022c22] mb-6 leading-tight">
                                    Procurement is a <span className="text-[#65a30d]">Race</span>. <br />Win It.
                                </h1>
                                <p className="text-xl text-[#022c22]/70 mb-8 leading-relaxed">
                                    In a high-volume, low-margin business, a 2% saving on paper pays your entire salary bill. Automate your buying and tracking to secure every rupee of profit.
                                </p>
                                <Button href="/connectors" variant="primary">
                                    See the Procurement Agent
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                            <div className="relative">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50">
                                    <Image
                                        src="/packaging.png"
                                        alt="Packaging Procurement Dashboard"
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

                {/* The Velocity Gap (Problem) */}
                <Section className="bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                                Why Standard ERPs Fail in Packaging.
                            </h2>
                            <p className="text-xl text-[#022c22]/70 leading-relaxed">
                                You operate on "Just-in-Time" delivery and volatile paper/ink prices. A generic ERP is a system of record, not a system of action. It doesn't help you negotiate with 10 vendors simultaneously, and it can't tell you if a job is stuck at Lamination or Die-Cutting without a phone call.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
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
                                Intelligent Infrastructure for High-Volume Press.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Procurement Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <ShoppingCart className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Procurement Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">Vendor Negotiation</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"The Ruthless Buyer."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Ingest:</strong> Reads vendor quotes from Email and WhatsApp instantly.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Compare:</strong> Auto-compares quotes against historical prices and market indices.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Negotiate:</strong> Automates follow-ups: "Your quote is 2% higher. Can you match?"</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Operations Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <Activity className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Operations Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">Live Floor Visibility</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"Live Floor Visibility."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Input:</strong> Operators send voice updates: "Job 105, Printing done."</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Track:</strong> Updates central dashboard and flags schedule delays.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Notify:</strong> Alerts dispatch team when job hits "Finished Goods".</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Costing Agent */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]">
                                        <Calculator className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Costing Agent</h3>
                                        <p className="text-[#bef264] text-sm font-medium">Precision Estimates</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold mb-2">"Precision Estimates."</p>
                                </div>
                                <ul className="space-y-4 text-white/80">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Calculate:</strong> Calculates exact paper tonnage and ink coverage from dimensions.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Optimize:</strong> Suggests optimal reel size/layout to minimize wastage.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                                        <span><strong>Quote:</strong> Generates customer-ready quote protecting your margin.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* How It Works - Comparison Table Visual */}
                <Section className="bg-white">
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
                            <div className="bg-gray-50 rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
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
                                <div className="mt-4 flex gap-2 justify-end">
                                    <div className="text-xs text-gray-400 flex items-center gap-1">
                                        <Activity className="w-3 h-3" />
                                        Updated 2 mins ago
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
                                Proven Results in Packaging.
                            </h2>
                            <p className="text-xl text-[#022c22]/70">
                                See how high-volume presses are using Agentworks to protect margins.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Case Study 1 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="inline-block px-4 py-1 bg-[#dcfce7] text-[#166534] rounded-full text-sm font-bold mb-6">
                                    The "Procurement" Win
                                </div>
                                <h3 className="text-2xl font-bold text-[#022c22] mb-4">A Leading Packaging Brand in India</h3>
                                <p className="text-[#022c22]/70 mb-6">
                                    <strong>Challenge:</strong> Procurement team spent days collating quotes. Production delayed by slow decisions.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>90% Faster Cycles:</strong> Procurement cycle time dropped from 10 days to 2 hours.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Loss Prevention:</strong> Avoided ₹5 Lakhs in losses by halting low-ROI R&D.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Decision Speed:</strong> Enabled "Same-Day Ordering" for critical materials.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Case Study 2 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="inline-block px-4 py-1 bg-[#dcfce7] text-[#166534] rounded-full text-sm font-bold mb-6">
                                    The "Visibility" Win
                                </div>
                                <h3 className="text-2xl font-bold text-[#022c22] mb-4">Corrugated Box Manufacturer</h3>
                                <p className="text-[#022c22]/70 mb-6">
                                    <strong>Challenge:</strong> Constant "Where is my order?" calls. Sales team had to physically check machine status.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Zero Follow-ups:</strong> Sales team has live status on their phone.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>On-Time Delivery:</strong> Improved dispatch timelines by 15%.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1" />
                                        <span className="text-[#022c22]"><strong>Customer Satisfaction:</strong> Automated WhatsApp updates on dispatch.</span>
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
                            Secure Your Thin Margins.
                        </h2>
                        <p className="text-xl text-[#022c22]/70 mb-10">
                            Don't let slow buying and invisible waste eat your profit.
                        </p>
                        <Button href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" variant="primary">
                            Consult a Packaging Expert
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </Section>
            </main>
        </div>
    );
};

export default PackagingPage;
