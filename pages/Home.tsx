import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, Smartphone, Layout, Smile, ShieldCheck, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-[128px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-brand-400/30 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-400"></span>
            </span>
            <span className="text-brand-300 text-sm font-medium">Accepting New Projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display tracking-tight leading-tight">
            Build a Powerful Website <br />
            <span className="gradient-text">That Grows Your Business</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Professional website development for businesses, startups, and professionals who want real online growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-400 transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2">
              Get Free Consultation <ArrowRight size={20} />
            </Link>
            <Link to="/portfolio" className="px-8 py-4 rounded-full glass-panel text-white font-semibold hover:bg-white/10 transition-all border border-white/10">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-brand-900 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">About GrowMarq</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Growmarq is a professional web development agency based in Balangir, Odisha. We help businesses and professionals build modern, fast, and conversion-focused websites that attract customers and increase revenue.
          </p>
          <p className="text-2xl font-bold gradient-text">
            We don’t just design websites. We build digital growth systems.
          </p>
        </div>
      </section>

      {/* Why Choose Us / Features */}
      <section className="py-24 bg-brand-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">Why Choose Growmarq?</h2>
            <p className="text-gray-400">We focus on results, not just design.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-brand-400/50 transition-all">
              <div className="h-12 w-12 rounded-lg bg-brand-500/20 flex items-center justify-center mb-6">
                <Layout className="text-brand-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Modern & Clean Design</h3>
              <p className="text-gray-400">Designs that look professional and build trust instantly.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-brand-400/50 transition-all">
               <div className="h-12 w-12 rounded-lg bg-brand-500/20 flex items-center justify-center mb-6">
                <Smartphone className="text-brand-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mobile Responsive</h3>
              <p className="text-gray-400">Websites that look perfect on phones, tablets, and desktops.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-brand-400/50 transition-all">
               <div className="h-12 w-12 rounded-lg bg-brand-500/20 flex items-center justify-center mb-6">
                <Zap className="text-brand-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Loading Speed</h3>
              <p className="text-gray-400">Optimized performance because speed matters for SEO and users.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-brand-400/50 transition-all">
               <div className="h-12 w-12 rounded-lg bg-brand-500/20 flex items-center justify-center mb-6">
                <TrendingUp className="text-brand-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SEO-Friendly Structure</h3>
              <p className="text-gray-400">Built to be found on Google by your potential customers.</p>
            </div>
             <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-brand-400/50 transition-all">
               <div className="h-12 w-12 rounded-lg bg-brand-500/20 flex items-center justify-center mb-6">
                <ShieldCheck className="text-brand-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Affordable Pricing</h3>
              <p className="text-gray-400">Premium quality websites at rates that make sense for your business.</p>
            </div>
             <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-brand-400/50 transition-all">
               <div className="h-12 w-12 rounded-lg bg-brand-500/20 flex items-center justify-center mb-6">
                <Smile className="text-brand-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Personal Support</h3>
              <p className="text-gray-400">We are always just a phone call away to help you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
       <section className="py-24 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display text-center mb-16">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                    { step: 1, title: "Consultation", desc: "We understand your business goals." },
                    { step: 2, title: "Planning", desc: "We plan structure, layout, and features." },
                    { step: 3, title: "Development", desc: "We build with modern UI and clean code." },
                    { step: 4, title: "Testing", desc: "Speed, mobile, and functionality checks." },
                    { step: 5, title: "Launch", desc: "Your site goes live with ongoing support." }
                ].map((item) => (
                    <div key={item.step} className="text-center group">
                        <div className="w-16 h-16 rounded-full bg-brand-800 border-2 border-brand-500 text-brand-400 font-bold text-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                            {item.step}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>
         </div>
       </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl md:text-4xl font-bold text-white font-display text-center mb-16">What Our Clients Say</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="glass-panel p-8 rounded-2xl border border-white/5 relative">
                        <div className="text-brand-500 text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
                        <div className="flex gap-1 mb-4 text-yellow-400">
                            {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                        </div>
                        <p className="text-gray-300 mb-6 relative z-10 italic">"{t.text}"</p>
                        <div className="font-bold text-white">{t.author}</div>
                    </div>
                ))}
             </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center glass-panel p-12 rounded-3xl border border-brand-500/30 bg-gradient-to-br from-brand-900 to-brand-800">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow Your Business Online?</h2>
            <p className="text-xl text-gray-400 mb-8">Let’s build a website that works for you.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="https://wa.me/917008010914" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-2xl font-bold text-white hover:text-brand-400 transition-colors">
                    <MessageCircle /> 70080 10914
                </a>
            </div>
             <p className="mt-4 text-brand-300">Balangir, Odisha – 767029</p>
             <div className="mt-8">
                 <Link to="/contact" className="px-8 py-3 bg-brand-500 hover:bg-brand-400 text-white rounded-full font-bold transition-all">
                     Start Your Project
                 </Link>
             </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
