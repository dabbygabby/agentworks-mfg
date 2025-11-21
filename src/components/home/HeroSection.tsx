import Button from '../ui/Button';

const HeroSection = () => {
    return (
        <section className="relative bg-[#f7fee7] pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden rounded-b-[3rem]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#022c22] mb-8 leading-tight">
                        The Operating System for <br className="hidden md:block" />
                        <span className="text-[#022c22]">Next Gen Manufacturing</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-[#022c22]/70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                        Your autonomous AI workforce that lives in your existing tools.
                        <br />
                        No new apps. No training. Just infinite operational capacity.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/deploy-agent" variant="primary">
                            Hire Your First AI Employee
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </Button>
                        <Button href="/roi-calculator" variant="outline">
                            Calculate ROI
                        </Button>
                    </div>
                </div>

                {/* Visual Placeholder */}
                <div className="mt-20 relative mx-auto max-w-6xl">
                    <div className="aspect-video bg-[#022c22] rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                        <p className="text-[#bef264] font-medium text-xl relative z-10">Hero Visual Placeholder (Dashboard/WhatsApp Interface)</p>

                        {/* Decorative Circles */}
                        <div className="absolute top-10 right-10 w-32 h-32 bg-[#bef264]/20 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#bef264]/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
