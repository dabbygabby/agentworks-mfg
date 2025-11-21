import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'accent' | 'outline';
    href?: string;
    className?: string;
    onClick?: () => void;
}

const Button = ({ children, variant = 'primary', href, className = '', onClick }: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all duration-300 text-lg";

    const variants = {
        primary: "bg-[#022c22] text-white hover:opacity-90 shadow-lg hover:shadow-xl",
        accent: "bg-[#bef264] text-[#022c22] hover:bg-[#d9f99d] shadow-lg hover:shadow-xl",
        outline: "border-2 border-[#022c22] text-[#022c22] hover:bg-[#022c22]/5"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClassName}>
            {children}
        </button>
    );
};

export default Button;
