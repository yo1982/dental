import React from 'react';
import { SERVICES_DATA, DOCTORS_DATA } from '../constants';
import { Page } from '../types';
import { ServiceCard } from '../components/ServiceCard';
import { DoctorProfile } from '../components/DoctorProfile';

interface HomePageProps {
    onBookAppointment: () => void;
    onNavigate: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onBookAppointment, onNavigate }) => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative bg-brand-blue-dark h-[60vh] md:h-[80vh] flex items-center justify-center text-white text-center px-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1629904850762-e624c6a62963?q=80&w=1920&auto=format&fit=crop" alt="Modern dental clinic interior" className="absolute inset-0 w-full h-full object-cover opacity-30"/>
                <div className="relative z-10 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">A Brighter Smile, A Better Life</h1>
                    <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-2xl mx-auto text-blue-100 drop-shadow-md">
                        Experience exceptional dental care in a comfortable and modern environment. Our team is dedicated to helping you achieve and maintain a healthy, beautiful smile.
                    </p>
                    <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={onBookAppointment} className="w-full sm:w-auto bg-brand-teal-DEFAULT hover:bg-brand-teal-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Book an Appointment
                        </button>
                         <button onClick={() => onNavigate('services')} className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-brand-blue-dark">
                            Our Services
                        </button>
                    </div>
                </div>
            </section>
            
            {/* Our Services Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-brand-blue tracking-wide uppercase">What We Offer</h2>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Our Premier Services</p>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">From routine check-ups to complete smile makeovers, we provide a full range of dental services.</p>
                    </div>
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {SERVICES_DATA.slice(0, 3).map(service => (
                           <ServiceCard key={service.title} service={service} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button onClick={() => onNavigate('services')} className="text-brand-blue font-semibold hover:underline">
                            View All Services &rarr;
                        </button>
                    </div>
                </div>
            </section>

            {/* Meet Our Doctors Section */}
             <section className="py-16 md:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-brand-blue tracking-wide uppercase">Expert Care</h2>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Meet Our Professional Team</p>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Our doctors are not just experts in their fields; they are compassionate caregivers dedicated to your comfort.</p>
                    </div>
                    <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                       {DOCTORS_DATA.slice(0, 3).map(doctor => (
                           <DoctorProfile key={doctor.name} doctor={doctor} />
                       ))}
                    </div>
                     <div className="text-center mt-12">
                        <button onClick={() => onNavigate('doctors')} className="text-brand-blue font-semibold hover:underline">
                            Meet The Whole Team &rarr;
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-16 md:py-24 bg-brand-blue text-white">
                 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <svg className="mx-auto h-12 w-12 text-blue-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.33 8.35C5.88 11.23 4 15.3 4 20c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.7-3.88-8.77-9.33-11.65zM20 20c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.7-3.88-8.77-9.33-11.65C21.88 11.23 20 15.3 20 20z" />
                    </svg>
                    <blockquote className="mt-6">
                        <p className="text-2xl font-medium">
                            "I've never felt more comfortable at a dental clinic. The staff at SmileBright are incredibly friendly and professional. They transformed my smile and my confidence!"
                        </p>
                    </blockquote>
                    <footer className="mt-6">
                        <p className="font-semibold">Jessica L.</p>
                        <p className="text-blue-200">Cosmetic Dentistry Patient</p>
                    </footer>
                </div>
            </section>
            
            <style>{`
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .animate-fade-in {
                animation: fadeIn 0.5s ease-in-out;
            }
            `}</style>
        </div>
    );
};