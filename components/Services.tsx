
import React from 'react';
import BasketIcon from './icons/BasketIcon';
import CreditIcon from './icons/CreditIcon';

const services = [
  {
    name: 'Farm-to-Table Delivery',
    description: 'Experience the taste of real, fresh produce. We partner directly with local farmers to harvest at peak ripeness and deliver to your doorstep, ensuring maximum flavor and nutritional value.',
    icon: BasketIcon,
  },
  {
    name: 'Farmer Financing Solutions',
    description: 'We empower our farmers by connecting them with financial institutions. This provides them access to credit lines for essential inputs like seeds, fertilizers, and equipment, fueling their growth and sustainability.',
    icon: CreditIcon,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-orange-600 tracking-wider uppercase">Our Services</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            A Better Way to Eat and Grow
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            We've built a platform that benefits everyone, from the soil to your table.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-orange-500 rounded-md shadow-lg">
                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-slate-900 tracking-tight">{service.name}</h3>
                    <p className="mt-5 text-base text-slate-500">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
