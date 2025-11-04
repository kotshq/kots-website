import React from 'react';
import Logo from './icons/Logo';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#cta' },
  ];
  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/kotshq' },
    { name: 'Instagram', href: 'https://instagram.com/kotshq' },
    { name: 'X', href: 'https://x.com/kotshq' },
  ];

  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Logo className="h-12 text-white" />
            <p className="text-slate-400 text-base">
              Fresh from the farm, financed for the future.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#services" className="text-base text-slate-400 hover:text-white">Farm-to-Table</a></li>
                  <li><a href="#services" className="text-base text-slate-400 hover:text-white">Farmer Financing</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  {navLinks.map((link) => (
                     <li key={link.name}><a href={link.href} className="text-base text-slate-400 hover:text-white">{link.name}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                  <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Follow Us</h3>
                   <div className="mt-4 flex space-x-6">
                      {socialLinks.map((item) => (
                        <a key={item.name} href={item.href} className="text-slate-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                          <span className="sr-only">{item.name}</span>
                          {item.name === 'Facebook' && <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>}
                          {item.name === 'Instagram' && <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118c-2.147 0-3.882 1.735-3.882 3.882s1.735 3.882 3.882 3.882 3.882-1.735 3.882-3.882-1.735-3.882-3.882-3.882zM12 14a2 2 0 110-4 2 2 0 010 4zm6.406-7.184a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>}
                          {item.name === 'X' && <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
                        </a>
                      ))}
                    </div>
               </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8">
          <p className="text-base text-slate-400 xl:text-center">&copy; {new Date().getFullYear()} Kots Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;