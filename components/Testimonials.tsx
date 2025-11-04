import React from 'react';
import StarIcon from './icons/StarIcon';

const testimonials = [
  {
    quote: "The quality of the vegetables is just incredible. You can taste the difference. It's like having a farmer's market delivered to my door every week!",
    author: 'Amina K.',
    role: 'Happy Customer',
    rating: 5,
  },
  {
    quote: "Partnering with Kots Technologies has been a game-changer. The financing helped me upgrade my irrigation system, and the direct market access means better prices for my crops.",
    author: 'John Mwangi',
    role: 'Partner Farmer',
    rating: 5,
  },
  {
    quote: "I love knowing exactly where my food comes from. The transparency and commitment to supporting local agriculture is why I choose Kots.",
    author: 'Fatuma Ali',
    role: 'Loyal Subscriber',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">What Our Community is Saying</h2>
          <p className="mt-4 text-lg text-slate-600">
            We're proud to make a difference in the lives of our customers and partners.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="flex flex-col bg-slate-50 rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex space-x-1 text-orange-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5" />
                    ))}
                  </div>
                  <blockquote className="mt-6">
                    <p className="text-lg text-slate-700 font-medium">"{testimonial.quote}"</p>
                  </blockquote>
                </div>
                <footer className="mt-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full object-cover" src={`https://picsum.photos/seed/${testimonial.author}/100/100`} alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-bold text-slate-900">{testimonial.author}</div>
                      <div className="text-base font-medium text-orange-600">{testimonial.role}</div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;