"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

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
                        The Operating System for <br className="hidden md:block" />
                        <span className="text-[#022c22]">Next Gen Manufacturing</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-[#022c22]/70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                        Your autonomous AI workforce that lives in your existing tools.
                        <br />
                        No new apps. No training. Just infinite operational capacity.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/deploy-agent" variant="primary">
                            Hire Your First AI Employee
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </Button>
                        <Button href="/roi-calculator" variant="outline">
                            Calculate ROI
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
