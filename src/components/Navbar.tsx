import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              {/* Logo Placeholder */}
              <div className="h-8 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm font-medium">
                Logo
              </div>
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
                className="text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium focus:outline-none"
              >
                Solutions
                <svg
                  className={`ml-2 h-4 w-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`}
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
                  className="absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1"
                >
                  <Link href="/solutions/quoting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Quoting
                  </Link>
                  <Link href="/solutions/finance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Finance
                  </Link>
                  <Link href="/solutions/production" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Production
                  </Link>
                </div>
              )}
            </div>

            <Link href="/industries" className="text-gray-600 hover:text-gray-900 px-1 pt-1 text-sm font-medium">
              Industries
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 px-1 pt-1 text-sm font-medium">
              How It Works
            </Link>
            <Link href="/success-stories" className="text-gray-600 hover:text-gray-900 px-1 pt-1 text-sm font-medium">
              Success Stories
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link
              href="/get-started"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <div className="px-3 py-2 text-base font-medium text-gray-700">Solutions</div>
            <Link href="/solutions/quoting" className="block pl-6 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
              Quoting
            </Link>
            <Link href="/solutions/finance" className="block pl-6 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
              Finance
            </Link>
            <Link href="/solutions/production" className="block pl-6 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
              Production
            </Link>
            <Link href="/industries" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Industries
            </Link>
            <Link href="/how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              How It Works
            </Link>
            <Link href="/success-stories" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Success Stories
            </Link>
          </div>
          <div className="pt-4 pb-4 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-4">
              <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Login
              </Link>
              <Link
                href="/get-started"
                className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
