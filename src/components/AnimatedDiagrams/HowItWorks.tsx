import { File, Image, MapPin, MessageCircle, Mic } from 'lucide-react';
import React from 'react';
import { Outlook } from './BaseIcons/Outlook';
import { Excel } from './BaseIcons/Excel';
import { Tally } from './BaseIcons/Tally';

const ArchitectureDiagram = () => {
    // Configuration for vertical spacing
    const centerY = 250;
    const inputSpacing = 80;
    const outputSpacing = 90;

    return (
        <div className="w-full p-8 bg-white rounded-xl border border-slate-100 shadow-sm">
            <svg
                viewBox="0 0 1200 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto font-sans"
                preserveAspectRatio="xMidYMid meet"
            >
                <style>
                    {`
            .pulse {
              animation: pulse 3s ease-in-out infinite;
              transform-origin: center;
              transform-box: fill-box;
            }
            @keyframes pulse {
              0% { transform: scale(1); opacity: 0.2; }
              50% { transform: scale(1.6); opacity: 0; }
              100% { transform: scale(1); opacity: 0; }
            }
            text { font-family: Inter, system-ui, sans-serif; }
          `}
                </style>

                <defs>
                    <linearGradient id="dbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>

                    <linearGradient id="wa-gradient" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#57d163" />
                        <stop offset="1" stopColor="#23b33a" />
                    </linearGradient>
                    <filter id="wa-shadow" width="1.115" height="1.114" x="-.057" y="-.057" colorInterpolationFilters="sRGB">
                        <feGaussianBlur stdDeviation="3.531" />
                    </filter>

                    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.08" />
                    </filter>
                </defs>

                {/* =============================================
            SECTION 1: INPUTS (LEFT)
           ============================================= */}
                <g transform="translate(50, 0)">

                    {/* Input 1: Tally */}
                    <Tally
                        centerY={centerY}
                        inputSpacing={inputSpacing}
                    />
                    {/* Input 2: Excel */}
                    <Excel
                        centerY={centerY}
                        inputSpacing={inputSpacing}
                    />
                    {/* Input 3: Outlook (REPLACED generic Email icon) */}
                    <Outlook
                        centerY={centerY}
                        inputSpacing={inputSpacing}
                    />
                    {/* Input 4: Files */}
                    <g transform={`translate(0, ${centerY + inputSpacing * 1.5})`}>
                        <rect x="0" y="-30" width="80" height="60" rx="12" fill="#475569" filter="url(#softShadow)" />
                        <g transform="translate(28, -12)" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />
                        </g>
                    </g>
                </g>


                {/* =============================================
            CONNECTIONS: INPUTS -> WHATSAPP
           ============================================= */}
                <g fill="none" stroke="#cbd5e1" strokeWidth="2">
                    <path id="in1" d={`M 130 ${centerY - inputSpacing * 1.5} C 200 ${centerY - inputSpacing * 1.5}, 200 ${centerY}, 280 ${centerY}`} />
                    <path id="in2" d={`M 130 ${centerY - inputSpacing * 0.5} C 180 ${centerY - inputSpacing * 0.5}, 180 ${centerY}, 280 ${centerY}`} />
                    <path id="in3" d={`M 130 ${centerY + inputSpacing * 0.5} C 180 ${centerY + inputSpacing * 0.5}, 180 ${centerY}, 280 ${centerY}`} />
                    <path id="in4" d={`M 130 ${centerY + inputSpacing * 1.5} C 200 ${centerY + inputSpacing * 1.5}, 200 ${centerY}, 280 ${centerY}`} />
                </g>

                {/* Animated Dots */}
                <circle r="3" fill="#166534"><animateMotion dur="3s" repeatCount="indefinite"><mpath href="#in1" /></animateMotion></circle>
                <circle r="3" fill="#15803d"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#in2" /></animateMotion></circle>
                <circle r="3" fill="#0369a1"><animateMotion dur="2.5s" repeatCount="indefinite"><mpath href="#in3" /></animateMotion></circle>
                <circle r="3" fill="#475569"><animateMotion dur="3.5s" repeatCount="indefinite"><mpath href="#in4" /></animateMotion></circle>


                {/* =============================================
            SECTION 2: THE BRIDGE (WHATSAPP)
           ============================================= */}
                <g transform={`translate(330, ${centerY})`}>
                    {/* Pulsing Rings */}
                    <circle cx="0" cy="0" r="55" fill="#22c55e" className="pulse" />
                    <circle cx="0" cy="0" r="45" fill="white" filter="url(#softShadow)" />

                    {/* NEW WHATSAPP SVG EMBEDDED HERE */}
                    <svg x="-30" y="-30" width="60" height="60" viewBox="0 0 175.216 175.552">
                        <path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#wa-shadow)" />
                        <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z" />
                        <path fill="url(#wa-gradient)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z" />
                        <path fill="url(#wa-gradient)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z" />
                        <path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" />
                    </svg>

                    <text x="0" y="75" textAnchor="middle" fill="#64748b" fontSize="13" fontWeight="600">Direct Connectors</text>
                </g>


                {/* Connection: WA -> AI */}
                <path id="wa-to-ai" d={`M 380 ${centerY} L 450 ${centerY}`} stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" />
                <circle r="3" fill="#22c55e"><animateMotion dur="1.5s" repeatCount="indefinite"><mpath href="#wa-to-ai" /></animateMotion></circle>


                {/* =============================================
            SECTION 3: MULTI-MODAL AI BOX (Taller)
           ============================================= */}
                <g transform={`translate(450, ${centerY - 150})`}>
                    <rect x="0" y="0" width="200" height="270" rx="16" fill="#DFEAFF" stroke="#99B7F9" strokeWidth="2" />
                    <text x="20" y="30" fill="#497EF3" fontSize="12" fontWeight="600" letterSpacing="0.5">AI Engine</text>

                    <g transform="translate(16, 45)"> {/* Shifted content down slightly */}
                        {/* Voice */}
                        <g>
                            <Mic className='text-blue-400' />
                            <text x="28" y="14" fontSize="13" fill="#497EF3">Voice Notes</text>
                        </g>
                        {/* Text */}
                        <g transform="translate(0, 45)">
                            <MessageCircle className='text-blue-400' />
                            <text x="28" y="14" fontSize="13" fill="#497EF3">Text Messages</text>
                        </g>
                        {/* Images */}
                        <g transform="translate(0, 90)">
                            <Image className='text-blue-400' />
                            <text x="28" y="14" fontSize="13" fill="#497EF3">Images</text>
                        </g>
                        {/* Bills */}
                        <g transform="translate(0, 135)">
                            <File className='text-blue-400' />
                            <text x="28" y="14" fontSize="13" fill="#497EF3">Bills & Files</text>
                        </g>
                        {/* Location */}
                        <g transform="translate(0, 180)">
                            <MapPin className='text-blue-400' />
                            <text x="28" y="14" fontSize="13" fill="#497EF3">Location</text>
                        </g>
                    </g>
                </g>


                {/* Connection: AI -> DB */}
                <path id="ai-to-db" d={`M 650 ${centerY} L 700 ${centerY}`} stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" />
                <circle r="3" fill="#3b82f6"><animateMotion dur="1s" repeatCount="indefinite"><mpath href="#ai-to-db" /></animateMotion></circle>


                {/* =============================================
            SECTION 4: DATABASE
           ============================================= */}
                <g transform={`translate(750, ${centerY})`}>
                    <path d="M-40 20 V 40 C -40 55, 40 55, 40 40 V 20" fill="url(#dbGradient)" />
                    <path d="M-40 -10 V 15 C -40 30, 40 30, 40 15 V -10" fill="url(#dbGradient)" />
                    <ellipse cx="0" cy="-10" rx="40" ry="15" fill="#60a5fa" />
                    <ellipse cx="0" cy="-10" rx="40" ry="15" fill="url(#dbGradient)" opacity="0.8" />
                    <path d="M-25 -5 Q 0 5 25 -5" stroke="white" strokeOpacity="0.3" strokeWidth="2" fill="none" />
                </g>


                {/* =============================================
            CONNECTIONS: DB -> AGENTS
           ============================================= */}
                <g fill="none" stroke="#cbd5e1" strokeWidth="2">
                    <path id="p1" d={`M 790 ${centerY} C 850 ${centerY}, 850 ${centerY - outputSpacing * 1.5}, 900 ${centerY - outputSpacing * 1.5}`} />
                    <path id="p2" d={`M 790 ${centerY} C 850 ${centerY}, 850 ${centerY - outputSpacing * 0.5}, 900 ${centerY - outputSpacing * 0.5}`} />
                    <path id="p3" d={`M 790 ${centerY} C 850 ${centerY}, 850 ${centerY + outputSpacing * 0.5}, 900 ${centerY + outputSpacing * 0.5}`} />
                    <path id="p4" d={`M 790 ${centerY} C 850 ${centerY}, 850 ${centerY + outputSpacing * 1.5}, 900 ${centerY + outputSpacing * 1.5}`} />
                    <path id="p5" d={`M 790 ${centerY} C 850 ${centerY}, 850 ${centerY + outputSpacing * 2.5}, 900 ${centerY + outputSpacing * 2.5}`} />
                </g>

                <circle r="3" fill="#22c55e"><animateMotion dur="3s" repeatCount="indefinite"><mpath href="#p1" /></animateMotion></circle>
                <circle r="3" fill="#3b82f6"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#p2" /></animateMotion></circle>
                <circle r="3" fill="#f97316"><animateMotion dur="2.5s" repeatCount="indefinite"><mpath href="#p3" /></animateMotion></circle>
                <circle r="3" fill="#64748b"><animateMotion dur="3.5s" repeatCount="indefinite"><mpath href="#p4" /></animateMotion></circle>
                <circle r="3" fill="#94a3b8"><animateMotion dur="5s" repeatCount="indefinite"><mpath href="#p5" /></animateMotion></circle>


                {/* =============================================
            SECTION 5: AGENTS (RIGHT)
           ============================================= */}
                <g transform="translate(900, 0)">
                    {/* Agent 1: Quoting */}
                    <g transform={`translate(0, ${centerY - outputSpacing * 1.5})`}>
                        <rect x="0" y="-25" width="220" height="50" rx="25" fill="white" stroke="#22c55e" strokeWidth="2" filter="url(#softShadow)" />
                        <circle cx="25" cy="0" r="12" fill="#22c55e" />
                        <text x="25" y="5" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">$</text>
                        <text x="50" y="5" fill="#0f172a" fontSize="15" fontWeight="600">Quoting Agent</text>
                    </g>

                    {/* Agent 2: Inventory */}
                    <g transform={`translate(0, ${centerY - outputSpacing * 0.5})`}>
                        <rect x="0" y="-25" width="220" height="50" rx="25" fill="white" stroke="#3b82f6" strokeWidth="2" filter="url(#softShadow)" />
                        <rect x="15" y="-10" width="20" height="20" rx="4" fill="#3b82f6" />
                        <text x="50" y="5" fill="#0f172a" fontSize="15" fontWeight="600">Inventory Agent</text>
                    </g>

                    {/* Agent 3: Compliance */}
                    <g transform={`translate(0, ${centerY + outputSpacing * 0.5})`}>
                        <rect x="0" y="-25" width="220" height="50" rx="25" fill="white" stroke="#f97316" strokeWidth="2" filter="url(#softShadow)" />
                        <path d="M18 0 L 25 7 L 32 -7" stroke="#f97316" strokeWidth="3" fill="none" />
                        <text x="50" y="5" fill="#0f172a" fontSize="15" fontWeight="600">Compliance Agent</text>
                    </g>

                    {/* Agent 4: Scheduling */}
                    <g transform={`translate(0, ${centerY + outputSpacing * 1.5})`}>
                        <rect x="0" y="-25" width="220" height="50" rx="25" fill="white" stroke="#64748b" strokeWidth="2" filter="url(#softShadow)" />
                        <circle cx="25" cy="0" r="10" stroke="#64748b" strokeWidth="2.5" fill="none" />
                        <text x="50" y="5" fill="#0f172a" fontSize="15" fontWeight="600">Job Scheduling</text>
                    </g>

                    {/* Agent 5: Many More */}
                    <g transform={`translate(0, ${centerY + outputSpacing * 2.5})`}>
                        <rect x="0" y="-25" width="220" height="50" rx="25" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" strokeDasharray="8 6" />
                        <path d="M15 -5h20v14h-20z" stroke="#94a3b8" strokeWidth="2" fill="none" rx="2" />
                        <line x1="25" y1="-9" x2="25" y2="-5" stroke="#94a3b8" strokeWidth="2" />
                        <circle cx="25" cy="-10" r="2" fill="#94a3b8" />
                        <text x="50" y="5" fill="#64748b" fontSize="14" fontWeight="600">... And Many More</text>
                    </g>

                </g>

            </svg>
        </div>
    );
};

export default ArchitectureDiagram;