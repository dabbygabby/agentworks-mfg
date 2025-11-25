"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowLeft, Activity,
    CheckCircle,
    Search, FileText, Loader2, Mic, Play,
    Camera, ChevronLeft, Package, CreditCard
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

        const gradient = ctx.createLinearGradient(0, 0, 0, 240);
        gradient.addColorStop(0, `${color}33`);
        gradient.addColorStop(1, `${color}00`);

        chartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '6'],
                datasets: [{
                    data: data,
                    borderColor: color,
                    backgroundColor: gradient,
                    fill: 'origin',
                    tension: 0.3,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { x: { display: false }, y: { display: false, min: 0 } },
                animation: false
            }
        });
        return () => { if (chartInstance.current) chartInstance.current.destroy(); };
    }, [data, color]);
    return <canvas ref={chartRef} />;
};

// --- DASHBOARD VIEWS (Responsive Logic Added) ---

const AccountingView = ({ step, isMobile }: { step: number, isMobile: boolean }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col md:flex-row gap-6">
        {/* Left: Summary Stats (Hidden on Mobile to focus on change) */}
        {!isMobile && (
            <div className="w-full md:w-1/3 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">AP Balance</div>
                    <div className="text-2xl font-bold text-slate-900">₹ 45.2 L</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1 relative overflow-hidden">
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">Recent Uploads</div>
                    {step >= 2 ? (
                        <div className="flex gap-3 items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                            <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center text-green-700"><CheckCircle size={14} /></div>
                            <div>
                                <div className="text-xs font-bold text-slate-900">Inv #338</div>
                                <div className="text-[10px] text-green-600">Processed Successfully</div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-32 text-slate-300">
                            <Loader2 className={`w-8 h-8 ${step === 1 ? 'animate-spin text-blue-500' : ''}`} />
                            <span className="text-xs mt-2">{step === 1 ? "OCR Scanning..." : "Waiting for upload"}</span>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* Right: Detailed Invoice View (Always Visible) */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col relative overflow-hidden">
            <div className="h-12 border-b border-slate-100 flex justify-between items-center px-4 bg-slate-50">
                <span className="text-xs font-bold text-slate-500">DIGITIZED INVOICE</span>
                <span className={`text-[10px] font-bold px-2 py-1 rounded ${step >= 2 ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-500'}`}>
                    {step >= 2 ? 'VERIFIED' : 'PENDING'}
                </span>
            </div>
            <div className="p-4 md:p-6 flex-1 text-xs text-slate-700 overflow-hidden font-mono relative">
                {step >= 2 ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }}>
                        <div className="flex flex-col md:flex-row justify-between mb-4 md:mb-6 border-b border-slate-100 pb-4 gap-2">
                            <div>
                                <div className="text-[10px] text-slate-400">Bill To</div>
                                <div className="font-bold text-sm text-slate-900">R.S. Construction Co.</div>
                                <div>Durgapur Rs Sub Post Office</div>
                            </div>
                            <div className="md:text-right">
                                <div className="text-[10px] text-slate-400">Invoice Details</div>
                                <div><span className="text-slate-400">No:</span> <span className="font-bold">338</span></div>
                            </div>
                        </div>
                        <div className="w-full mb-4">
                            <div className="text-[10px] text-slate-400 border-b border-slate-100 pb-2 flex justify-between">
                                <span>Item</span>
                                <span>Amount</span>
                            </div>
                            <div className="divide-y divide-slate-50">
                                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="py-2 flex justify-between">
                                    <span>Sail TMT Bar 25mm</span>
                                    <span className="font-bold">211,074.00</span>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="py-2 flex justify-between">
                                    <span>Sail TMT Bar 12mm</span>
                                    <span className="font-bold">275,338.00</span>
                                </motion.div>
                            </div>
                        </div>
                        <div className="border-t border-slate-200 pt-2">
                            <div className="flex justify-between font-bold text-sm bg-slate-100 p-2 rounded mt-2">
                                <span>Grand Total</span>
                                <span>₹ 1,215,861.00</span>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <CreditCard className="w-16 h-16 text-slate-200 animate-pulse" />
                    </div>
                )}
            </div>
        </div>
    </motion.div>
);

const ProductionView = ({ step, isMobile }: { step: number, isMobile: boolean }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        {/* Left: Chart (Hidden on Mobile) */}
        {!isMobile && (
            <div className="flex flex-col space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600" />
                    <h2 className="text-lg font-bold text-slate-900">Capacity Planning</h2>
                    <div className="mt-4">
                        <div className="flex justify-between text-xs font-medium mb-1"><span>Current Load</span><span>86%</span></div>
                        <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full w-[86%]"></div></div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 flex-1">
                    <h3 className="text-sm font-semibold text-slate-900 mb-2">Trend Analysis</h3>
                    <div className="h-32"><CapacityChart data={[60, 70, 75, 80, 85, 82]} color="#2563eb" /></div>
                </div>
            </div>
        )}
        {/* Right: Active Card (Visible on Both) */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center text-center h-full">
            {step < 2 ? (
                <div className="opacity-50"><FileText className="w-16 h-16 mb-4 mx-auto text-slate-300" /><p className="text-sm">No Active RFQs</p></div>
            ) : (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-green-600" /></div>
                    <h3 className="font-bold text-xl">Quote #9920</h3>
                    <p className="text-sm text-slate-400 mt-2">Status: Sent to Client Inc</p>
                    <div className="mt-6 p-3 bg-slate-50 text-sm font-mono text-slate-600 rounded-lg border border-slate-200">Value: $45,000</div>
                </motion.div>
            )}
        </div>
    </motion.div>
);

const MaintenanceView = ({ step, isMobile }: { step: number, isMobile: boolean }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        {/* Left: OEE (Hidden on Mobile) */}
        {!isMobile && (
            <div className="bg-white rounded-xl shadow-md p-6 relative">
                <h2 className="text-lg font-bold mb-4">Line A Status</h2>
                <div className="flex items-center gap-4">
                    <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center ${step >= 2 ? 'border-red-500 bg-red-50 text-red-600' : 'border-green-500 bg-green-50 text-green-600'}`}>
                        <span className="font-bold">{step >= 2 ? 'ERR' : 'OK'}</span>
                    </div>
                    <div>
                        <div className="text-2xl font-bold">{step >= 2 ? '0%' : '98%'}</div>
                        <div className="text-xs text-slate-400">OEE Score</div>
                    </div>
                </div>
            </div>
        )}
        {/* Right: Ticket (Visible on Both) */}
        <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden flex flex-col justify-center h-full">
            <h3 className="font-bold mb-4 text-slate-900 border-b pb-2">Active Tickets</h3>
            {step >= 2 ? (
                <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div className="text-xs font-bold text-red-700 uppercase mb-1">High Priority</div>
                        <span className="text-[10px] text-slate-400">Now</span>
                    </div>
                    <div className="text-lg font-bold text-slate-800">Conveyor Belt Snap</div>
                    <div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                        <Mic size={12} /> Audio Note Attached
                    </div>
                </motion.div>
            ) : (
                <div className="text-center text-slate-300 py-8">No Active Tickets</div>
            )}
        </div>
    </motion.div>
);

const InventoryView = ({ step, isMobile }: { step: number, isMobile: boolean }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full bg-white rounded-xl shadow-md p-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold flex items-center gap-2"><Package className="text-blue-600" /> Stock Level</h2>
            {step >= 2 && <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">UPDATED</span>}
        </div>
        <div className="flex gap-4 items-end flex-1">
            {/* Visual Rack (Smaller on mobile) */}
            <div className={`bg-slate-50 rounded-lg relative overflow-hidden flex items-end p-4 border border-slate-100 ${isMobile ? 'w-1/3 h-full' : 'flex-1 h-40'}`}>
                <motion.div
                    className="w-full bg-blue-500 rounded-t-lg relative"
                    initial={{ height: "40%" }}
                    animate={step >= 2 ? { height: "90%" } : { height: "40%" }}
                    transition={{ type: "spring" }}
                >
                </motion.div>
            </div>
            {/* Data Details */}
            <div className="flex-1 space-y-4">
                <div>
                    <div className="text-sm text-slate-500">Item</div>
                    <div className="font-bold text-slate-900 text-lg">Sterile Gloves (M)</div>
                </div>
                <div>
                    <div className="text-sm text-slate-500">Current Count</div>
                    <div className="text-4xl font-bold text-slate-900">
                        {step >= 2 ? <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>1,250</motion.span> : '850'}
                    </div>
                    <div className="text-sm text-green-600 font-bold mt-1">{step >= 2 ? '+400 Added' : 'Stable'}</div>
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
    // On Mobile: Only show laptop during Step 2 (Data processing). Show Phone otherwise.
    const showLaptop = !isMobile || (isMobile && step === 2);
    const showPhone = !isMobile || (isMobile && step !== 2);

    return (
        <div className="w-full h-[660px] flex items-start justify-center bg-transparent pt-8 overflow-hidden relative">

            {/* === LAPTOP DASHBOARD === */}
            <motion.div
                className={`absolute z-10 transition-all duration-500
                    ${isMobile
                        ? 'w-full px-4 top-20' // Mobile: Full width, lower top
                        : 'top-0 left-1/2 -translate-x-1/2 w-[900px] h-[580px]' // Desktop: Fixed size centered
                    }`}
                animate={{
                    opacity: showLaptop ? 1 : 0,
                    y: showLaptop ? 0 : 20,
                    scale: showLaptop ? 1 : 0.95
                }}
            >
                <div className={`w-full bg-slate-50 rounded-xl overflow-hidden flex flex-col relative ring-1 ring-black/5 
                    ${isMobile ? 'h-[400px]' : 'h-full'}`}>

                    {/* Header: Hide unnecessary UI on mobile to focus on data */}
                    {!isMobile && (
                        <>
                            <div className="h-10 bg-white border-b border-slate-200 flex items-center px-4 gap-4">
                                <div className="flex gap-1.5 opacity-50"><div className="w-3 h-3 rounded-full bg-slate-400"></div><div className="w-3 h-3 rounded-full bg-slate-400"></div></div>
                                <div className="flex-1 bg-slate-100 h-6 rounded text-[10px] flex items-center px-3 text-slate-400 font-mono">
                                    app.factory-os.io/{details.tab.toLowerCase()}
                                </div>
                            </div>
                            <div className="h-12 bg-white border-b border-slate-200 flex items-center px-8 gap-8">
                                {['Finance', 'Production', 'Maintenance', 'Inventory'].map((t) => (
                                    <span key={t} className={`text-sm font-bold border-b-2 py-3 transition-colors ${details.tab === t ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400'}`}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Content Area */}
                    <div className={`flex-1 ${isMobile ? 'p-4' : 'p-8'} bg-slate-50/50 relative`}>
                        <AnimatePresence mode="wait">
                            <motion.div key={scenario} className="h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                {details.view}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            {/* === MOBILE PHONE === */}
            <motion.div
                className={`absolute z-30 transition-all duration-500 rounded-[2.5rem] bg-slate-900 p-2
                    ${isMobile
                        ? 'bottom-0 w-[340px] left-1/2 -translate-x-1/2' // Mobile: Huge, Centered
                        : 'bottom-12 w-[300px] left-12' // Desktop: Offset, smaller
                    }`}
                animate={{
                    y: showPhone ? 0 : 100,
                    opacity: showPhone ? 1 : 0,
                }}
            >
                <div className="bg-white rounded-[2rem] overflow-hidden relative flex flex-col h-[600px] md:h-[580px]">
                    {/* Phone Status Bar */}
                    <div className="h-12 bg-white flex justify-between items-end px-6 pb-2 text-[12px] font-bold text-slate-900 z-30">
                        <span>9:41</span>
                        <div className="w-6 h-3 border border-slate-400 rounded-sm relative"><div className="h-full bg-slate-800 w-[60%]"></div></div>
                    </div>

                    <AnimatePresence mode="wait">
                        {/* CASE 1: EMAIL RFQ */}
                        {scenario === 1 ? (
                            <motion.div
                                key="email" className="absolute inset-0 pt-12 bg-slate-50 flex flex-col"
                                initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: -300 }}
                            >
                                <div className="px-5 py-3 bg-white border-b flex justify-between items-center"><ChevronLeft size={28} className="text-slate-900" /><span className="font-bold text-xl">Inbox</span><Search size={24} /></div>
                                <div className="p-4 flex-1 flex flex-col">
                                    <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-slate-100 mb-6">
                                        <div className="flex gap-4 mb-3">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-lg font-bold text-blue-600">C</div>
                                            <div>
                                                <div className="font-bold text-slate-900 text-lg">Client Inc</div>
                                                <div className="text-sm text-slate-500">Request for Quote</div>
                                            </div>
                                        </div>
                                        <p className="text-base text-slate-600 mb-2">Need pricing for 10k units.</p>
                                    </div>
                                    <AnimatePresence>
                                        {step >= 3 && (
                                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-4 bg-slate-800 text-white p-4 rounded-xl flex items-center gap-3 shadow-lg">
                                                <CheckCircle size={20} className="text-green-400" /> <span className="font-bold">Quote Sent Successfully</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <motion.button
                                        animate={step === 1 ? { scale: 0.95 } : { scale: 1 }}
                                        className={`mt-auto w-full text-white text-base font-bold py-5 rounded-2xl flex items-center justify-center gap-2 ${step >= 1 ? 'bg-slate-400' : 'bg-blue-600 shadow-xl shadow-blue-200'}`}
                                    >
                                        {step === 1 ? <Loader2 className="animate-spin w-6 h-6" /> : <FileText size={20} />}
                                        {step === 0 ? "Generate Quote" : step === 1 ? "Processing..." : "Done"}
                                    </motion.button>
                                </div>
                            </motion.div>
                        ) : (
                            // CASE 0, 2, 3: WHATSAPP UI
                            <motion.div
                                key="whatsapp" className="absolute inset-0 pt-12 bg-[#e5ddd5] flex flex-col"
                                style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                                initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: -300 }}
                            >
                                <div className={`px-4 py-4 ${details.botColor} flex items-center gap-3 shadow-md z-10 text-white`}>
                                    <ArrowLeft size={24} />
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/10"><Activity size={20} /></div>
                                    <div className="flex-1"><div className="text-base font-bold">{details.botName}</div><div className="text-xs opacity-80">Online</div></div>
                                </div>

                                <div className="p-4 flex-1 flex flex-col gap-4 overflow-hidden justify-end pb-24">
                                    <AnimatePresence>
                                        {step >= 1 && (
                                            <motion.div initial={{ opacity: 0, scale: 0.8, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }} className="bg-white self-end rounded-xl rounded-tr-none p-1.5 shadow-sm max-w-[85%]">
                                                <div className="bg-slate-100 rounded-lg overflow-hidden relative mb-1">
                                                    <Image src={scenario === 0 ? IMG_BILL : scenario === 2 ? IMG_CONVEYOR : IMG_INVENTORY} className="object-cover w-full h-48" alt="Upload" width={300} height={200} />
                                                </div>
                                                {scenario === 2 && (
                                                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg mb-1">
                                                        <div className="w-8 h-8 rounded-full bg-slate-400 flex items-center justify-center"><Play size={14} className="text-white fill-current" /></div>
                                                        <div className="flex gap-0.5 h-4 items-center flex-1">
                                                            {[1, 2, 3, 4, 2, 3, 1, 2, 4, 2].map((h, i) => <div key={i} className="w-1 bg-slate-400 mx-px" style={{ height: `${h * 4}px` }}></div>)}
                                                        </div>
                                                        <div className="text-[10px] text-slate-400 ml-2">0:12</div>
                                                    </div>
                                                )}
                                                <div className="px-2 pb-1">
                                                    <p className="text-sm text-slate-800 leading-snug">
                                                        {scenario === 0 ? "Uploaded invoice for TMT Bars." : scenario === 2 ? "Belt snapped, see photo." : "New stock arrived."}
                                                    </p>
                                                    <div className="text-[10px] text-slate-400 text-right mt-1">10:42 AM <span className="text-blue-400">✓✓</span></div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <AnimatePresence>
                                        {step >= 3 && (
                                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white self-start rounded-xl rounded-tl-none p-3 shadow-sm max-w-[85%]">
                                                <div className={`text-xs font-bold ${scenario === 2 ? 'text-red-600' : 'text-blue-600'} mb-1`}>System</div>
                                                <p className="text-sm text-slate-800 leading-snug">
                                                    {scenario === 0 ? "Data extracted. Invoice #338 logged in AP." : scenario === 2 ? "Ticket #T-881 Created. Tech dispatched." : "Updated ERP: +400 Units (Total 1250)"}
                                                </p>
                                                <div className="text-[10px] text-slate-400 text-right mt-1">10:42 AM</div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="absolute bottom-0 w-full p-3 bg-[#f0f2f5] flex items-center gap-3 pb-8">
                                    <Camera className="text-blue-500" size={28} />
                                    <div className="flex-1 bg-white rounded-full h-12 px-5 flex items-center text-slate-400 text-base shadow-sm">
                                        {step === 0 ? "Type a message..." : ""}
                                    </div>
                                    <Mic className="text-blue-500" size={28} />

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default IntegratedHero;