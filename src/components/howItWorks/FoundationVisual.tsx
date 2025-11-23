import React, { useRef, useEffect } from 'react';
import { Database, CheckCircle2, Zap, RefreshCw, FileSpreadsheet, Mail, MessageSquare, FileText, ArrowDown } from 'lucide-react';

// --- Data Configuration ---
type DataSource = {
    id: string;
    icon: React.ReactNode;
    label: string;
    color: string;
    data: string;
};

const dataSources: DataSource[] = [
    { id: 'excel', icon: <FileSpreadsheet className="w-4 h-4" />, label: 'Excel', color: 'bg-green-100 text-green-600', data: 'Production_Nov.xlsx' },
    { id: 'whatsapp', icon: <MessageSquare className="w-4 h-4" />, label: 'WhatsApp', color: 'bg-emerald-100 text-emerald-600', data: 'Voice: Machine down' },
    { id: 'email', icon: <Mail className="w-4 h-4" />, label: 'Email', color: 'bg-blue-100 text-blue-600', data: 'PO #4492 - Urgent' },
    { id: 'pdf', icon: <FileText className="w-4 h-4" />, label: 'PDF', color: 'bg-red-100 text-red-600', data: 'Invoice_signed.pdf' }
];

type CleanRecord = { field: string; value: string; source: string; };

const cleanRecords: CleanRecord[] = [
    { field: 'Production Status', value: 'Batch A-12 Active', source: 'excel' },
    { field: 'Machine Alert', value: 'Machine 3 - Maintenance', source: 'whatsapp' },
    { field: 'Purchase Order', value: 'PO #4492 Approved', source: 'email' },
    { field: 'Invoice', value: 'INV-2024-1145 Paid', source: 'pdf' },
    { field: 'Inventory', value: '450 units Steel Rods', source: 'excel' },
    { field: 'Delivery', value: 'Shipment #892 Delivered', source: 'whatsapp' }
];

const FoundationVisual = () => {
    const [activeSource, setActiveSource] = React.useState<number | null>(null);
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [visibleRecords, setVisibleRecords] = React.useState<number[]>([]);
    const [pulseDatabase, setPulseDatabase] = React.useState(false);

    // Ref for the scrolling container
    const scrollRef = useRef<HTMLDivElement>(null);

    // --- Animation Logic ---
    useEffect(() => {
        let isMounted = true;
        const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        const runAnimationLoop = async () => {
            while (isMounted) {
                // Reset
                setVisibleRecords([]);
                setActiveSource(null);
                setPulseDatabase(false);
                await wait(1000);
                if (!isMounted) break;

                // Cycle Sources
                for (let i = 0; i < dataSources.length; i++) {
                    if (!isMounted) break;
                    setActiveSource(i);
                    setIsProcessing(true);
                    await wait(800);
                    if (!isMounted) break;

                    setIsProcessing(false);
                    setPulseDatabase(true);

                    // Add records logic
                    const recordsToAdd = i === 0 ? [0, 4] : i === 1 ? [1, 5] : i === 2 ? [2] : [3];
                    setVisibleRecords(prev => Array.from(new Set([...prev, ...recordsToAdd])));

                    await wait(600);
                    setPulseDatabase(false);
                    await wait(500);
                }

                setActiveSource(null);
                await wait(3000);
            }
        };

        runAnimationLoop();
        return () => { isMounted = false; };
    }, []);

    // --- Auto-Scroll Effect ---
    // Whenever records change, scroll to bottom smoothy
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [visibleRecords]);

    return (
        // FIXED HEIGHT CONTAINER (h-[640px]) - No growing/shrinking
        <div className="bg-gray-50 rounded-3xl p-6 shadow-xl border border-gray-100 relative overflow-hidden h-[640px] w-full flex flex-col font-sans">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-100/40 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header - Fixed Height */}
                <div className="text-center h-24 shrink-0">
                    <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-slate-200 mb-2">
                        <div className={`w-2 h-2 rounded-full bg-lime-500 ${isProcessing ? 'animate-pulse' : ''}`} />
                        <span className="text-xs font-bold text-slate-700">Live Data Sync</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Clean Data Foundation</h3>
                </div>

                {/* Main Content - Flex Column */}
                <div className="flex-1 flex flex-col gap-4">

                    {/* TOP: Sources - Fixed Height Wrapper */}
                    <div className="h-[190px] shrink-0 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm z-20 flex flex-col">
                        <div className="flex items-center gap-2 mb-3 shrink-0">
                            <div className="w-6 h-6 bg-slate-100 rounded-lg flex items-center justify-center">
                                <span className="text-xs">📥</span>
                            </div>
                            <p className="text-xs font-semibold text-slate-600">Raw Data Sources</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 h-full">
                            {dataSources.map((source, idx) => {
                                const isActive = activeSource === idx;
                                return (
                                    <div
                                        key={source.id}
                                        className={`px-3 py-2 rounded-xl border-2 transition-all duration-300 flex flex-col justify-center ${isActive
                                            ? 'border-lime-400 bg-lime-50 shadow-md'
                                            : 'border-slate-100 bg-slate-50 opacity-60'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className={`w-5 h-5 rounded flex items-center justify-center ${source.color}`}>
                                                {source.icon}
                                            </div>
                                            <span className={`text-xs font-bold ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>
                                                {source.label}
                                            </span>
                                        </div>
                                        <p className="text-[10px] text-slate-500 truncate">{source.data}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* MIDDLE: Connector - Fixed Height */}
                    <div className="h-8 shrink-0 flex items-center justify-center relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -z-10" />
                        {isProcessing ? (
                            <div className="bg-white px-3 py-1 rounded-full border border-yellow-200 shadow-sm flex items-center gap-2 animate-in fade-in zoom-in duration-200">
                                <Zap className="w-3 h-3 text-yellow-500 animate-pulse" />
                                <span className="text-[10px] font-medium text-slate-600">Processing</span>
                            </div>
                        ) : (
                            <div className={`bg-white p-1.5 rounded-full border transition-all duration-300 ${pulseDatabase ? 'translate-y-1 border-lime-400' : 'border-slate-200'}`}>
                                <ArrowDown className={`w-4 h-4 ${pulseDatabase ? 'text-lime-600' : 'text-slate-300'}`} />
                            </div>
                        )}
                    </div>

                    {/* BOTTOM: Database - Fixed Height Container */}
                    {/* We set h-[200px] to ensure strict size. */}
                    <div className={`h-[220px] shrink-0 bg-gradient-to-br from-lime-50/80 to-emerald-50/80 backdrop-blur-sm rounded-2xl p-4 border-2 transition-all duration-300 shadow-sm flex flex-col overflow-hidden ${pulseDatabase ? 'border-lime-400 shadow-lg' : 'border-lime-200'
                        }`}>
                        {/* DB Header */}
                        <div className="flex items-center gap-2 mb-2 shrink-0">
                            <div className="w-8 h-8 bg-lime-100 rounded-lg flex items-center justify-center border border-lime-200">
                                <Database className="w-4 h-4 text-lime-600" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs font-semibold text-lime-700">Unified Database</p>
                                <p className="text-[10px] text-lime-600">
                                    {visibleRecords.length} records synced
                                </p>
                            </div>
                        </div>

                        {/* SCROLLABLE AREA: Fixed height calculation */}
                        {/* Height = approx 130px to fit exactly 2 items (approx 60px each) + gap */}
                        <div
                            ref={scrollRef}
                            className="h-[130px] overflow-y-auto space-y-2 pr-1 scroll-smooth custom-scrollbar relative"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for cleanliness
                        >
                            {visibleRecords.length === 0 && (
                                <div className="h-full flex flex-col items-center justify-center text-slate-400/50">
                                    <RefreshCw className="w-6 h-6 mb-2 animate-spin opacity-20" />
                                    <p className="text-[10px]">Waiting for data...</p>
                                </div>
                            )}

                            {visibleRecords.map((recordIdx) => {
                                const record = cleanRecords[recordIdx];
                                const source = dataSources.find(s => s.id === record.source);
                                return (
                                    <div
                                        key={recordIdx}
                                        // Fixed height item to ensure consistency
                                        className="h-[58px] w-full bg-white/90 rounded-lg px-3 border border-lime-100 flex items-center gap-3 shadow-sm animate-in slide-in-from-bottom-2 fade-in duration-300 shrink-0"
                                    >
                                        <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 text-[10px] border ${source?.color.replace('text-', 'border-').replace('bg-', 'bg-opacity-20 ')}`}>
                                            {source?.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{record.field}</p>
                                            <p className="text-xs font-bold text-slate-800 truncate">{record.value}</p>
                                        </div>
                                        <CheckCircle2 className="w-3 h-3 text-lime-500/50 shrink-0" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Footer Status - Fixed Height */}
                <div className="h-8 shrink-0 flex items-center justify-center gap-2 text-xs text-slate-400 mt-2">
                    <RefreshCw className="w-3 h-3" />
                    <span>Auto-syncing</span>
                </div>
            </div>
        </div>
    );
};

export default FoundationVisual;