import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { ArrowRightIcon, Box, Activity, DollarSign } from 'lucide-react';

const UniversalPhysicsSection = () => {
    const flows = [
        {
            icon: <Box className="w-6 h-6 text-[#bef264]" />,
            title: "Material Flow",
            description: "Inventory In"
        },
        {
            icon: <Activity className="w-6 h-6 text-[#bef264]" />,
            title: "Process Flow",
            description: "Production"
        },
        {
            icon: <DollarSign className="w-6 h-6 text-[#bef264]" />,
            title: "Cash Flow",
            description: "Sales & Finance"
        }
    ];

    return (
        <Section className="bg-[#022c22] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#bef264]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Don't See Your Industry?
                </h2>
                <p className="text-xl text-white/80 mb-12 leading-relaxed">
                    The physics of manufacturing are universal. Whether you make furniture, textiles, or auto parts, your business runs on three flows:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {flows.map((flow, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-[#bef264]/10 rounded-xl flex items-center justify-center mb-4">
                                {flow.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{flow.title}</h3>
                            <p className="text-white/60">{flow.description}</p>
                        </div>
                    ))}
                </div>

                <p className="text-lg text-white/70 mb-8">
                    Our agents connect to the tools you use (Tally, Excel, WhatsApp), which means they work for any sector that relies on data entry.
                </p>

                <Button
                    href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery"
                    variant="primary"
                    className="mx-auto"
                >
                    Consult an Engineer for Your Sector
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </Section>
    );
};

export default UniversalPhysicsSection;
