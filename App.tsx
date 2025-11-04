
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default App;
