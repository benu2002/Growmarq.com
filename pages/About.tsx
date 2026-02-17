import React from 'react';
import { CheckCircle2, Target, Eye, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-brand-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">Who We Are</h1>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Growmarq is a results-driven web development agency helping businesses establish a strong digital presence.
              We work with business owners, startups, and professionals who want serious growth.
            </p>
            
            <div className="space-y-6 mt-8">
                <div className="flex gap-4">
                    <div className="bg-brand-500/10 p-3 rounded-lg text-brand-400 h-fit">
                        <Target size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                        <p className="text-gray-400">To help businesses grow online through strategic, high-performance websites.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                     <div className="bg-brand-500/10 p-3 rounded-lg text-brand-400 h-fit">
                        <Eye size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                        <p className="text-gray-400">To become a trusted digital growth partner for businesses across Odisha and India.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-brand-500/20 rounded-2xl blur-lg"></div>
             <img 
               src="https://picsum.photos/600/600?random=about" 
               alt="Team working" 
               className="relative rounded-2xl border border-white/10 shadow-2xl"
             />
          </div>
        </div>

        {/* Why We Started & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
             <div className="glass-panel p-8 rounded-2xl border border-white/5">
                 <h2 className="text-2xl font-bold text-white mb-4">Why We Started Growmarq</h2>
                 <p className="text-gray-400 leading-relaxed mb-4">
                     Many businesses lose customers because they don’t have a professional website.
                 </p>
                 <p className="text-gray-400 leading-relaxed">
                     Growmarq was created to solve that problem — by providing affordable and powerful website solutions.
                 </p>
             </div>
             <div className="glass-panel p-8 rounded-2xl border border-white/5">
                 <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
                 <p className="text-gray-400 mb-6">We don’t build websites for decoration. We build websites for growth.</p>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     {['Clean & Modern Design', 'Conversion-Focused', 'Speed & Performance', 'Mobile Responsiveness', 'Long-term Support'].map(item => (
                         <li key={item} className="flex items-center gap-2 text-white text-sm">
                             <CheckCircle2 className="text-brand-400" size={16} /> {item}
                         </li>
                     ))}
                 </ul>
             </div>
        </div>

        {/* CTA */}
        <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Let’s create something powerful for your business.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                 <Link to="/contact" className="px-8 py-3 bg-brand-500 hover:bg-brand-400 text-white rounded-full font-bold transition-all">
                     Start Now
                 </Link>
                 <a href="https://wa.me/917008010914" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-300 font-semibold hover:text-brand-400 transition-colors">
                     WhatsApp: 70080 10914
                 </a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;
