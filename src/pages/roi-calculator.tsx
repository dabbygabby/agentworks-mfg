import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import {
    Factory,
    Pill,
    Truck,
    Cpu,
    Package,
    ChevronDown,
    ChevronUp,
    RefreshCw,
    ArrowRight,
    CheckCircle2,
    HelpCircle
} from 'lucide-react';
import { whatsappLinkGenerator } from '../globals';
import { motion, AnimatePresence } from 'framer-motion';

// --- TYPES & CONFIGURATION ---

type IndustryType = 'sheet-metal' | 'pharma' | 'heavy-machinery' | 'ems' | 'packaging' | 'other';

interface ROIConfig {
    id: IndustryType;
    name: string;
    icon: any;
    color: string;
    // The "One Big Number" the user definitely knows
    primaryInput: {
        label: string;
        key: string;
        defaultValue: number;
        step: number;
        max: number;
        prefix: string;
    };
    // The Hidden Leakage Logic
    leaks: {
        name: string;
        description: string;
        calculate: (primaryValue: number) => number;
        benchmarkNote: string; // Explains the math (e.g. "Industry avg: 5% waste")
    }[];
}

const INDUSTRIES: ROIConfig[] = [
    {
        id: 'sheet-metal',
        name: 'Sheet Metal & Fabrication',
        icon: Factory,
        color: 'text-orange-400',
        primaryInput: {
            label: 'Monthly Turnover',
            key: 'turnover',
            defaultValue: 5000000, // 50 Lakhs
            step: 500000,
            max: 50000000, // 5 Cr
            prefix: '₹'
        },
        leaks: [
            {
                name: 'Scrap Recovery',
                description: 'Value of usable offcuts currently sold as scrap.',
                calculate: (val) => (val * 0.60 * 0.15 * 0.20),
                benchmarkNote: 'Recovering 20% of usable offcuts'
            },
            {
                name: 'Quoting Speed Wins',
                description: 'Profit from deals won by quoting 1st.',
                calculate: (val) => (val * 0.05 * 0.5),
                benchmarkNote: 'Capturing 2.5% lost revenue'
            }
        ]
    },
    {
        id: 'pharma',
        name: 'Pharma & Chemicals',
        icon: Pill,
        color: 'text-blue-400',
        primaryInput: {
            label: 'Monthly Batches Produced',
            key: 'batches',
            defaultValue: 50,
            step: 5,
            max: 500,
            prefix: '#'
        },
        leaks: [
            {
                name: 'Expired Stock Prevention',
                description: 'Reduction in raw material expiry losses.',
                calculate: (batches) => (batches * 500000 * 0.02 * 0.90),
                benchmarkNote: 'Eliminating 90% of dead stock'
            },
            {
                name: 'Audit/Compliance Labour',
                description: 'Man-hours saved on manual BMR entry.',
                calculate: (batches) => (batches * 10 * 300),
                benchmarkNote: '10 hrs admin saved per batch'
            }
        ]
    },
    {
        id: 'heavy-machinery',
        name: 'Heavy Machinery',
        icon: Truck,
        color: 'text-yellow-400',
        primaryInput: {
            label: 'Annual Machines Built',
            key: 'machines',
            defaultValue: 20,
            step: 1,
            max: 200,
            prefix: '#'
        },
        leaks: [
            {
                name: 'Cost Overrun Prevention',
                description: 'Margin saved by tracking real-time job costs.',
                calculate: (machines) => ((machines * 5000000 * 0.10 * 0.50) / 12),
                benchmarkNote: 'Stopping 5% margin leakage'
            },
            {
                name: 'Delay Penalties Avoided',
                description: 'LDs saved by predicting shortages.',
                calculate: (machines) => ((machines * 5000000 * 0.02) / 12),
                benchmarkNote: 'Avoiding Late Delivery charges'
            }
        ]
    },
    {
        id: 'ems',
        name: 'Electronics (EMS)',
        icon: Cpu,
        color: 'text-purple-400',
        primaryInput: {
            label: 'Monthly BOM Line Items Purchased',
            key: 'bomLines',
            defaultValue: 5000,
            step: 500,
            max: 50000,
            prefix: '#'
        },
        leaks: [
            {
                name: 'Sourcing Efficiency',
                description: 'Savings from comparing 5+ vendors instantly.',
                calculate: (lines) => (lines * 50 * 0.03),
                benchmarkNote: '3% reduction in procurement cost'
            },
            {
                name: 'Line Stoppage Prevention',
                description: 'Revenue saved by preventing "Golden Screw" shortages.',
                calculate: (lines) => (lines * 200),
                benchmarkNote: 'Preventing downtime costs'
            }
        ]
    },
    {
        id: 'packaging',
        name: 'Packaging & Printing',
        icon: Package,
        color: 'text-[#BEF264]', // Updated to lime green for consistency
        primaryInput: {
            label: 'Monthly Paper Consumption (Tons)',
            key: 'tons',
            defaultValue: 100,
            step: 10,
            max: 1000,
            prefix: 'Tons'
        },
        leaks: [
            {
                name: 'Wastage Optimization',
                description: 'Savings from better Deckle/Reel planning.',
                calculate: (tons) => (tons * 40000 * 0.03),
                benchmarkNote: '3% reduction in side-trim waste'
            },
            {
                name: 'Price Volatility Protection',
                description: 'Buying at optimal market rates.',
                calculate: (tons) => (tons * 1000),
                benchmarkNote: 'Saving ₹1/kg on procurement'
            }
        ]
    },
    {
        id: 'other',
        name: 'Other / Custom',
        icon: HelpCircle,
        color: 'text-gray-400',
        primaryInput: {
            label: 'What industry are you in?',
            key: 'custom',
            defaultValue: 0,
            step: 0,
            max: 0,
            prefix: ''
        },
        leaks: []
    }
];

export default function SmartROICalculator() {
    const [step, setStep] = useState(0); // 0: Industry, 1: Input, 2: Result
    const [selectedIndustry, setSelectedIndustry] = useState<ROIConfig>(INDUSTRIES[0]);
    const [inputValue, setInputValue] = useState<number>(INDUSTRIES[0].primaryInput.defaultValue);
    const [customIndustryName, setCustomIndustryName] = useState('');
    const [showBreakdown, setShowBreakdown] = useState(false);

    // Reset input when industry changes
    useEffect(() => {
        setInputValue(selectedIndustry.primaryInput.defaultValue);
        setCustomIndustryName('');
        setShowBreakdown(false);
    }, [selectedIndustry]);

    const handleIndustrySelect = (ind: ROIConfig) => {
        setSelectedIndustry(ind);
        setStep(1);
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const formatInputNumber = (num: number) => {
        if (num >= 10000000) return `${(num / 10000000).toFixed(1)} Cr`;
        if (num >= 100000) return `${(num / 100000).toFixed(0)} L`;
        return num.toLocaleString();
    };

    const totalSavings = selectedIndustry.leaks.reduce((acc, leak) => acc + leak.calculate(inputValue), 0);

    const getWhatsAppLink = () => {
        let message = '';
        if (selectedIndustry.id === 'other') {
            const industry = customIndustryName.trim() || 'my industry';
            message = `Hi, I'm in the ${industry} industry. I couldn't find a standard model on your site, but I'd like an expert to help me calculate the potential ROI of deploying agents.`;
        } else {
            message = `Hi, I was exploring your ROI calculator for the ${selectedIndustry.name} industry. It estimates potential savings of ${formatCurrency(totalSavings)}/month. I'd like to discuss how to achieve this.`;
        }
        return whatsappLinkGenerator(message);
    };

    return (
        <div className="min-h-screen bg-[#022C23] text-white font-sans overflow-hidden relative selection:bg-[#BEF264] selection:text-[#022C23]">
            <Head>
                <title>ROI Calculator | Agentworks</title>
                <meta name="description" content="Calculate the ROI of deploying autonomous AI agents." />
            </Head>

            <Navbar />

            {/* Ambient Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#BEF264]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#BEF264]/5 rounded-full blur-[150px]" />
                <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#022C23] rounded-full blur-[100px]" />
            </div>

            <main className="pt-32 pb-20 px-4 md:px-8 max-w-5xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-white"
                    >
                        Calculate Your Hidden Profit
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-300 text-lg"
                    >
                        {step === 0 && "Select your industry to see where you are leaking margins."}
                        {step === 1 && selectedIndustry.id !== 'other' && "Tell us a bit about your scale."}
                        {step === 1 && selectedIndustry.id === 'other' && "Tell us which industry you operate in."}
                        {step === 2 && selectedIndustry.id !== 'other' && "Here is what you could be saving."}
                        {step === 2 && selectedIndustry.id === 'other' && "Let's build a custom ROI model for you."}
                    </motion.p>

                    {/* Progress Steps */}
                    <div className="flex justify-center mt-8 gap-3">
                        {[0, 1, 2].map((s) => (
                            <div
                                key={s}
                                className={`h-1.5 rounded-full transition-all duration-500 ${s <= step ? 'w-12 bg-[#BEF264] shadow-[0_0_10px_rgba(190,242,100,0.5)]' : 'w-2 bg-slate-800'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="min-h-[400px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">

                        {/* STEP 0: Industry Selection */}
                        {step === 0 && (
                            <motion.div
                                key="step0"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            >
                                {INDUSTRIES.map((ind, idx) => (
                                    <motion.button
                                        key={ind.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        onClick={() => handleIndustrySelect(ind)}
                                        className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-[#BEF264]/50 hover:shadow-[0_0_20px_rgba(190,242,100,0.1)] transition-all group text-left backdrop-blur-sm"
                                    >
                                        <div className={`p-4 rounded-xl bg-slate-900/50 border border-white/5 group-hover:border-[#BEF264]/30 transition-colors ${ind.color}`}>
                                            <ind.icon className="w-8 h-8" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-slate-100 group-hover:text-[#BEF264] transition-colors">{ind.name}</h3>
                                            <p className="text-sm text-slate-400 mt-1">Click to select</p>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-slate-600 group-hover:text-[#BEF264] transform group-hover:translate-x-1 transition-all" />
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}

                        {/* STEP 1: Input Slider OR Text Input */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className="max-w-2xl mx-auto w-full"
                            >
                                <button
                                    onClick={() => setStep(0)}
                                    className="text-sm text-slate-400 hover:text-[#BEF264] mb-8 flex items-center gap-2 transition-colors"
                                >
                                    ← Back to Industries
                                </button>

                                <div className="text-center mb-16">
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold mb-8 ${selectedIndustry.color}`}>
                                        <selectedIndustry.icon className="w-4 h-4" />
                                        {selectedIndustry.name}
                                    </div>

                                    <label className="block text-sm font-bold text-slate-300 uppercase tracking-widest mb-6">
                                        {selectedIndustry.primaryInput.label}
                                    </label>

                                    {selectedIndustry.id === 'other' ? (
                                        // Text Input for Custom Industry
                                        <div className="mb-12">
                                            <input
                                                type="text"
                                                value={customIndustryName}
                                                onChange={(e) => setCustomIndustryName(e.target.value)}
                                                placeholder="e.g. Aerospace, Textiles, Food Processing..."
                                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-6 py-4 text-2xl text-center text-white placeholder-slate-600 focus:outline-none focus:border-[#BEF264] focus:ring-1 focus:ring-[#BEF264] transition-all"
                                                autoFocus
                                            />
                                        </div>
                                    ) : (
                                        // Standard Slider Input
                                        <>
                                            <div className="flex items-center justify-center gap-4 mb-12">
                                                <span className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                                    {selectedIndustry.primaryInput.prefix !== '#' && selectedIndustry.primaryInput.prefix}
                                                    {formatInputNumber(inputValue)}
                                                    {selectedIndustry.primaryInput.prefix === '#' && ''}
                                                </span>
                                            </div>

                                            <div className="relative">
                                                <input
                                                    type="range"
                                                    min={selectedIndustry.primaryInput.step}
                                                    max={selectedIndustry.primaryInput.max}
                                                    step={selectedIndustry.primaryInput.step}
                                                    value={inputValue}
                                                    onChange={(e) => setInputValue(Number(e.target.value))}
                                                    className="w-full h-4 bg-slate-800 rounded-full appearance-none cursor-pointer accent-[#BEF264] hover:accent-[#BEF264] transition-all"
                                                />
                                                <div className="flex justify-between text-xs text-slate-400 mt-4 font-medium uppercase tracking-wider">
                                                    <span>Low Volume</span>
                                                    <span>High Volume</span>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="text-center">
                                    <button
                                        onClick={() => setStep(2)}
                                        disabled={selectedIndustry.id === 'other' && !customIndustryName.trim()}
                                        className={`group relative inline-flex items-center justify-center px-8 py-4 font-bold text-[#022C23] transition-all duration-200 bg-[#BEF264] font-lg rounded-xl hover:bg-[#d9f99d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BEF264] ring-offset-[#022C23] ${selectedIndustry.id === 'other' && !customIndustryName.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                                        <span className="relative flex items-center gap-3">
                                            {selectedIndustry.id === 'other' ? 'Talk to an Expert' : 'Calculate Savings'}
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: Results */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="max-w-3xl mx-auto w-full"
                            >
                                <button
                                    onClick={() => setStep(1)}
                                    className="text-sm text-slate-500 hover:text-[#BEF264] mb-8 flex items-center gap-2 transition-colors"
                                >
                                    ← Adjust Input
                                </button>

                                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden mb-10 shadow-2xl">
                                    {/* Glow behind the number */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#BEF264]/20 rounded-full blur-[80px] pointer-events-none"></div>

                                    {selectedIndustry.id === 'other' ? (
                                        // Custom Industry Result View
                                        <div className="relative z-10 flex flex-col items-center text-center gap-6">
                                            <div className="bg-[#BEF264]/10 p-4 rounded-full mb-2">
                                                <HelpCircle className="w-12 h-12 text-[#BEF264]" />
                                            </div>
                                            <div>
                                                <h3 className="2xl md:text-3xl font-bold text-white mb-4">
                                                    Complex operations require expert analysis.
                                                </h3>
                                                <p className="text-slate-300 max-w-lg mx-auto">
                                                    We have built agents for {customIndustryName} before, but the ROI model depends on your specific workflow. Let's discuss your process.
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        // Standard Result View
                                        <div className="relative z-10 flex flex-col items-center text-center gap-6">
                                            <div>
                                                <p className="text-slate-400 font-medium mb-2 uppercase tracking-wide text-sm">Potential Monthly Savings</p>
                                                <div className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-[0_0_15px_rgba(190,242,100,0.5)]">
                                                    {formatCurrency(totalSavings)}
                                                </div>
                                                <p className="text-xs text-slate-400 mt-4">*Based on conservative industry benchmarks.</p>
                                            </div>

                                            <button
                                                onClick={() => setShowBreakdown(!showBreakdown)}
                                                className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm hover:bg-white/10 transition-all mt-2"
                                            >
                                                <RefreshCw className="w-3 h-3" />
                                                {showBreakdown ? 'Hide Breakdown' : 'How is this calculated?'}
                                                {showBreakdown ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                            </button>
                                        </div>
                                    )}

                                    {/* Breakdown Section (Expandable) - Only for standard industries */}
                                    <AnimatePresence>
                                        {showBreakdown && selectedIndustry.id !== 'other' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-white/10">
                                                    {selectedIndustry.leaks.map((leak, idx) => (
                                                        <div key={idx} className="bg-white/5 p-5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                                            <div className="flex justify-between items-start mb-2">
                                                                <h4 className="font-bold text-slate-200 text-sm">{leak.name}</h4>
                                                                <span className="text-[#BEF264] font-bold text-sm">
                                                                    {formatCurrency(leak.calculate(inputValue))}
                                                                </span>
                                                            </div>
                                                            <p className="text-xs text-slate-400 mb-3">{leak.description}</p>
                                                            <div className="bg-[#BEF264]/10 text-[#BEF264] border border-[#BEF264]/20 text-[10px] px-2 py-1 rounded inline-block font-medium">
                                                                Benchmark: {leak.benchmarkNote}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Call to Action */}
                                <div className="text-center">
                                    <a
                                        href={getWhatsAppLink()}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative inline-flex items-center justify-center w-full md:w-auto px-8 py-5 bg-[#BEF264] text-[#022C23] text-lg font-bold rounded-2xl hover:bg-[#d9f99d] transition-all shadow-[0_0_20px_rgba(190,242,100,0.3)] hover:shadow-[0_0_30px_rgba(190,242,100,0.5)] transform hover:-translate-y-1 gap-3 overflow-hidden"
                                    >
                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                        <CheckCircle2 className="w-6 h-6" />
                                        {selectedIndustry.id === 'other' ? 'Get Expert Analysis' : `Deploy Agents & Capture This ${formatCurrency(totalSavings)}`}
                                    </a>
                                    <p className="mt-6 text-sm text-slate-400">
                                        Zero Upfront Cost. Pay a % of the savings we deliver.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
