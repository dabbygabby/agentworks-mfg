import React from 'react';
import { motion } from 'framer-motion';
import {
    Mic,
    Eye,
    Activity,
    CheckCircle2,
    AlertCircle,
    Search,
    Menu,
    MoreHorizontal,
    Cpu
} from 'lucide-react';

const TechnologyHeroVisual = () => {
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#65a30d]/20 via-transparent to-[#bef264]/20 rounded-full blur-3xl opacity-50" />

            {/* Main Window */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-lg bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden relative z-10"
            >
                {/* Window Header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="h-4 w-[1px] bg-gray-300 mx-2" />
                        <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                            <Cpu className="w-3 h-3" />
                            Agentworks Studio
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-green-100 rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">Live</span>
                        </div>
                    </div>
                </div>

                {/* App Content */}
                <div className="flex h-[400px]">
                    {/* Sidebar */}
                    <div className="w-16 bg-gray-50 border-r border-gray-100 flex flex-col items-center py-4 gap-6">
                        <div className="p-2 bg-[#022c22] rounded-lg text-white">
                            <Activity className="w-5 h-5" />
                        </div>
                        <div className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <Search className="w-5 h-5" />
                        </div>
                        <div className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <Menu className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Main Feed */}
                    <div className="flex-1 bg-white p-6 overflow-hidden relative">
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent z-10" />

                        <div className="space-y-4">
                            {/* Event 1: Voice */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                                            <Mic className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-medium text-gray-500">Voice Input • Floor 2</span>
                                    </div>
                                    <span className="text-[10px] text-gray-400">Just now</span>
                                </div>

                                <div className="mb-3 pl-2 border-l-2 border-blue-100">
                                    <p className="text-sm text-gray-800 italic">"Machine 4 is vibrating excessively, check the bearing."</p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-2.5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        <span className="text-xs font-semibold text-gray-700">Maintenance Ticket #8821 Created</span>
                                    </div>
                                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                                </div>
                            </motion.div>

                            {/* Event 2: Vision */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5 }}
                                className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 bg-purple-50 text-purple-600 rounded-lg">
                                            <Eye className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-medium text-gray-500">Vision Cam • Line A</span>
                                    </div>
                                    <span className="text-[10px] text-gray-400">2s ago</span>
                                </div>

                                <div className="flex gap-3 mb-3">
                                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                                        {/* Placeholder for image analysis */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
                                        <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                                    </div>
                                    <div className="flex-1 py-1">
                                        <div className="text-xs text-gray-500 mb-1">Analysis</div>
                                        <div className="text-sm font-medium text-gray-800">Surface Defect Detected</div>
                                        <div className="text-xs text-red-500 font-medium mt-1">Confidence: 98.2%</div>
                                    </div>
                                </div>

                                <div className="bg-red-50 rounded-lg p-2.5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4 text-red-600" />
                                        <span className="text-xs font-semibold text-red-700">QC Flag Raised</span>
                                    </div>
                                    <button className="text-[10px] font-medium bg-white px-2 py-1 rounded border border-red-100 text-red-600">
                                        View
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Floating Elements for Depth */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-20 bg-white p-3 rounded-xl shadow-xl border border-gray-100 z-20 hidden md:block"
            >
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs font-bold text-[#022c22]">System Healthy</span>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -left-8 bottom-32 bg-[#022c22] p-4 rounded-xl shadow-xl z-20 hidden md:block"
            >
                <div className="text-xs text-gray-400 mb-1">Total Processed</div>
                <div className="text-xl font-bold text-[#bef264]">1,284</div>
            </motion.div>
        </div>
    );
};

export default TechnologyHeroVisual;
