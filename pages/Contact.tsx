import React, { useState } from 'react';
import { Mail, Phone, MapPin, Plus, Minus, MessageCircle } from 'lucide-react';
import { FAQS } from '../constants';

const Contact: React.FC = () => {
  // FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
      setOpenFaqIndex(openFaqIndex === index ? null : index);
  }

  // TODO: Replace this URL with your actual Google Form Embed URL
  // Go to your Google Form -> Send -> Embed HTML (< >) -> Copy the src="..." URL
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfD_YOUR_FORM_ID_HERE/viewform?embedded=true";

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
                    <div className="flex items-start gap-4">
                        <div className="bg-brand-500/10 p-3 rounded-lg text-brand-400">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-white font-medium">Email</p>
                            <p className="text-gray-400">growmarq@gmail.com</p>
                        </div>
                    </div>
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

          {/* Google Form Embed */}
          <div className="glass-panel p-4 rounded-2xl border border-white/5 overflow-hidden">
             {/* 
                INSTRUCTIONS FOR USER:
                1. Create a Google Form.
                2. Click "Send" -> Go to the Embed tab (< >).
                3. Copy the URL inside the src="" attribute.
                4. Replace the GOOGLE_FORM_URL variable at the top of this file or paste the link directly below in the iframe src.
             */}
             <div className="w-full bg-white rounded-lg h-[800px] overflow-hidden">
                 <iframe 
                    src={GOOGLE_FORM_URL} 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Contact Form"
                 >
                    Loading…
                 </iframe>
             </div>
             <p className="text-center text-xs text-gray-500 mt-2">
                 *Please replace the iframe src in the code with your specific Google Form embed link.
             </p>
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
