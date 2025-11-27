import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, ArrowRight, Phone, Users } from 'lucide-react';
import { whatsappLinkGenerator } from '../globals';

const TEAM = [
    {
        name: 'Saurabh Dabral',
        role: 'Founder & CEO',
        title: 'The Architect',
        image: '/people/saurabh-dabral.png',
        linkedin: 'https://linkedin.com/in/saurabhdabral',
        bio: 'Saurabh doesn\'t just build software; he builds intelligence. With a dual background in Mathematics & Manufacturing Engineering from BITS Pilani, he bridges the gap between complex algorithms and physical reality.',
        bullets: [
            'Ex-Founder of WitHub (RAG Infrastructure) and Edukey (Adaptive Learning).',
            'Mission: Building the "Brain" that translates messy factory data into clean financial records.'
        ]
    },
    {
        name: 'Rabnoor Singh',
        role: 'Founder & CBO',
        title: 'The Industrialist',
        image: '/people/rabnoor-singh.png',
        linkedin: 'https://linkedin.com/in/rabnoorsingh',
        bio: 'Rabnoor brings the "Skin in the Game." He hasn\'t just sold to factories; he has run them. As the former VP of Digital Transformation at Bird Machines, he lived the chaos of the shop floor every day.',
        bullets: [
            'Ex-Founder of Equinex (Manufacturing Automation). Mechanical Engineer (VIT).',
            'Mission: Ensuring our agents solve real operational pain, not just theoretical problems.'
        ]
    },
    {
        name: 'Vandit Sharma',
        role: 'Founder & CMO',
        title: 'The Growth Engine',
        image: '/people/vandit-sharma.png',
        linkedin: 'https://linkedin.com/in/vanditsharma',
        bio: 'Vandit understands how Indian B2B moves. With a Master\'s from IIT Kanpur and deep experience in B2B Product Marketing, he knows how to translate complex tech into simple business value.',
        bullets: [
            'Founder of Apprisers Media. Expert in B2B Go-To-Market strategy.',
            'Mission: Making "Digital Transformation" accessible to every SME in India.'
        ]
    },
    {
        name: 'Aditya Garg',
        role: 'Chief of Growth',
        title: 'The Expansion Lead',
        image: '/people/aditya-garg.png',
        linkedin: 'https://linkedin.com/in/adityagarg',
        bio: 'Aditya brings the global perspective required to scale. With experience in Property Investment across the EU/Asia and Export Management, he ensures Agentworks delivers world-class standards.',
        bullets: [
            'BSc Business & Finance (City, University of London). Ex-PACT International.',
            'Mission: Taking the "Make in India" SaaS story to the global stage.'
        ]
    }
];

export default function AboutUs() {
    return (
        <div className="bg-[#FEFCE8] min-h-screen text-slate-900 font-sans selection:bg-[#BEF264] selection:text-[#022C23]">
            <Head>
                <title>About Us | Agentworks</title>
                <meta name="description" content="We are fixing manufacturing's human gap. Bridging Silicon Valley tech with the Indian shop floor." />
            </Head>

            <main>

                {/* 1. Hero Section - DARK GREEN */}
                <section className="relative bg-[#022C23] text-white pt-32 pb-24 px-4 md:px-8 overflow-hidden">
                    {/* Ambient Background Glows for Hero */}
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#BEF264]/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#BEF264]/5 rounded-full blur-[150px] pointer-events-none" />

                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                We Are Fixing Manufacturing’s <br />
                                <span className="text-[#BEF264]">"Human Gap."</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                Technology got cheap. AI got smart. But the factory floor got left behind.
                                We exist to bridge the gap between Silicon Valley tech and the Indian shop floor—without forcing you to change a single workflow.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 2. Origin Story - LIGHT BACKGROUND */}
                <section className="py-24 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#022C23]">
                                    Software Failed You. <br />
                                    <span className="text-[#022C23]/70">So We Built a Workforce.</span>
                                </h2>
                                <div className="space-y-6 text-slate-600 text-lg">
                                    <p>
                                        For decades, manufacturers were told to "Digitize" by buying expensive ERPs that required months of training.
                                        The result? <strong className="text-[#022C23]">Shelfware.</strong> Great technology that nobody used because it didn't fit the reality of the floor.
                                    </p>
                                    <p>
                                        We realized the problem wasn't the technology. It was the <strong className="text-[#022C23]">Interface.</strong>
                                    </p>
                                    <ul className="space-y-3 pl-4 border-l-2 border-[#022C23]/20">
                                        <li>The <strong className="text-[#022C23]">Sethji</strong> runs his business on relationships, not login screens.</li>
                                        <li>The <strong className="text-[#022C23]">Operator</strong> knows his machine, not data entry.</li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Philosophy Card - GREEN CARD */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-[#022C23] p-10 rounded-3xl shadow-2xl relative overflow-hidden text-white"
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#BEF264]/10 rounded-full blur-[60px]" />
                                <h3 className="text-2xl font-bold mb-4 text-white">Our Philosophy is Simple</h3>
                                <p className="text-slate-300 mb-8 text-lg">
                                    We don't sell tools. We sell outcomes. We built <strong className="text-[#BEF264]">Agentworks</strong> on the belief that software should be invisible.
                                </p>
                                <blockquote className="text-xl font-medium text-white italic border-l-4 border-[#BEF264] pl-6 py-2 bg-white/5 rounded-r-xl">
                                    "If your team can send a WhatsApp message, they can run a digital factory."
                                </blockquote>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 3. Leadership Team - LIGHT BACKGROUND */}
                <section className="py-24 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#022C23]">
                                Built by <span className="text-[#022C23]/70">Manufacturing Insiders</span> & AI Architects.
                            </h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                We aren't just coders. We have managed shop floors, built automation engines, and scaled B2B products.
                                We know the difference between a "Bug" and a "Line Stoppage."
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {TEAM.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    // Team Card - GREEN CARD
                                    className="bg-[#022C23] rounded-2xl p-8 hover:shadow-2xl transition-all group text-white border border-[#022C23]"
                                >
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-slate-800 flex-shrink-0 border-4 border-[#BEF264]/20 group-hover:border-[#BEF264] transition-colors relative">
                                            {/* Uncomment when images are available */}
                                            <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover w-full h-full" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                                                    <p className="text-[#BEF264] font-medium">{member.role}</p>
                                                </div>
                                                <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                                    <Linkedin className="w-6 h-6" />
                                                </a>
                                            </div>
                                            <div className="mt-4 mb-4">
                                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                                                    {member.title}
                                                </span>
                                                <p className="text-slate-300 text-sm leading-relaxed">
                                                    {member.bio}
                                                </p>
                                            </div>
                                            <ul className="space-y-2">
                                                {member.bullets.map((bullet, bIdx) => (
                                                    <li key={bIdx} className="text-sm text-slate-400 flex gap-2">
                                                        <span className="text-[#BEF264] mt-1">•</span>
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Values - LIGHT BACKGROUND */}
                <section className="py-24 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#022C23]">We Only Win When You Win.</h2>
                        <p className="text-xl font-medium mb-12 max-w-2xl mx-auto text-slate-600">
                            Most software companies charge you for "Users" or "Licenses." We charge for <strong className="text-[#022C23] underline decoration-[#BEF264] decoration-4 underline-offset-4">Results.</strong>
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: 'Zero Upfront Cost', desc: 'We invest in the deployment.' },
                                { title: 'Profit-First Pricing', desc: 'Fees tied to measurable EBITDA gain.' },
                                { title: 'Long-Term Partners', desc: 'We partner, we don\'t just vend.' }
                            ].map((item, idx) => (
                                // Value Card - GREEN CARD
                                <div key={idx} className="bg-[#022C23] p-8 rounded-2xl shadow-xl text-white hover:-translate-y-1 transition-transform duration-300">
                                    <h3 className="text-xl font-bold mb-3 text-[#BEF264]">{item.title}</h3>
                                    <p className="text-slate-300">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Bottom CTA - DARK GREEN WITH GLOW */}
                <section className="py-24 px-4 md:px-8 text-center relative overflow-hidden bg-[#022C23]">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BEF264]/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-4 text-white">Ready to Meet the Team?</h2>
                        <p className="text-slate-400 text-lg mb-10">
                            We don't hide behind support tickets. We are real people solving real problems.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={whatsappLinkGenerator("Hi, I'd like to connect with the Agentworks team.")}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:w-auto px-8 py-4 bg-[#BEF264] text-[#022C23] font-bold rounded-xl hover:bg-[#d9f99d] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(190,242,100,0.3)] hover:shadow-[0_0_30px_rgba(190,242,100,0.5)]"
                            >
                                <Phone className="w-5 h-5" />
                                Connect on WhatsApp
                            </a>
                            <a
                                href="/partner-program"
                                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2 border border-white/10"
                            >
                                <Users className="w-5 h-5" />
                                Join Partner Network
                            </a>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
