'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowLeft, Bell, Bold, Italic, Underline, List, ListOrdered, Link as LinkIcon,
    Send, Paperclip, Download, X, ArrowUp, Check, Mail, Database, Bot
} from 'lucide-react';

// --- CSS & Keyframes ---
const customStyles = `
  .custom-scrollbar::-webkit-scrollbar { width: 4px; }
  .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 4px; }
  
  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
  .animate-float { animation: float 3s ease-in-out infinite; }

  @keyframes pulse-dot { 0%, 100% { transform: scale(0.8); opacity: 0.5; } 50% { transform: scale(1.2); opacity: 1; } }
  .animate-pulse-dot { animation: pulse-dot 1.8s ease-in-out infinite; }
  
  @keyframes badge-appear { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
  .animate-badge-appear { animation: badge-appear 400ms ease-out forwards; }

  @keyframes slide-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  .animate-slide-up { animation: slide-up 400ms ease-out; }

  @keyframes modal-pop { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
  .animate-modal-pop { animation: modal-pop 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards; }

  /* Simple fade used for panel content switching to prevent layout jumps */
  @keyframes content-fade { from { opacity: 0; } to { opacity: 1; } }
  .animate-content-fade { animation: content-fade 600ms ease-out forwards; }

  @keyframes success-bounce { 0% { transform: scale(0); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
  .animate-success-bounce { animation: success-bounce 600ms ease-out; }
`;

// --- Constants ---
const USER = { name: 'Rajesh K.', role: 'Plant Head', avatar: 'https://placehold.co/40x40/E0E7FF/1E40AF?text=RK' };
const USER_QUESTION = "Can we handle another 250k units in 3 months?"; // Shortened for mobile fit

// Helper
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function QuoteGenerationPage() {
    // --- State ---
    const [loadingEmail, setLoadingEmail] = useState(true);
    const [loadingPdf, setLoadingPdf] = useState(true);
    const [autoSaveStatus, setAutoSaveStatus] = useState('Saving...');

    // Modals & Chat
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showAiModal, setShowAiModal] = useState(false);
    const [aiInput, setAiInput] = useState('');
    const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'ai', type?: 'thinking' | 'response', content: React.ReactNode }>>([]);
    const [aiStep, setAiStep] = useState(0);

    const chatEndRef = useRef<HTMLDivElement>(null);
    const loopRunning = useRef(false);

    // --- Master Animation Loop ---
    useEffect(() => {
        if (loopRunning.current) return;
        loopRunning.current = true;

        const runAnimationLoop = async () => {
            while (true) {
                // 0. RESET
                setLoadingEmail(true);
                setLoadingPdf(true);
                setShowSuccessModal(false);
                setShowAiModal(false);
                setChatMessages([]);
                setAiInput("");
                setAiStep(0);
                setAutoSaveStatus('Saving...');

                await wait(1500);

                // 1. GENERATING REPORT (show loading states)
                await wait(2000);

                // 2. SHOW GENERATED CONTENT (PDF and Email)
                setLoadingPdf(false);
                await wait(800);
                setLoadingEmail(false);
                setAutoSaveStatus('Auto-saved ✓');

                // Let user see the generated content
                await wait(3000);

                // 3. OPEN AI CHAT & TYPE
                setShowAiModal(true);
                await wait(800);

                const textToType = USER_QUESTION;
                for (let i = 0; i <= textToType.length; i += 2) {
                    setAiInput(textToType.slice(0, i));
                    await wait(30);
                }
                await wait(500);

                // 4. SEND MESSAGE
                setChatMessages([{ role: 'user', content: USER_QUESTION }]);
                setAiInput("Analyzing...");

                // 5. AI THINKING
                await wait(600);
                setAiStep(1);
                setChatMessages(prev => [...prev, {
                    role: 'ai', type: 'thinking',
                    content: <AiThinkingBubble />
                }]);

                // 6. BADGES
                await wait(1500);
                setAiStep(2);

                // 7. AI RESPONSE
                await wait(2000);
                setAiStep(3);
                setChatMessages(prev => {
                    const h = [...prev];
                    h.pop();
                    h.push({ role: 'ai', type: 'response', content: <AiFinalResponse /> });
                    return h;
                });
                setAiInput("Ask a follow-up...");

                // 8. SUCCESS MODAL (EMAIL SENT)
                await wait(2500);
                setShowSuccessModal(true);

                // 9. RESET & REPEAT
                await wait(4000);
            }
        };

        runAnimationLoop();
    }, []);

    useEffect(() => {
        // Scroll only within the chat container using scrollTop instead of scrollIntoView
        if (chatEndRef.current) {
            const chatContainer = chatEndRef.current.parentElement;
            if (chatContainer) {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }
        }
    }, [chatMessages, aiStep]);

    return (
        // Self-contained component - all interactions stay within this boundary
        <div className="w-full min-h-screen lg:h-screen flex flex-col bg-[#F9FAFB] font-sans text-gray-900 overflow-clip relative isolate">
            <style>{customStyles}</style>

            {/* --- Header --- */}
            <header className="bg-white shadow-sm h-16 flex-shrink-0 z-30 sticky top-0 border-b border-gray-200">
                <div className="max-w-[1600px] mx-auto px-4 lg:px-6 h-full flex items-center justify-between">
                    <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-700">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="hidden sm:inline text-sm font-medium">Back to Planning</span>
                    </button>
                    <div className="flex flex-col items-center">
                        <h1 className="text-base lg:text-lg font-semibold text-gray-900">Quote Generation</h1>
                        <span className={`text-[10px] font-medium transition-colors ${autoSaveStatus.includes('saved') ? 'text-green-600' : 'text-gray-400'}`}>
                            {autoSaveStatus}
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Bell className="w-6 h-6 text-gray-500" />
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">1</span>
                        </div>
                        <img className="h-8 w-8 rounded-full border border-gray-200" src={USER.avatar} alt="Avatar" />
                    </div>
                </div>
            </header>

            {/* --- Main Content Grid --- */}
            {/* Mobile: scrollable vertical stack. Desktop: fixed height grid. */}
            <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 lg:px-6 pb-6 pt-6 overflow-y-auto lg:overflow-clip">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-full">

                    {/* --- Left Column: Email (45%) --- */}
                    {/* Fixed height on mobile (500px) to prevent layout shifting. Full height on desktop. */}
                    <div className="lg:col-span-5 h-[500px] lg:h-[calc(100vh-112px)] flex flex-col relative">
                        {/* We use absolute positioning or simple conditionals. 
                            The container has a fixed size so swapping content won't resize the box. */}
                        {loadingEmail ? (
                            <LoadingState icon="📧" text="Drafting..." />
                        ) : (
                            <div className="h-full w-full bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col animate-content-fade">
                                <div className="p-4 border-b border-gray-200">
                                    <h2 className="text-sm font-bold text-gray-800">EMAIL DRAFT</h2>
                                </div>
                                <div className="p-4 bg-gray-50 border-b border-gray-200 space-y-2 text-xs lg:text-sm">
                                    <div className="flex"><span className="w-16 text-gray-500">To:</span><span>rahul.mehta@vivalife.in</span></div>
                                    <div className="flex"><span className="w-16 text-gray-500">Subject:</span><span className="font-medium truncate">Re: RFQ - Sterile Gloves</span></div>
                                </div>
                                <div className="p-2 bg-gray-50 border-b border-gray-200 flex items-center space-x-1 overflow-x-auto">
                                    <ToolbarBtn icon={<Bold size={14} />} />
                                    <ToolbarBtn icon={<Italic size={14} />} />
                                    <ToolbarBtn icon={<Underline size={14} />} />
                                    <div className="w-px h-4 bg-gray-300 mx-2" />
                                    <ToolbarBtn icon={<List size={14} />} />
                                    <ToolbarBtn icon={<ListOrdered size={14} />} />
                                </div>
                                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 text-sm text-gray-800">
                                    <div className="space-y-4">
                                        <p>Dear Mr. Mehta,</p>
                                        <p>Thank you for the opportunity. We are pleased to submit our quote:</p>
                                        <div className="bg-blue-50 p-3 rounded-md text-xs">
                                            <strong>ORDER SUMMARY:</strong>
                                            <ul className="list-disc ml-4 mt-1">
                                                <li>Product: Sterile Medical Gloves</li>
                                                <li>Qty: 7,00,000 units</li>
                                                <li>Total: <strong>₹66,12,480</strong></li>
                                            </ul>
                                        </div>
                                        <p>Production timeline: 6 months. 20% advance required.</p>
                                        <p>Best regards,<br /><strong>Rajesh Kumar</strong></p>
                                    </div>
                                </div>
                                <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                                    <button className="w-full h-10 flex items-center justify-center bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors">
                                        Send Email <Send className="w-3 h-3 ml-2" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* --- Right Column: PDF (55%) --- */}
                    <div className="lg:col-span-7 h-[500px] lg:h-[calc(100vh-112px)] flex flex-col">
                        {loadingPdf ? (
                            <LoadingState icon="📄" text="Generating PDF..." />
                        ) : (
                            <div className="h-full w-full bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col animate-content-fade delay-100">
                                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                                    <h2 className="text-sm font-bold text-gray-800">PREVIEW</h2>
                                    <Download className="w-4 h-4 text-gray-500" />
                                </div>
                                {/* PDF Container - Scrollable */}
                                <div className="bg-gray-100 flex-1 overflow-auto custom-scrollbar p-4 lg:p-8 flex justify-center items-start">
                                    {/* A4 Paper - Fixed Width */}
                                    <div className="w-[500px] min-h-[700px] bg-white shadow-xl p-8 lg:p-10 border border-gray-300 text-[10px] lg:text-[11px] leading-relaxed text-gray-800 scale-90 lg:scale-100 origin-top">
                                        <div className="flex justify-between items-start mb-6 border-b-2 border-blue-800 pb-4">
                                            <div className="flex items-center space-x-2">
                                                <div className="h-8 w-8 bg-blue-800 text-white flex items-center justify-center font-bold text-lg rounded">A</div>
                                                <span className="text-lg font-bold text-blue-900">ACME</span>
                                            </div>
                                            <div className="text-right text-gray-500">
                                                <strong>ACME Latex Pvt Ltd</strong><br />Hosur, India
                                            </div>
                                        </div>
                                        <h2 className="text-base font-bold text-blue-800 text-center mb-4 uppercase">Quotation</h2>
                                        <table className="w-full mb-4">
                                            <thead>
                                                <tr className="bg-gray-50 text-left"><th className="p-2 border-b">Item</th><th className="p-2 border-b text-right">Total</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr><td className="p-2 border-b">Sterile Gloves (700k)</td><td className="p-2 border-b text-right font-mono">₹59,04,000</td></tr>
                                                <tr className="bg-blue-50 font-bold text-blue-900"><td className="p-2 text-right">TOTAL</td><td className="p-2 text-right font-mono">₹66,12,480</td></tr>
                                            </tbody>
                                        </table>
                                        <div className="mt-12 pt-4 border-t border-gray-200">
                                            <strong>Rajesh Kumar</strong><br /><span className="text-gray-500">Plant Head</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* --- AI Trigger Button --- */}
            <button
                onClick={() => setShowAiModal(true)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40"
            >
                <Bot className="w-7 h-7 animate-pulse" />
            </button>

            {/* --- AI Modal --- */}
            {showAiModal && (
                <div className="absolute inset-0 z-50 flex items-center justify-center p-4 rounded-t-[2.5rem]">
                    <div className="absolute inset-0 backdrop-blur-sm rounded-t-[2.5rem] " onClick={() => setShowAiModal(false)} />

                    {/* Responsive Modal Box */}
                    <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-clip animate-modal-pop flex flex-col"
                        style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #F3E8FF 100%)' }}>

                        {/* Header */}
                        <div className="h-12 flex items-center justify-between px-4 border-b border-gray-200 flex-shrink-0">
                            <div className="flex items-center space-x-2 text-blue-700">
                                <Bot className="w-5 h-5" />
                                <span className="text-sm font-bold">AI ASSISTANT</span>
                            </div>
                            <button onClick={() => setShowAiModal(false)} className="p-1 hover:bg-gray-200 rounded text-gray-500"><X size={18} /></button>
                        </div>

                        {/* Chat Area - FIXED HEIGHT to prevent jitter */}
                        <div className="h-[300px] lg:h-[350px] p-4 overflow-y-auto custom-scrollbar flex flex-col space-y-3">
                            {chatMessages.map((msg, idx) => (
                                <div key={idx} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}>
                                    <div className={`max-w-[85%] p-3 rounded-2xl shadow-sm text-sm 
                                        ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none border border-blue-100'}`}>
                                        {msg.content}
                                        {msg.type === 'thinking' && aiStep >= 2 && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                <Badge delay="0ms">ERP</Badge>
                                                <Badge delay="400ms">CRM</Badge>
                                                <Badge delay="800ms">Vendors</Badge>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-white/70 backdrop-blur-sm border-t border-gray-200 flex-shrink-0">
                            <div className="relative">
                                <div className="w-full h-12 px-4 pr-12 rounded-full border-2 border-blue-400/50 shadow-inner bg-white flex items-center text-sm text-gray-700">
                                    {aiInput}
                                </div>
                                <button className="absolute right-1 top-1 w-10 h-10 rounded-full flex items-center justify-center text-blue-500">
                                    <ArrowUp className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- Success Modal --- */}
            {showSuccessModal && (
                <div className="absolute inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 rounded-t-[2.5rem] backdrop-blur-sm transition-opacity" />
                    <div className="relative bg-white rounded-2xl shadow-2xl p-6 lg:p-8 max-w-sm lg:max-w-md w-full text-center animate-modal-pop">
                        <div className="inline-flex p-3 bg-green-100 rounded-full mb-4 animate-success-bounce">
                            <Check className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-xl font-bold text-green-600">SENT!</h2>
                        <p className="text-gray-500 mt-1 mb-6 text-sm">Quote emailed to client.</p>

                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-left space-y-2 mb-6">
                            <div className="flex items-center text-sm text-gray-700"><Mail size={14} className="mr-2 text-blue-600" />rahul.mehta@vivalife.in</div>
                            <div className="flex items-center text-sm text-gray-700"><Database size={14} className="mr-2 text-green-600" />₹66,12,480</div>
                        </div>

                        <button className="w-full h-10 bg-blue-600 text-white font-medium rounded-lg text-sm">
                            Back to Dashboard
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

// --- Sub-Components ---

function LoadingState({ icon, text }: { icon: string, text: string }) {
    // This container fills the parent box 100%
    return (
        <div className="h-full w-full bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col items-center justify-center animate-content-fade">
            <span className="text-4xl animate-float mb-3 block">{icon}</span>
            <span className="text-sm font-medium text-gray-500">{text}</span>
            <div className="flex space-x-1 mt-2">
                {[0, 0.3, 0.6].map(d => <span key={d} className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse-dot" style={{ animationDelay: `${d}s` }}></span>)}
            </div>
        </div>
    );
}

function ToolbarBtn({ icon }: { icon: React.ReactNode }) {
    return <button className="p-1.5 rounded hover:bg-gray-200 text-gray-500">{icon}</button>;
}

function Badge({ children, delay }: { children: React.ReactNode, delay: string }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => { const t = setTimeout(() => setVisible(true), parseInt(delay)); return () => clearTimeout(t); }, [delay]);
    if (!visible) return null;
    return <span className="animate-badge-appear text-[10px] font-bold bg-white/90 text-blue-700 py-1 px-2 rounded-full shadow-sm border border-blue-200">{children}</span>;
}

function AiThinkingBubble() {
    return (
        <div className="flex items-center space-x-2">
            <Bot className="w-4 h-4 animate-pulse" />
            <span className="text-xs">Checking data...</span>
        </div>
    );
}

function AiFinalResponse() {
    return (
        <div className="space-y-2 text-xs">
            <h4 className="font-bold uppercase text-gray-800 border-b border-gray-100 pb-1">
                <span className="text-green-600 mr-1">✅</span> Analysis:
            </h4>
            <ul className="pl-1 space-y-1 text-gray-600">
                <li>• Capacity: <strong>Available</strong></li>
                <li>• Timeline: <strong>3 Months</strong></li>
            </ul>
            <div className="bg-blue-50 border-l-2 border-blue-500 p-2 rounded text-blue-900 font-medium">
                Rec: Accept order.
            </div>
            <p className="text-gray-400 italic">Quote drafted.</p>
        </div>
    );
}