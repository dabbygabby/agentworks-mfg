import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { meetingLink } from '@src/globals';

interface CTASectionProps {
    title?: string;
    subtitle?: string;
    href?: string;
    ctaText?: string;
    className?: string;
}

export const DetailCTA: React.FC<CTASectionProps> = ({
    title = "Ready to Automate Your Fabricatin Workflow?",
    subtitle = "Let an engineer analyze your quoting process. No cost. No obligation.",
    href = { meetingLink },
    ctaText = "Consult an Engineer",
    className = "",
}) => {
    return (
        <Section className={`bg-[#022c22] relative overflow-hidden ${className}`}>
            {/* --- Background Elements --- */}
            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            {/* Glowing Orbs for visual depth */}
            <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-[#bef264] rounded-full blur-[100px] md:blur-[150px] opacity-10 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-green-500 rounded-full blur-[100px] md:blur-[150px] opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    {title}
                </h2>
                <p className="text-xl text-white/70 mb-10">
                    {subtitle}
                </p>
                <Button href={href as string} variant="accent">
                    {ctaText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </Section>
    );
};
