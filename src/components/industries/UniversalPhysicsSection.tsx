import Section from '../ui/Section'; // Assuming this is your wrapper
import { ArrowRightIcon, Box, Activity, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { industryChallenge, meetingLink, whatsappLinkGenerator } from '@src/globals';

const UniversalPhysicsSection = () => {
    const flows = [
        {
            icon: <Box className="w-6 h-6 text-[#bef264]" />,
            title: "Sourcing",
            description: "Automates vendor RFQs, price comparison, and shortage prevention to guarantee stock."
        },
        {
            icon: <Activity className="w-6 h-6 text-[#bef264]" />,
            title: "Making",
            description: "Track job status, yield, and machine downtime in real-time using simple voice commands."
        },
        {
            icon: <DollarSign className="w-6 h-6 text-[#bef264]" />,
            title: "Selling",
            description: "Automate order entry, instant quoting, and dispatch notifications for a frictionless cash cycle."
        }
    ]

    return (
        <Section className="bg-[#022c22] relative overflow-hidden py-24">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#bef264]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-4">

                {/* Headline: The "Physics" Angle */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Don't See Your Industry? <br /> <span className="text-[#bef264]">Challenge Us.</span>
                </h2>

                {/* Subhead: Addressing the "Not Found" User */}
                <p className="text-xl text-white/80 mb-12 leading-relaxed">
                    Furniture, Textiles, Plastics, or Footwear—the physics of profit are the same. If you have manual data entry, we can automate it.
                </p>

                {/* The 3 Flows Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {flows.map((flow, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center hover:bg-white/10 transition-colors backdrop-blur-sm">
                            <div className="w-12 h-12 bg-[#bef264]/10 rounded-xl flex items-center justify-center mb-4 text-[#bef264]">
                                {flow.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{flow.title}</h3>
                            <p className="text-sm text-white/60 leading-relaxed">{flow.description}</p>
                        </div>
                    ))}
                </div>

                {/* Final Reassurance */}
                <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                    Our agents connect to the tools you already use (Tally, Excel, WhatsApp), which means they work for any sector that relies on data entry.
                </p>

                <div className="flex justify-center">
                    <Link
                        href={whatsappLinkGenerator(industryChallenge)}
                        target="_blank"
                        className='flex flex-row justify-center items-center gap-2 bg-[#BEF264] font-semibold text-[#022c22] px-8 py-5 rounded-full hover:bg-[#BEF264dd] transition-all hover:scale-105 active:scale-95'
                    >
                        Request Custom Workflow
                        <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </Section>
    );
};

export default UniversalPhysicsSection;