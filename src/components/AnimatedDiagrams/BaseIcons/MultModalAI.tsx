import { File, Image, MapPin, MessageCircle, Mic } from 'lucide-react';

export const MultiModalAI = (
    {
        centerY,
    }:
        {
            centerY: number;
        }
) => {
    return (
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
    )
}

