import React, { useState, useRef, useEffect } from 'react';
import Button from '../ui/Button';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
    const [language, setLanguage] = useState<'english' | 'hindi'>('english');
    const [showCTA, setShowCTA] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setLanguage('english');
            setShowCTA(false);
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(e => console.error("Autoplay failed:", e));
            }
        } else {
            if (videoRef.current) {
                videoRef.current.pause();
            }
        }
    }, [isOpen]);

    // Handle language switch
    const toggleLanguage = () => {
        const newLanguage = language === 'english' ? 'hindi' : 'english';
        setLanguage(newLanguage);
        setShowCTA(false); // Hide CTA if switching language

        // We need to wait for the video source to update before playing
        // The key prop on the video element helps with this, but let's ensure play is called
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play().catch(e => console.error("Play failed:", e));
            }
        }, 100);
    };

    const handleVideoEnded = () => {
        setShowCTA(true);
    };

    if (!isOpen) return null;

    const videoSrc = language === 'english' ? '/mfg_video_english.mov' : '/mgf_video_hindi.mov';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div
                className="relative w-full max-w-6xl bg-black rounded-2xl overflow-hidden shadow-2xl"
                style={{ height: '80vh' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Video Player */}
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                    <video
                        ref={videoRef}
                        key={videoSrc} // Force re-render on source change
                        src={videoSrc}
                        className="w-full h-full object-contain"
                        controls={!showCTA}
                        autoPlay
                        playsInline
                        onEnded={handleVideoEnded}
                    >
                        Your browser does not support the video tag.
                    </video>

                    {/* Language Toggle Button */}
                    {!showCTA && (
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                            <Button
                                onClick={toggleLanguage}
                                variant="primary"
                                className="shadow-lg"
                            >
                                Switch to {language === 'english' ? 'Hindi' : 'English'}
                            </Button>
                        </div>
                    )}

                    {/* End of Video CTA Overlay */}
                    {showCTA && (
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center px-4">
                                Ready to optimize your manufacturing?
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" variant="primary" className="text-lg px-8 py-4">
                                    Get a Free Process Audit
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </Button>
                                <Button onClick={() => {
                                    setShowCTA(false);
                                    if (videoRef.current) {
                                        videoRef.current.currentTime = 0;
                                        videoRef.current.play();
                                    }
                                }} variant="outline" className="text-white border-white hover:bg-white/10">
                                    Replay Video
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
