import Section from '../ui/Section';

const ProblemSection = () => {
    return (
        <Section className="">
            <div className="max-w-4xl mx-auto text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold text-[#022c22] mb-6">
                    The Only Upgrade That Requires <span className="text-[#64A30E]">Zero Training</span>
                </h2>
                <p className="text-xl text-[#022c22]/70 max-w-3xl mx-auto">
                    Turn the tool your staff already loves into the most powerful, error-free data terminal in your factory.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-[#022c22] p-4 rounded-3xl">
                <div className="col-span-1">
                    Data
                </div>
                <div className="col-span-1 p-4 bg-[#FEFCE8] rounded-3xl min-h-[600px]">
                    Image
                </div>
            </div>
        </Section>
    );
};

export default ProblemSection;
