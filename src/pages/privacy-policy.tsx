import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#FEFCE8] min-h-screen text-[#022C23] font-sans selection:bg-[#BEF264] selection:text-[#022C23]">
            <Head>
                <title>Privacy Policy | Agentworks</title>
                <meta name="description" content="Privacy Policy for Agentworks. How we collect, use, and protect your data." />
            </Head>

            <main className="pt-24 pb-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#022C23]">Privacy Policy</h1>
                        <p className="text-slate-500 mb-12">Last Updated: April 2, 2026</p>

                        <div className="prose prose-slate lg:prose-lg max-w-none space-y-8">
                            <section>
                                <p className="text-lg leading-relaxed text-slate-700">
                                    RSV INTELLIWAVE PRIVATE LIMITED (operating as "Agentworks," "we," "us," or "our") respects your privacy and is committed to protecting your personal and corporate data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (https://www.getagentworks.com/) and use our AI-driven software platform.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                                <p className="text-slate-700 leading-relaxed mb-4">To provide our Services to manufacturing, CPG, and B2B enterprises, we collect the following types of information:</p>
                                <ul className="list-disc pl-6 space-y-4 text-slate-700">
                                    <li><strong>Account Information:</strong> Name, email address, phone number, company name, and job title when you book a demo, request an ROI calculation, or register for an account.</li>
                                    <li><strong>Operational Data (Client Data):</strong> Information transmitted through WhatsApp or other integrated interfaces by your staff. This includes text messages, voice notes, images (e.g., invoices, challans, batch labels), PDFs, and CAD drawings.</li>
                                    <li><strong>ERP/System Data:</strong> Data synced to and from your existing enterprise systems (e.g., Tally, SAP) to facilitate automated entries and reconciliations.</li>
                                    <li><strong>Financial Information:</strong> Billing details necessary to process payments securely via our payment gateway partner, Razorpay. We do not store your full credit card numbers on our servers.</li>
                                    <li><strong>Usage Data:</strong> Technical data such as IP addresses, browser types, and usage patterns on our website and platform to improve user experience.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                                <p className="text-slate-700 leading-relaxed mb-4">We use the collected information for the following purposes:</p>
                                <ul className="list-disc pl-6 space-y-4 text-slate-700">
                                    <li><strong>Service Delivery:</strong> To parse unstructured inputs (voice, images, text) using our AI agents and convert them into structured entries for your ERP systems.</li>
                                    <li><strong>Communication:</strong> To respond to inquiries, send system alerts (e.g., Watchdog agent notifications), and provide customer support.</li>
                                    <li><strong>Billing and Payments:</strong> To process international and domestic transactions via Razorpay.</li>
                                    <li><strong>Improvement:</strong> To monitor platform performance and refine our AI accuracy. (Note: Your private, proprietary corporate data is strictly segregated and is never used to train public-facing AI models without your explicit consent).</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
                                <p className="text-slate-700 leading-relaxed mb-4">We do not sell your personal or corporate data. We may share your information only in the following circumstances:</p>
                                <ul className="list-disc pl-6 space-y-4 text-slate-700">
                                    <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our platform, such as cloud hosting providers (e.g., AWS/Google Cloud), payment processors (Razorpay), and messaging API providers (Meta/WhatsApp).</li>
                                    <li><strong>Legal Compliance:</strong> If required to do so by law or in response to valid requests by public authorities.</li>
                                    <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition.</li>
                                </ul>
                            </section>

                            <section className="bg-white p-8 rounded-2xl border border-slate-200">
                                <h2 className="text-2xl font-bold mb-4 text-[#022C23]">4. Data Security</h2>
                                <p className="text-slate-700 leading-relaxed">
                                    We implement bank-grade security measures to protect your data. All data transmitted between your team (via WhatsApp), Agentworks, and your ERP is encrypted end-to-end. We maintain strict access controls to ensure your data remains under your exclusive control.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
                                <p className="text-slate-700 leading-relaxed">
                                    We retain your personal and operational data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by legal or regulatory obligations. Upon account termination, you may request the deletion of your operational data, subject to any legal retention requirements.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">6. Third-Party Links</h2>
                                <p className="text-slate-700 leading-relaxed">
                                    Our website may contain links to third-party websites or services (e.g., "Talk to an Expert" calendar links). We are not responsible for the privacy practices of these external sites.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
                                <p className="text-slate-700 leading-relaxed">
                                    We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                                </p>
                            </section>

                            <section className="bg-[#022C23] text-white p-8 md:p-12 rounded-3xl mt-12">
                                <h2 className="text-3xl font-bold mb-6 text-[#BEF264]">8. Contact Us</h2>
                                <p className="mb-8 text-slate-300">If you have any questions about this Privacy Policy or our data practices, please contact our Grievance Officer/Support Team at:</p>
                                
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

export default PrivacyPolicy;
