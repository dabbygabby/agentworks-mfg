import Head from 'next/head';
import { useState } from 'react';
import Button from '../components/ui/Button';
import { Search, Shield, Lock, Server } from 'lucide-react';
import { libraryData, coreFour, categories } from '../components/connectors/connectorList';
import Image from 'next/image';


export default function Connectors() {
    const [activeCategory, setActiveCategory] = useState('finance');
    const [searchQuery, setSearchQuery] = useState('');

    // Flatten data for search if query exists, otherwise use active category
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

    return (
        <>
            <Head>
                <title>Connectors & Integrations | Agentworks</title>
                <meta name="description" content="Agentworks layers on top of your existing software stack. Connect Tally, SAP, Excel, and more." />
            </Head>

            <div className="flex flex-col min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative bg-[#f7fee7] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden rounded-b-[3rem]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#022c22] mb-6 leading-tight">
                                Connect Everything. <br />
                                <span className="text-lime-600">Change Nothing.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-[#022c22]/70 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                                Agentworks layers on top of your existing software stack. Whether you run on Tally, SAP, or just Excel sheets—our agents plug directly into your reality.
                            </p>

                            {/* Search Bar & CTA */}
                            <div className="flex flex-col items-center gap-6">
                                <div className="relative w-full max-w-lg">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full pl-11 pr-4 py-4 bg-white border-0 rounded-full text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-lg"
                                        placeholder="Search Your Tool (e.g. Tally, SAP, Excel)"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <Button href="#" variant="outline" className="bg-white/50 hover:bg-white">
                                    Request Custom Connector
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-[#bef264]/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
                </section>

                {/* Core Four Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#022c22] mb-4">The Core Four</h2>
                            <p className="text-lg text-gray-600 max-w-7xl mx-auto">
                                The tools you trust, now working as one. We've built deep, native integrations with the platforms that power Indian manufacturing. No more manual data entry, no more silos—just seamless flow from your shop floor to your top floor.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {coreFour.map((tool, index) => (
                                <div key={index} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-lime-200 hover:shadow-xl transition-all duration-300 group">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl font-bold text-lime-600 group-hover:scale-110 transition-transform">
                                            {/* Placeholder Logo */}
                                            {tool.icon ? (
                                                <Image
                                                    src={"/icons/" + tool.icon}
                                                    alt={tool.name}
                                                    width={512}
                                                    height={512}
                                                    className="w-2/3 h-2/3 object-contain"
                                                />

                                            ) : tool.name.charAt(0)}

                                        </div>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                                            Popular
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#022c22] mb-2">{tool.name}</h3>
                                    <div className="space-y-4 mt-6">
                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">How we connect</p>
                                            <p className="text-sm font-medium text-gray-700 bg-white px-3 py-2 rounded-lg border border-slate-100 inline-block">
                                                {tool.connect}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">What it does</p>
                                            <p className="text-gray-600 leading-relaxed">{tool.what}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Use Case</p>
                                            <p className="text-gray-600 italic">"{tool.useCase}"</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comprehensive Library */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#022c22] mb-4">Integration Library</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Organized by department so you see value across your company.
                            </p>
                        </div>

                        {/* Category Tabs */}
                        {!searchQuery && (
                            <div className="flex flex-wrap justify-center gap-4 mb-12">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat.id
                                            ? 'bg-[#022c22] text-white shadow-lg scale-105'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                            }`}
                                    >
                                        <span className="block text-base">{cat.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Search Result Header */}
                        {searchQuery && (
                            <div className="text-center mb-8">
                                <p className="text-gray-600">
                                    Showing results for "<span className="font-bold text-[#022c22]">{searchQuery}</span>"
                                </p>
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="text-lime-600 text-sm hover:underline mt-2"
                                >
                                    Clear search
                                </button>
                            </div>
                        )}

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {displayData.length > 0 ? (
                                displayData.map((tool, index) => (
                                    <div key={index} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-lime-200 transition-all duration-200 group">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl mb-4 flex items-center justify-center text-lg font-bold text-gray-400 group-hover:bg-lime-50 group-hover:text-lime-600 transition-colors">
                                            {
                                                tool.icon ? (
                                                    <Image
                                                        src={"/icons/" + tool.icon}
                                                        alt={tool.name}
                                                        width={512}
                                                        height={512}
                                                        className="w-2/3 h-2/3 object-contain"
                                                    />
                                                ) : tool.name.charAt(0)
                                            }
                                        </div>
                                        <h3 className="text-lg font-bold text-[#022c22] mb-2">{tool.name}</h3>
                                        <div className="space-y-3">
                                            <div>
                                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Integration</span>
                                                <p className="text-sm text-gray-600">{tool.type}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Capability</span>
                                                <p className="text-sm text-gray-600 line-clamp-3">{tool.capability}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-gray-500 text-lg">No connectors found matching your search.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                {/* IT Note Section */}
                <section className="py-12 bg-slate-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className="w-6 h-6 text-lime-600" />
                                <h4 className="text-lg font-bold text-[#022c22]">Security & Protocol Note</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex items-start gap-3">
                                    <Lock className="w-5 h-5 text-gray-400 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">Read-Only Access</p>
                                        <p className="text-sm text-gray-600">We can configure agents to have "Read-Only" access for sensitive data layers.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-gray-400 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">Encryption</p>
                                        <p className="text-sm text-gray-600">All data in transit is encrypted via TLS 1.3.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Server className="w-5 h-5 text-gray-400 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">On-Prem Capability</p>
                                        <p className="text-sm text-gray-600">For air-gapped factory floors, we offer local gateway options.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Custom Bridge Section */}
                <section className="py-20 bg-[#022c22] text-white overflow-hidden relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't See Your Tool?</h2>
                        <h3 className="text-2xl md:text-3xl font-semibold text-lime-400 mb-8">We Build Custom Bridges.</h3>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Manufacturing is full of legacy software and custom SQL databases. If your tool isn't listed above, our engineering team can build a custom connector in 48 hours.
                        </p>
                        <Button href="#" variant="primary" className="bg-[#bef264] text-[#022c22] hover:bg-[#d9f99d] border-none">
                            Request a Connector Check
                        </Button>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
                </section>

            </div>
        </>
    );
}
