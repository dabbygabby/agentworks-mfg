import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const Section = ({ children, className = '', id }: SectionProps) => {
    return (
        <section id={id} className={`py-24 md:py-32 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

export default Section;
