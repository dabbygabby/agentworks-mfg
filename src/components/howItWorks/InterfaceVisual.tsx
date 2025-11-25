import React from 'react';
import { Mic, Camera, Paperclip, MoreVertical, Phone, Video, ArrowLeft, CheckCheck, Play } from 'lucide-react';

// --- Sub-components (WhatsAppUI, Message, etc.) ---
const WhatsAppUI = ({ name, status, children }: { name: string, status: string, children: React.ReactNode }) => (
    <div className="flex flex-col h-full bg-[#e5ddd5] font-sans">
        <div className="bg-[#075e54] text-white p-4 pt-8 flex items-center gap-3 shadow-md z-10">
            <ArrowLeft className="w-5 h-5" />
            <div className="w-9 h-9 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden relative">
                <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 font-bold text-sm">
                    {name[0]}
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base truncate leading-tight">{name}</h3>
                <p className="text-[11px] text-white/80 truncate leading-tight">{status}</p>
            </div>
            <div className="flex gap-4 text-white pr-1">
                <Video className="w-5 h-5" />
                <Phone className="w-5 h-5" />
                <MoreVertical className="w-5 h-5" />
            </div>
        </div>

        <div className="flex-1 p-3 space-y-3 overflow-hidden relative bg-[#e5ddd5]">
            <div className="absolute inset-0 opacity-[0.08] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none" />
            {children}
        </div>

        <div className="bg-[#f0f0f0] p-2 pb-6 flex items-center gap-2">
            <div className="bg-white rounded-full flex-1 h-10 flex items-center px-4 gap-2 text-slate-400 shadow-sm">
                <div className="flex gap-2 mr-1">
                    <span className="text-xl leading-none cursor-pointer">☺</span>
                </div>
                <span className="text-base text-slate-400">Message</span>
                <div className="flex gap-4 ml-auto">
                    <Paperclip className="w-5 h-5 rotate-45 cursor-pointer" />
                    <Camera className="w-5 h-5 cursor-pointer" />
                </div>
            </div>
            <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center text-white shadow-sm hover:bg-[#008f6f] transition-colors cursor-pointer">
                <Mic className="w-5 h-5" />
            </div>
        </div>
    </div>
);

const Message = ({ text, time, isSent, type = 'text', fileInfo }: { text?: string, time: string, isSent: boolean, type?: 'text' | 'audio' | 'image' | 'pdf', fileInfo?: any }) => (
    <div className={`flex ${isSent ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-[85%] rounded-lg p-2 shadow-sm relative ${isSent ? 'bg-[#d9fdd3] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
            {type === 'text' && (
                <p className="text-[13px] text-slate-800 leading-snug pr-2">{text}</p>
            )}

            {type === 'audio' && (
                <div className="flex items-center gap-3 min-w-[180px] py-1">
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                    <div className="flex-1 space-y-1">
                        <div className="h-1 bg-slate-300 rounded-full w-full overflow-hidden">
                            <div className="h-full bg-slate-500 w-1/3" />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500">
                            <span>0:14</span>
                        </div>
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden relative bg-blue-100 flex items-center justify-center">
                        <Mic className="w-3 h-3 text-blue-400" />
                    </div>
                </div>
            )}

            {type === 'image' && (
                <div className="mb-1 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                    <div className="h-32 w-48 bg-slate-200 flex items-center justify-center text-slate-400">
                        <Camera className="w-10 h-10 opacity-50" />
                    </div>
                </div>
            )}

            {type === 'pdf' && (
                <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-md mb-1 border border-slate-100 min-w-[200px]">
                    <div className="w-8 h-10 bg-red-100 text-red-500 flex items-center justify-center rounded">
                        <span className="text-[8px] font-bold">PDF</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">{fileInfo?.name || 'Document.pdf'}</p>
                        <p className="text-[10px] text-slate-500">{fileInfo?.size || '1.2 MB'} • PDF</p>
                    </div>
                </div>
            )}

            <div className="flex justify-end items-center gap-1 mt-1 min-w-[50px]">
                <span className="text-[10px] text-slate-500">{time}</span>
                {isSent && <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />}
            </div>
        </div>
    </div>
);

// --- Types ---
type MessageType = {
    text?: string;
    time: string;
    isSent: boolean;
    type?: 'text' | 'audio' | 'image' | 'pdf';
    fileInfo?: { name: string; size: string };
};

type ConversationType = {
    name: string;
    status: string;
    messages: MessageType[];
};

// --- Data ---
const conversations: ConversationType[] = [
    {
        name: "Ravi - Floor Manager",
        status: "online",
        messages: [
            { text: "Production for Batch A-12 started.", time: "10:30 AM", isSent: false },
            { type: "audio", time: "10:31 AM", isSent: false },
            { text: "Machine 3 is giving trouble. Need maintenance.", time: "10:32 AM", isSent: false },
            { text: "Noted. Sending technician.", time: "10:33 AM", isSent: true }
        ]
    },
    {
        name: "Logistics - Driver Singh",
        status: "last seen today at 10:45 AM",
        messages: [
            { text: "Reached customer location.", time: "11:15 AM", isSent: false },
            { type: "image", time: "11:16 AM", isSent: false },
            { text: "Signed copy attached.", time: "11:16 AM", isSent: false },
            { type: "pdf", fileInfo: { name: 'Invoice_4492_Signed.pdf', size: '2.4 MB' }, time: "11:17 AM", isSent: false }
        ]
    },
    {
        name: "Sales - Anjali",
        status: "online",
        messages: [
            { text: "Client approved the new quote.", time: "02:15 PM", isSent: false },
            { type: "pdf", fileInfo: { name: 'PO_Global_Ind.pdf', size: '1.8 MB' }, time: "02:16 PM", isSent: false },
            { text: "Great! Pushing to production queue.", time: "02:16 PM", isSent: true },
            { text: "Estimated delivery date?", time: "02:17 PM", isSent: false }
        ]
    }
];

const TypingIndicator = () => (
    <div className="flex justify-start animate-fade-in">
        <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm relative border border-slate-100">
            <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
            </div>
        </div>
    </div>
);

// --- Main Component ---
const InterfaceVisual = ({ isTeaser = false, onComplete }: { isTeaser?: boolean; onComplete?: () => void }) => {
    const [currentConvIndex, setCurrentConvIndex] = React.useState(0);
    const [visibleMessages, setVisibleMessages] = React.useState<MessageType[]>([]);
    const [isTyping, setIsTyping] = React.useState(false);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const currentChat = conversations[currentConvIndex];

    React.useEffect(() => {
        let isMounted = true;

        const playConversation = async () => {
            setVisibleMessages([]); // Clear previous chat
            setIsTyping(false);

            // Small delay before starting new chat
            await new Promise(r => setTimeout(r, 1000));
            if (!isMounted) return;

            for (const msg of currentChat.messages) {
                // Simulate typing/recording
                setIsTyping(true);
                // Scroll to bottom when typing starts
                if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;

                // Variable delay based on message type/length
                const typingDelay = msg.type === 'audio' ? 1500 : 800 + (msg.text?.length || 0) * 20;
                await new Promise(r => setTimeout(r, typingDelay));

                if (!isMounted) return;

                setIsTyping(false);
                setVisibleMessages(prev => [...prev, msg]);

                // Wait before next message
                await new Promise(r => setTimeout(r, 1000));
                if (!isMounted) return;
            }

            // Hold the final state for a bit
            await new Promise(r => setTimeout(r, 3000));
            if (!isMounted) return;

            // Trigger completion if needed
            if (onComplete) {
                onComplete();
                // Wait a bit before potentially looping (if parent doesn't unmount)
                await new Promise(r => setTimeout(r, 1000));
            }

            // Move to next conversation
            setCurrentConvIndex(prev => (prev + 1) % conversations.length);
        };

        playConversation();

        return () => { isMounted = false; };
    }, [currentConvIndex, onComplete]);

    // Auto-scroll effect
    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [visibleMessages, isTyping]);

    // --- Dynamic Logic ---
    const totalMessages = currentChat.messages.length;
    const progress = visibleMessages.length / (totalMessages || 1);
    const translateY = 12 - (progress * 24);

    const trackingStyle = isTeaser ? {} : { transform: `translateY(${translateY}%)` };

    const scaleClass = isTeaser
        ? "scale-[0.7] md:scale-[0.9]"
        : "scale-100 md:scale-110";

    const containerClass = isTeaser
        ? "w-full h-full flex items-center justify-center bg-transparent relative overflow-hidden"
        : "bg-gray-50 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group flex items-center justify-center h-[500px] w-full";

    return (
        <div className={containerClass}>
            {!isTeaser && (
                <>
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-100/40 via-transparent to-transparent" />
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-lime-200/30 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
                </>
            )}

            <div className="relative z-10 w-full h-full flex items-center justify-center">

                <div
                    className="transition-transform duration-1000 ease-in-out will-change-transform flex items-center justify-center"
                    style={trackingStyle}
                >

                    <div className={`transform transition-transform duration-500 origin-center ${scaleClass}`}>

                        {/* PHONE CHASSIS - FIXED DIMENSIONS FOR PERFECT ASPECT RATIO */}
                        <div className="relative w-[320px] h-[650px] bg-black rounded-[55px] shadow-[0_0_2px_2px_rgba(255,255,255,0.1)_inset] border-[8px] border-black ring-1 ring-white/20">

                            <div className="absolute inset-0 rounded-[46px] shadow-2xl pointer-events-none"></div>

                            <div className="absolute inset-1 bg-black rounded-[46px] overflow-hidden">
                                <div className="w-full h-full bg-white relative flex flex-col">
                                    <WhatsAppUI name={currentChat.name} status={isTyping ? "typing..." : currentChat.status}>
                                        <div className="flex-1 overflow-y-auto no-scrollbar pb-4" ref={scrollRef}>
                                            <div className="text-center my-4">
                                                <span className="bg-[#dcf8c6] text-slate-600 text-[10px] px-2 py-1 rounded-md shadow-sm uppercase font-semibold">Today</span>
                                            </div>
                                            <div className="space-y-2">
                                                {visibleMessages.map((msg, idx) => (
                                                    <Message key={idx} {...msg} />
                                                ))}
                                                {isTyping && <TypingIndicator />}
                                            </div>
                                        </div>
                                    </WhatsAppUI>
                                </div>
                            </div>

                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-30 flex items-center justify-center">
                                <div className="w-20 h-4 bg-[#1a1a1a] rounded-full flex items-center justify-end pr-2 gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0f0f0f] shadow-[0_0_1px_rgba(255,255,255,0.2)]"></div>
                                </div>
                            </div>

                            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-30 pointer-events-none" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterfaceVisual;