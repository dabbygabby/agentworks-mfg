import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';
import Image from 'next/image';

const InteractiveDemo = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showDemo, setShowDemo] = useState(false);
    const [sliderValue, setSliderValue] = useState(50);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Email collected:', email);
        // TODO: Send email to backend/storage

        setIsSubmitting(false);
        setShowDemo(true);
    };

    return (
        <section className="py-20 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#022c22] mb-6">
                        See the Brain in Action
                    </h2>
                    <p className="text-xl text-[#022c22]/70 max-w-2xl mx-auto">
                        Experience how our AI transforms messy, unstructured data into clean, structured records.
                    </p>
                </div>

                {!showDemo ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold text-[#022c22] mb-4 text-center">Try the Interactive Demo</h3>
                        <p className="text-[#022c22]/70 mb-6 text-center">
                            Enter your email to unlock the interactive comparison tool and see the AI processing in real-time.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#022c22] mb-1">
                                    Work Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#65a30d] focus:border-transparent outline-none transition-all"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#022c22] text-white py-3 rounded-lg font-semibold hover:bg-[#022c22]/90 transition-colors flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Unlock Demo
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
                    >
                        <div className="relative h-[600px] w-full select-none">
                            {/* After Image (Clean Data) */}
                            <div className="absolute inset-0 bg-white flex items-center justify-center p-8">
                                <div className="w-full max-w-2xl bg-gray-50 rounded-xl p-8 border border-gray-200 font-mono text-sm shadow-inner">
                                    <div className="text-green-600 mb-4">{"// Extracted Structured Data"}</div>
                                    <div className="space-y-2 text-[#022c22]">
                                        <div><span className="text-purple-600">"intent"</span>: <span className="text-blue-600">"invoice_processing"</span>,</div>
                                        <div><span className="text-purple-600">"vendor"</span>: <span className="text-blue-600">"Apex Steel Works"</span>,</div>
                                        <div><span className="text-purple-600">"date"</span>: <span className="text-blue-600">"2024-03-15"</span>,</div>
                                        <div><span className="text-purple-600">"items"</span>: [</div>
                                        <div className="pl-4">{`{`}</div>
                                        <div className="pl-8"><span className="text-purple-600">"sku"</span>: <span className="text-blue-600">"SS-304-SHEET"</span>,</div>
                                        <div className="pl-8"><span className="text-purple-600">"qty"</span>: <span className="text-orange-600">50</span>,</div>
                                        <div className="pl-8"><span className="text-purple-600">"unit_price"</span>: <span className="text-orange-600">1200.00</span>,</div>
                                        <div className="pl-8"><span className="text-purple-600">"total"</span>: <span className="text-orange-600">60000.00</span></div>
                                        <div className="pl-4">{`}`},</div>
                                        <div>],</div>
                                        <div><span className="text-purple-600">"tax_amount"</span>: <span className="text-orange-600">10800.00</span>,</div>
                                        <div><span className="text-purple-600">"grand_total"</span>: <span className="text-orange-600">70800.00</span></div>
                                    </div>
                                </div>
                            </div>

                            {/* Before Image (Messy Input) */}
                            <div
                                className="absolute inset-0 bg-gray-100 overflow-hidden"
                                style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                            >
                                <div className="h-full w-full flex items-center justify-center p-8 bg-[#f8fafc]">
                                    <div className="relative w-full max-w-2xl aspect-[3/4] bg-white shadow-lg rotate-1 p-8 transform transition-transform">
                                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1628155179117-68782459539d?auto=format&fit=crop&q=80')] bg-cover opacity-10 mix-blend-multiply"></div>
                                        <div className="relative z-10 font-handwriting text-gray-800 space-y-6">
                                            <div className="text-2xl font-bold border-b-2 border-gray-800 pb-4 flex justify-between">
                                                <span>INVOICE #001</span>
                                                <span>15/3/24</span>
                                            </div>
                                            <div className="text-xl">To: Manufacturing Corp</div>
                                            <div className="mt-8 space-y-4">
                                                <div className="flex justify-between border-b border-gray-300 pb-2">
                                                    <span>SS 304 Sheets (50 pcs)</span>
                                                    <span>60,000/-</span>
                                                </div>
                                                <div className="flex justify-between border-b border-gray-300 pb-2">
                                                    <span>Tax (18%)</span>
                                                    <span>10,800/-</span>
                                                </div>
                                                <div className="flex justify-between font-bold text-xl pt-4">
                                                    <span>Total</span>
                                                    <span>70,800/-</span>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-8 right-8 rotate-[-15deg] border-4 border-red-600 text-red-600 font-bold p-2 text-xl rounded opacity-60">
                                                PAID
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slider Handle */}
                            <div
                                className="absolute top-0 bottom-0 w-1 bg-[#65a30d] cursor-ew-resize z-20"
                                style={{ left: `${sliderValue}%` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#65a30d] rounded-full flex items-center justify-center shadow-lg text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                </div>
                            </div>

                            {/* Interaction Layer */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderValue}
                                onChange={(e) => setSliderValue(Number(e.target.value))}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                            />

                            {/* Labels */}
                            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm z-20 font-semibold text-[#022c22]">
                                Input: Messy Invoice
                            </div>
                            <div className="absolute top-8 right-8 bg-[#022c22]/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm z-20 font-semibold text-white">
                                Output: Clean JSON
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default InteractiveDemo;
