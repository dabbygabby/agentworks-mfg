import React from 'react';
import Section from '../ui/Section';
import Link from 'next/link';
import { Cpu, FlaskConical, Box, Wrench, Settings } from 'lucide-react';

const industries = [
    {
        icon: Cpu,
        headline: "One Missing Resistor Shouldn't Stop Your Line",
        copy: "Clear-to-Build in 30 mins (vs. 2 days)",
        href: "/industries/electronics-ems",
        color: "blue"
    },
    {
        icon: FlaskConical,
        headline: "Compliance Without the Chaos",
        copy: "100% Digital Audit Trail, Automatically",
        href: "/industries/pharma-chemicals",
        color: "green"
    },
    {
        icon: Box,
        headline: "Procurement is a Race. Win It.",
        copy: "90% Faster Procurement Cycles",
        href: "/industries/packaging-printing",
        color: "orange"
    },
    {
        icon: Wrench,
        headline: "From Quote to Dispatch—Zero Phone Calls",
        copy: "Real-time Job Tracking",
        href: "/industries/sheet-metal",
        color: "red"
    },
    {
        icon: Settings,
        headline: "Tame Your Custom Job Chaos",
        copy: "Live Job Status, No Chasing",
        href: "/industries/heavy-machinery",
        color: "purple"
    }
];

const colorClasses = {
    blue: "bg-blue-50 border-blue-100 hover:border-blue-300",
    green: "bg-green-50 border-green-100 hover:border-green-300",
    orange: "bg-orange-50 border-orange-100 hover:border-orange-300",
    red: "bg-red-50 border-red-100 hover:border-red-300",
    purple: "bg-purple-50 border-purple-100 hover:border-purple-300"
};

const iconColor = {
    blue: "text-blue-600",
    green: "text-green-600",
    orange: "text-orange-600",
    red: "text-red-600",
    purple: "text-purple-600"
};

const IndustryPathwaysSection = () => {
    return (
        <Section className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-16">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-[#022c22] mb-12">
                    Engineered for Your Shop Floor Reality
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((ind, i) => (
                        <Link
                            key={i}
                            href={ind.href}
                            className={`group p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${colorClasses[ind.color as keyof typeof colorClasses]}`}
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 ${iconColor[ind.color as keyof typeof iconColor]} shadow-sm group-hover:scale-110 transition-transform`}>
                                <ind.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#022c22] mb-3">
                                {ind.headline}
                            </h3>
                            <p className="text-[#022c22]/70 mb-6 leading-relaxed">
                                {ind.copy}
                            </p>
                            <div className="flex items-center text-[#65a30d] font-semibold group-hover:gap-3 gap-2 transition-all">
                                See Solution
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default IndustryPathwaysSection;
