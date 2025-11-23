import React from 'react';
import { CheckCircle2, RefreshCw } from 'lucide-react';

const InputsVisual = () => {
    return (
        <div className="bg-gray-50 rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 transform transition-all hover:scale-[1.01] duration-500">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-gray-100 bg-[#022c22] text-white flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse" />
                        <span className="font-bold">Live Data Feed</span>
                    </div>
                    <span className="text-xs bg-[#bef264] text-[#022c22] px-2 py-1 rounded-full font-bold">Active</span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    {/* Excel Item */}
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:border-[#bef264]/50 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-lg shadow-sm p-2 flex items-center justify-center flex-shrink-0">
                            <img src="/icons/excel.png" alt="Excel" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-bold text-[#022c22] truncate">Production_Schedule_Nov.xlsx</h4>
                                <span className="text-xs font-medium text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full">
                                    <CheckCircle2 className="w-3 h-3" /> Synced
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 truncate">Detected 145 rows, 3 sheets</p>
                        </div>
                    </div>

                    {/* Outlook Item */}
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:border-[#bef264]/50 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-lg shadow-sm p-2 flex items-center justify-center flex-shrink-0">
                            <img src="/icons/outlook.png" alt="Outlook" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-bold text-[#022c22] truncate">PO #4492 - Urgent</h4>
                                <span className="text-xs font-medium text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full">
                                    <CheckCircle2 className="w-3 h-3" /> Synced
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 truncate">From: procurement@client.com</p>
                        </div>
                    </div>

                    {/* WhatsApp Item */}
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:border-[#bef264]/50 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-lg shadow-sm p-2 flex items-center justify-center flex-shrink-0">
                            <img src="/icons/whatsapp-icon.png" alt="WhatsApp" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-bold text-[#022c22] truncate">Voice Note: Line 4 Down</h4>
                                <span className="text-xs font-medium text-blue-600 flex items-center gap-1 bg-blue-50 px-2 py-0.5 rounded-full">
                                    <RefreshCw className="w-3 h-3 animate-spin" /> Processing
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 truncate">Floor Manager • +91 98765...</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs text-slate-500">
                    <span>Last updated: Just now</span>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>All systems operational</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputsVisual;
