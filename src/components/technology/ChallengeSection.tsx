import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mic, FileWarning } from 'lucide-react';

const ChallengeSection = () => {
    const challenges = [
        {
            icon: <FileText className="w-8 h-8 text-[#65a30d]" />,
            title: "Handwritten Challans",
            description: "Traditional OCR fails on messy handwriting and crumpled paper."
        },
        {
            icon: <Mic className="w-8 h-8 text-[#65a30d]" />,
            title: "Noisy Voice Notes",
            description: "Standard transcription fails on factory floor noise and accents."
        },
        {
            icon: <FileWarning className="w-8 h-8 text-[#65a30d]" />,
            title: "Complex Drawings",
            description: "Generic LLMs fail to interpret technical jargon and geometry."
        }
    ];

    return (
        <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#022c22] mb-6">
                            Real World Data is Messy
                        </h2>
                        <h3 className="text-2xl font-semibold text-[#65a30d] mb-4">
                            Your Data Doesn't Live in Spreadsheets.
                        </h3>
                        <p className="text-lg text-[#022c22]/70 mb-8">
                            It lives in handwritten delivery challans, noisy voice notes sent from the loading dock, and complex engineering drawings trapped in PDFs. Agentworks is purpose-built to extract <span className="font-semibold">Structured Data</span> from this chaos.
                        </p>
                    </motion.div>

                    <div className="grid gap-6">
                        {challenges.map((challenge, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex items-start gap-4"
                            >
                                <div className="p-3 bg-[#f7fee7] rounded-lg shrink-0">
                                    {challenge.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[#022c22] mb-1">{challenge.title}</h4>
                                    <p className="text-[#022c22]/70">{challenge.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChallengeSection;
