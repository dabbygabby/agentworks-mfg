import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

interface CTASectionProps {
    title?: string;
    subtitle?: string;
    href?: string;
    ctaText?: string;
    className?: string;
}

export const DetailCTA: React.FC<CTASectionProps> = ({
    title = "Ready to Automate Your Fabrication Workflow?",
    subtitle = "Let an engineer analyze your quoting process. No cost. No obligation.",
    href = "https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery",
    ctaText = "Consult an Engineer",
    className = "",
}) => {
    return (
        <Section className={`bg-white ${className}`}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                    {title}
                </h2>
                <p className="text-xl text-[#022c22]/70 mb-10">
                    {subtitle}
                </p>
                <Button href={href} variant="primary">
                    {ctaText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </Section>
    );
};
