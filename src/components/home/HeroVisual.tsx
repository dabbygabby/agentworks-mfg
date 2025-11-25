"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowLeft, Activity,
    CheckCircle,
    Search, FileText, Loader2, Mic, Play,
    Camera, ChevronLeft, Package,
    TrendingUp, Signal, Phone, Video, Plus, Battery, Wifi
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Chart from 'chart.js/auto';
import Image from 'next/image';

// --- IMAGE PLACEHOLDERS ---
const IMG_BILL = "/billPhoto.png";
const IMG_CONVEYOR = "/brokenBelt.png";
const IMG_INVENTORY = "/inventoryPhoto.png";

// --- REUSABLE COMPONENTS ---
const CapacityChart = ({ data, color }: { data: number[], color: string }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (!chartRef.current) return;
        if (chartInstance.current) chartInstance.current.destroy();

        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;

        const gradient = ctx.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(0, `${color}33`);
        gradient.addColorStop(1, `${color}00`);

        chartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['M', 'T', 'W', 'T', 'F', 'S'],
                datasets: [{
                    data: data,
                    borderColor: color,
                    backgroundColor: gradient,
                    fill: 'origin',
                    tension: 0.4,
                    pointRadius: 0,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { x: { display: false }, y: { display: false, min: 0 } },
                animation: { duration: 1000 }
            }
        });
        return () => { if (chartInstance.current) chartInstance.current.destroy(); };
    }, [data, color]);
    return <canvas ref={chartRef} />;
};

// --- DASHBOARD VIEWS ---

const AccountingView = ({ step, isMobile }: { step: number, isMobile: boolean }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col md:flex-row gap-4 p-4">
        {!isMobile && (
            <div className="w-full md:w-5/12 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Cash Flow</div>
                        <TrendingUp size={14} className="text-green-500" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">₹ 45.2 L</div>
                    <div className="h-10 mt-2"><CapacityChart data={[30, 45, 40, 55, 50, 60]} color="#10b981" /></div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1 relative overflow-hidden flex flex-col">
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-3">Recent Activity</div>
                    <div className="space-y-3 overflow-hidden">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-2 text-xs">
                                <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-blue-500' : 'bg-slate-300'}`}></div>
                                <div className="flex-1 text-slate-600">Invoice #{338 + i} processed</div>
                                <div className="text-slate-400 text-[10px]">2m</div>
                            </div>
                        ))}
                    </div>
                    {step >= 2 && (
                        <motion.div initial={{ y: 0, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-auto pt-3 border-t border-slate-50">
                            <div className="flex gap-2 items-center p-2 bg-green-50 border border-green-100 rounded-lg">
                                <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-green-700"><CheckCircle size={12} /></div>
                                <div>
                                    <div className="text-[10px] font-bold text-slate-900">Inv #338</div>
                                    <div className="text-[9px] text-green-600">Verified</div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        )}

        <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col relative overflow-hidden">
            <div className="h-10 border-b border-slate-100 flex justify-between items-center px-4 bg-slate-50/50">
                <span className="text-[10px] font-bold text-slate-500 flex items-center gap-2"><FileText size={12} /> INVOICE DATA</span>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${step >= 2 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {step >= 2 ? 'VERIFIED' : 'PROCESSING'}
                </span>
            </div>
            <div className="p-4 flex-1 text-xs text-slate-700 overflow-hidden font-mono relative">
                {step >= 2 ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.05 }}>
                        <div className="flex justify-between mb-4 border-b border-slate-100 pb-2">
                            <div>
                                <div className="text-[9px] text-slate-400">Vendor</div>
                                <div className="font-bold text-slate-900">R.S. Construction Co.</div>
                            </div>
                            <div className="text-right">
                                <div className="text-[9px] text-slate-400">Date</div>
                                <div className="font-bold text-slate-900">24 Nov 2024</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-[9px] text-slate-400 uppercase tracking-wide">
                                <span>Item Description</span>
                                <span>Total</span>
                            </div>
                            <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="flex justify-between py-1 border-b border-slate-50">
                                <span>Sail TMT Bar 25mm <span className="text-slate-400 text-[9px] ml-1">x 500kg</span></span>
                                <span className="font-bold">211,074.00</span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex justify-between py-1 border-b border-slate-50">
                                <span>Sail TMT Bar 12mm <span className="text-slate-400 text-[9px] ml-1">x 800kg</span></span>
                                <span className="font-bold">275,338.00</span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex justify-between py-1 border-b border-slate-50 text-slate-400">
                                <span>UltraTech Cement <span className="text-slate-400 text-[9px] ml-1">x 50 bags</span></span>
                                <span>22,500.00</span>
                            </motion.div>
                        </div>
                        <div className="mt-4 bg-slate-50 p-2 rounded border border-slate-100">
                            <div className="flex justify-between font-bold text-sm">
                                <span>Total Amount</span>
                                <span>₹ 1,215,861.00</span>
                            </div>
                            <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                                <span>Tax (18% GST)</span>
                                <span>Included</span>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 animate-pulse"></div>
                            <Loader2 className="w-8 h-8 animate-spin text-blue-600 relative z-10" />
                        </div>
                        <div className="text-[10px] font-mono text-slate-400">
                            {step === 1 ? "Scanning Document..." : "Waiting for Input..."}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </motion.div>
);

const ProductionView = ({ step, isMobile }: { step: number, isMobile: boolean }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-1 gap-4 h-full p-4">
        {!isMobile && (
            <div className="md:col-span-1 flex flex-col gap-4">
                <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100 flex-1">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Production Capacity</h3>
                        <div className="flex gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                        </div>
                    </div>
                    <div className="h-32 w-full"><CapacityChart data={[65, 72, 68, 85, 82, 90, 88]} color="#3b82f6" /></div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                        {['Line A', 'Line B', 'Line C'].map((line, i) => (
                            <div key={line} className="bg-slate-50 p-2 rounded border border-slate-100 text-center">
                                <div className="text-[9px] text-slate-400">{line}</div>
                                <div className={`text-xs font-bold ${i === 1 ? 'text-amber-500' : 'text-green-600'}`}>{i === 1 ? '82%' : '96%'}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
        <div className="bg-white rounded-xl w-full shadow-sm p-4 border border-slate-100 flex flex-col relative overflow-hidden">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">RFQ Status</div>
            {step < 2 ? (
                <div className="flex-1 flex flex-col items-center justify-center opacity-50">
                    <FileText className="w-12 h-12 mb-2 text-slate-300" />
                    <p className="text-xs text-slate-400">No Active RFQs</p>
                </div>
            ) : (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">C</div>
                        <div>
                            <div className="font-bold text-sm text-slate-900">Client Inc</div>
                            <div className="text-[10px] text-slate-500">New Request</div>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-3">
                        <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                            <span>Quote Value</span>
                            <span>#9920</span>
                        </div>
                        <div className="text-xl font-bold text-slate-900">$45,000</div>
                    </div>
                    <div className="mt-auto">
                        <div className="flex items-center gap-2 text-[10px] text-green-600 font-bold bg-green-50 p-2 rounded border border-green-100">
                            <CheckCircle size={12} /> Quote Generated
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    </motion.div>
);

const MaintenanceView = ({ step, isMobile }: { step: number, isMobile: boolean }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-1 gap-4 h-full p-4">
        {!isMobile && (
            <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Floor Status</h2>
                    <span className="text-[9px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">Real-time</span>
                </div>
                <div className="grid grid-cols-2 gap-3 flex-1">
                    {[
                        { name: 'CNC-01', status: 'Running', color: 'bg-green-500' },
                        { name: 'CNC-02', status: 'Idle', color: 'bg-amber-500' },
                        { name: 'Press-A', status: step >= 2 ? 'Error' : 'Running', color: step >= 2 ? 'bg-red-500' : 'bg-green-500' },
                        { name: 'Press-B', status: 'Running', color: 'bg-green-500' },
                    ].map((m) => (
                        <div key={m.name} className="bg-slate-50 rounded-lg p-3 border border-slate-100 flex flex-col justify-between relative overflow-hidden">
                            <div className={`absolute top-0 left-0 w-1 h-full ${m.color}`}></div>
                            <div className="text-[10px] font-bold text-slate-700">{m.name}</div>
                            <div className="flex justify-between items-end mt-2">
                                <span className="text-[9px] text-slate-500">{m.status}</span>
                                <Activity size={12} className={`${m.status === 'Error' ? 'text-red-500 animate-pulse' : 'text-slate-300'}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
        <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100 flex flex-col relative overflow-hidden">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Active Tickets</h3>
            {step >= 2 ? (
                <motion.div initial={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex-1 flex flex-col gap-3">
                    <div className="bg-red-50 p-3 rounded-lg border-l-2 border-red-500 shadow-sm w-full">
                        <div className="flex justify-between items-start mb-1">
                            <div className="text-[10px] font-bold text-red-700 uppercase bg-red-100 px-1.5 py-0.5 rounded">Critical</div>
                            <span className="text-[9px] text-slate-400">Just now</span>
                        </div>
                        <div className="text-sm font-bold text-slate-900">Conveyor Belt Snap</div>
                        <div className="text-[10px] text-slate-500 mt-1">Line A - Press Section</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 opacity-60">
                        <div className="flex justify-between items-start mb-1">
                            <div className="text-[10px] font-bold text-amber-700 uppercase bg-amber-100 px-1.5 py-0.5 rounded">Warning</div>
                            <span className="text-[9px] text-slate-400">2h ago</span>
                        </div>
                        <div className="text-xs font-bold text-slate-900">Oil Level Low</div>
                    </div>
                </motion.div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-slate-300">
                    <CheckCircle className="w-10 h-10 mb-2" />
                    <span className="text-xs">All Systems Normal</span>
                </div>
            )}
        </div>
    </motion.div>
);

const InventoryView = ({ step, isMobile }: { step: number, isMobile: boolean }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full bg-white rounded-xl shadow-sm p-4 border border-slate-100 flex flex-col">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Package size={14} className="text-blue-600" /> Inventory Level
            </h2>
            {step >= 2 && <span className="bg-green-100 text-green-700 text-[9px] px-2 py-0.5 rounded-full font-bold animate-pulse">UPDATED</span>}
        </div>
        <div className="flex gap-4 items-end flex-1 h-full">
            <div className="flex-1 h-full flex gap-2 items-end pb-2">
                {[40, 65, 30, 85, 50].map((h, i) => (
                    <div key={i} className="flex-1 bg-slate-50 rounded-t-md relative overflow-hidden group h-full flex items-end">
                        <motion.div
                            className={`w-full rounded-t-md ${i === 3 ? 'bg-blue-500' : 'bg-slate-300'}`}
                            initial={{ height: `${h}%` }}
                            animate={i === 3 && step >= 2 ? { height: "95%" } : { height: `${h}%` }}
                            transition={{ type: "spring", stiffness: 100 }}
                        />
                        <div className="absolute bottom-1 left-0 w-full text-center text-[8px] text-slate-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            {i === 3 ? 'GLV' : `SKU${i}`}
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-1/3 flex flex-col justify-center gap-4 border-l border-slate-100 pl-4 h-full">
                <div>
                    <div className="text-[9px] text-slate-500 uppercase">Selected Item</div>
                    <div className="font-bold text-slate-900 text-sm leading-tight">Sterile Gloves (M)</div>
                </div>
                <div>
                    <div className="text-[9px] text-slate-500 uppercase">Quantity</div>
                    <div className="text-2xl font-bold text-slate-900 flex items-baseline gap-1">
                        {step >= 2 ? <motion.span initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0 }}>1,250</motion.span> : '850'}
                        <span className="text-[10px] font-normal text-slate-400">units</span>
                    </div>
                    <div className={`text-[9px] font-bold mt-1 ${step >= 2 ? 'text-green-600' : 'text-slate-400'}`}>
                        {step >= 2 ? '+400 Just Added' : 'Stable'}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

// --- MAIN HERO COMPONENT ---

const IntegratedHero = ({ forceCompact = false }: { forceCompact?: boolean }) => {
    // 0: Bill, 1: Email, 2: Conveyor, 3: Inventory
    const [scenario, setScenario] = useState(0);
    const [step, setStep] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Automation Sequencer
    useEffect(() => {
        setStep(0);
        const t1 = setTimeout(() => setStep(1), 1500); // Mobile Action
        const t2 = setTimeout(() => setStep(2), 3500); // Dashboard React
        const t3 = setTimeout(() => setStep(3), 5500); // Bot Reply
        const t4 = setTimeout(() => setScenario((prev) => (prev + 1) % 4), 8500); // Next Scenario

        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }, [scenario]);

    // Responsive Check
    useEffect(() => {
        const checkMobile = () => setIsMobile(forceCompact || window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [forceCompact]);

    const getScenarioDetails = () => {
        switch (scenario) {
            case 0: return { tab: 'Finance', botName: 'Finance Bot', botColor: 'bg-emerald-600', view: <AccountingView step={step} isMobile={isMobile} /> };
            case 1: return { tab: 'Production', botName: '', botColor: '', view: <ProductionView step={step} isMobile={isMobile} /> };
            case 2: return { tab: 'Maintenance', botName: 'Mainten. Bot', botColor: 'bg-red-600', view: <MaintenanceView step={step} isMobile={isMobile} /> };
            case 3: return { tab: 'Inventory', botName: 'Inventory Bot', botColor: 'bg-blue-600', view: <InventoryView step={step} isMobile={isMobile} /> };
            default: return { tab: 'Overview', botName: 'Bot', botColor: 'bg-slate-600', view: null };
        }
    };

    const details = getScenarioDetails();

    // --- ANIMATION STATES ---
    const showLaptop = !isMobile || (isMobile && step === 2);
    const showPhone = !isMobile || (isMobile && step !== 2);

    return (
        <div className="w-full h-[680px] flex items-start justify-center bg-transparent pt-8 overflow-hidden relative font-sans">

            {/* === LAPTOP DASHBOARD === */}
            <motion.div
                className={`absolute z-10 transition-all duration-500
                    ${isMobile
                        ? 'w-full px-4 top-20 h-[450px]'
                        : 'top-0 left-1/2 -translate-x-1/2 w-[900px] h-[580px]'
                    }`}
                // FIXED: Removed Vertical (y) Movement entirely to prevent scrolling/jumping
                animate={{
                    opacity: showLaptop ? 1 : 0,
                    y: 0,
                    scale: showLaptop ? 1 : 0.98
                }}
            >
                <div className={`w-full bg-slate-50/80 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col relative ring-1 ring-black/10 shadow-2xl h-full`}>

                    {/* Browser Header */}
                    {!isMobile && (
                        <>
                            <div className="h-9 bg-[#eef0f2] border-b border-slate-200/80 flex items-center px-4 gap-4">
                                <div className="flex gap-1.5 opacity-60">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-red-500/20"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/20"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-green-500/20"></div>
                                </div>
                                <div className="flex-1 bg-white h-6 rounded-md text-[10px] flex items-center px-3 text-slate-400 font-mono shadow-sm border border-slate-200/50">
                                    <span className="text-slate-300 mr-1">https://</span>app.factory-os.io/{details.tab.toLowerCase()}
                                </div>
                            </div>
                            <div className="h-10 bg-white/80 backdrop-blur-md border-b border-slate-200/80 flex items-center px-6 gap-6 shadow-sm z-10">
                                {['Finance', 'Production', 'Maintenance', 'Inventory'].map((t) => (
                                    <span key={t} className={`text-xs font-bold border-b-[3px] py-2.5 transition-colors cursor-default ${details.tab === t ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400'}`}>
                                        {t}
                                    </span>
                                ))}
                                <div className="ml-auto flex items-center gap-3 text-slate-400">
                                    <Search size={14} />
                                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">JD</div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Content Area */}
                    <div className={`flex-1 bg-slate-50/50 relative overflow-hidden`}>
                        <AnimatePresence mode="wait">
                            <motion.div key={scenario} className="h-full" initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 0 }} transition={{ duration: 0.2 }}>
                                {details.view}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            {/* === IPHONE 14 PRO FRAME === */}
            <motion.div
                className={`absolute z-30 transition-all duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94)
                    ${isMobile
                        ? 'bottom-0 w-[310px] h-[630px] left-1/2 -translate-x-1/2 origin-bottom'
                        : 'bottom-6 w-[285px] h-[615px] left-16 origin-bottom-left'
                    }`}
                // FIXED: Removed vertical movement (y: 180). Now it only fades and scales slightly.
                animate={{
                    y: 0,
                    opacity: showPhone ? 1 : 0,
                    scale: showPhone ? 1 : 0.95,
                }}
            >
                {/* Phone Body */}
                <div className="relative rounded-[3.5rem] bg-slate-950 p-2 shadow-[0_0_0_2px_#334155,0_25px_50px_-12px_rgba(0,0,0,0.5)] h-full ring-1 ring-slate-800/50 overflow-hidden">
                    {/* Side Buttons */}
                    <div className="absolute top-28 -left-[2px] w-[3px] h-8 bg-slate-800 rounded-l-md"></div>
                    <div className="absolute top-40 -left-[2px] w-[3px] h-14 bg-slate-800 rounded-l-md"></div>
                    <div className="absolute top-32 -right-[2px] w-[3px] h-20 bg-slate-800 rounded-r-md"></div>

                    {/* Screen */}
                    <div className="bg-white rounded-[3rem] overflow-hidden relative flex flex-col h-full w-full backface-hidden">

                        {/* Dynamic Island / Status Bar */}
                        <div className="h-11 w-full absolute top-0 left-0 z-50 flex justify-between items-start px-6 pt-3 text-slate-900 pointer-events-none">
                            <span className="text-[13px] font-medium tracking-tight pl-1">9:41</span>
                            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full flex items-center justify-center gap-2 px-2">
                                {/* Dynamic Island Content */}
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-800/80"></div>
                            </div>
                            <div className="flex items-center gap-1.5 pr-1">
                                <Signal size={13} fill="currentColor" />
                                <Wifi size={13} />
                                <Battery size={13} fill="currentColor" />
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            {/* CASE 1: EMAIL RFQ */}
                            {scenario === 1 ? (
                                <motion.div
                                    key="email" className="absolute inset-0 pt-12 bg-slate-50 flex flex-col w-full"
                                    initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ ease: "easeInOut", duration: 0.3 }}
                                >
                                    <div className="px-4 py-2 bg-white border-b flex justify-between items-center w-full">
                                        <div className="flex items-center gap-1 text-blue-500"><ChevronLeft size={22} /><span className="text-[15px]">Inbox</span></div>
                                        <span className="font-semibold text-[15px]">Client Inc</span>
                                        <Search size={20} className="text-blue-500" />
                                    </div>
                                    <div className="p-3 flex-1 flex flex-col">
                                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex gap-2.5">
                                                    <div className="w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm">C</div>
                                                    <div>
                                                        <div className="font-bold text-slate-900 text-[15px]">Client Inc</div>
                                                        <div className="text-[11px] text-slate-500">To: Sales Team</div>
                                                    </div>
                                                </div>
                                                <span className="text-[11px] text-slate-400">10:23 AM</span>
                                            </div>
                                            <div className="text-[13px] font-bold text-slate-800 mb-1">URGENT: Request for Quote - 10k Units</div>
                                            <p className="text-[13px] text-slate-600 leading-snug">Hi Team, we need pricing for 10,000 units of the standard assembly by EOD. Can you expedite?</p>
                                        </div>

                                        <AnimatePresence>
                                            {step >= 3 && (
                                                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-auto mb-4 bg-slate-800 text-white p-3 rounded-2xl flex items-center gap-3 shadow-lg mx-1">
                                                    <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center"><CheckCircle size={14} className="text-white" /></div>
                                                    <div>
                                                        <div className="font-bold text-[13px]">Quote Sent</div>
                                                        <div className="text-[11px] text-slate-400">Synced with CRM</div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {step < 3 && (
                                            <motion.button
                                                animate={step === 1 ? { scale: 0.97 } : { scale: 1 }}
                                                className={`mt-auto w-full text-white text-[15px] font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 mb-1 transition-all ${step >= 1 ? 'bg-slate-400' : 'bg-blue-600 shadow-lg shadow-blue-200'}`}
                                            >
                                                {step === 1 ? <Loader2 className="animate-spin w-5 h-5" /> : <FileText size={18} />}
                                                {step === 0 ? "Generate Quote" : "Processing..."}
                                            </motion.button>
                                        )}
                                    </div>
                                </motion.div>
                            ) : (
                                // CASE 0, 2, 3: WHATSAPP UI
                                <motion.div
                                    key="whatsapp" className="absolute inset-0 pt-[44px] bg-[#efeae2] flex flex-col"
                                    style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: '350px' }}
                                    initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ ease: "easeInOut", duration: 0.3 }}
                                >
                                    {/* WhatsApp Header */}
                                    <div className="px-3 py-1.5 bg-[#f0f2f5]/90 backdrop-blur-xl border-b border-slate-200/50 flex items-center gap-2 z-10 sticky top-0">
                                        <ArrowLeft size={20} className="text-blue-500" />
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm border border-black/5 ${details.botColor}`}>
                                            <Activity size={14} />
                                        </div>
                                        <div className="flex-1 leading-tight">
                                            <div className="text-[14px] font-semibold text-slate-900">{details.botName}</div>
                                        </div>
                                        <div className="flex gap-3 text-blue-500">
                                            <Video size={20} />
                                            <Phone size={18} />
                                        </div>
                                    </div>

                                    <div className="px-2 py-3 flex-1 flex flex-col gap-2.5 overflow-hidden justify-end pb-16">
                                        <div className="flex justify-center mb-2"><span className="bg-[#eef0f5]/80 backdrop-blur-sm text-slate-500 text-[10px] font-medium px-2 py-0.5 rounded-full shadow-sm">Today</span></div>

                                        <AnimatePresence>
                                            {step >= 1 && (
                                                <motion.div initial={{ opacity: 0, scale: 0.9, y: 0 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="self-end max-w-[85%]">
                                                    <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-none p-1 shadow-sm relative overflow-hidden">
                                                        {/* Image Bubble */}
                                                        <div className="rounded-xl overflow-hidden relative mb-1">
                                                            <Image src={scenario === 0 ? IMG_BILL : scenario === 2 ? IMG_CONVEYOR : IMG_INVENTORY} className="object-cover w-full h-auto max-h-40" alt="Upload" width={300} height={200} />
                                                            {/* Audio Player Overlay for Maintenance */}
                                                            {scenario === 2 && (
                                                                <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/30 backdrop-blur-md rounded-xl p-1.5 flex items-center gap-2">
                                                                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center pl-0.5"><Play size={8} fill="black" className="text-black" /></div>
                                                                    <div className="flex-1 h-0.5 bg-white/40 rounded-full overflow-hidden"><div className="w-1/3 h-full bg-white"></div></div>
                                                                    <span className="text-[8px] text-white font-medium tabular-nums">0:12</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="px-2 pb-1 flex flex-col">
                                                            <p className="text-[13px] text-slate-900 leading-snug">
                                                                {scenario === 0 ? "Uploaded invoice for TMT Bars." : scenario === 2 ? "Belt snapped. Listen to the noise." : "New stock arrived."}
                                                            </p>
                                                            <div className="text-[10px] text-slate-500 text-right mt-0.5 flex justify-end items-center gap-0.5">10:42 AM <CheckCircle size={12} className="text-blue-500" /></div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <AnimatePresence>
                                            {step >= 3 && (
                                                <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0 }} className="self-start max-w-[85%]">
                                                    <div className="bg-white rounded-2xl rounded-tl-none p-2 shadow-sm relative">
                                                        <div className={`text-[10px] font-bold ${scenario === 2 ? 'text-red-600' : 'text-blue-600'} mb-0.5 ml-1`}>~ System Assistant</div>
                                                        <p className="text-[13px] text-slate-800 leading-snug ml-1">
                                                            {scenario === 0 ? "Data extracted. Invoice #338 logged in AP." : scenario === 2 ? "Ticket #T-881 Created. Tech dispatched." : "Updated ERP: +400 Units (Total 1250)"}
                                                        </p>
                                                        <div className="text-[10px] text-slate-400 text-right mt-0.5 mr-1">10:42 AM</div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* WhatsApp Input */}
                                    <div className="absolute bottom-0 w-full px-3 py-2 bg-[#f0f2f5] flex items-end gap-2 pb-6 border-t border-slate-200/50 z-20">
                                        <Plus size={24} className="text-blue-500 mb-1" />
                                        <div className="flex-1 bg-white rounded-2xl min-h-[36px] px-3 py-1.5 flex items-center text-slate-400 text-sm shadow-sm border border-slate-100">
                                            {step === 0 ? "Type a message..." : ""}
                                        </div>
                                        <Camera size={24} className="text-blue-500 mb-1" />
                                        <Mic size={24} className="text-blue-500 mb-1" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default IntegratedHero;