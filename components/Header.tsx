
import React, { useState, useEffect } from 'react';
import Logo from './icons/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex-shrink-0">
            <span className="sr-only">Kots Technologies</span>
            <Logo className="h-10 w-auto text-slate-800" />
          </a>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="font-medium text-slate-600 hover:text-orange-500 transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
             <a href="#cta" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors">
                Get Started
              </a>
            <div className="md:hidden ml-4">
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-orange-500 hover:bg-slate-50 transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#cta" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
