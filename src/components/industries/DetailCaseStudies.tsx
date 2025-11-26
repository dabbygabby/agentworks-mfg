import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CaseStudyProps {
    badge: string;
    title: string;
    challenge: string;
    results: string[];
    link: string;
}

const CaseStudyCard: React.FC<CaseStudyProps & { index: number }> = ({
    badge,
    title,
    challenge,
    results,
    link,
    index
}) => {
    return (
        <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
        >
            <motion.div
                className="inline-block px-4 py-1 bg-[#dcfce7] text-[#166534] rounded-full text-sm font-bold mb-6 self-start"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.4,
                    delay: index * 0.2 + 0.2,
                    type: "spring",
                    stiffness: 200
                }}
            >
                {badge}
            </motion.div>

            <motion.h3
                className="text-2xl font-bold text-[#022c22] mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            >
                {title}
            </motion.h3>

            <motion.p
                className="text-[#022c22]/70 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            >
                <strong>Challenge:</strong> {challenge}
            </motion.p>

            <div className="space-y-4 mb-8 flex-grow">
                {results.map((result, resultIndex) => (
                    <motion.div
                        key={resultIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.2 + 0.5 + resultIndex * 0.1
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.2 + 0.5 + resultIndex * 0.1,
                                type: "spring",
                                stiffness: 300
                            }}
                        >
                            <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1 flex-shrink-0" />
                        </motion.div>
                        <span className="text-[#022c22]" dangerouslySetInnerHTML={{ __html: result }} />
                    </motion.div>
                ))}
            </div>

            <motion.a
                href={link}
                className="inline-flex items-center gap-2 text-[#166534] font-semibold group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
            >
                Read the case study
                <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                >
                    <ArrowRight className="w-4 h-4" />
                </motion.div>
            </motion.a>
        </motion.div>
    );
};

export const DetailCaseStudies = ({
    caseStudies,
    title,
    description
}: {
    caseStudies: CaseStudyProps[],
    title: string,
    description: string
}) => {
    return (
        <section className="py-12 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        className="text-xl text-[#022c22]/70"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {description}
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudies.map((caseStudy, index) => (
                        <CaseStudyCard key={index} {...caseStudy} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};