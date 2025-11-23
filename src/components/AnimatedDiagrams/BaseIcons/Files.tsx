export const Files = (
    {
        centerY,
        inputSpacing
    }:
        {
            centerY: number;
            inputSpacing: number;
        }
) => {
    return (
        <g transform={`translate(0, ${centerY + inputSpacing * 1.5})`}>
            <rect x="0" y="-30" width="80" height="60" rx="12" fill="#475569" filter="url(#softShadow)" />
            <g transform="translate(28, -12)" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />
            </g>
        </g>
    )
}