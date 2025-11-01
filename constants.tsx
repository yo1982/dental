import React from 'react';
import { Service, Doctor, GalleryItem, SocialLink } from './types';

const ToothIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
);

const WhiteningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M17 3l4 4M3 17l4 4" />
    </svg>
);

const ImplantIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const OrthodonticsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
    </svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.803 4.649-.645.174-1.32.223-2.003.184.62 1.952 2.423 3.372 4.552 3.412-1.728 1.35-3.89 2.066-6.23 2.066-.403 0-.8-.024-1.187-.07 2.235 1.438 4.896 2.27 7.73 2.27 9.284 0 14.376-7.618 14.376-14.376 0-.219 0-.437-.015-.652.984-.712 1.832-1.6 2.518-2.608z" />
    </svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
    </svg>
);


export const SERVICES_DATA: Service[] = [
    {
        icon: <ToothIcon />,
        title: 'General Dentistry',
        description: 'Comprehensive care including check-ups, cleanings, and fillings to maintain your oral health.'
    },
    {
        icon: <WhiteningIcon />,
        title: 'Cosmetic Dentistry',
        description: 'Enhance your smile with teeth whitening, veneers, and bonding for a brilliant, confident look.'
    },
    {
        icon: <ImplantIcon />,
        title: 'Dental Implants',
        description: 'Permanent, natural-looking replacements for missing teeth to restore your smile and function.'
    },
    {
        icon: <OrthodonticsIcon />,
        title: 'Orthodontics',
        description: 'Straighten your teeth and correct your bite with modern braces and clear aligner options.'
    },
     {
        icon: <ToothIcon />,
        title: 'Pediatric Dentistry',
        description: 'Gentle and friendly dental care for children, ensuring a positive experience from a young age.'
    },
     {
        icon: <ImplantIcon />,
        title: 'Periodontics',
        description: 'Specialized treatment of gum disease to protect your teeth and overall health.'
    },
];

export const DOCTORS_DATA: Doctor[] = [
    {
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop',
        name: 'Dr. Evelyn Reed',
        specialty: 'Lead Cosmetic Dentist',
        bio: 'Dr. Reed is a world-renowned expert in cosmetic dentistry, with over 15 years of experience creating beautiful smiles. She is passionate about using the latest technology to achieve stunning, natural-looking results.'
    },
    {
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop',
        name: 'Dr. Marcus Thorne',
        specialty: 'Orthodontist Specialist',
        bio: 'Dr. Thorne specializes in orthodontics for all ages. He is dedicated to providing personalized treatment plans, from traditional braces to Invisalign, to help patients achieve a perfectly aligned smile.'
    },
    {
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop',
        name: 'Dr. Lena Petrova',
        specialty: 'General & Pediatric Dentist',
        bio: 'With a gentle touch and a friendly demeanor, Dr. Petrova is a favorite among our youngest patients. She focuses on preventative care and education to build a foundation for a lifetime of healthy teeth.'
    },
];

export const GALLERY_DATA: GalleryItem[] = [
    {
        image: 'https://images.unsplash.com/photo-1629905675333-2a31a4b36984?q=80&w=800&auto=format&fit=crop',
        description: 'A friendly dentist consulting with a patient.'
    },
    {
        image: 'https://images.unsplash.com/photo-1588776814543-34fed6577889?q=80&w=800&auto=format&fit=crop',
        description: 'Our state-of-the-art, modern dental examination room.'
    },
    {
        image: 'https://images.unsplash.com/photo-1606893995103-a441bce3a6f1?q=80&w=800&auto=format&fit=crop',
        description: 'A happy patient showing off their brilliant new smile.'
    },
    {
        image: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=800&auto=format&fit=crop',
        description: 'Precision dental instruments for top-quality care.'
    },
    {
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop',
        description: 'Our collaborative team of expert dental professionals.'
    },
    {
        image: 'https://images.unsplash.com/photo-1618932260641-2ffc44b7f730?q=80&w=800&auto=format&fit=crop',
        description: 'Analyzing an x-ray to ensure a perfect diagnosis.'
    }
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'Facebook', icon: <FacebookIcon />, url: '#' },
    { name: 'Twitter', icon: <TwitterIcon />, url: '#' },
    { name: 'Instagram', icon: <InstagramIcon />, url: '#' },
];