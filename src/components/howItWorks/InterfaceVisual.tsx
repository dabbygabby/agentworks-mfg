import React from 'react';
import { Mic, Camera, Paperclip, Send, MoreVertical, Phone, Video, ArrowLeft, Check, CheckCheck, Play, Pause } from 'lucide-react';

const WhatsAppUI = ({ name, status, children }: { name: string, status: string, children: React.ReactNode }) => (
    <div className="flex flex-col h-full bg-[#e5ddd5] font-sans">
        {/* Header */}
        <div className="bg-[#075e54] text-white p-3 flex items-center gap-3 shadow-md z-10">
            <ArrowLeft className="w-5 h-5" />
            <div className="w-8 h-8 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden">
                <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 font-bold text-xs">
                    {name[0]}
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm truncate leading-tight">{name}</h3>
                <p className="text-[10px] text-white/80 truncate leading-tight">{status}</p>
            </div>
            <div className="flex gap-3 text-white">
                <Video className="w-5 h-5" />
                <Phone className="w-4 h-4" />
                <MoreVertical className="w-4 h-4" />
            </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-3 space-y-3 overflow-hidden relative">
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.06] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none" />
            {children}
        </div>

        {/* Input Area */}
        <div className="bg-[#f0f0f0] p-2 flex items-center gap-2">
            <div className="bg-white rounded-full flex-1 h-9 flex items-center px-3 gap-2 text-slate-400 shadow-sm">
                <div className="flex gap-2 mr-1">
                    <span className="text-xl leading-none">☺</span>
                </div>
                <span className="text-sm text-slate-400">Message</span>
                <div className="flex gap-3 ml-auto">
                    <Paperclip className="w-4 h-4 rotate-45" />
                    <Camera className="w-4 h-4" />
                </div>
            </div>
            <div className="w-9 h-9 bg-[#00a884] rounded-full flex items-center justify-center text-white shadow-sm">
                <Mic className="w-4 h-4" />
            </div>
        </div>
    </div>
);

const Message = ({ text, time, isSent, type = 'text', fileInfo }: { text?: string, time: string, isSent: boolean, type?: 'text' | 'audio' | 'image' | 'pdf', fileInfo?: any }) => (
    <div className={`flex ${isSent ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-[85%] rounded-lg p-2 shadow-sm relative ${isSent ? 'bg-[#d9fdd3] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
            {type === 'text' && (
                <p className="text-xs text-slate-800 leading-relaxed pr-2">{text}</p>
            )}

            {type === 'audio' && (
                <div className="flex items-center gap-3 min-w-[160px]">
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                    <div className="flex-1 space-y-1">
                        <div className="h-1 bg-slate-300 rounded-full w-full overflow-hidden">
                            <div className="h-full bg-slate-500 w-1/3" />
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-500">
                            <span>0:14</span>
                        </div>
                    </div>
                    <div className="w-4 h-4 rounded-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-blue-400 opacity-20"></div>
                    </div>
                </div>
            )}

            {type === 'image' && (
                <div className="mb-1 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                    <div className="h-24 w-40 bg-slate-200 flex items-center justify-center text-slate-400">
                        <Camera className="w-8 h-8 opacity-50" />
                    </div>
                </div>
            )}

            {type === 'pdf' && (
                <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-md mb-1 border border-slate-100">
                    <div className="w-8 h-10 bg-red-100 text-red-500 flex items-center justify-center rounded">
                        <span className="text-[8px] font-bold">PDF</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">{fileInfo?.name || 'Document.pdf'}</p>
                        <p className="text-[9px] text-slate-500">{fileInfo?.size || '1.2 MB'} • PDF</p>
                    </div>
                </div>
            )}

            <div className="flex justify-end items-center gap-1 mt-1">
                <span className="text-[9px] text-slate-500">{time}</span>
                {isSent && <CheckCheck className="w-3 h-3 text-[#53bdeb]" />}
            </div>
        </div>
    </div>
);

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

const InterfaceVisual = () => {
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

            // Move to next conversation
            setCurrentConvIndex(prev => (prev + 1) % conversations.length);
        };

        playConversation();

        return () => { isMounted = false; };
    }, [currentConvIndex]);

    // Auto-scroll effect
    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [visibleMessages, isTyping]);

    // Calculate vertical position to track messages
    // Start showing top (positive translate), move up as messages appear (negative translate)
    const totalMessages = currentChat.messages.length;
    const progress = visibleMessages.length / (totalMessages || 1);
    // Base offset: Start 12% down, end 12% up (relative to container)
    // Adjust these values to fine-tune the framing
    const translateY = 12 - (progress * 24);

    return (
        <div className="bg-gray-50 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group flex items-center justify-center h-[500px]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-100/40 via-transparent to-transparent" />

            <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* Outer wrapper handles vertical tracking (Pan) */}
                <div
                    className="transition-transform duration-1000 ease-in-out will-change-transform"
                    style={{ transform: `translateY(${translateY}%)` }}
                >
                    {/* Inner wrapper handles Zoom (Scale) */}
                    <div className="relative w-80 md:w-96 transform scale-110 md:scale-125">
                        <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl transform translate-x-1 translate-y-1" />
                        <div className="relative bg-black rounded-[3rem] p-3 border-4 border-slate-800 shadow-xl overflow-hidden h-[600px]">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-20" />

                            {/* Screen */}
                            <div className="bg-white rounded-[2.5rem] overflow-hidden h-full relative pt-8 flex flex-col">
                                <WhatsAppUI name={currentChat.name} status={isTyping ? "typing..." : currentChat.status}>
                                    <div className="flex-1 overflow-y-auto no-scrollbar pb-4" ref={scrollRef}>
                                        <div className="text-center my-4">
                                            <span className="bg-[#dcf8c6] text-slate-600 text-[10px] px-2 py-1 rounded-md shadow-sm">Today</span>
                                        </div>
                                        <div className="space-y-3">
                                            {visibleMessages.map((msg, idx) => (
                                                <Message key={idx} {...msg} />
                                            ))}
                                            {isTyping && <TypingIndicator />}
                                        </div>
                                    </div>
                                </WhatsAppUI>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-lime-200/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
        </div>
    );
};

export default InterfaceVisual;
