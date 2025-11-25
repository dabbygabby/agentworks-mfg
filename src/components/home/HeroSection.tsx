import { useState } from 'react';
import Button from '../ui/Button';
import { ArrowRightIcon, Calculator, Play } from 'lucide-react';
import HeroVisual from './HeroVisual';
import VideoModal from './VideoModal';
import Link from 'next/link';

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#022c22]">
            <div className="container mx-20 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <div className="text-left">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                            <span > Total Visibility </span> <br /><span className="text-[#BEF264]">Zero Data Entry</span>
                        </h1>
                        <p className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed font-medium mt-0 md:mt-28">
                            We help you turn raw communication into instant action. We capture the noise of the factory floor, structure it into clean data, and execute the work automatically—so you stop managing processes and start managing growth.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-0 md:mt-52">
                            <Link
                                href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery" target="_blank"
                                className='flex flex-row justify-center items-center gap-2 bg-[#BEF264] font-semibold text-[#022c22] px-8 py-5 rounded-full hover:bg-[#65a30d] transition-colors'
                            >
                                Talk to an Expert
                                <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </Link>
                            <Button onClick={() => setIsModalOpen(true)} variant="outline" className='cursor-pointer'>
                                <Play className="w-4 h-4 mr-2" />
                                Watch the Video
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Hero Visual */}
                    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none p-4 pt-0 rounded-3xl">
                        <HeroVisual forceCompact={true} />
                        {/* Decorative Elements behind visual */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-b from-[#bef264]/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
                    </div>
                </div>
            </div>
            <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default HeroSection;
