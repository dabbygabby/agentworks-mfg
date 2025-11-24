import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from './ui/Button';
import Image from 'next/image';
import { ArrowRightIcon, Phone, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries } from './industries/consts';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'py-4 px-4 md:px-8'
        : 'py-6 px-4 md:px-8 bg-transparent'
        }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 border ${isScrolled
          ? 'bg-[#f7fee7]/80 backdrop-blur-md rounded-full shadow-lg border-[#022c22]/5 px-6 py-3'
          : 'bg-transparent border-transparent px-0'
          }`}
      >
        <div className="flex justify-between items-center h-full">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center">
                <Image src="/logo.png" alt="Logo" width={32} height={32} />
              </div>
              <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-[#022c22]' : 'text-[#022c22]'}`}>
                Agentworks
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Solutions Dropdown */}
            <Link href="/how-it-works" className="text-[#022c22]/80 hover:text-[#022c22] px-1 pt-1 text-sm font-medium transition-colors">
              How It Works
            </Link>
            <Link href="/industries" className="text-[#022c22]/80 hover:text-[#022c22] px-1 pt-1 text-sm font-medium transition-colors">
              Industries
            </Link>
            <Link href="/agents" className="text-[#022c22]/80 hover:text-[#022c22] px-1 pt-1 text-sm font-medium transition-colors">
              Agents
            </Link>

            <Link href="/connectors" className="text-[#022c22]/80 hover:text-[#022c22] px-1 pt-1 text-sm font-medium transition-colors">
              Connectors
            </Link>

            <Link href="/success-stories" className="text-[#022c22]/80 hover:text-[#022c22] px-1 pt-1 text-sm font-medium transition-colors">
              Success Stories
            </Link>
            <Link href="/roi-calculator" className="text-[#022c22]/80 hover:text-[#022c22] px-1 pt-1 text-sm font-medium transition-colors">
              ROI Calculator
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button
              href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery"
              variant="primary"
              className="!px-5 !py-2 !text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#022c22] hover:bg-[#022c22]/5 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
                <Link
                  href="/agents"
                  className="block text-2xl font-semibold text-[#022c22]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Agents
                </Link>
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
                transition={{ delay: 0.3 }}
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
                  href="/success-stories"
                  className="block text-2xl font-semibold text-[#022c22]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Success Stories
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
                href="https://cal.com/saurabh-dabral-woinoa/agentworks-deployment-strategy-30-min-discovery"
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
