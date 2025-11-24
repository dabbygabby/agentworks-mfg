"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { ArrowRightIcon, Calculator } from 'lucide-react';

const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Initial set
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate offset for side images
    // Starts at 80px lower, reduces to 0 as we scroll down
    const sideImageOffset = Math.max(0, 80 - scrollY * 0.4);

    return (
        <section className="relative bg-[#f7fee7] pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden rounded-b-[3rem]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#022c22] mb-8 leading-tight">
                        Your Team Uses WhatsApp. We Update Your ERP.
                    </h1>
                    <p className="text-lg md:text-2xl text-[#022c22]/70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                        Stop chasing data. Your staff sends voice notes and photos of challans. Our AI reads them and updates Tally, SAP, or Excel instantly. No new apps. No training required.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/how-it-works" variant="primary">
                            See How It Works
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Button>
                        <Button href="/calculate-savings" variant="outline">
                            Calculate Your Savings
                        </Button>
                    </div>
                </div>

                {/* Floating Phones Container */}
                <div className="mt-10 relative mx-auto max-w-7xl">
                    <div className="flex justify-center items-start gap-4 md:gap-8 lg:gap-12">
                        {/* Left Phone - Starts lower, moves up */}
                        <div
                            className="relative w-[280px] md:w-[320px] flex-shrink-0 pt-10 md:pt-0"
                            style={{
                                transform: `translateY(${sideImageOffset}px)`,
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
                            <Image
                                src="/whatsapp1.png"
                                alt="WhatsApp Interface 1"
                                width={320}
                                height={640}
                                className="w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </div>

                        {/* Center Phone - Static relative to container */}
                        <div className="relative w-[300px] md:w-[340px] flex-shrink-0 z-20">
                            <Image
                                src="/whatsapp2.png"
                                alt="WhatsApp Interface 2"
                                width={340}
                                height={680}
                                className="w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </div>

                        {/* Right Phone - Starts lower, moves up */}
                        <div
                            className="relative w-[280px] md:w-[320px] flex-shrink-0 pt-10 md:pt-0"
                            style={{
                                transform: `translateY(${sideImageOffset}px)`,
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
                            <Image
                                src="/whatsapp3.png"
                                alt="WhatsApp Interface 3"
                                width={320}
                                height={640}
                                className="w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                    {/* Decorative Elements behind phones */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-b from-[#bef264]/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
