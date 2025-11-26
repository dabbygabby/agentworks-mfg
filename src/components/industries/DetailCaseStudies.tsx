import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface CaseStudyProps {
    badge: string;
    title: string;
    challenge: string;
    results: string[];
    link: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ badge, title, challenge, results, link }) => {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col">
            <div className="inline-block px-4 py-1 bg-[#dcfce7] text-[#166534] rounded-full text-sm font-bold mb-6 self-start">
                {badge}
            </div>
            <h3 className="text-2xl font-bold text-[#022c22] mb-4">{title}</h3>
            <p className="text-[#022c22]/70 mb-6">
                <strong>Challenge:</strong> {challenge}
            </p>
            <div className="space-y-4 mb-8 flex-grow">
                {results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-1 flex-shrink-0" />
                        <span className="text-[#022c22]" dangerouslySetInnerHTML={{ __html: result }} />
                    </div>
                ))}
            </div>
            <a
                href={link}
                className="inline-flex items-center gap-2 text-[#166534] font-semibold hover:gap-3 transition-all duration-200 group"
            >
                Read the case study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
    );
};

export const DetailCaseStudies = ({ caseStudies, title, description }: { caseStudies: CaseStudyProps[], title: string, description: string }) => {

    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                        {title}
                    </h2>
                    <p className="text-xl text-[#022c22]/70">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudies.map((caseStudy, index) => (
                        <CaseStudyCard key={index} {...caseStudy} />
                    ))}
                </div>
            </div>
        </section>
    );
};
