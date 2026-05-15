import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Calendar, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const time = formData.get('time');
    const message = formData.get('message');
    const whatsappMessage = [
      'Almacura inquiry',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Preferred time: ${time}`,
      `Message: ${message}`
    ].join('\n');

    window.open(`https://wa.me/919966030085?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    form.reset();
  };

  return (
    <main className="w-full pt-32 pb-24 min-h-screen bg-brand-beige">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="font-dm text-[11px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-4 block">
            Get In Touch
          </span>
          <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-brand-navy mb-6">
            Contact <span className="italic text-brand-teal">ALMACURA</span>
          </h1>
          <p className="font-dm text-lg text-brand-text">
            Start your health restoration journey with our expert clinical team. Reach out to schedule your consultation or inquire about our programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & CTAs */}
          <motion.div {...fadeInUp} className="space-y-12">
            <div className="bg-white rounded-[2.5rem] p-10 border border-brand-teal/10 shadow-sm">
              <h3 className="font-cormorant text-3xl font-bold text-brand-navy mb-8">Clinic Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-ice rounded-full flex items-center justify-center text-brand-teal shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-dm text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Address</h4>
                    <p className="font-dm text-brand-text leading-relaxed">
                      At Nightingale Super Specialty Hospital,<br />
                      Near Santoshnagar Cross Roads, Nagarjuna Sagar Road,<br />
                      Vinaynagar Colony, Hyderabad-500059
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-ice rounded-full flex items-center justify-center text-brand-teal shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-dm text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Phone</h4>
                    <p className="font-dm text-brand-text leading-relaxed">
                      <a href="tel:+919966030085" className="hover:text-brand-teal transition-colors">+91 9966030085</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-ice rounded-full flex items-center justify-center text-brand-teal shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-dm text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Email</h4>
                    <p className="font-dm text-brand-text leading-relaxed">
                      <a href="mailto:info@almacura.in" className="hover:text-brand-teal transition-colors">info@almacura.in</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-ice rounded-full flex items-center justify-center text-brand-teal shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-dm text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Hours</h4>
                    <p className="font-dm text-brand-text leading-relaxed uppercase">
                      Monday to Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/919966030085" target="_blank" rel="noreferrer" className="w-full">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-5 bg-[#25D366] text-white rounded-2xl font-dm font-bold text-xs tracking-[0.2em] uppercase shadow-lg shadow-[#25D366]/20 hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Now
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="bg-brand-navy p-10 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="font-cormorant text-3xl font-bold text-white mb-2">Send an Inquiry</h3>
                <p className="font-dm text-white/70 mb-8">Our care coordinator will get back to you shortly.</p>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block font-dm text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-teal transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-dm text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-teal transition-colors"
                      placeholder="+91"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-dm text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Preferred Time for Call</label>
                    <select name="time" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors appearance-none">
                      <option value="" className="text-brand-navy">Select a time</option>
                      <option value="morning" className="text-brand-navy">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon" className="text-brand-navy">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening" className="text-brand-navy">Evening (4 PM - 7 PM)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block font-dm text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Primary Concern / Message</label>
                    <textarea 
                      rows={4}
                      name="message"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-teal transition-colors resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  {submitted && (
                    <p className="font-dm text-brand-gold text-sm leading-relaxed">
                      Your inquiry is ready in WhatsApp. Our care coordinator will review the details after you send it.
                    </p>
                  )}
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-4 bg-brand-gold text-brand-navy rounded-xl font-dm font-bold text-xs tracking-[0.2em] uppercase shadow-lg hover:bg-white transition-all mt-4"
                  >
                    Submit Inquiry
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Map Section */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mt-20 rounded-[2.5rem] overflow-hidden border border-brand-teal/10 shadow-2xl h-[450px] relative"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.261447191026!2d78.5095882!3d17.351148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98658485a115%3A0x871146bda3e070fe!2sNightingale%20Super%20Speciality%20Hospital%20%26%20Laparoscopic%20centre%20%7C%20Santoshnagar%2C%20Saidabad%2C%20Champapet!5e0!3m2!1sen!2sin!4v1778323584647!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </motion.div>
      </div>
    </main>
  );
}
