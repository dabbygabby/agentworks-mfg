import Head from 'next/head';
import { useState } from 'react';
import Button from '../components/ui/Button';
import { Search, Shield, Lock, Server, ArrowRight, Zap, Database } from 'lucide-react';
import { libraryData, coreFour, categories } from '../components/connectors/connectorList';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Connectors() {
    const [activeCategory, setActiveCategory] = useState('finance');
    const [searchQuery, setSearchQuery] = useState('');

    // Flatten data for search if query exists
    const getDisplayData = () => {
        if (searchQuery) {
            const allTools = Object.values(libraryData).flat();
            return allTools.filter(tool =>
                tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.capability.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        return libraryData[activeCategory as keyof typeof libraryData];
    };

    const displayData = getDisplayData();

    // Animation Variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <>
            <Head>
                <title>Integrations & Connectors | Agentworks</title>
                <meta name="description" content="Connect Tally, SAP, Excel, and WhatsApp without changing your workflow." />
            </Head>

            {/* MASTER BACKGROUND: BEIGE/CREAM */}
            <div className="flex flex-col min-h-screen bg-[#fdfbf7]">

                {/* --- 1. HERO SECTION (Dark Green for Impact) --- */}
                <section className="relative bg-[#022c22] pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden shadow-2xl z-10">

                    {/* Background Noise (Optional texture) */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#bef264]/5 to-transparent pointer-events-none"></div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            className="max-w-4xl mx-auto text-center"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                        >

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#bef264] text-sm font-semibold mb-8 backdrop-blur-sm">
                                <Zap className="w-4 h-4" />
                                <span>Zero Migration Required</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-tight">
                                Connect Everything. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bef264] to-lime-500">
                                    Replace Nothing.
                                </span>
                            </h1>

                            <p className="text-xl md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Stop the "Migration" nightmare. We layer intelligence on top of your existing stack. Tally, SAP, Excel, or Email—we bridge the gap without a single day of downtime.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button href="#library" variant="accent" className="w-full sm:w-auto px-8 py-4 text-lg bg-[#bef264] text-[#022c22] hover:bg-[#d9f99d]">
                                    Search Integrations
                                </Button>
                                <Button href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg border-white/20 text-white hover:bg-white/10">
                                    Talk to an Engineer
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- 2. CORE FOUR SECTION (Beige Background, DARK CARDS) --- */}
                <section className="py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#022c22] mb-6">
                                The Big Four. <span className="text-lime-600">United at Last.</span>
                            </h2>
                            <p className="text-xl text-[#022c22]/70 max-w-3xl mx-auto">
                                Your factory likely runs on these four islands. Usually, they are disconnected silos. We build the invisible bridges that turn them into a single, synchronized system.
                            </p>
                        </div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {coreFour.map((tool, index) => (
                                <motion.div
                                    key={index}
                                    className="rounded-3xl p-8 bg-[#022c22] border border-white/5 hover:border-[#bef264]/50 shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                                    variants={cardVariant}
                                >

                                    {/* Subtle Bg Decoration */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#bef264]/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-[#bef264]/20 transition-colors"></div>

                                    <div className="flex items-start justify-between mb-8">
                                        {/* Icon Container */}
                                        <div className="w-20 h-20 bg-white rounded-2xl shadow-lg shadow-black/20 flex items-center justify-center text-3xl font-bold text-[#022c22] group-hover:scale-110 transition-transform duration-300">
                                            {tool.icon ? (
                                                <Image src={"/icons/" + tool.icon} alt={tool.name} width={512} height={512} className="w-2/3 h-2/3 object-contain" />
                                            ) : tool.name.charAt(0)}
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#bef264] text-[#022c22] mb-2 shadow-lg">
                                                Native Support
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-4">{tool.name}</h3>

                                    <div className="space-y-6 mt-6">
                                        {/* Inner Box - Glassmorphism */}
                                        <div className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-sm">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                                                <Zap className="w-3 h-3 text-[#bef264]" /> How we connect
                                            </p>
                                            <p className="font-medium text-white">{tool.connect}</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#bef264]/50">
                                            <p className="text-white/70 leading-relaxed text-lg">{tool.what}</p>
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Common Use Case</p>
                                            <p className="text-[#bef264] font-medium italic">"{tool.useCase}"</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* --- 3. LIBRARY SECTION (Beige Background, LIGHT/TRANSPARENT CARDS) --- */}
                <section id="library" className="py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#022c22] mb-4">Integration Library</h2>
                            <p className="text-lg text-[#022c22]/70">
                                From legacy SQL databases to modern Cloud ERPs. <br />If it has data, we can connect to it.
                            </p>
                        </div>

                        {/* SEARCH BAR (Light on Beige) */}
                        <div className="max-w-2xl mx-auto mb-16 relative">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                                    <Search className="h-6 w-6 text-gray-400 group-focus-within:text-[#022c22] transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-16 pr-6 py-5 bg-white border border-[#022c22]/10 rounded-full text-gray-900 shadow-xl ring-1 ring-inset ring-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#022c22] focus:border-[#022c22] text-lg transition-all"
                                    placeholder="Search specific tools (e.g. Zoho, Oracle, Sheets)"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Category Tabs */}
                        {!searchQuery && (
                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 border ${activeCategory === cat.id
                                            ? 'bg-[#022c22] text-white border-[#022c22] shadow-lg scale-105'
                                            : 'bg-transparent text-[#022c22]/70 border-[#022c22]/10 hover:border-[#022c22]/30 hover:bg-[#022c22]/5'
                                            }`}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Search Result Header */}
                        {searchQuery && (
                            <div className="text-center mb-8">
                                <p className="text-[#022c22]/70">
                                    Found {displayData.length} results for "<span className="font-bold text-[#022c22]">{searchQuery}</span>"
                                </p>
                                <button onClick={() => setSearchQuery('')} className="text-[#022c22] text-sm hover:underline mt-2 font-medium">
                                    Clear search results
                                </button>
                            </div>
                        )}

                        {/* GRID - TRANSPARENT/LIGHT CARDS with DARK BORDERS */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {displayData.length > 0 ? (
                                displayData.map((tool, index) => (
                                    <motion.div
                                        key={index}
                                        className="rounded-2xl p-6 border border-[#022c22]/10 hover:border-[#022c22]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full bg-white/50 backdrop-blur-sm"
                                        variants={cardVariant}
                                    >

                                        <div className="flex items-center justify-between mb-6">
                                            {/* Icon - Clean Look */}
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-lg font-bold text-[#022c22] shadow-sm border border-[#022c22]/5">
                                                {tool.icon ? (
                                                    <Image src={"/icons/" + tool.icon} alt={tool.name} width={512} height={512} className="w-2/3 h-2/3 object-contain" />
                                                ) : tool.name.charAt(0)}
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ArrowRight className="w-5 h-5 text-[#022c22] -rotate-45" />
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-[#022c22] mb-1">{tool.name}</h3>
                                        <p className="text-xs font-semibold text-[#022c22]/60 uppercase tracking-wider mb-4">{tool.type}</p>

                                        <div className="mt-auto pt-4">
                                            <p className="text-sm text-[#022c22]/70 line-clamp-3 leading-relaxed">{tool.capability}</p>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-16 bg-white/50 rounded-3xl border border-dashed border-[#022c22]/20">
                                    <Database className="w-12 h-12 text-[#022c22]/30 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-[#022c22]">No connector found</h3>
                                    <p className="text-[#022c22]/60 mb-6">We probably still support it via custom integration.</p>
                                    <Button href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" variant="outline" className="border-[#022c22]/20 text-[#022c22]">Request Custom Build</Button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </section>

                {/* --- 4. SECURITY SECTION (Beige Background, DARK CARD) --- */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {/* High Contrast Security Card - Dark Green */}
                        <motion.div
                            className="max-w-5xl mx-auto bg-[#022c22] rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden ring-1 ring-[#022c22]/10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                        >

                            {/* Decorative Background for Security */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#bef264] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

                            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 relative z-10">
                                <div className="p-4 bg-[#bef264] rounded-2xl text-[#022c22] w-fit shadow-lg shadow-[#bef264]/20">
                                    <Shield className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-white mb-2">Enterprise-Grade Security</h4>
                                    <p className="text-white/60 text-lg">Your data is your IP. We protect it like a bank.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                                <div className="group bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                    <h5 className="font-bold text-white mb-3 flex items-center gap-2 text-lg">
                                        <Lock className="w-5 h-5 text-[#bef264]" /> Read-Only Access
                                    </h5>
                                    <p className="text-sm text-white/70 leading-relaxed">We can configure agents to have strict "Read-Only" access for sensitive data layers, ensuring zero risk of corruption.</p>
                                </div>
                                <div className="group bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                    <h5 className="font-bold text-white mb-3 flex items-center gap-2 text-lg">
                                        <Shield className="w-5 h-5 text-[#bef264]" /> TLS 1.3 Encryption
                                    </h5>
                                    <p className="text-sm text-white/70 leading-relaxed">All data in transit is encrypted via TLS 1.3 standards. We use bank-grade signing for all API requests.</p>
                                </div>
                                <div className="group bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                    <h5 className="font-bold text-white mb-3 flex items-center gap-2 text-lg">
                                        <Server className="w-5 h-5 text-[#bef264]" /> On-Prem Capability
                                    </h5>
                                    <p className="text-sm text-white/70 leading-relaxed">For air-gapped factory floors or local SQL servers, we deploy local gateways that tunnel securely to the cloud.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- 5. FOOTER CTA (Beige Background, Dark Text) --- */}
                <section className="py-24 overflow-hidden relative bg-[#022c22]">
                    {/* Background Noise and Gradient */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#bef264]/5 to-transparent pointer-events-none"></div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeIn}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Don't See Your Tool?</h2>
                            <h3 className="text-2xl md:text-2xl font-semibold text-[#bef264] mb-8">We Build Custom Bridges in 48 Hours.</h3>
                            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Manufacturing is full of legacy software and custom SQL databases. If your tool isn't listed above, our engineering team will build a custom connector for you.
                            </p>
                            <Link href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" className="inline-block rounded-full px-10 py-4 text-lg font-bold bg-[#bef264] text-[#022c22] hover:bg-[#bef264]/80 transition-colors duration-300 ease-in-out shadow-xl shadow-black/20">
                                Schedule a Discovery Call
                            </Link>
                        </motion.div>
                    </div>
                </section>

            </div>
        </>
    );
}