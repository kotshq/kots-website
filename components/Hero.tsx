
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://picsum.photos/seed/farm/1920/1080"
          alt="Lush green farm field"
        />
        <div className="absolute inset-0 bg-slate-800 mix-blend-multiply opacity-60" aria-hidden="true"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-48">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">Fresh From The Farm,</span>
            <span className="block text-orange-400">Financed For The Future.</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-slate-200 sm:max-w-3xl">
            Kots Technologies bridges the gap between dedicated farmers and you, delivering unparalleled freshness while empowering agricultural growth with accessible financing.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#services"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-slate-900 bg-white hover:bg-slate-50 sm:px-10"
            >
              How It Works
            </a>
            <a
              href="#cta"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-10"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
