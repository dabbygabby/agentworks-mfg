import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#022c22] border-t border-[#bef264]/10 mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex flex-col justify-center md:justify-start md:order-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-6 w-6 bg-[#bef264] rounded-md flex items-center justify-center">
                                <span className="text-[#022c22] font-bold text-xs">A</span>
                            </div>
                            <span className="font-bold text-lg text-white">
                                Agentworks
                            </span>
                        </div>
                        <p className="text-sm text-white/40">
                            &copy; {new Date().getFullYear()} Agentworks. Made in India for the World.
                        </p>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-2">
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:ml-auto">
                            <Link href="/partner-program" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                Partner Program
                            </Link>
                            <Link href="/privacy-policy" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-service" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
