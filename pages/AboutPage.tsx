import React from 'react';

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <span className="text-4xl font-extrabold text-brand-blue">{value}</span>
        <span className="mt-2 text-base font-medium text-slate-500">{label}</span>
    </div>
);

export const AboutPage: React.FC = () => {
    return (
        <div className="bg-white animate-fade-in">
             <div className="py-16 sm:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl">About SmileBright Dental</h1>
                    <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                        Combining advanced technology with a personal touch to provide the best dental care in the region.
                    </p>
                </div>
            </div>

            <div className="relative py-16 sm:py-24">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                    <div className="relative sm:py-16 lg:py-0">
                        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                            <div className="relative pt-[100%] rounded-2xl shadow-xl overflow-hidden">
                                <img
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1579684385127-6c17931c6b6d?q=80&w=800&auto=format&fit=crop"
                                    alt="Smiling patient"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                        <div className="pt-12 sm:pt-16 lg:pt-20">
                            <h2 className="text-3xl text-slate-900 font-extrabold tracking-tight sm:text-4xl">Our Mission</h2>
                            <div className="mt-6 text-slate-500 space-y-6 text-lg leading-relaxed">
                                <p>
                                    At SmileBright Dental, our mission is simple: to provide exceptional, comprehensive dental care to our patients in a friendly, comfortable, and professional environment. We are committed to educating our patients about their oral health and empowering them to make informed decisions about their care.
                                </p>
                                <p>
                                    We believe that a healthy smile is a cornerstone of overall well-being. By utilizing state-of-the-art technology and staying at the forefront of dental advancements, we strive to deliver the highest standard of care that is both effective and minimally invasive.
                                </p>
                                <p>
                                    Our goal is to build long-lasting relationships with our patients based on trust, compassion, and clinical excellence. We want you to leave our clinic not just with a healthier smile, but also with a positive experience that changes the way you think about dentistry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-slate-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl text-slate-900 font-extrabold tracking-tight sm:text-4xl">Our Values</h2>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                        <div className="text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-brand-blue text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-slate-900">Excellence</h3>
                            <p className="mt-2 text-base text-slate-500">We are committed to the highest standards of quality in all aspects of our practice, from clinical care to patient service.</p>
                        </div>
                        <div className="text-center">
                             <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-brand-blue text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-slate-900">Compassion</h3>
                            <p className="mt-2 text-base text-slate-500">We treat every patient with empathy, respect, and understanding, ensuring a comfortable and anxiety-free experience.</p>
                        </div>
                        <div className="text-center">
                             <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-brand-blue text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l4.5-4.5M12 2.944a11.955 11.955 0 00-8.618 3.04m17.236-3.04a11.955 11.955 0 01-8.618-3.04m12.02 17.473L17.5 15.917" /></svg>
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-slate-900">Integrity</h3>
                            <p className="mt-2 text-base text-slate-500">We adhere to the highest ethical standards, providing honest and transparent recommendations for your dental health.</p>
                        </div>
                    </div>
                </div>
            </div>
             <div className="bg-white py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatItem value="15+" label="Years of Experience" />
                        <StatItem value="5,000+" label="Happy Patients" />
                        <StatItem value="Top 1%" label="In Dental Technology" />
                        <StatItem value="24/7" label="Emergency Support" />
                    </div>
                </div>
            </div>
             <style>{`
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
            `}</style>
        </div>
    );
};