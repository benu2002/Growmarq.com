import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-brand-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-400">
            No hidden fees. Just high-quality development at affordable rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
                <div key={plan.id} className={`relative flex flex-col p-8 rounded-3xl border ${plan.highlight ? 'bg-brand-800 border-brand-500 shadow-2xl shadow-brand-500/20 scale-105 z-10' : 'glass-panel border-white/10'}`}>
                    {plan.highlight && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                            Most Popular
                        </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-bold text-brand-400">{plan.price}</span>
                        <span className="text-gray-500">/one-time</span>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-grow">
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                                <Check className="text-green-400 h-5 w-5 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <Link 
                        to="/contact" 
                        className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                            plan.highlight 
                            ? 'bg-brand-500 hover:bg-brand-400 text-white shadow-lg' 
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                    >
                        Choose Plan
                    </Link>
                </div>
            ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">Need something custom?</p>
            <Link to="/contact" className="text-brand-400 font-semibold hover:text-white transition-colors">
                Contact us for a custom quote →
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
