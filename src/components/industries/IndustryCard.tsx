import React from 'react';
import Card from '../ui/Card';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface IndustryCardProps {
    title: string;
    subtitle: string;
    friction: string;
    solutions: {
        name: string;
        description: string;
    }[];
    caseStudy: {
        title: string;
        link: string;
    };
    imagePlaceholder?: boolean;
    imageSrc?: string;
    link?: string;
}

const IndustryCard = ({
    title,
    subtitle,
    friction,
    solutions,
    imagePlaceholder = true,
    imageSrc,
    link
}: IndustryCardProps) => {
    return (
        <Card variant="dark" className="h-full flex flex-col overflow-hidden relative group">
            <div className="flex flex-col md:flex-row h-full gap-8">
                {/* Content Side */}
                <div className="flex-1 flex flex-col">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                        <p className="text-[#bef264] font-medium">{subtitle}</p>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">The Friction</h4>
                        <p className="text-white/80 leading-relaxed">{friction}</p>
                    </div>
                    <div className="mt-auto">
                        <Link href={link || "#"} className="flex w-40 justify-center items-center gap-2 text-[#bef264] hover:text-[#bef264]/80 transition-colors bg-[#bef264]/10 px-4 py-2 rounded-full">
                            Learn More <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>

                </div>

                {/* Image Side (Placeholder) */}
                {imagePlaceholder ? (
                    <div className="w-full md:w-1/3 min-h-[200px] md:min-h-0 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#bef264]/10 to-transparent"></div>
                        <span className="text-white/20 font-medium">Image Placeholder</span>
                    </div>
                ) : (
                    <div className="w-full md:w-1/3 min-h-[200px] md:min-h-0 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#bef264]/10 to-transparent"></div>
                        <Image
                            src={imageSrc || ''}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
            </div>
        </Card>
    );
};

export default IndustryCard;
