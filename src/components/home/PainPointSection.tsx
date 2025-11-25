import React from 'react';
import Section from '../ui/Section';
import Link from 'next/link';
import { UserX, MessageSquareX, Hourglass, ArrowRight } from 'lucide-react';

const PainPointSection = () => {
    const painPoints = [
        {
            icon: UserX,
            headline: "The Adoption Barrier",
            copy: "Your staff won't use complicated apps. They reject login screens and complex forms.",
            cta: "See the Solution",
            href: "/how-it-works",
            color: "red"
        },
        {
            icon: MessageSquareX,
            headline: "The Data Black Hole",
            copy: "Critical approvals and bills get buried in chat history. Your data is lost.",
            cta: "Recover Your Data",
            href: "/how-it-works",
            color: "orange"
        },
        {
            icon: Hourglass,
            headline: "The Bottleneck",
            copy: "You are the bottleneck. You spend hours bridging the gap between the shop floor and the office.",
            cta: "Free Your Time",
            href: "/how-it-works",
            color: "blue"
        }
    ];

    const colorClasses = {
        blue: "bg-blue-50 border-blue-100 hover:border-blue-300",
        orange: "bg-orange-50 border-orange-100 hover:border-orange-300",
        red: "bg-red-50 border-red-100 hover:border-red-300",
    };

    const iconColorClasses = {
        blue: "text-blue-600",
        orange: "text-orange-600",
        red: "text-red-600",
    };

    return (
        <Section className="bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                        The Reality Gap
                    </h2>
                    <p className="text-xl text-[#022c22]/70 max-w-3xl mx-auto leading-relaxed">
                        You have bought software before. You have an ERP. <br className="hidden md:block" />
                        But your factory still runs on phone calls and WhatsApp groups.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {painPoints.map((point, index) => {
                        const Icon = point.icon;
                        return (
                            <Link
                                key={index}
                                href={point.href}
                                className={`group p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${colorClasses[point.color as keyof typeof colorClasses]}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 ${iconColorClasses[point.color as keyof typeof iconColorClasses]} shadow-sm group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#022c22] mb-3">
                                    {point.headline}
                                </h3>
                                <p className="text-[#022c22]/70 mb-6 leading-relaxed">
                                    {point.copy}
                                </p>
                                <div className="flex items-center text-[#65a30d] font-semibold group-hover:gap-3 gap-2 transition-all">
                                    {point.cta}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="text-center max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-2xl font-medium text-[#022c22]">
                        We don't ask you to change. <span className="text-[#65a30d]">We simply make your existing tools intelligent.</span>
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default PainPointSection;
