import React from 'react';
import { GALLERY_DATA } from '../constants';
import { GalleryItem } from '../types';

const GalleryCard: React.FC<{ item: GalleryItem }> = ({ item }) => (
    <div className="group relative bg-slate-100 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <img src={item.image} alt={item.description} className="w-full h-80 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent">
            <h3 className="text-white text-lg font-bold drop-shadow-md">{item.description}</h3>
        </div>
    </div>
);


export const GalleryPage: React.FC = () => {
    return (
        <div className="bg-white animate-fade-in">
            <div className="py-16 sm:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl">Our Clinic in Pictures</h1>
                    <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                        A glimpse into our welcoming environment, advanced technology, and friendly team.
                    </p>
                </div>
            </div>
            <div className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {GALLERY_DATA.map((item, index) => (
                           <GalleryCard key={index} item={item} />
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
};