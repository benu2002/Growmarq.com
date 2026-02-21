import React from 'react';
import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <span className="text-2xl font-bold font-display tracking-tight text-white block mb-4">
                Grow<span className="text-brand-400">Marq</span>
              </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              We help businesses and professionals build modern, fast, and conversion-focused websites that attract customers and increase revenue.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/growmarq?igsh=bHZ4bTN2ZW1oN3Uz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-400 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Business Websites</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">E-Commerce</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Landing Pages</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Website Redesign</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-400 mt-0.5" />
                <span>Balangir, Odisha – 767029</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-brand-400" />
                <a href="https://wa.me/917008010914" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  70080 10914
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-400" />
                <span>growmarq@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Grow Marq. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
