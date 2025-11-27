import Link from 'next/link';
import { useRouter } from 'next/router'; // Added useRouter
import { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';
import Image from 'next/image';
import { Phone, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries } from './industries/consts';
import { meetingLink } from '../globals';

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isProductMobileOpen, setIsProductMobileOpen] = useState(false);
  const [isProductDesktopOpen, setIsProductDesktopOpen] = useState(false);
  const productTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  // 1. DEFINE THE ROUTES WHERE THE TRANSPARENT/WHITE NAV SHOULD APPEAR
  const SPECIAL_NAV_ROUTES = ['/', '/how-it-works', '/industries'];

  // 2. CHECK IF CURRENT PAGE IS ONE OF THOSE ROUTES
  const isSpecialRoute = SPECIAL_NAV_ROUTES.includes(router.pathname);

  // 3. DETERMINE IF WE SHOW THE SPECIAL STYLE (White text, Lime button)
  // It applies only if we are on a special route AND the user hasn't scrolled yet.
  const isTransparentState = isSpecialRoute && !isScrolled;

  // Helper classes for text colors to keep JSX clean
  const baseTextColor = 'text-[#FEFCE8] hover:text-white'
  const navLinkColor = 'text-[#FEFCE8] hover:text-white'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProductEnter = () => {
    if (productTimeoutRef.current) {
      clearTimeout(productTimeoutRef.current);
    }
    setIsProductDesktopOpen(true);
  };

  const handleProductLeave = () => {
    productTimeoutRef.current = setTimeout(() => {
      setIsProductDesktopOpen(false);
    }, 300);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'py-4 px-4 md:px-8'
        : 'py-6 px-4 md:px-8 bg-transparent'
        }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 border ${isScrolled
          ? 'bg-[#022c22] backdrop-blur-md rounded-full shadow-lg border-[#022c22]/5 px-6 py-3'
          : 'bg-transparent border-transparent px-0'
          }`}
      >
        <div className="flex justify-between items-center h-full">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center">
                {/* Note: You might want a white version of your logo for the dark background, 
                    currently keeping the same image source */}
                <Image src="/logo.png" alt="Logo" width={32} height={32} />
              </div>
              <span className={`font-bold text-xl tracking-tight transition-colors ${baseTextColor}`}>
                Agentworks
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* How it Works */}
            <Link href="/how-it-works" className={`${navLinkColor} px-1 pt-1 text-sm font-medium transition-colors`}>
              How It Works
            </Link>

            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleProductEnter}
              onMouseLeave={handleProductLeave}
            >
              <button
                className={`${navLinkColor} px-1 pt-1 text-sm font-medium transition-colors inline-flex items-center gap-1`}
              >
                Product
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductDesktopOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isProductDesktopOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden py-2"
                  >
                    {/* Dropdown items always have dark text because background is white */}
                    <Link href="/agents" className="block px-4 py-2 text-sm text-[#022c22]/80 hover:text-[#022c22] hover:bg-gray-50 transition-colors">
                      Agents
                    </Link>
                    <Link href="/connectors" className="block px-4 py-2 text-sm text-[#022c22]/80 hover:text-[#022c22] hover:bg-gray-50 transition-colors">
                      Connectors
                    </Link>
                    <Link href="/technology" className="block px-4 py-2 text-sm text-[#022c22]/80 hover:text-[#022c22] hover:bg-gray-50 transition-colors">
                      Technology
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/industries" className={`${navLinkColor} px-1 pt-1 text-sm font-medium transition-colors`}>
              Industries
            </Link>
            <Link href="/about" className={`${navLinkColor} px-1 pt-1 text-sm font-medium transition-colors`}>
              About Us
            </Link>
            <Link href="/roi-calculator" className={`${navLinkColor} px-1 pt-1 text-sm font-medium transition-colors`}>
              ROI Calculator
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button
              href={meetingLink}
              variant="primary"
              // Logic: If transparent state, force background #bef264 and dark text. 
              // Otherwise, let Button component handle defaults.
              className={`!px-5 !py-2 !text-sm transition-colors !bg-[#bef264] !text-[#022c22] hover:!bg-[#bef264]/90 border-none`}
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${isTransparentState || isScrolled
                ? 'text-white hover:bg-white/10'
                : 'text-[#022c22] hover:bg-[#022c22]/5'
                }`}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Stays White Background with Dark Text */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white md:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="h-8 w-8 rounded-lg flex items-center justify-center">
                  <Image src="/logo.png" alt="Logo" width={32} height={32} />
                </div>
                <span className="font-bold text-xl tracking-tight text-[#022c22]">
                  Agentworks
                </span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-[#022c22]" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <button
                  onClick={() => setIsProductMobileOpen(!isProductMobileOpen)}
                  className="flex items-center justify-between w-full text-2xl font-semibold text-[#022c22]"
                >
                  Product
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${isProductMobileOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {isProductMobileOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pl-4 space-y-4">
                        <Link
                          href="/technology"
                          className="block text-lg text-[#022c22]/70 hover:text-[#022c22]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Technology
                        </Link>
                        <Link
                          href="/agents"
                          className="block text-lg text-[#022c22]/70 hover:text-[#022c22]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Agents
                        </Link>
                        <Link
                          href="/connectors"
                          className="block text-lg text-[#022c22]/70 hover:text-[#022c22]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Connectors
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  className="flex items-center justify-between w-full text-2xl font-semibold text-[#022c22]"
                >
                  Industries
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${isIndustriesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {isIndustriesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pl-4 space-y-4">
                        {industries.map((industry, index) => (
                          <Link
                            key={index}
                            href={industry.link}
                            className="block text-lg text-[#022c22]/70 hover:text-[#022c22]"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {industry.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Link
                  href="/how-it-works"
                  className="block text-2xl font-semibold text-[#022c22]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/about"
                  className="block text-2xl font-semibold text-[#022c22]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/roi-calculator"
                  className="block text-2xl font-semibold text-[#022c22]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ROI Calculator
                </Link>
              </motion.div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <Button
                href={meetingLink}
                variant="primary"
                className="!w-full !justify-center !py-3 !text-lg !rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;