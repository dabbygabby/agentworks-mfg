import React from 'react';
import Section from '../ui/Section';
import Link from 'next/link';
import { FileQuestion, AlertTriangle, ShoppingCart, Wrench, MessageSquare } from 'lucide-react';

const PainPointSection = () => {
    const painPoints = [
        {
            icon: FileQuestion,
            headline: "Drowning in BOMs?",
            copy: "500+ line items. Volatile component sourcing. One missing part stops everything.",
            cta: "See the Sourcing Agent",
            href: "/industries/electronics-ems",
            color: "blue"
        },
        {
            icon: AlertTriangle,
            headline: "Audit Panic?",
            copy: "Batch tracking. Expiry management. Manual reconciliation eating 2 days/month.",
            cta: "See the Compliance Agent",
            href: "/industries/pharma-chemicals",
            color: "green"
        },
        {
            icon: ShoppingCart,
            headline: "Losing Margins to Slow Buying?",
            copy: "10 vendors. Volatile prices. By the time you decide, the price has moved.",
            cta: "See the Procurement Agent",
            href: "/industries/packaging-printing",
            color: "orange"
        },
        {
            icon: Wrench,
            headline: "Can't Track Your Jobs?",
            copy: "50 jobs running. No idea which stage each is at without phone calls.",
            cta: "See the Operations Agent",
            href: "/industries/heavy-machinery",
            color: "red"
        },
        {
            icon: MessageSquare,
            headline: "Data Trapped in WhatsApp?",
            copy: "Critical info locked in voice notes, photos, and mental notes.",
            cta: "See How We Extract It",
            href: "/how-it-works",
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

    const iconColorClasses = {
        blue: "text-blue-600",
        green: "text-green-600",
        orange: "text-orange-600",
        red: "text-red-600",
        purple: "text-purple-600"
    };

    return (
        <Section className="bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                        Which Problem Keeps You Up at Night?
                    </h2>
                    <p className="text-xl text-[#022c22]/70 max-w-3xl mx-auto">
                        Pick your biggest headache. We'll show you exactly how we solve it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default PainPointSection;
