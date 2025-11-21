import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

type Currency = 'INR' | 'USD';

interface AgentData {
    id: string;
    name: string;
    description: string;
    inputs: {
        label: string;
        key: string;
        type: 'number';
        placeholder: string;
        defaultValue: number;
    }[];
    calculateSavings: (inputs: Record<string, number>, currency: Currency) => number;
}

const AGENTS: AgentData[] = [
    {
        id: 'commercial',
        name: 'Commercial Intelligence',
        description: 'Automates technical quoting and BOM generation.',
        inputs: [
            { label: 'Quotes per Month', key: 'quotesPerMonth', type: 'number', placeholder: 'e.g. 100', defaultValue: 100 },
            { label: 'Avg. Time per Quote (Hours)', key: 'timePerQuote', type: 'number', placeholder: 'e.g. 2', defaultValue: 2 },
            { label: 'Engineer Hourly Cost', key: 'hourlyCost', type: 'number', placeholder: 'e.g. 500', defaultValue: 500 },
        ],
        calculateSavings: (inputs, currency) => {
            const monthlyHours = inputs.quotesPerMonth * inputs.timePerQuote;
            const monthlyCost = monthlyHours * inputs.hourlyCost;
            // Assume 90% time savings
            return monthlyCost * 0.90;
        },
    },
    {
        id: 'inventory',
        name: 'Capital Efficiency',
        description: 'Optimizes inventory and reduces dead stock.',
        inputs: [
            { label: 'Total Inventory Value', key: 'inventoryValue', type: 'number', placeholder: 'e.g. 10000000', defaultValue: 10000000 },
            { label: 'Annual Holding Cost (%)', key: 'holdingCost', type: 'number', placeholder: 'e.g. 20', defaultValue: 20 },
        ],
        calculateSavings: (inputs, currency) => {
            // Assume 15% reduction in inventory levels
            const inventoryReduction = inputs.inventoryValue * 0.15;
            // Savings = Reduced holding cost
            return inventoryReduction * (inputs.holdingCost / 100) / 12; // Monthly savings
        },
    },
    {
        id: 'ops',
        name: 'Operations Control',
        description: 'Reduces downtime and improves scheduling.',
        inputs: [
            { label: 'Monthly Revenue', key: 'monthlyRevenue', type: 'number', placeholder: 'e.g. 5000000', defaultValue: 5000000 },
            { label: 'Current Downtime (%)', key: 'downtime', type: 'number', placeholder: 'e.g. 10', defaultValue: 10 },
        ],
        calculateSavings: (inputs, currency) => {
            // Assume 30% reduction in downtime
            const downtimeReduction = inputs.downtime * 0.30;
            // Revenue gain from reduced downtime (simplified)
            return inputs.monthlyRevenue * (downtimeReduction / 100);
        },
    },
    {
        id: 'finance',
        name: 'Audit Defense',
        description: 'Automates reconciliation and compliance.',
        inputs: [
            { label: 'Invoices per Month', key: 'invoices', type: 'number', placeholder: 'e.g. 500', defaultValue: 500 },
            { label: 'Time per Invoice (Mins)', key: 'timePerInvoice', type: 'number', placeholder: 'e.g. 10', defaultValue: 10 },
            { label: 'Accountant Hourly Cost', key: 'accountantCost', type: 'number', placeholder: 'e.g. 300', defaultValue: 300 },
        ],
        calculateSavings: (inputs, currency) => {
            const monthlyHours = (inputs.invoices * inputs.timePerInvoice) / 60;
            const monthlyCost = monthlyHours * inputs.accountantCost;
            // Assume 95% automation
            return monthlyCost * 0.95;
        },
    },
];

export default function ROICalculator() {
    const [currency, setCurrency] = useState<Currency>('INR');
    const [inputValues, setInputValues] = useState<Record<string, Record<string, number>>>({});
    const [totalSavings, setTotalSavings] = useState(0);

    // Initialize default values
    useEffect(() => {
        const defaults: Record<string, Record<string, number>> = {};
        AGENTS.forEach(agent => {
            defaults[agent.id] = {};
            agent.inputs.forEach(input => {
                defaults[agent.id][input.key] = input.defaultValue;
            });
        });
        setInputValues(defaults);
    }, []);

    // Recalculate savings whenever inputs or currency change
    useEffect(() => {
        let total = 0;
        AGENTS.forEach(agent => {
            if (inputValues[agent.id]) {
                total += agent.calculateSavings(inputValues[agent.id], currency);
            }
        });
        setTotalSavings(total);
    }, [inputValues, currency]);

    const handleInputChange = (agentId: string, key: string, value: string) => {
        const numValue = parseFloat(value) || 0;
        setInputValues(prev => ({
            ...prev,
            [agentId]: {
                ...prev[agentId],
                [key]: numValue,
            },
        }));
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
            style: 'currency',
            currency: currency,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Head>
                <title>ROI Calculator | Agentworks</title>
                <meta name="description" content="Calculate the ROI of deploying autonomous AI agents." />
            </Head>

            <Navbar />

            <main className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                        Calculate Your ROI
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See how much you can save by deploying our autonomous AI workforce.
                    </p>
                </div>

                {/* Currency Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-surface p-1 rounded-full inline-flex border border-primary/10">
                        <button
                            onClick={() => setCurrency('INR')}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${currency === 'INR'
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'text-gray-600 hover:text-primary'
                                }`}
                        >
                            INR (₹)
                        </button>
                        <button
                            onClick={() => setCurrency('USD')}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${currency === 'USD'
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'text-gray-600 hover:text-primary'
                                }`}
                        >
                            USD ($)
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Input Section */}
                    <div className="lg:col-span-2 space-y-6">
                        {AGENTS.map((agent) => (
                            <div key={agent.id} className="bg-surface/50 border border-primary/5 rounded-2xl p-6 hover:border-primary/20 transition-all">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary">{agent.name}</h3>
                                        <p className="text-sm text-gray-600">{agent.description}</p>
                                    </div>
                                    <div className="bg-accent/20 text-primary px-3 py-1 rounded-full text-xs font-bold">
                                        {agent.id === 'commercial' ? 'Sales' :
                                            agent.id === 'inventory' ? 'Capital' :
                                                agent.id === 'ops' ? 'Ops' : 'Finance'}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {agent.inputs.map((input) => (
                                        <div key={input.key}>
                                            <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">
                                                {input.label}
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    value={inputValues[agent.id]?.[input.key] || ''}
                                                    onChange={(e) => handleInputChange(agent.id, input.key, e.target.value)}
                                                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                                    placeholder={input.placeholder}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-sm text-gray-500">Estimated Monthly Savings:</span>
                                    <span className="text-lg font-bold text-primary">
                                        {inputValues[agent.id] ? formatCurrency(agent.calculateSavings(inputValues[agent.id], currency)) : formatCurrency(0)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary Section (Sticky) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-primary text-white rounded-3xl p-8 shadow-2xl overflow-hidden relative">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold mb-2">Total Projected Savings</h2>
                                <p className="text-primary-100 mb-8 text-sm">Based on your operational inputs</p>

                                <div className="space-y-6 mb-8">
                                    <div>
                                        <p className="text-sm text-primary-200 mb-1">Monthly Savings</p>
                                        <div className="text-4xl font-bold text-accent">
                                            {formatCurrency(totalSavings)}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/10">
                                        <p className="text-sm text-primary-200 mb-1">Annual Savings</p>
                                        <div className="text-2xl font-bold text-white">
                                            {formatCurrency(totalSavings * 12)}
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full bg-accent text-primary hover:bg-white transition-colors font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                                    Deploy Your First Agent
                                </button>

                                <p className="text-xs text-center text-primary-300 mt-4">
                                    *Estimates based on industry averages. Actual results may vary.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
