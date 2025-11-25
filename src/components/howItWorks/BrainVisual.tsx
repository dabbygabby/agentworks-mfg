import React from 'react';
import { Mic, FileText, Eye, Zap, CheckCircle2, ArrowDown } from 'lucide-react';

type ProcessingStep = {
    type: 'voice' | 'vision' | 'text';
    icon: React.ReactNode;
    title: string;
    input: string;
    output: {
        label: string;
        value: string;
    }[];
};

const processingSteps: ProcessingStep[] = [
    {
        type: 'voice',
        icon: <Mic className="w-6 h-6" />,
        title: 'Voice Processing',
        input: '🎤 "Machine 3 down, need bearing replacement urgently"',
        output: [
            { label: 'Asset', value: 'Machine 3' },
            { label: 'Issue', value: 'Bearing Failure' },
            { label: 'Priority', value: 'Urgent' },
            { label: 'Action', value: 'Maintenance Required' }
        ]
    },
    {
        type: 'vision',
        icon: <Eye className="w-6 h-6" />,
        title: 'Vision Processing',
        input: '📄 Handwritten challan with quantities',
        output: [
            { label: 'Item', value: 'Steel Rods 12mm' },
            { label: 'Quantity', value: '450 units' },
            { label: 'Vendor', value: 'ABC Suppliers' },
            { label: 'Date', value: '23-Nov-2024' }
        ]
    },
    {
        type: 'text',
        icon: <FileText className="w-6 h-6" />,
        title: 'Text Processing',
        input: '💬 "Need quote for 200 brackets by Friday"',
        output: [
            { label: 'Product', value: 'Brackets' },
            { label: 'Quantity', value: '200' },
            { label: 'Deadline', value: 'Friday' },
            { label: 'Type', value: 'Quote Request' }
        ]
    }
];

const BrainVisual = ({ isTeaser = false, onComplete }: { isTeaser?: boolean; onComplete?: () => void }) => {
    const [currentStep, setCurrentStep] = React.useState(0);
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [showOutput, setShowOutput] = React.useState(false);

    React.useEffect(() => {
        let isMounted = true;

        const runCycle = async () => {
            setShowOutput(false);
            setIsProcessing(false);

            // Wait before starting
            await new Promise(r => setTimeout(r, 1000));
            if (!isMounted) return;

            // Start processing
            setIsProcessing(true);
            await new Promise(r => setTimeout(r, 2000));
            if (!isMounted) return;

            // Show output
            setIsProcessing(false);
            setShowOutput(true);

            // Allow output to be read
            await new Promise(r => setTimeout(r, 3000));
            if (!isMounted) return;

            // Cycle Complete
            if (onComplete) {
                onComplete();
                // If the parent doesn't unmount us (e.g. user paused rotation), wait longer before next cycle
                await new Promise(r => setTimeout(r, 1000));
                if (!isMounted) return;
            }

            // Move to next step
            setCurrentStep(prev => (prev + 1) % processingSteps.length);
        };

        runCycle();

        return () => { isMounted = false; };
    }, [currentStep, onComplete]);

    const current = processingSteps[currentStep];

    const containerClasses = isTeaser
        ? "w-full h-full flex flex-col relative overflow-hidden p-4 md:p-6"
        : "bg-gray-50 rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 relative overflow-hidden min-h-[550px] flex flex-col";

    return (
        <div className={containerClasses}>
            <div className={`absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-100/40 via-transparent to-transparent pointer-events-none ${isTeaser ? 'opacity-70' : ''}`} />

            <div className="relative z-10 flex-1 flex flex-col justify-center">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${current.type === 'voice' ? 'bg-blue-100 text-blue-600' :
                            current.type === 'vision' ? 'bg-purple-100 text-purple-600' :
                                'bg-green-100 text-green-600'
                            }`}>
                            {current.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">{current.title}</h3>
                            <p className="text-xs text-slate-500">AI Engine</p>
                        </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${isProcessing ? 'bg-yellow-100 text-yellow-700 animate-pulse' :
                        showOutput ? 'bg-green-100 text-green-700' :
                            'bg-slate-100 text-slate-500'
                        }`}>
                        {isProcessing ? 'Processing...' : showOutput ? 'Complete' : 'Ready'}
                    </div>
                </div>

                {/* Input Section */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-6">
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-lg">📥</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-semibold text-slate-500 mb-1">Raw Input</p>
                            <p className="text-sm text-slate-800">{current.input}</p>
                        </div>
                    </div>
                </div>

                {/* Processing/Arrow Section - Fixed Height */}
                <div className="h-16 flex items-center justify-center mb-6">
                    {isProcessing && (
                        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-md border border-slate-200 animate-fade-in">
                            <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
                            <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                            </div>
                            <span className="text-xs font-medium text-slate-600">Analyzing</span>
                        </div>
                    )}

                    {showOutput && (
                        <ArrowDown className="w-6 h-6 text-lime-600 animate-fade-in" />
                    )}
                </div>

                {/* Output Section - Fixed Height */}
                <div className="min-h-[180px] mb-6">
                    {showOutput && (
                        <div className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-2xl p-4 border border-lime-200 shadow-sm animate-fade-in h-full">
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-8 h-8 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-lime-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-semibold text-lime-700 mb-1">Structured Data</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {current.output.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-lg p-2 border border-lime-100"
                                        style={{ animationDelay: `${idx * 100}ms` }}
                                    >
                                        <p className="text-[10px] font-medium text-slate-500 mb-0.5">{item.label}</p>
                                        <p className="text-xs font-bold text-slate-900 truncate">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-2 mt-auto">
                    {processingSteps.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-8 bg-lime-500' : 'w-1.5 bg-slate-300'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-lime-200/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-2xl pointer-events-none" />
        </div>
    );
};

export default BrainVisual;