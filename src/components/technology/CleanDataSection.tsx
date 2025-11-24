import React from 'react';
import { motion } from 'framer-motion';
import { Database, ArrowRight, MessageSquare, Server } from 'lucide-react';

const CleanDataSection = () => {
    return (
        <section className="py-20 px-4 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#022c22] mb-6">
                            The "Clean Data" Layer <br />
                            <span className="text-[#65a30d]">Turning Chaos into SQL.</span>
                        </h2>
                        <p className="text-xl text-[#022c22]/70 mb-8">
                            The output of our AI isn't a chat bubble; it is a database transaction. We bridge the gap between unstructured communication and structured ERP systems.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mt-1">
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#022c22] mb-2">Input (Voice Note)</h4>
                                        <p className="text-[#022c22]/70 italic">"Bhai, sent 500 pieces of Part X to Client Y."</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <ArrowRight className="w-8 h-8 text-[#65a30d] rotate-90 md:rotate-0" />
                            </div>

                            <div className="bg-[#f7fee7] p-6 rounded-xl border border-[#65a30d]/20">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-[#65a30d]/20 rounded-lg text-[#65a30d] mt-1">
                                        <Server className="w-5 h-5" />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="font-semibold text-[#022c22] mb-3">Processing & Mapping</h4>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div className="bg-white p-3 rounded border border-[#65a30d]/10">
                                                <span className="text-gray-500 block text-xs">Intent</span>
                                                <span className="font-medium text-[#022c22]">Dispatch Entry</span>
                                            </div>
                                            <div className="bg-white p-3 rounded border border-[#65a30d]/10">
                                                <span className="text-gray-500 block text-xs">Item</span>
                                                <span className="font-medium text-[#022c22]">Part X → SKU #9920</span>
                                            </div>
                                            <div className="bg-white p-3 rounded border border-[#65a30d]/10">
                                                <span className="text-gray-500 block text-xs">Quantity</span>
                                                <span className="font-medium text-[#022c22]">500 Units</span>
                                            </div>
                                            <div className="bg-white p-3 rounded border border-[#65a30d]/10">
                                                <span className="text-gray-500 block text-xs">Party</span>
                                                <span className="font-medium text-[#022c22]">Client Y → Ledger ID</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <ArrowRight className="w-8 h-8 text-[#65a30d] rotate-90 md:rotate-0" />
                            </div>

                            <div className="bg-[#022c22] p-6 rounded-xl text-white shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-[#bef264] rounded-lg text-[#022c22]">
                                        <Database className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#bef264]">Output</h4>
                                        <p className="text-gray-300">A validated voucher entry in your ERP.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#65a30d]/20 to-[#bef264]/20 rounded-full blur-3xl opacity-50" />
                        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
                            <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-sm font-mono text-gray-400">db_transaction.sql</div>
                            </div>
                            <div className="font-mono text-sm space-y-4">
                                <div className="text-blue-600">INSERT INTO <span className="text-[#022c22]">voucher_entries</span> (</div>
                                <div className="pl-4 text-gray-600">
                                    date, type, ledger_id, amount, narration
                                </div>
                                <div className="text-blue-600">) VALUES (</div>
                                <div className="pl-4 text-[#022c22]">
                                    '2024-11-24', <br />
                                    'SALES', <br />
                                    'L-8829', <br />
                                    50000.00, <br />
                                    'Dispatch of 500 Part X to Client Y'
                                </div>
                                <div className="text-blue-600">);</div>

                                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-green-600">
                                    <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                                    Transaction Committed Successfully
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CleanDataSection;
