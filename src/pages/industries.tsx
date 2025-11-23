import React from 'react';
import Head from 'next/head';
import Section from '../components/ui/Section';
import IndustryCard from '../components/industries/IndustryCard';
import UniversalPhysicsSection from '../components/industries/UniversalPhysicsSection';

const IndustriesPage = () => {
    const industries = [
        {
            title: "Sheet Metal & Fabrication",
            subtitle: "The world of high-mix, low-volume custom orders.",
            friction: "Volatile steel prices and complex quoting. A manual miscalculation on a laser-cutting quote can wipe out your margin.",
            solutions: [
                {
                    name: "Quoting Agent",
                    description: "Reads CAD/PDF drawings to calculate surface area and cut-length instantly."
                },
                {
                    name: "Inventory Agent",
                    description: "Tracks scrap generation and sheet utilization in real-time."
                }
            ],
            caseStudy: {
                title: "See how Bird Machines reduced finance workload by 95%",
                link: "/case-studies/bird-machines"
            }
        },
        {
            title: "Packaging & Printing",
            subtitle: "High volume, razor-thin margins, just-in-time delivery.",
            friction: "Procurement is a race. Slow purchasing decisions on paper/ink mean lost margins.",
            solutions: [
                {
                    name: "Procurement Agent",
                    description: "Automates vendor negotiation and locks in raw material prices faster than humanly possible."
                },
                {
                    name: "Ops Agent",
                    description: "Tracks job status (Printing -> Lamination -> Cutting) via voice notes from the floor."
                }
            ],
            caseStudy: {
                title: "See how Packaging Garage cut procurement cycles from 10 days to 2 hours",
                link: "/case-studies/packaging-garage"
            }
        },
        {
            title: "Electronics & EMS",
            subtitle: "Managing thousands of components and volatile supply chains.",
            friction: "Massive Bills of Materials (BOMs). One missing resistor stops the entire assembly line.",
            solutions: [
                {
                    name: "Sourcing Agent",
                    description: "Scans thousands of supplier emails to find stock availability for critical components."
                },
                {
                    name: "Sales Agent",
                    description: "Identifies upsell opportunities in existing accounts based on historical order data."
                }
            ],
            caseStudy: {
                title: "See how Dolphin Device achieved a 22% revenue uplift",
                link: "/case-studies/dolphin-device"
            }
        },
        {
            title: "Pharma & Chemicals",
            subtitle: "Strict compliance, batch tracking, and expiry management.",
            friction: "The paperwork is heavier than the product. Compliance audits and batch reconciliation take massive effort.",
            solutions: [
                {
                    name: "Compliance Agent",
                    description: "Automates batch tracking and generates audit trails for every transaction."
                },
                {
                    name: "Sales Agent",
                    description: "Manages recurring orders for high-volume items (e.g., Gloves, Test Kits) via WhatsApp."
                }
            ],
            caseStudy: {
                title: "See how a top Condom Manufacturer increased margins by 3 points",
                link: "/case-studies/pharma-chem"
            }
        },
        {
            title: "Heavy Machinery (OEM)",
            subtitle: "Long lead times, multi-stage assembly, and complex job tracking.",
            friction: "\"Where is the part?\" Visibility is lost between the welding shop, paint shop, and assembly line.",
            solutions: [
                {
                    name: "Job Scheduling Agent",
                    description: "Acts as a \"Control Tower.\" Operators send photos/voice notes at every stage (e.g., \"Welding Complete\"), updating the central schedule automatically."
                }
            ],
            caseStudy: {
                title: "Result: Real-time visibility on order completion dates",
                link: "/case-studies/heavy-machinery"
            }
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Industries | Agentworks</title>
                <meta name="description" content="Agentworks agents are purpose-built for the high-friction workflows of heavy industry. We don't just know code; we know manufacturing." />
            </Head>
            <main>
                {/* Hero Section */}
                <Section className="bg-[#f7fee7] rounded-b-[3rem] py-24 !pb-0 overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#022c22] mb-8 leading-tight">
                            Engineered for the Reality of the <span className="text-[#65a30d]">Shop Floor</span>
                        </h1>
                        <p className="text-xl text-[#022c22]/70 mb-8 leading-relaxed">
                            {'Standard software assumes a clean, linear process. You operate in a world of urgent changes and volatile variables. We built Agentworks to handle the messy reality of actual production, where things rarely go exactly to plan.'}
                        </p>
                    </div>

                    {/* Dashboard Image */}
                    <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 mt-12 translate-y-12">
                        <div className="rounded-[3rem] bg-white/40 p-3 border border-[#022c22]/10 backdrop-blur-sm">
                            <img
                                src="/dashboard2.png"
                                alt="Agentworks Dashboard"
                                className="w-full h-auto rounded-[2.5rem] shadow-2xl opacity-90"
                            />
                        </div>
                    </div>
                </Section>

                {/* Primary Verticals Grid */}
                <Section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {industries.map((industry, index) => (
                            <div key={index} className={index === industries.length - 1 ? "lg:col-span-2" : ""}>
                                <IndustryCard {...industry} />
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Universal Physics Section */}
                <UniversalPhysicsSection />
            </main>
        </div>
    );
};

export default IndustriesPage;
