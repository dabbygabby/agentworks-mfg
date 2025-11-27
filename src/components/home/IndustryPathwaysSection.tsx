import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory } from 'lucide-react';

// --- DATA ---
const industries = [
    {
        id: 'sheet-metal',
        title: 'Sheet Metal & Fabrication',
        // Old: Stop bleeding margins on miscalculated quotes.
        // New: Focus on the specific mechanism of failure (Scrap/Speed).
        note: 'Quote in minutes, not days. Track every inch of scrap.',
        link: '/industries/sheet-metal',
        image: '/sheet-metal.png',
    },
    {
        id: 'packaging',
        title: 'Packaging & Printing',
        // Old: End the race against volatile paper and ink prices.
        // New: specific focus on the "Gamble" of paper prices.
        note: 'Protect margins from volatile paper prices. Quote with live rates.',
        link: '/industries/packaging-printing',
        image: '/packaging.png',
    },
    {
        id: 'electronics',
        title: 'Electronics & EMS',
        // Old: No more "Golden Screw" delays stopping your line.
        // New: Keep "Golden Screw" (it's great insider language) but add the scale.
        note: 'Solve the "Golden Screw" problem. 500 BOM lines, zero shortages.',
        link: '/industries/electronics-ems',
        image: '/electronics.png',
    },
    {
        id: 'pharma',
        title: 'Pharma & Chemicals',
        // Old: Eliminate the risk of expired stock and failed audits.
        // New: More authoritative.
        note: '100% Audit Readiness. Zero dead stock due to expiry.',
        link: '/industries/pharma-chemicals',
        image: '/pharma.png',
    },
    {
        id: 'heavy-machinery',
        title: 'Heavy Machinery',
        note: 'Stop asking "Where is it?". Track every process in real-time.',
        link: '/industries/heavy-machinery',
        image: '/heavy-machinery.png',
    },
    {
        id: 'all-industries',
        title: 'View All Industries',
        note: 'Don’t see your sector? Challenge us to build a custom workflow.',
        link: '/industries',
        image: null,
    }
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Stagger effect for cards
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// **MODIFICATION 1: Update interface with new optional prop**
interface IndustriesCarouselProps {
    title?: React.ReactNode;
    subtitle?: string;
    hideAllIndustriesCard?: boolean; // New prop
}

// **MODIFICATION 2: Set default prop value in function signature**
const IndustriesCarousel = ({
    title,
    subtitle,
    hideAllIndustriesCard = false // Default to false (show card)
}: IndustriesCarouselProps = {}) => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    // **MODIFICATION 3: Filter industries based on the prop**
    const visibleIndustries = hideAllIndustriesCard
        ? industries.filter(i => i.id !== 'all-industries')
        : industries;


    // --- AUTO SCROLL LOGIC ---
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollCycle = () => {
            // 1. Stop if on Desktop
            if (window.innerWidth >= 768) return;
            // 2. Stop if user is interacting
            if (isHovering) return;
            // 3. Stop if container is missing
            if (!container) return;

            // Calculate measurements
            const firstCard = container.firstElementChild as HTMLElement;
            if (!firstCard) return;

            const cardWidth = firstCard.offsetWidth;
            const gap = 16; // gap-4 = 16px
            const scrollStep = cardWidth + gap;

            const currentScroll = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;

            // Logic: If close to end, snap to start. Else, scroll next.
            // Using a buffer of 10px to account for float inaccuracies
            if (currentScroll >= maxScroll - 10) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollStep, behavior: 'smooth' });
            }
        };

        const intervalId = setInterval(scrollCycle, 3500); // Slower interval for better UX
        return () => clearInterval(intervalId);
    }, [isHovering]); // Re-bind effect if hover state changes

    return (
        <section className="py-20 bg-cream-50 overflow-hidden" id="industries-carousel">
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }} // Triggers when 100px into view
                variants={containerVariants}
            >

                {/* Section Header */}
                {/* @ts-ignore */}
                <motion.div className="text-center mb-12" variants={itemVariants}>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#022C23] mb-4">
                        {/* Use provided title prop, or fallback to default JSX */}
                        {title || (
                            <>
                                Every Industry Has a Breaking Point. <br className="hidden md:block" /> <span className='text-[#64B564]'>We Fix Yours</span>
                            </>
                        )}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {/* Use provided subtitle prop, or fallback to default string */}
                        {subtitle || "Generic ERPs don't understand 'Nesting' or 'GSM.' Our agents are purpose-built for the specific physics of your factory."}
                    </p>
                </motion.div>

                {/* --- DESKTOP VIEW --- */}
                <motion.div
                    className="hidden md:flex h-[500px] gap-4 w-full"
                    variants={containerVariants}
                >
                    {/* Use the filtered list here */}
                    {visibleIndustries.map((industry) => {
                        const isActive = activeId === industry.id;
                        const isSolidCard = !industry.image;

                        return (
                            <motion.div
                                key={industry.id}
                                //@ts-ignore
                                variants={itemVariants} // Applies staggered fade-in
                                onHoverStart={() => setActiveId(industry.id)}
                                onHoverEnd={() => setActiveId(null)}
                                onClick={() => window.location.href = industry.link}
                                layout
                                initial={false}
                                animate={{
                                    flex: isActive ? 3 : 1,
                                }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="relative cursor-pointer rounded-2xl overflow-hidden shadow-xl"
                                style={{ backgroundColor: '#022C23' }}
                            >
                                {/* Background Image Logic */}
                                {industry.image ? (
                                    <>
                                        <div
                                            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${isActive ? 'scale-110 opacity-40' : 'opacity-20 grayscale'}`}
                                            style={{ backgroundImage: `url(${industry.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#022C23] via-transparent to-transparent opacity-90" />
                                    </>
                                ) : (
                                    /* Solid Card Background */
                                    <div className="absolute inset-0 bg-[#022C23] flex items-center justify-center opacity-50">
                                        <Factory className={`text-[#bef264] w-64 h-64 transition-transform duration-700 ${isActive ? 'scale-110 opacity-20' : 'opacity-10'}`} />
                                    </div>
                                )}

                                {/* Content Logic */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <AnimatePresence mode='popLayout'>

                                        {/* Collapsed State */}
                                        {!isActive && (
                                            <motion.div
                                                key="collapsed"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute bottom-8 left-8 origin-bottom-left -rotate-90 whitespace-nowrap"
                                            >
                                                <h3 className={`text-xl font-bold tracking-wide uppercase ${isSolidCard ? 'text-[#bef264]' : 'text-white'}`}>
                                                    {industry.title}
                                                </h3>
                                            </motion.div>
                                        )}

                                        {/* Expanded State */}
                                        {isActive && (
                                            <motion.div
                                                key="expanded"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                                className="w-full"
                                            >
                                                <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                                                    {industry.title}
                                                </h3>
                                                <div className="h-1 w-12 bg-[#bef264] mb-4 rounded-full" />
                                                <p className="text-gray-200 text-lg mb-6 max-w-md">
                                                    {industry.note}
                                                </p>
                                                <div className="flex items-center text-[#bef264] font-semibold group w-fit">
                                                    {isSolidCard ? 'See All Sectors' : 'Learn More'}
                                                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* --- MOBILE VIEW --- */}
                {/* Wrapped in motion.div for entry animation, but internal scroll is native */}
                <motion.div
                    className="md:hidden"
                    //@ts-ignore
                    variants={itemVariants}
                >
                    <div
                        ref={scrollContainerRef}
                        // Pause auto-scroll on interaction
                        onTouchStart={() => setIsHovering(true)}
                        onTouchEnd={() => setIsHovering(false)}
                        className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {/* Use the filtered list here */}
                        {visibleIndustries.map((industry) => (
                            <div
                                key={industry.id}
                                onClick={() => window.location.href = industry.link}
                                className="relative min-w-[85vw] h-[400px] rounded-2xl overflow-hidden snap-center flex-shrink-0"
                                style={{ backgroundColor: '#022C23' }}
                            >
                                {industry.image ? (
                                    <>
                                        <div
                                            className="absolute inset-0 bg-cover bg-center opacity-40"
                                            style={{ backgroundImage: `url(${industry.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#022C23] via-transparent to-transparent" />
                                    </>
                                ) : (
                                    <div className="absolute inset-0 bg-[#022C23] flex items-center justify-center">
                                        <Factory className="text-green-900 w-48 h-48 opacity-20" />
                                    </div>
                                )}

                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {industry.title}
                                    </h3>
                                    <p className="text-gray-300 text-base mb-4">
                                        {industry.note}
                                    </p>
                                    <span className="text-green-400 font-semibold flex items-center gap-2">
                                        {industry.image ? 'See Solution' : 'View All'} →
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default IndustriesCarousel;