import React from 'react';
import Section from '../ui/Section';

const SocialProofSection = () => {
    // Placeholder for logos
    const partners = [
        { name: 'Tally', color: 'bg-[#022c22]' },
        { name: 'Major CA Firms', color: 'bg-[#022c22]' },
        { name: 'Mfg Associations', color: 'bg-[#022c22]' },
        { name: 'Industry Veteran 1', color: 'bg-[#022c22]' },
        { name: 'Industry Veteran 2', color: 'bg-[#022c22]' },
    ];

    return (
        <Section className="bg-[#f7fee7] border-t border-[#022c22]/5">
            <div className="text-center">
                <h2 className="text-lg font-bold text-[#022c22]/40 mb-12 uppercase tracking-widest">
                    Recommended by the Partners You Trust
                </h2>

                {/* <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex items-center gap-3 group">
                            <div className={`w-10 h-10 rounded-full ${partner.color} opacity-40 group-hover:opacity-100 transition-opacity`}></div>
                            <span className="text-2xl font-bold text-[#022c22]/40 group-hover:text-[#022c22] transition-colors">{partner.name}</span>
                        </div>
                    ))}
                </div> */}
            </div>
        </Section>
    );
};

export default SocialProofSection;
