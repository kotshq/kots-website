
import React from 'react';

const Cta: React.FC = () => {
  return (
    <section id="cta" className="bg-orange-500">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to taste the difference?</span>
          <span className="block">Or grow with us?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-orange-100">
          Whether you're a family looking for fresh food or a farmer looking for a reliable partner, Kots Technologies is here for you.
        </p>
        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-md text-orange-600 bg-white font-medium hover:bg-orange-50 sm:w-auto"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
};

export default Cta;
