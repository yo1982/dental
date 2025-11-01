
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  onBookAppointment: () => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
  isMobile?: boolean;
}> = ({ page, currentPage, setCurrentPage, children, isMobile = false }) => {
  const baseClasses = isMobile 
    ? "block px-3 py-2 rounded-md text-base font-medium" 
    : "px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200";
  const activeClasses = isMobile 
    ? "bg-brand-blue text-white" 
    : "text-brand-blue-dark underline underline-offset-4";
  const inactiveClasses = isMobile 
    ? "text-slate-600 hover:bg-slate-200 hover:text-slate-800" 
    : "text-slate-600 hover:text-brand-blue-dark";

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setCurrentPage(page);
      }}
      className={`${baseClasses} ${currentPage === page ? activeClasses : inactiveClasses}`}
    >
      {children}
    </a>
  );
};


export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, onBookAppointment }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const navItems: { page: Page; label: string }[] = [
        { page: 'home', label: 'Home' },
        { page: 'about', label: 'About Us' },
        { page: 'services', label: 'Services' },
        { page: 'doctors', label: 'Doctors' },
        { page: 'gallery', label: 'Gallery' },
        { page: 'contact', label: 'Contact Us' },
    ];
  
    return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="flex-shrink-0 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v2.5a1.5 1.5 0 01-3 0v-.5a1 1 0 00-1-1H4a1 1 0 00-1 1v10.5a1.5 1.5 0 01-3 0V8a1 1 0 011-1h3a1 1 0 001-1V3.5z" />
              </svg>
              <span className="text-xl font-bold text-slate-800">SmileBright</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
               {navItems.map(item => (
                <NavLink key={item.page} page={item.page} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
           <div className="hidden md:block">
             <button
                onClick={onBookAppointment}
                className="ml-4 px-4 py-2 bg-brand-blue text-white rounded-lg font-semibold shadow-md hover:bg-brand-blue-dark transition-all duration-300 transform hover:scale-105"
            >
                Book Appointment
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-slate-100 inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-800 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-brand-blue"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
                <NavLink key={item.page} page={item.page} currentPage={currentPage} setCurrentPage={(page) => {setCurrentPage(page); setIsMobileMenuOpen(false);}} isMobile>
                  {item.label}
                </NavLink>
            ))}
          </div>
           <div className="pt-4 pb-3 border-t border-slate-200">
                <div className="px-2">
                    <button
                        onClick={() => {onBookAppointment(); setIsMobileMenuOpen(false);}}
                        className="w-full px-4 py-3 bg-brand-blue text-white rounded-lg font-semibold shadow-md hover:bg-brand-blue-dark transition-all duration-300"
                    >
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
      )}
    </header>
  );
};
