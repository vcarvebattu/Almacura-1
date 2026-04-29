import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Calendar, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" }
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
                      Near i s sadan cross roads,<br />
                      Nagarjuna Sagar Road, Vinay Nagar colony,<br />
                      Santosh Nagar, Hyderabad 500059
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
                      +91 99890 33686
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
                      doctorkvsreddy@yahoo.com
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
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex-1 px-8 py-5 bg-brand-navy text-white rounded-2xl font-dm font-bold text-xs tracking-[0.2em] uppercase shadow-lg shadow-brand-navy/10 hover:bg-brand-teal transition-all flex items-center justify-center gap-3"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </motion.button>
              
              <a href="https://wa.me/919989033686" target="_blank" rel="noreferrer" className="w-full flex-1">
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
                
                <form className="space-y-6">
                  <div>
                    <label className="block font-dm text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-teal transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-dm text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-teal transition-colors"
                      placeholder="+91"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-dm text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Preferred Time for Call</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors appearance-none">
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-teal transition-colors resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
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
      </div>
    </main>
  );
}
