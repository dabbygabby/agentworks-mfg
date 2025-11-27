import { FileText, BarChart3, ShieldCheck, CheckCircle2, ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Feature {
    label: string;
    description: string;
}

interface Agent {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    tagline: string;
    features: Feature[];
    learnMoreLink?: string;
}

interface AgentsSectionProps {
    title: string;
    subtitle?: string;
    agents: any;
    ctaText: string;
    ctaHref: string;
    backgroundColor?: string;
}

const AgentCard = ({ icon: Icon, title, subtitle, tagline, features, learnMoreLink }: Agent) => {
    return (
        <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors flex flex-col w-full h-full"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <div className="flex-grow">
                <motion.div
                    className="flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.div
                        className="w-12 h-12 rounded-xl bg-[#bef264] flex items-center justify-center text-[#022c22]"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <Icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p className="text-[#bef264] text-sm font-medium">{subtitle}</p>
                    </div>
                </motion.div>

                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className="text-2xl font-bold mb-2">{tagline}</p>
                </motion.div>

                <ul className="space-y-4 text-white/80 mb-8">
                    {features.map((feature, index) => (
                        <motion.li
                            key={index}
                            className="flex gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        >
                            <CheckCircle2 className="w-5 h-5 text-[#bef264] flex-shrink-0" />
                            <span>
                                <strong>{feature.label}:</strong> {feature.description}
                            </span>
                        </motion.li>
                    ))}
                </ul>
            </div>

            {learnMoreLink && (
                <div className="mt-auto pt-6 border-t border-white/10">
                    <Link
                        href={learnMoreLink}
                        className="flex items-center gap-2 text-[#bef264] font-semibold hover:text-white transition-colors group"
                    >
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            )}
        </motion.div>
    );
};

const DetailAgentSection = ({
    title,
    subtitle,
    agents,
    ctaText,
    ctaHref,
    backgroundColor = "bg-[#022c22]"
}: AgentsSectionProps) => {
    // Animation variants
    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] // Custom easing for smooth effect
            }
        }
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.8, // Appears after the grid animation
                ease: "easeOut"
            }
        }
    };

    return (
        <section className={`${backgroundColor} text-white pt-24 pb-32 relative overflow-hidden`}>
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#bef264]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold mb-6"
                        //@ts-ignore
                        variants={titleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {title}
                    </motion.h2>
                    {subtitle && (
                        <motion.p
                            className="text-xl font-medium mb-6"
                            //@ts-ignore
                            variants={titleVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* @ts-ignore */}
                    {agents.map((agent, index) => (
                        //@ts-ignore
                        <motion.div key={index} variants={cardVariants} className="flex">
                            <AgentCard {...agent} />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex w-full items-center justify-center mt-12">
                    <motion.div
                        //@ts-ignore
                        variants={buttonVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Link
                            href={ctaHref}
                            className="bg-[#bef264] font-semibold hover:bg-lime-400 text-[#022c22] px-6 py-2 rounded-full flex items-center gap-2 transition-colors"
                        >
                            <motion.span
                                whileHover={{ x: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                {ctaText}
                            </motion.span>
                            <motion.span
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ArrowRight className="w-4 h-4" />
                            </motion.span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Export both the component and the data
export { DetailAgentSection };
export type { AgentsSectionProps, Agent, Feature };