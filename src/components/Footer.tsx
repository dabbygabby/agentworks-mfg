import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#022c22] border-t border-[#bef264]/10 mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-6 w-6 rounded-md flex items-center justify-center">
                                <Image src="/logo.png" alt="Logo" width={32} height={32} />
                            </div>
                            <span className="font-bold text-lg text-white">
                                Agentworks
                            </span>
                        </div>
                        <p className="text-sm text-white/40">
                            &copy; {new Date().getFullYear()} Agentworks
                        </p>
                        <p className="text-[10px] uppercase tracking-widest text-white/70 mt-2">
                            RSV INTELLIWAVE PVT LTD
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/how-it-works" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/connectors" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                    Connectors
                                </Link>
                            </li>
                            <li>
                                <Link href="/roi-calculator" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                    ROI Calculator
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Industries Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Industries</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/industries" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                    All Industries
                                </Link>
                            </li>
                            <li>
                                <Link href="/industries/electronics-ems" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                    Electronics & EMS
                                </Link>
                            </li>
                            <li>
                                <Link href="/industries/heavy-machinery" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                    Heavy Machinery
                                </Link>
                            </li>
                            <li>
                                <Link href="/industries/packaging-printing" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                    Packaging & Printing
                                </Link>
                            </li>
                            <li>
                                <Link href="/industries/pharma-chemicals" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                    Pharma & Chemicals
                                </Link>
                            </li>
                            <li>
                                <Link href="/industries/sheet-metal" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                    Sheet Metal
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company/Legal Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/partner-program" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                    Partner Program
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="text-sm text-white/60 hover:text-[#bef264] transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
