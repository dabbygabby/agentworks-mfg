import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <div className="bg-[#FEFCE8] min-h-screen text-[#022C23] font-sans selection:bg-[#BEF264] selection:text-[#022C23]">
            <Head>
                <title>Terms of Service | Agentworks</title>
                <meta name="description" content="Terms of Service for Agentworks platform and services." />
            </Head>

            <main className="pt-24 pb-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#022C23]">Terms of Service</h1>
                        <p className="text-slate-500 mb-12">Last Updated: April 2, 2026</p>

                        <div className="prose prose-slate lg:prose-lg max-w-none space-y-8">
                            <section>
                                <p className="text-lg leading-relaxed text-slate-700">
                                    Welcome to Agentworks! These Terms of Service ("Terms") govern your access to and use of the Agentworks platform, website, and associated services (collectively, the "Service").
                                </p>
                                <p className="mt-4 text-lg leading-relaxed text-slate-700">
                                    The Service is owned and operated by RSV INTELLIWAVE PRIVATE LIMITED ("Company", "we", "us", or "our"). By accessing or using the Service, you ("User", "Client", or "you") agree to be bound by these Terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">1. Description of Service</h2>
                                <p className="text-slate-700 leading-relaxed">
                                    Agentworks is a cloud-based, AI-driven operating system designed to automate business workflows, data entry, auditing, and inventory tracking for enterprises, including Manufacturing, Consumer Packaged Goods (CPG), and other B2B sectors. The Service utilizes third-party messaging platforms (primarily WhatsApp) to deploy "digital employees" (such as Estimator, Auditor, Munim, and Watchdog agents) that integrate with your existing ERP or accounting systems (e.g., Tally).
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">2. Account Registration and Usage</h2>
                                <ul className="list-disc pl-6 space-y-4 text-slate-700">
                                    <li><strong>Eligibility:</strong> You must be a legally recognized business entity to use our Service.</li>
                                    <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and any third-party app integrations (like WhatsApp business accounts) linked to Agentworks.</li>
                                    <li><strong>Authorized Users:</strong> You are responsible for the actions of any employees, contractors, or agents who access the Service on your behalf.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">3. Pricing, Billing, and Payments (Razorpay Compliance)</h2>
                                <div className="space-y-4 text-slate-700">
                                    <p><strong>Pricing Model:</strong> Agentworks operates on a pay-for-performance/ROI-based pricing model, or as otherwise outlined in your specific Service Agreement. There are no mandatory upfront setup fees or monthly subscription fees unless explicitly agreed upon.</p>
                                    <p><strong>Payment Processing:</strong> All payments, including international transactions, are securely processed through our authorized payment gateway, Razorpay. By processing payments through Razorpay, you also agree to their respective terms and conditions.</p>
                                    <p><strong>Taxes:</strong> All stated prices are exclusive of applicable taxes (such as GST), which will be calculated and applied at the time of invoicing.</p>
                                </div>
                            </section>

                            <section className="bg-white p-8 rounded-2xl border border-slate-200">
                                <h2 className="text-2xl font-bold mb-4">4. Cancellation & Refund Policy</h2>
                                <div className="space-y-4 text-slate-700">
                                    <p>Because we operate on a pay-for-performance and zero-upfront-cost model, our refund and cancellation terms are structured as follows:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Cancellation:</strong> You may cancel your use of the Agentworks Service at any time by providing written notice to our support team. Upon cancellation, your integrations and AI agents will be deactivated.</li>
                                        <li><strong>Refunds:</strong> Due to the pay-for-performance nature of the Service (where you are billed based on successful usage or generated ROI), payments made for services already rendered and utilized are non-refundable.</li>
                                        <li><strong>Disputed Charges:</strong> If you believe there has been an error in billing, you must contact us within 15 days of the invoice date. If an error is verified by our team, a credit or refund will be issued to your original method of payment within 7-10 business days.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">5. Data Privacy and Security</h2>
                                <p className="text-slate-700 leading-relaxed">
                                    We employ bank-grade security and end-to-end encryption principles to protect your data. We do not claim ownership of the unstructured data (images, PDFs, voice notes) you input. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your data.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                                <p className="text-slate-700 leading-relaxed">
                                    All intellectual property rights in the Agentworks platform, including its AI models, software, workflows, and branding, are the exclusive property of RSV INTELLIWAVE PRIVATE LIMITED. You are granted a limited, non-exclusive, non-transferable license to use the Service for your internal business operations.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                                <p className="text-slate-700 leading-relaxed italic border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r-lg">
                                    To the maximum extent permitted by law, RSV INTELLIWAVE PRIVATE LIMITED shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business disruptions, arising out of your use of the Service or reliance on AI-generated outputs. Our total liability shall not exceed the amount paid by you for the Service in the three (3) months preceding the claim.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">8. Governing Law and Jurisdiction</h2>
                                <p className="text-slate-700 leading-relaxed">
                                    These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or the use of the Service shall be subject to the exclusive jurisdiction of the courts located in [Insert Your City/State, e.g., Mumbai, Maharashtra], India.
                                </p>
                            </section>

                            <section className="bg-[#022C23] text-white p-8 md:p-12 rounded-3xl mt-12">
                                <h2 className="text-3xl font-bold mb-6 text-[#BEF264]">9. Contact Us</h2>
                                <p className="mb-8 text-slate-300">For any questions, concerns, or billing inquiries, please contact us at:</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-[#BEF264] font-bold uppercase text-sm tracking-widest mb-2">Legal Entity</h4>
                                        <p className="font-semibold text-lg">RSV INTELLIWAVE PRIVATE LIMITED</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#BEF264] font-bold uppercase text-sm tracking-widest mb-2">Email</h4>
                                        <p className="font-semibold text-lg">rabnoor.singh@getagentworks.com</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#BEF264] font-bold uppercase text-sm tracking-widest mb-2">Phone</h4>
                                        <p className="font-semibold text-lg">+91-7011151436</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#BEF264] font-bold uppercase text-sm tracking-widest mb-2">Registered Address</h4>
                                        <p className="text-slate-300 leading-relaxed">BPTP Park 81, Sector 81<br />Faridabad - 121006</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default TermsOfService;
