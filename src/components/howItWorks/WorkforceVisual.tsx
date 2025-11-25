import React, { useEffect, useState } from 'react';
import { Calculator, Package, Shield, Calendar, Database, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

type Agent = {
    id: string;
    name: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    borderColor: string;
    task: string;
    result: string;
};

const agents: Agent[] = [
    {
        id: 'quoting',
        name: 'Quoting Agent',
        icon: <Calculator className="w-5 h-5" />,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        task: 'Calculate quote for 200 brackets',
        result: '₹45,000 • 3-day delivery'
    },
    {
        id: 'inventory',
        name: 'Inventory Agent',
        icon: <Package className="w-5 h-5" />,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        task: 'Check steel rod inventory',
        result: 'Alert: 2 days until shortage'
    },
    {
        id: 'compliance',
        name: 'Compliance Agent',
        icon: <Shield className="w-5 h-5" />,
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        task: 'Audit November production',
        result: 'Report generated • 98% compliant'
    },
    {
        id: 'scheduling',
        name: 'Scheduling Agent',
        icon: <Calendar className="w-5 h-5" />,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        task: 'Track Batch A-12 progress',
        result: '75% complete • On schedule'
    }
];

const WorkforceVisual = ({ isTeaser = false, onComplete }: { isTeaser?: boolean; onComplete?: () => void }) => {
    const [activeAgent, setActiveAgent] = useState<number | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [completedAgents, setCompletedAgents] = useState<number[]>([]);
    const [pulseDatabase, setPulseDatabase] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        const runAnimationLoop = async () => {
            while (isMounted) {
                // Reset
                setCompletedAgents([]);
                setActiveAgent(null);
                setPulseDatabase(false);
                await wait(1500);
                if (!isMounted) break;

                // Cycle through agents
                for (let i = 0; i < agents.length; i++) {
                    if (!isMounted) break;

                    // Database pulse - sending task
                    setPulseDatabase(true);
                    await wait(400);
                    setPulseDatabase(false);
                    if (!isMounted) break;

                    // Activate agent
                    setActiveAgent(i);
                    setIsProcessing(true);
                    await wait(1200);
                    if (!isMounted) break;

                    // Complete task
                    setIsProcessing(false);
                    setCompletedAgents(prev => [...prev, i]);
                    await wait(600);
                }

                // Loop complete
                if (isMounted && onComplete) {
                    onComplete();
                    // Wait a bit longer if we are staying on this screen (e.g. user hovered)
                    await wait(3000);
                } else {
                    setActiveAgent(null);
                    await wait(2500);
                }
            }
        };

        runAnimationLoop();
        return () => { isMounted = false; };
    }, [onComplete]);

    // --- Layout Logic ---
    const scaleClass = isTeaser ? "scale-[0.75] md:scale-95 lg:scale-100" : "";

    const containerClass = isTeaser
        ? "w-full h-full flex items-center justify-center overflow-hidden bg-transparent font-sans"
        : "bg-gray-50 rounded-3xl p-4 md:p-6 shadow-xl border border-gray-100 relative overflow-hidden h-auto min-h-[660px] md:h-[660px] w-full flex flex-col font-sans";

    return (
        <div className={containerClass}>
            <div className={`transition-transform duration-500 origin-center ${scaleClass} ${isTeaser ? 'w-full max-w-[500px]' : 'w-full h-full flex flex-col'}`}>

                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-100/40 via-transparent to-transparent pointer-events-none" />

                <div className={`relative z-10 flex flex-col ${isTeaser ? 'h-[660px]' : 'h-full'}`}>
                    {/* Header */}
                    <div className="text-center h-24 shrink-0">
                        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-slate-200 mb-2">
                            <div className={`w-2 h-2 rounded-full bg-lime-500 ${isProcessing ? 'animate-pulse' : ''}`} />
                            <span className="text-xs font-bold text-slate-700">Autonomous Execution</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Specialized Agent Workforce</h3>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col gap-4 md:gap-6">
                        {/* Database */}
                        <div className={`bg-gradient-to-br from-lime-50/80 to-emerald-50/80 rounded-2xl p-4 border-2 transition-all duration-300 shadow-sm ${pulseDatabase ? 'border-lime-400 shadow-lg scale-[1.02]' : 'border-lime-200'
                            }`}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-lime-100 rounded-lg flex items-center justify-center border border-lime-200 shrink-0">
                                    <Database className="w-5 h-5 text-lime-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-lime-700">Clean Data Foundation</p>
                                    <p className="text-xs text-lime-600">Powering {completedAgents.length} active agents</p>
                                </div>
                                {pulseDatabase && (
                                    <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm animate-in fade-in zoom-in shrink-0">
                                        <ArrowRight className="w-3 h-3 text-lime-600 animate-pulse" />
                                        <span className="text-[10px] font-medium text-slate-600 hidden sm:inline">Dispatching</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Agents Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                            {agents.map((agent, idx) => {
                                const isActive = activeAgent === idx;
                                const isCompleted = completedAgents.includes(idx);

                                return (
                                    <div
                                        key={agent.id}
                                        className={`bg-white rounded-2xl p-4 border-2 transition-all duration-300 flex flex-col ${isActive
                                            ? `${agent.borderColor} shadow-lg scale-[1.02]`
                                            : isCompleted
                                                ? 'border-lime-200 shadow-sm'
                                                : 'border-slate-100 opacity-60'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${agent.bgColor} ${isActive ? 'ring-2 ring-offset-1 ' + agent.borderColor : ''
                                                }`}>
                                                <div className={agent.color}>
                                                    {agent.icon}
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className={`text-xs font-bold truncate ${isActive || isCompleted ? 'text-slate-800' : 'text-slate-500'
                                                    }`}>
                                                    {agent.name}
                                                </p>
                                            </div>
                                            {isCompleted && (
                                                <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0 animate-in zoom-in" />
                                            )}
                                        </div>

                                        <div className="flex-1 mb-3">
                                            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1">
                                                Task
                                            </p>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                {agent.task}
                                            </p>
                                        </div>

                                        {isActive && isProcessing && (
                                            <div className="bg-yellow-50 rounded-lg px-3 py-2 border border-yellow-200 animate-in fade-in slide-in-from-bottom-2">
                                                <div className="flex items-center gap-2">
                                                    <Zap className="w-3 h-3 text-yellow-600 animate-pulse" />
                                                    <span className="text-[10px] font-medium text-yellow-700">Processing...</span>
                                                </div>
                                            </div>
                                        )}

                                        {isCompleted && (
                                            <div className={`${agent.bgColor} rounded-lg px-3 py-2 border ${agent.borderColor} animate-in fade-in slide-in-from-bottom-2`}>
                                                <p className="text-[10px] font-medium text-slate-500 mb-0.5">Result</p>
                                                <p className={`text-xs font-bold ${agent.color}`}>
                                                    {agent.result}
                                                </p>
                                            </div>
                                        )}

                                        {!isActive && !isCompleted && (
                                            <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                                                <p className="text-[10px] text-slate-400">Waiting...</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="h-8 shrink-0 flex items-center justify-center gap-2 text-xs text-slate-400 mt-4">
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse" />
                            <span>{completedAgents.length}/{agents.length} agents active</span>
                        </div>
                    </div>
                </div>

                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-lime-200/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-2xl pointer-events-none" />
            </div>
        </div>
    );
};

export default WorkforceVisual;