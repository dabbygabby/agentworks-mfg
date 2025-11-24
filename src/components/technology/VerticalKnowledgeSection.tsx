import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Pill, Cpu } from 'lucide-react';

const VerticalKnowledgeSection = () => {
    const verticals = [
        {
            icon: <Hammer className="w-8 h-8 text-white" />,
            title: "Fabrication",
            color: "bg-orange-500",
            knowledge: "It knows that \"SS 304\" is a material and \"1.5mm\" is a thickness."
        },
        {
            icon: <Pill className="w-8 h-8 text-white" />,
            title: "Pharma",
            color: "bg-blue-500",
            knowledge: "It knows that an \"Expiry Date\" must be in the future."
        },
        {
            icon: <Cpu className="w-8 h-8 text-white" />,
            title: "Electronics",
            color: "bg-purple-500",
            knowledge: "It knows that a \"Resistor\" and a \"Capacitor\" are not interchangeable."
        }
    ];

    return (
        <section className="py-20 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#022c22] mb-6">
                        Deep Industry Context
                    </h2>
                    <p className="text-xl text-[#022c22]/70 max-w-2xl mx-auto">
                        We don't use generic models. Our agents are fine-tuned on vertical-specific datasets to understand the nuances of your industry.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {verticals.map((vertical, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${vertical.color} flex items-center justify-center mb-6 shadow-lg`}>
                                {vertical.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-[#022c22] mb-4">{vertical.title}</h3>
                            <p className="text-lg text-[#022c22]/70 leading-relaxed">
                                {vertical.knowledge}
                            </p>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-16">
                    {"And many more..."}
                </div>
            </div>
        </section>
    );
};

export default VerticalKnowledgeSection;
