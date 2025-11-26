import Head from 'next/head';
import { useState, useMemo } from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, Phone, Filter, Search, X, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { agents } from '../components/agents/consts';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { meetingLink } from '@src/globals';

const AgentsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
    const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
    const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null);

    // Extract unique departments and industries
    const allDepartments = useMemo(() => {
        const depts = new Set<string>();
        agents.forEach(agent => depts.add(agent.department));
        return Array.from(depts).sort();
    }, []);

    const allIndustries = useMemo(() => {
        const industries = new Set<string>();
        agents.forEach(agent => agent.industries.forEach(ind => industries.add(ind)));
        return Array.from(industries).sort();
    }, []);

    const toggleDepartment = (dept: string) => {
        setSelectedDepartments(prev =>
            prev.includes(dept) ? prev.filter(d => d !== dept) : [...prev, dept]
        );
    };

    const toggleIndustry = (industry: string) => {
        setSelectedIndustries(prev =>
            prev.includes(industry) ? prev.filter(i => i !== industry) : [...prev, industry]
        );
    };

    const clearAllFilters = () => {
        setSelectedDepartments([]);
        setSelectedIndustries([]);
    };

    const activeFilterCount = selectedDepartments.length + selectedIndustries.length;

    const filteredAgents = useMemo(() => {
        return agents.filter(agent => {
            // Filter by Department
            const matchesDepartment = selectedDepartments.length === 0 || selectedDepartments.includes(agent.department);

            // Filter by Industry
            const matchesIndustry = selectedIndustries.length === 0 || agent.industries.some(ind => selectedIndustries.includes(ind));

            // Filter by Search Query
            const query = searchQuery.toLowerCase();
            const matchesSearch =
                searchQuery === '' ||
                agent.name.toLowerCase().includes(query) ||
                agent.role.toLowerCase().includes(query) ||
                agent.mission.toLowerCase().includes(query) ||
                agent.industries.some(ind => ind.toLowerCase().includes(query)) ||
                agent.capabilities.some(cap => cap.title.toLowerCase().includes(query) || cap.description.toLowerCase().includes(query));

            return matchesDepartment && matchesIndustry && matchesSearch;
        });
    }, [selectedDepartments, selectedIndustries, searchQuery]);

    const handleAgentClick = (agent: typeof agents[0]) => {
        setSelectedAgent(agent);
        // Scroll to top of grid section
        const gridSection = document.getElementById('agent-grid');
        if (gridSection) {
            gridSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleBackToGrid = () => {
        setSelectedAgent(null);
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
        <div className="min-h-screen">
            <Head>
                <title>AI Agents for Manufacturing | Agentworks</title>
                <meta name="description" content="Deploy autonomous AI agents that live in your existing tools and execute complex workflows 24/7." />
            </Head>

            <main>
                {/* Hero Section */}
                <Section className="bg-[#022c22] pt-32 pb-20 overflow-hidden relative">
                    <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-bold text-[#FEFCE8] mb-6 leading-tight"
                        >
                            Give Your Team Infinite Bandwidth

                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto"
                        >
                            Supercharge your existing workforce with agents that quote, track, and audit 24/7—without ever getting tired.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href={meetingLink} target="_blank"
                                className='flex flex-row justify-center items-center gap-2 bg-[#BEF264] font-semibold text-[#022c22] px-8 py-5 rounded-full hover:bg-[#BEF264dd] transition-all hover:scale-105 active:scale-95'
                            >
                                Supercharge Your Team
                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </Link>
                            <Button href={meetingLink} variant="outline" className="!px-8 !py-5 !text-lg text-white !border-white !border hover:bg-white/20 rounded-full hover:scale-105 active:scale-95 transition-all">
                                See Agents in Action
                            </Button>
                        </motion.div>
                    </div>

                    {/* Decorative Elements - Pulsing Glow */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-b from-[#bef264]/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
                        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </Section>

                {/* Agent Library Section */}
                <Section className="pt-24 pb-0" id="agent-grid">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#022c22] mb-4">The Always-On Workforce</h2>
                            <p className="text-lg text-[#022c22]/70">
                                Deploy autonomous AI agents that live in your existing tools and execute complex workflows 24/7.
                            </p>
                        </div>

                        {!selectedAgent && (
                            <>
                                <div className="flex justify-center items-center gap-4 max-w-3xl mx-auto mb-8">
                                    {/* Search Input */}
                                    <div className="relative flex-1 group">
                                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                                            <Search className="h-6 w-6 text-gray-400 group-focus-within:text-[#022c22] transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            className="block w-full pl-16 pr-6 py-5 bg-white border border-[#022c22]/10 rounded-full text-gray-900 shadow-xl ring-1 ring-inset ring-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#022c22] focus:border-[#022c22] text-lg transition-all"
                                            placeholder="Search by name, role, or capability..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                        {searchQuery && (
                                            <button
                                                onClick={() => setSearchQuery('')}
                                                className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                            >
                                                <X className="h-5 w-5" />
                                            </button>
                                        )}
                                    </div>

                                    {/* Filter Button */}
                                    <button
                                        onClick={() => setShowFilterModal(true)}
                                        className="relative flex-shrink-0 w-16 h-16 bg-[#022c22] text-white rounded-full hover:bg-[#15803d] transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center group"
                                        aria-label="Filters"
                                    >
                                        <SlidersHorizontal className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                        {activeFilterCount > 0 && (
                                            <span className="absolute -top-1 -right-1 bg-[#bef264] text-[#022c22] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
                                                {activeFilterCount}
                                            </span>
                                        )}
                                    </button>
                                </div>

                                {/* Active Filters Display */}
                                {activeFilterCount > 0 && (
                                    <div className="flex flex-wrap gap-2 justify-center items-center mb-8">
                                        <span className="text-sm font-medium text-gray-500 mr-2">Active filters:</span>
                                        {selectedDepartments.map(dept => (
                                            <span key={dept} className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#f7fee7] text-[#166534] rounded-full text-sm font-semibold border border-[#bef264]/20">
                                                {dept}
                                                <button onClick={() => toggleDepartment(dept)} className="hover:text-[#022c22] transition-colors">
                                                    <X className="w-3.5 h-3.5" />
                                                </button>
                                            </span>
                                        ))}
                                        {selectedIndustries.map(industry => (
                                            <span key={industry} className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#bef264]/20 text-[#65a30d] rounded-full text-sm font-semibold border border-[#bef264]/20">
                                                {industry}
                                                <button onClick={() => toggleIndustry(industry)} className="hover:text-[#022c22] transition-colors">
                                                    <X className="w-3.5 h-3.5" />
                                                </button>
                                            </span>
                                        ))}
                                        <button
                                            onClick={clearAllFilters}
                                            className="text-sm text-gray-500 hover:text-[#022c22] font-medium underline ml-2 transition-colors"
                                        >
                                            Clear all
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>


                    {/* Agent Grid / Detail View */}
                    <div className="max-w-7xl mx-auto mt-8">
                        <AnimatePresence mode="wait">
                            {selectedAgent ? (
                                /* Detailed View */
                                <motion.div
                                    key="detail"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden"
                                >
                                    {/* Back Button */}
                                    <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-4">
                                        <button
                                            onClick={handleBackToGrid}
                                            className="flex items-center gap-2 text-[#022c22] font-medium hover:text-[#15803d] transition-colors"
                                        >
                                            <ArrowLeft className="w-5 h-5" />
                                            Back to all agents
                                        </button>
                                    </div>

                                    <div className="flex flex-col md:flex-row">
                                        {/* Left Column: Header Info */}
                                        <div className="p-8 md:w-1/3 border-r border-gray-100 bg-gray-50/30">
                                            <div className="w-20 h-20 rounded-3xl bg-[#bef264]/20 flex items-center justify-center text-[#65a30d] mb-6">
                                                <selectedAgent.icon className="w-10 h-10" />
                                            </div>
                                            <span className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-[#022c22]/60 uppercase tracking-wider mb-4">
                                                {selectedAgent.department}
                                            </span>
                                            <h3 className="text-3xl font-bold text-[#022c22] mb-2">
                                                {selectedAgent.name}
                                            </h3>
                                            <p className="text-[#65a30d] text-lg font-medium mb-6">{selectedAgent.role}</p>

                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {selectedAgent.industries.map((industry, i) => (
                                                    <span key={i} className="px-2 py-0.5 bg-[#f7fee7] text-[#166534] text-[10px] font-semibold rounded uppercase tracking-wide">
                                                        {industry}
                                                    </span>
                                                ))}
                                            </div>

                                            <Button
                                                href={meetingLink}
                                                variant="primary"
                                                className="w-full justify-center !py-4 !text-lg bg-[#022c22] text-white hover:bg-[#15803d]"
                                            >
                                                I want this
                                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                                            </Button>
                                        </div>

                                        {/* Right Column: Details */}
                                        <div className="p-8 md:w-2/3">
                                            <div className="mb-10">
                                                <h4 className="text-lg font-bold text-[#022c22] mb-4">Mission</h4>
                                                <p className="text-[#022c22]/70 text-lg leading-relaxed">
                                                    {selectedAgent.mission}
                                                </p>
                                            </div>

                                            <div className="mb-10">
                                                <h4 className="text-lg font-bold text-[#022c22] mb-6">Capabilities</h4>
                                                <div className="grid grid-cols-1 gap-6">
                                                    {selectedAgent.capabilities.map((cap, i) => (
                                                        <div key={i} className="flex gap-4">
                                                            <div className="w-8 h-8 rounded-full bg-[#bef264]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                                <CheckCircle2 className="w-5 h-5 text-[#65a30d]" />
                                                            </div>
                                                            <div>
                                                                <span className="block font-bold text-[#022c22] text-lg mb-1">{cap.title}</span>
                                                                <span className="text-[#022c22]/70 leading-relaxed">{cap.description}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-[#f7fee7] rounded-2xl p-6 border border-[#bef264]/20">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="w-1 h-6 bg-[#65a30d] rounded-full"></div>
                                                    <div className="text-sm font-bold text-[#166534] uppercase tracking-wider">Business Impact</div>
                                                </div>
                                                <div className="font-medium text-[#022c22] text-lg pl-4">{selectedAgent.impact}</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                /* Grid View */
                                <motion.div
                                    key="grid"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {filteredAgents.length > 0 ? (
                                        <>
                                            <div className="mb-6 text-sm text-gray-600">
                                                Showing <span className="font-bold text-[#022c22]">{filteredAgents.length}</span> {filteredAgents.length === 1 ? 'agent' : 'agents'}
                                            </div>
                                            <motion.div
                                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                                variants={staggerContainer}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, margin: "-50px" }}
                                            >
                                                {filteredAgents.map((agent, index) => (
                                                    <motion.div
                                                        key={index}
                                                        onClick={() => handleAgentClick(agent)}
                                                        variants={cardVariant}
                                                        className="group relative bg-white/50 backdrop-blur-sm rounded-2xl border border-[#022c22]/10 hover:border-[#022c22]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
                                                    >
                                                        <div className="p-6 flex items-center gap-6">
                                                            <div className="w-16 h-16 rounded-2xl bg-[#bef264]/20 flex items-center justify-center text-[#65a30d] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                                <agent.icon className="w-8 h-8" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex items-center gap-2 mb-1">
                                                                    <span className="px-2.5 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-bold text-[#022c22]/60 uppercase tracking-wider">
                                                                        {agent.department}
                                                                    </span>
                                                                </div>
                                                                <h3 className="text-xl font-bold text-[#022c22] mb-1 truncate group-hover:text-[#15803d] transition-colors">
                                                                    {agent.name}
                                                                </h3>
                                                                <p className="text-[#65a30d] font-medium text-sm truncate">{agent.role}</p>
                                                            </div>
                                                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#bef264] group-hover:text-[#022c22] transition-all duration-300">
                                                                <ArrowRightIcon className="w-5 h-5" />
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </>
                                    ) : (
                                        /* Empty State */
                                        <div className="text-center py-20">
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                                                <Search className="w-10 h-10 text-gray-400" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#022c22] mb-4">No agents found</h3>
                                            <p className="text-xl text-[#022c22]/60 max-w-lg mx-auto mb-8">
                                                We couldn't find any agents matching your criteria. But we can build a custom one for you.
                                            </p>
                                            <Button href={meetingLink} variant="primary" className="!px-8 !py-4">
                                                Request a Custom Agent
                                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                                            </Button>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </Section>

                {/* Filter Modal moved outside Section but inside main */}
                {showFilterModal && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            {/* Background overlay */}
                            <div
                                className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity"
                                onClick={() => setShowFilterModal(false)}
                            ></div>

                            {/* Modal panel */}
                            <div className="relative inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full z-50">
                                {/* Header */}
                                <div className="bg-[#f7fee7] px-6 py-5 border-b border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-2xl font-bold text-[#022c22] flex items-center gap-2">
                                            <Filter className="w-6 h-6 text-[#65a30d]" />
                                            Filter Agents
                                        </h3>
                                        <button
                                            onClick={() => setShowFilterModal(false)}
                                            className="text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="px-6 py-6 max-h-[60vh] overflow-y-auto">
                                    {/* Department Filters */}
                                    <div className="mb-8">
                                        <h4 className="text-lg font-bold text-[#022c22] mb-4 flex items-center gap-2">
                                            <div className="w-1 h-6 bg-[#65a30d] rounded-full"></div>
                                            Department
                                        </h4>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                            {allDepartments.map(dept => (
                                                <button
                                                    key={dept}
                                                    onClick={() => toggleDepartment(dept)}
                                                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border-2 ${selectedDepartments.includes(dept)
                                                        ? 'bg-[#022c22] text-white border-[#022c22] shadow-md'
                                                        : 'bg-white text-[#022c22] border-gray-200 hover:border-[#bef264] hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {dept}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Industry Filters */}
                                    <div>
                                        <h4 className="text-lg font-bold text-[#022c22] mb-4 flex items-center gap-2">
                                            <div className="w-1 h-6 bg-[#65a30d] rounded-full"></div>
                                            Industry
                                        </h4>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                            {allIndustries.map(industry => (
                                                <button
                                                    key={industry}
                                                    onClick={() => toggleIndustry(industry)}
                                                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border-2 ${selectedIndustries.includes(industry)
                                                        ? 'bg-[#65a30d] text-white border-[#65a30d] shadow-md'
                                                        : 'bg-white text-[#022c22] border-gray-200 hover:border-[#bef264] hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {industry}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
                                    <button
                                        onClick={clearAllFilters}
                                        className="text-sm font-medium text-gray-600 hover:text-[#022c22] transition-colors"
                                    >
                                        Clear all filters
                                    </button>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setShowFilterModal(false)}
                                            className="px-6 py-2 bg-white border-2 border-gray-300 text-[#022c22] rounded-xl font-medium hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => setShowFilterModal(false)}
                                            className="px-6 py-2 bg-[#022c22] text-white rounded-xl font-medium hover:bg-[#15803d] transition-colors shadow-md"
                                        >
                                            Apply Filters
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- REPLACEMENT BOTTOM SECTION (Dark Mode) --- */}
                <Section className="py-24 bg-[#022c22] overflow-hidden relative">

                    {/* Background Glow Effects */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#bef264] rounded-full blur-[150px] opacity-10 pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600 rounded-full blur-[150px] opacity-10 pointer-events-none" />

                    <div className="relative z-10 max-w-5xl mx-auto text-center px-4">

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to Unleash Your Team?
                        </h2>

                        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Deploy a standard agent today, or challenge us to build a custom workflow for your specific factory constraints.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            {/* Primary Action: Book Call */}
                            <Link
                                href={meetingLink}
                                target="_blank"
                                className="rounded-full flex items-center justify-center flex-row !px-10 !py-4 !text-lg bg-[#bef264] w-64 text-[#022c22] hover:bg-[#d9f99d] shadow-xl shadow-[#bef264]/20 border-none"
                            >
                                Start Your Pilot
                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </Link>

                            {/* Secondary Action: Custom Request (Same Link) */}
                            <Link
                                href={meetingLink}
                                target="_blank"
                                className="rounded-full flex items-center border-2 justify-center flex-row !px-10 !py-4 !text-lg border-white/20 text-white hover:bg-white/10"
                            >
                                Request Custom Build
                            </Link>
                        </div>

                        <p className="mt-8 text-sm font-medium text-white/40 uppercase tracking-widest">
                            Fully Integrated with The Tools You Already Use
                        </p>

                    </div>
                </Section>
            </main>
        </div >
    );
};

export default AgentsPage;
