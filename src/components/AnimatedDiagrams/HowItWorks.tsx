import React from 'react';
import { Outlook } from './BaseIcons/Outlook';
import { Excel } from './BaseIcons/Excel';
import { Tally } from './BaseIcons/Tally';
import { Files } from './BaseIcons/Files';
import { Whatsapp } from './BaseIcons/Whataspp';
import { MultiModalAI } from './BaseIcons/MultModalAI';

const ArchitectureDiagram = () => {
    // Configuration for vertical spacing
    const centerY = 250;
    const inputSpacing = 80;
    const outputSpacing = 90;

    return (
        <div className="w-full p-8 bg-transparent rounded-xl">
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
                    <Files
                        centerY={centerY}
                        inputSpacing={inputSpacing}
                    />
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
                <Whatsapp
                    centerY={centerY}
                />


                {/* Connection: WA -> AI */}
                <path id="wa-to-ai" d={`M 380 ${centerY} L 450 ${centerY}`} stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" />
                <circle r="3" fill="#22c55e"><animateMotion dur="1.5s" repeatCount="indefinite"><mpath href="#wa-to-ai" /></animateMotion></circle>


                {/* =============================================
            SECTION 3: MULTI-MODAL AI BOX (Taller)
           ============================================= */}
                <MultiModalAI
                    centerY={centerY}
                />


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