import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-brand-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">Our Work</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Real results for real clients. Explore how we've helped businesses across industries achieve their digital potential.
          </p>
        </div>

        <div className="space-y-16">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div key={item.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2">
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/50">
                   <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-80 md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-brand-500/10 mix-blend-overlay"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium border border-brand-500/20">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm font-medium uppercase tracking-widest">{item.client}</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{item.title}</h2>
                <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                  {item.description}
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8 border-y border-white/10 py-6">
                  {item.results.map((res, idx) => (
                    <div key={idx}>
                      <div className="text-3xl font-bold text-brand-400 mb-1">{res.value}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">{res.label}</div>
                    </div>
                  ))}
                </div>
                
                <Link to="/contact" className="inline-flex items-center text-white font-semibold hover:text-brand-400 transition-colors">
                  Start a project like this <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
