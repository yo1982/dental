
import React from 'react';
import { DOCTORS_DATA } from '../constants';
import { DoctorProfile } from '../components/DoctorProfile';

export const DoctorsPage: React.FC = () => {
    return (
        <div className="bg-slate-50 animate-fade-in">
             <div className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl">Meet Our Expert Team</h1>
                    <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                        Our skilled and compassionate dental professionals are the heart of our clinic, dedicated to your care.
                    </p>
                </div>
            </div>
            <div className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                        {DOCTORS_DATA.map(doctor => (
                            <DoctorProfile key={doctor.name} doctor={doctor} />
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
