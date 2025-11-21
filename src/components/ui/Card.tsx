import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'light' | 'dark' | 'glass';
}

const Card = ({ children, className = '', variant = 'light' }: CardProps) => {
    const variants = {
        light: "bg-white border border-zinc-100 shadow-sm",
        dark: "bg-[#022c22] border border-[#022c22] text-white",
        glass: "bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg"
    };

    return (
        <div className={`rounded-3xl p-8 ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
