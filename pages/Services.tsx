import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-brand-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">Our Services</h1>
          <p className="text-xl text-gray-400">
            We offer professional digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            // Dynamically get icon
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.HelpCircle;

            return (
              <div key={service.id} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-brand-400/30 transition-all hover:-translate-y-1 flex flex-col">
                <div className="w-14 h-14 bg-brand-500/10 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="text-brand-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Includes:</h4>
                    <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <LucideIcons.CheckCircle2 className="text-brand-500 mr-3 h-5 w-5 flex-shrink-0" />
                        {feature}
                        </li>
                    ))}
                    </ul>
                </div>
                <Link to="/contact" className="w-full text-center py-3 rounded-lg border border-white/10 hover:bg-white/5 text-white transition-colors">
                    Get Started
                </Link>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 glass-panel p-12 rounded-3xl text-center border border-white/10 bg-gradient-to-br from-brand-800 to-brand-900">
            <h2 className="text-3xl font-bold text-white mb-4">See Our Pricing</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Choose a plan that fits your budget and growth goals.</p>
            <Link to="/pricing" className="inline-block px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-full transition-colors shadow-lg shadow-brand-500/25">
                View Pricing Plans
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
