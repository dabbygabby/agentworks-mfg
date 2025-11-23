interface StepSectionProps {
    number: string;
    title: string;
    headline: string;
    content: React.ReactNode;
    imagePlaceholder: string;
    align: 'left' | 'right';
}

export const StepSection = ({ number, title, headline, content, imagePlaceholder, align }: StepSectionProps) => {
    return (
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
            {/* Text Content */}
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-3 text-lime-600 font-bold tracking-wider uppercase text-sm">
                    <span className="text-3xl opacity-20">{number}</span>
                    <span>{title}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    {headline}
                </h2>
                <div className="text-lg text-slate-600 leading-relaxed">
                    {content}
                </div>
            </div>

            {/* Image Placeholder */}
            <div className="flex-1 w-full">
                <div className="aspect-[4/3] w-full bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-center hover:border-lime-400 transition-colors group">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <div className="w-8 h-8 bg-slate-200 rounded-full" />
                    </div>
                    <p className="text-slate-400 font-medium">Image Placeholder</p>
                    <p className="text-sm text-slate-400 mt-2">{imagePlaceholder}</p>
                </div>
            </div>
        </div>
    )
}