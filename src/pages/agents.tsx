import Head from 'next/head';
import { useState, useMemo } from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { ArrowRightIcon, CheckCircle2, Phone, Filter, Search, X, SlidersHorizontal } from 'lucide-react';
import { agents } from '../components/agents/consts';

const AgentsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
    const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

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

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>AI Agents for Manufacturing | Agentworks</title>
                <meta name="description" content="Deploy autonomous AI agents that live in your existing tools and execute complex workflows 24/7." />
            </Head>

            <main>
                {/* Hero Section */}
                <Section className="bg-[#f7fee7] rounded-b-[3rem] pt-32 pb-20 overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#022c22] mb-6 leading-tight">
                            Specialized Infrastructure. <br />
                            <span className="text-[#65a30d]">Autonomous Execution.</span>
                        </h1>
                        <p className="text-xl text-[#022c22]/70 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Don't hire more people to do data entry. Deploy autonomous AI agents that live in your existing tools and execute complex workflows 24/7.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="#how-to-hire" variant="primary" className="!px-8 !py-4 !text-lg">
                                Deploy Your First Agent
                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </Button>
                            <Button href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" variant="outline" className="!px-8 !py-4 !text-lg bg-white/50 backdrop-blur-sm hover:bg-white/80">
                                Talk to a Systems Architect
                            </Button>
                        </div>
                    </div>
                </Section>

                {/* Sticky Search & Filter Bar */}
                <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">

                            {/* Search Input */}
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-11 pr-10 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#65a30d] focus:border-transparent text-sm transition-all"
                                    placeholder="Search by name, role, or capability..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                            </div>

                            {/* Filter Button */}
                            <button
                                onClick={() => setShowFilterModal(true)}
                                className="relative flex items-center justify-center gap-2 px-6 py-3 bg-[#022c22] text-white rounded-xl hover:bg-[#15803d] transition-all duration-200 font-medium text-sm shadow-md hover:shadow-lg"
                            >
                                <SlidersHorizontal className="w-4 h-4" />
                                <span>Filters</span>
                                {activeFilterCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-[#bef264] text-[#022c22] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                        {activeFilterCount}
                                    </span>
                                )}
                            </button>
                        </div>

                        {/* Active Filters Display */}
                        {activeFilterCount > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3 items-center">
                                <span className="text-xs font-medium text-gray-500">Active filters:</span>
                                {selectedDepartments.map(dept => (
                                    <span key={dept} className="inline-flex items-center gap-1 px-3 py-1 bg-[#f7fee7] text-[#166534] rounded-full text-xs font-semibold">
                                        {dept}
                                        <button onClick={() => toggleDepartment(dept)} className="hover:text-[#022c22]">
                                            <X className="w-3 h-3" />
                                        </button>
                                    </span>
                                ))}
                                {selectedIndustries.map(industry => (
                                    <span key={industry} className="inline-flex items-center gap-1 px-3 py-1 bg-[#bef264]/20 text-[#65a30d] rounded-full text-xs font-semibold">
                                        {industry}
                                        <button onClick={() => toggleIndustry(industry)} className="hover:text-[#022c22]">
                                            <X className="w-3 h-3" />
                                        </button>
                                    </span>
                                ))}
                                <button
                                    onClick={clearAllFilters}
                                    className="text-xs text-gray-500 hover:text-[#022c22] font-medium underline"
                                >
                                    Clear all
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Filter Modal */}
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

                {/* Agent Grid */}
                <Section className="bg-white min-h-[60vh]">
                    <div className="max-w-7xl mx-auto">
                        {filteredAgents.length > 0 ? (
                            <>
                                <div className="mb-6 text-sm text-gray-600">
                                    Showing <span className="font-bold text-[#022c22]">{filteredAgents.length}</span> {filteredAgents.length === 1 ? 'agent' : 'agents'}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredAgents.map((agent, index) => (
                                        <div
                                            key={index}
                                            className="group relative bg-white rounded-3xl border border-gray-200 hover:border-[#bef264] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
                                        >
                                            {/* Header */}
                                            <div className="p-8 pb-6 border-b border-gray-100 bg-gray-50/50">
                                                <div className="flex justify-between items-start mb-6">
                                                    <div className="w-14 h-14 rounded-2xl bg-[#bef264]/20 flex items-center justify-center text-[#65a30d]">
                                                        <agent.icon className="w-7 h-7" />
                                                    </div>
                                                    <div className="flex flex-col items-end gap-2">
                                                        <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-[#022c22]/60 uppercase tracking-wider">
                                                            {agent.department}
                                                        </span>
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#022c22] mb-2 group-hover:text-[#15803d] transition-colors">
                                                    {agent.name}
                                                </h3>
                                                <p className="text-[#65a30d] font-medium mb-4">{agent.role}</p>

                                                {/* Industry Tags */}
                                                <div className="flex flex-wrap gap-2">
                                                    {agent.industries.map((industry, i) => (
                                                        <span key={i} className="px-2 py-0.5 bg-[#f7fee7] text-[#166534] text-[10px] font-semibold rounded uppercase tracking-wide">
                                                            {industry}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Body */}
                                            <div className="p-8 pt-6 flex-1 flex flex-col">
                                                <p className="text-[#022c22]/70 mb-8 leading-relaxed">
                                                    {agent.mission}
                                                </p>

                                                <div className="space-y-6 mb-8 flex-1">
                                                    {agent.capabilities.map((cap, i) => (
                                                        <div key={i} className="flex gap-3">
                                                            <CheckCircle2 className="w-5 h-5 text-[#65a30d] flex-shrink-0 mt-0.5" />
                                                            <div className="text-sm">
                                                                <span className="font-bold text-[#022c22]">{cap.title}: </span>
                                                                <span className="text-[#022c22]/70">{cap.description}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="bg-[#f7fee7] rounded-xl p-4 border border-[#bef264]/20">
                                                    <div className="text-xs font-bold text-[#166534] uppercase tracking-wider mb-1">Impact</div>
                                                    <div className="font-medium text-[#022c22]">{agent.impact}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
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
                                <Button href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" variant="primary" className="!px-8 !py-4">
                                    Request a Custom Agent
                                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        )}
                    </div>
                </Section>

                {/* Can't Find Section */}
                {filteredAgents.length > 0 && (
                    <Section className="bg-white border-t border-gray-100">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#022c22] mb-6">
                                Can't find what you are looking for?
                            </h2>
                            <p className="text-xl text-[#022c22]/70 mb-10">
                                We build custom agents for unique manufacturing workflows. Let's discuss your specific use case.
                            </p>
                            <Button href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" variant="outline" className="!px-8 !py-4 !text-lg">
                                Request a Custom Agent
                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </Section>
                )}

                {/* How to Hire Section */}
                <Section id="how-to-hire" className="bg-[#022c22] text-white rounded-t-[3rem]">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                How to Deploy Your First Agent.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {[
                                {
                                    step: "01",
                                    title: "Pick Your Pilot",
                                    desc: "Choose the agent that solves your biggest bottleneck (e.g., Quoting or Finance)."
                                },
                                {
                                    step: "02",
                                    title: "Connect",
                                    desc: "We bridge the agent to your existing tools (WhatsApp, Tally, Email) in 24 hours."
                                },
                                {
                                    step: "03",
                                    title: "Go Live",
                                    desc: "The agent begins working immediately. No training required."
                                }
                            ].map((item, i) => (
                                <div key={i} className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="text-6xl font-bold text-[#bef264]/10 absolute top-4 right-6 select-none">
                                        {item.step}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
                                    <p className="text-white/70 leading-relaxed relative z-10">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Button href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" variant="accent" className="!px-8 !py-4 !text-lg">
                                <Phone className="w-5 h-5 mr-2" />
                                Book a Deployment Call
                            </Button>
                        </div>
                    </div>
                </Section>
            </main>
        </div>
    );
};

export default AgentsPage;
