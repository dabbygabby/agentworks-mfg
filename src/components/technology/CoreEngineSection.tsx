import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Ear, Brain, CheckCircle2 } from 'lucide-react';

const CoreEngineSection = () => {
    const [activeTab, setActiveTab] = useState('vision');

    const engines = {
        vision: {
            title: "Vision Engine",
            icon: <Eye className="w-6 h-6" />,
            capability: "Optical Character Recognition (OCR) + Spatial Understanding",
            description: "It doesn't just read text; it understands layout. It knows that the number at the bottom right of a table is the \"Grand Total\" and the text in the corner box is the \"GSTIN.\"",
            useCases: [
                { title: "Dirty Documents", desc: "Reads crumpled, oil-stained, or handwritten invoices with 99% accuracy." },
                { title: "Technical Drawings", desc: "Extracts geometry, bend lines, and material specs from CAD/PDF files for quoting." },
                { title: "Visual QC", desc: "Can analyze photos of finished goods to detect visible defects (Future Roadmap)." }
            ]
        },
        voice: {
            title: "Voice Engine",
            icon: <Ear className="w-6 h-6" />,
            capability: "Automatic Speech Recognition (ASR) + Noise Cancellation",
            description: "Filters out the 80dB hum of CNC machines and laser cutters to isolate the human voice. It handles Hinglish (Hindi + English mix), distinct accents, and shop-floor slang.",
            useCases: [
                { title: "Shift Updates", desc: "Operators dictate production counts while walking the line." },
                { title: "Stock Issues", desc: "Store managers speak batch numbers to issue material instantly." },
                { title: "Maintenance Logs", desc: "Technicians record machine breakdowns hands-free." }
            ]
        },
        text: {
            title: "Intent Engine",
            icon: <Brain className="w-6 h-6" />,
            capability: "Natural Language Understanding (NLU) + Context Awareness",
            description: "It understands the intent behind a message, not just the keywords. It knows the difference between a \"Request for Quote\" and a \"Purchase Order.\"",
            useCases: [
                { title: "Email Parsing", desc: "Reads a 20-thread email chain to find the latest negotiated price." },
                { title: "Negotiation", desc: "Understands when a vendor is offering a discount vs. when they are firm on price." },
                { title: "Routing", desc: "Automatically routes a \"Complaint\" to Support and an \"Enquiry\" to Sales." }
            ]
        }
    };

    return (
        <section className="py-20 px-4 md:px-8 bg-[#022c22] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Multi-Modal Intelligence
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.entries(engines).map(([key, engine]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === key
                                ? 'bg-[#bef264] text-[#022c22]'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            {engine.icon}
                            {engine.title.split('(')[0]}
                        </button>
                    ))}
                </div>

                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
                        >
                            <div className="flex flex-col md:flex-row gap-12">
                                <div className="md:w-1/2">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#bef264]/20 text-[#bef264] mb-6">
                                        {engines[activeTab as keyof typeof engines].icon}
                                        <span className="font-semibold">{engines[activeTab as keyof typeof engines].title}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{engines[activeTab as keyof typeof engines].capability}</h3>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        {engines[activeTab as keyof typeof engines].description}
                                    </p>
                                </div>

                                <div className="md:w-1/2 space-y-6">
                                    <h4 className="text-xl font-semibold text-[#bef264] mb-4">Manufacturing Use Cases:</h4>
                                    {engines[activeTab as keyof typeof engines].useCases.map((useCase, index) => (
                                        <div key={index} className="flex gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-[#bef264] shrink-0 mt-1" />
                                            <div>
                                                <h5 className="font-bold text-white">{useCase.title}</h5>
                                                <p className="text-gray-400">{useCase.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default CoreEngineSection;
