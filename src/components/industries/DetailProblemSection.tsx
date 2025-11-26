import React from 'react';
import { Clock, Scissors, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. Define TypeScript Interfaces ---

/**
 * Interface for a single Feature/Problem item.
 */
interface FeatureItem {
    title: string;
    icon: React.ReactNode;
    desc: string;
}

/**
 * Interface for the main DetailProblemSection component props.
 */
interface DetailProblemSectionProps {
    title: string;
    subtitle: string;
    features: FeatureItem[];
}


// --- 2. The Enhanced Animated Component (DetailProblemSection) ---

/**
 * Animated component displaying problem details with an elegant Framer Motion 3D Pop-Up effect,
 * adapted for a light background layout.
 */
export const DetailProblemSection: React.FC<DetailProblemSectionProps> = ({ title, subtitle, features }) => {

    // 1. Parent container variants for staggered animation
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15, // Slower stagger for more impact
                delayChildren: 0.3,
            },
        },
    };

    // 2. Child item variants (Enhanced 3D Pop-Up Effect)
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 80, // Start lower
            scale: 0.9,
            rotateX: -20, // More pronounced 3D start
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 1.2, // Slower duration for a luxurious feel
                ease: [0.17, 0.55, 0.25, 1], // Custom sophisticated ease-out
            },
        },
    };

    // 3. Header Text variants (Smooth Slide-Down Fade-In)
    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                ease: [0.4, 0, 0.2, 1]
            }
        },
    };


    return (
        <motion.section
            // Removed bg-gray-50 and kept the padding and overflow control
            className="relative py-16 sm:py-24 overflow-hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* REMOVED: Subtle Background SVG Shapes */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        // Used a dark, bold text color
                        className="text-4xl md:text-6xl font-bold text-[#091a32] mb-5 tracking-tight"
                        //@ts-ignore
                        variants={headerVariants}
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        // Used a subtle, readable text color
                        className="max-w-3xl mx-auto text-xl text-[#091a32]/70 leading-relaxed"
                        //@ts-ignore
                        variants={headerVariants}
                        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
                    >
                        {subtitle}
                    </motion.p>
                </div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                    variants={containerVariants}
                >
                    {features.map((item, i) => (
                        <motion.div
                            key={item.title}
                            // ADAPTED CARD STYLE: White background, rounded-3xl, soft shadow, no border
                            className="bg-white rounded-3xl p-10 shadow-xl cursor-pointer"
                            style={{ perspective: 1500, transformStyle: 'preserve-3d' }}
                            //@ts-ignore
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.04,
                                y: -10,
                                rotate: [0, 0.5, -0.5, 0], // Subtle side tilt on hover
                                // Softer shadow for a light background
                                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                                rotate: {
                                    type: "tween",
                                    duration: 0.5
                                }
                            }}
                        >
                            {/* ADAPTED ICON CONTAINER: Rounded full, subtle red background (like the image) */}
                            <div className="mb-6 bg-red-100 text-red-600 w-14 h-14 rounded-full flex items-center justify-center shadow-md transform translate-z-20">
                                {/* @ts-ignore */}
                                {React.cloneElement(item.icon as React.ReactElement, { size: 30 })}
                            </div>
                            <h3 className="text-2xl font-bold text-[#091a32] mb-3 transform translate-z-20">{item.title}</h3>
                            <p className="text-[#091a32]/70 leading-relaxed transform translate-z-20">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};