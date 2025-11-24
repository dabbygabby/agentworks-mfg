import React from 'react';
import Card from '../ui/Card';
import Section from '../ui/Section';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

const ProblemSection = () => {
    return (
        <Section className="bg-white">
            <div className="max-w-5xl mx-auto text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                    Which Department is Slowing You Down?
                </h2>
                <p className="text-xl text-[#022c22]/70 max-w-3xl mx-auto">
                    Select a module to see how we automate it.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Procurement */}
                <Card variant="light" className="border-blue-100 bg-blue-50/30">
                    <h3 className="text-xl font-bold text-[#022c22] mb-2">Procurement Agent</h3>
                    <p className="text-[#022c22]/70 mb-4">
                        Stop losing margins to slow vendor replies.
                    </p>
                    <Link href="/industries/electronics-ems" className="flex items-center text-[#65a30d] font-semibold group hover:gap-3 gap-2 transition-all">
                        Explore Procurement Solutions
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Card>

                {/* Operations */}
                <Card variant="light" className="border-red-100 bg-red-50/30">
                    <h3 className="text-xl font-bold text-[#022c22] mb-2">Operations Agent</h3>
                    <p className="text-[#022c22]/70 mb-4">
                        "Is Job #247 done yet?" Stop calling around.
                    </p>
                    <Link href="/industries/heavy-machinery" className="flex items-center text-[#65a30d] font-semibold group hover:gap-3 gap-2 transition-all">
                        See Operations Tracking
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Card>

                {/* Inventory */}
                <Card variant="light" className="border-green-100 bg-green-50/30">
                    <h3 className="text-xl font-bold text-[#022c22] mb-2">Sourcing & Inventory Agent</h3>
                    <p className="text-[#022c22]/70 mb-4">
                        "Do we have the parts?" ERP says yes, shelf says no.
                    </p>
                    <Link href="/industries/packaging-printing" className="flex items-center text-[#65a30d] font-semibold group hover:gap-3 gap-2 transition-all">
                        Fix Your Inventory Data
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Card>

                {/* Compliance */}
                <Card variant="light" className="border-purple-100 bg-purple-50/30">
                    <h3 className="text-xl font-bold text-[#022c22] mb-2">Compliance Agent</h3>
                    <p className="text-[#022c22]/70 mb-4">
                        Scrambling 2 days a month for audit reconciliation.
                    </p>
                    <Link href="/industries/pharma-chemicals" className="flex items-center text-[#65a30d] font-semibold group hover:gap-3 gap-2 transition-all">
                        Automate Compliance
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Card>
            </div>
        </Section>
    );
};

export default ProblemSection;
