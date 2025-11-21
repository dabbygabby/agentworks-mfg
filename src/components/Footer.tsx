import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:justify-start md:order-1">
                        <p className="text-base text-gray-500">
                            &copy; {new Date().getFullYear()} Made in India for the World.
                        </p>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-2">
                        <div className="flex justify-center space-x-6 md:ml-auto">
                            <Link href="/partner-program" className="text-gray-500 hover:text-gray-900">
                                Partner Program
                            </Link>
                            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-900">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-900">
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
