
import React from 'react';
import { Doctor } from '../types';

interface DoctorProfileProps {
    doctor: Doctor;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ doctor }) => {
    return (
        <div className="text-center bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
            <img className="h-40 w-40 rounded-full object-cover mx-auto" src={doctor.image} alt={`Photo of ${doctor.name}`} />
            <h3 className="mt-6 text-xl font-bold text-gray-900">{doctor.name}</h3>
            <p className="mt-1 text-base font-semibold text-brand-blue">{doctor.specialty}</p>
            <p className="mt-4 text-gray-500 flex-grow">{doctor.bio}</p>
        </div>
    );
}
