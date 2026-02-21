import React, { useState } from 'react';
import { Mail, Phone, MapPin, Plus, Minus, MessageCircle } from 'lucide-react';
import { FAQS } from '../constants';

const Contact: React.FC = () => {
  // FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
      setOpenFaqIndex(openFaqIndex === index ? null : index);
  }

  return (
    <div className="pt-24 min-h-screen bg-brand-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">Let's Build Your Website</h1>
          <p className="text-xl text-gray-400">
            Have a project in mind? Let’s discuss it. Fill out the form below and we will receive it directly in our system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-brand-500/10 p-3 rounded-lg text-brand-400">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-white font-medium">Location</p>
                            <p className="text-gray-400">Balangir, Odisha – 767029</p>
                        </div>
                    </div>
                    <a href="https://wa.me/917008010914" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                        <div className="bg-brand-500/10 p-3 rounded-lg text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <p className="text-white font-medium group-hover:text-brand-400 transition-colors">WhatsApp Us</p>
                            <p className="text-gray-400">70080 10914</p>
                        </div>
                    </a>
                    <a href="mailto:growmarq@gmail.com" className="flex items-start gap-4 group">
                        <div className="bg-brand-500/10 p-3 rounded-lg text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-white font-medium group-hover:text-brand-400 transition-colors">Email</p>
                            <p className="text-gray-400">growmarq@gmail.com</p>
                        </div>
                    </a>
                </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <h3 className="text-xl font-bold mb-4">Why Contact Us?</h3>
                <ul className="list-disc list-inside space-y-2 text-brand-100">
                    <li>Free initial consultation</li>
                    <li>Transparent pricing</li>
                    <li>Expert guidance</li>
                    <li>Direct support</li>
                </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form action="https://formsubmit.co/growmarq@gmail.com" method="POST" className="space-y-6">
                  {/* Honeypot to prevent spam */}
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  
                  {/* Disable Captcha for cleaner experience */}
                  <input type="hidden" name="_captcha" value="false" />
                  
                  {/* Redirect after submission */}
                  <input type="hidden" name="_next" value="https://growmarq.vercel.app/contact" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Your Name" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input type="tel" name="phone" className="w-full px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="+91 00000 00000" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea name="message" rows={4} required className="w-full px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Tell us about your project..."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full py-4 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-bold text-lg transition-all shadow-lg shadow-brand-500/25">
                    Send Message
                  </button>
              </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
             <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
             <div className="space-y-4">
                 {FAQS.map((faq, index) => (
                     <div key={index} className="glass-panel border border-white/5 rounded-xl overflow-hidden">
                         <button 
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                         >
                             <span className="font-semibold text-white">{faq.question}</span>
                             {openFaqIndex === index ? <Minus size={20} className="text-brand-400" /> : <Plus size={20} className="text-brand-400" />}
                         </button>
                         {openFaqIndex === index && (
                             <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                 {faq.answer}
                             </div>
                         )}
                     </div>
                 ))}
             </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
