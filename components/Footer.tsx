
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Page, SocialLink } from '../types';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue-light" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v2.5a1.5 1.5 0 01-3 0v-.5a1 1 0 00-1-1H4a1 1 0 00-1 1v10.5a1.5 1.5 0 01-3 0V8a1 1 0 011-1h3a1 1 0 001-1V3.5z" />
                 </svg>
                 <span className="text-xl font-bold text-white">SmileBright</span>
            </a>
            <p className="mt-4 text-sm text-slate-400">Your partner in achieving a healthy, beautiful smile for life.</p>
            <div className="mt-6 flex space-x-4">
              {SOCIAL_LINKS.map((link: SocialLink) => (
                <a key={link.name} href={link.url} className="text-slate-400 hover:text-brand-blue-light transition-colors">
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="text-base text-slate-400 hover:text-white">About Us</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('services'); }} className="text-base text-slate-400 hover:text-white">Services</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('doctors'); }} className="text-base text-slate-400 hover:text-white">Our Team</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="text-base text-slate-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
                <li className="flex items-start">
                    <span className="mt-1 mr-2 h-4 w-4">📍</span>
                    <span>123 Dental Ave,<br />Smile City, SC 12345</span>
                </li>
                 <li className="flex items-start">
                    <span className="mt-1 mr-2 h-4 w-4">📞</span>
                    <span>(123) 456-7890</span>
                </li>
                 <li className="flex items-start">
                    <span className="mt-1 mr-2 h-4 w-4">✉️</span>
                    <span>contact@smilebright.com</span>
                </li>
            </ul>
          </div>
          
           <div>
            <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase">Hours</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
                <li>Mon - Fri: 9:00 AM - 5:00 PM</li>
                <li>Sat: 10:00 AM - 2:00 PM</li>
                <li>Sun: Closed</li>
            </ul>
          </div>

        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center">
          <p className="text-base text-slate-400">&copy; {new Date().getFullYear()} SmileBright Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
