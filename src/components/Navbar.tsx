import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from './ui/Button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
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
        className={`max-w-7xl mx-auto transition-all duration-300 ${isScrolled
            ? 'bg-[#f7fee7]/80 backdrop-blur-md rounded-full shadow-lg border border-[#022c22]/5 px-6 py-3'
            : 'bg-transparent px-0'
          }`}
      >
        <div className="flex justify-between items-center h-full">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="h-8 w-8 bg-[#022c22] rounded-lg flex items-center justify-center">
                <span className="text-[#bef264] font-bold text-lg">A</span>
              </div>
              <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-[#022c22]' : 'text-[#022c22]'}`}>
                Agentworks
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className="text-[#022c22]/80 hover:text-[#022c22] inline-flex items-center px-1 pt-1 text-sm font-medium focus:outline-none transition-colors"
              >
                Solutions
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isSolutionsOpen && (
                <div
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                  className="absolute left-0 mt-2 w-48 rounded-2xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 py-2 overflow-hidden"
                >
                  <Link href="/solutions/quoting" className="block px-4 py-2 text-sm text-[#022c22]/70 hover:bg-[#f7fee7] hover:text-[#022c22]">
                    Quoting
                  </Link>
                  <Link href="/solutions/finance" className="block px-4 py-2 text-sm text-[#022c22]/70 hover:bg-[#f7fee7] hover:text-[#022c22]">
                    Finance
                  </Link>
                  <Link href="/solutions/production" className="block px-4 py-2 text-sm text-[#022c22]/70 hover:bg-[#f7fee7] hover:text-[#022c22]">
                    Production
                  </Link>
                </div>
              )}
            </div>

            <Link href="/industries" className="text-[#022c22]/80 hover:text-[#022c22] px-1 pt-1 text-sm font-medium transition-colors">
              Industries
            </Link>
            <Link href="/how-it-works" className="text-[#022c22]/80 hover:text-[#022c22] px-1 pt-1 text-sm font-medium transition-colors">
              How It Works
            </Link>
            <Link href="/success-stories" className="text-[#022c22]/80 hover:text-[#022c22] px-1 pt-1 text-sm font-medium transition-colors">
              Success Stories
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/login" className="text-[#022c22] hover:text-[#022c22]/70 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Login
            </Link>
            <Button
              href="/get-started"
              variant="primary"
              className="!px-5 !py-2 !text-sm"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#022c22] hover:bg-[#022c22]/5 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="pt-2 pb-3 space-y-1">
            <div className="px-4 py-2 text-xs font-bold text-[#022c22]/40 uppercase tracking-wider">Solutions</div>
            <Link href="/solutions/quoting" className="block pl-6 pr-4 py-2 text-base font-medium text-[#022c22]/70 hover:text-[#022c22] hover:bg-[#f7fee7]">
              Quoting
            </Link>
            <Link href="/solutions/finance" className="block pl-6 pr-4 py-2 text-base font-medium text-[#022c22]/70 hover:text-[#022c22] hover:bg-[#f7fee7]">
              Finance
            </Link>
            <Link href="/solutions/production" className="block pl-6 pr-4 py-2 text-base font-medium text-[#022c22]/70 hover:text-[#022c22] hover:bg-[#f7fee7]">
              Production
            </Link>
            <div className="border-t border-gray-100 my-2"></div>
            <Link href="/industries" className="block px-4 py-2 text-base font-medium text-[#022c22]/70 hover:text-[#022c22] hover:bg-[#f7fee7]">
              Industries
            </Link>
            <Link href="/how-it-works" className="block px-4 py-2 text-base font-medium text-[#022c22]/70 hover:text-[#022c22] hover:bg-[#f7fee7]">
              How It Works
            </Link>
            <Link href="/success-stories" className="block px-4 py-2 text-base font-medium text-[#022c22]/70 hover:text-[#022c22] hover:bg-[#f7fee7]">
              Success Stories
            </Link>
          </div>
          <div className="pt-4 pb-4 border-t border-gray-100 bg-gray-50">
            <div className="flex items-center px-4 space-x-4">
              <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-[#022c22] hover:bg-[#022c22]/5">
                Login
              </Link>
              <Button
                href="/get-started"
                variant="primary"
                className="!w-full !justify-center !px-4 !py-2 !text-base"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
