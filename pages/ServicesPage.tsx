
import React from 'react';
import { SERVICES_DATA } from '../constants';
import { ServiceCard } from '../components/ServiceCard';

export const ServicesPage: React.FC = () => {
    return (
        <div className="bg-white animate-fade-in">
             <div className="py-16 sm:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl">Our Dental Services</h1>
                    <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                        A complete range of dental care solutions to keep your smile healthy and bright for a lifetime.
                    </p>
                </div>
            </div>
            <div className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {SERVICES_DATA.map(service => (
                            <ServiceCard key={service.title} service={service} />
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
            `}</style>
        </div>
    );
}

