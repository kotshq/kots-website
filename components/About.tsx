
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Connecting Roots, Growing Futures.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              At Kots Technologies, we believe in a sustainable food ecosystem. Our mission is twofold: to bring the freshest, most nutritious produce directly from local farms to your table, and to empower our farming partners by providing them with the financial tools they need to thrive.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              By cutting out the middlemen, we ensure farmers get a fair price for their hard work and you get produce that's bursting with flavor and quality. Our partnership with financial institutions creates a virtuous cycle of growth, fostering a healthier community and a more resilient agricultural sector.
            </p>
          </div>
          <div className="mt-10 lg:mt-0" aria-hidden="true">
            <img
              className="rounded-lg shadow-xl"
              src="https://picsum.photos/seed/farmer/600/400"
              alt="Farmer holding a crate of fresh vegetables"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
