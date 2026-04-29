import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Heart, Shield, Activity, Clock, CheckCircle, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern clinic environment" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-beige/95 via-brand-beige/80 to-brand-beige/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-dm text-[11px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-4 block">
                Institute of Integrative Medicine, Healthspan Optimisation & Functional Gynaecology
              </span>
              <h1 className="font-cormorant text-5xl md:text-7xl lg:text-[80px] font-bold text-brand-navy leading-[1.1] mb-6 tracking-tight">
                All Paths to <span className="italic text-brand-teal">Vitality</span>
              </h1>
              <p className="font-dm text-lg text-brand-text mb-10 max-w-xl leading-relaxed">
                ALMACURA combines clinical medicine with structured integrative approaches to address disease, long-term vitality, and functional well-being.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 bg-brand-navy text-white rounded-full font-dm font-bold text-xs tracking-[0.2em] uppercase shadow-xl hover:bg-brand-teal transition-all flex items-center justify-center gap-3"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Consultation
                  </motion.button>
                </Link>
                <Link to="/programs">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 bg-white text-brand-navy border border-brand-teal/20 rounded-full font-dm font-bold text-xs tracking-[0.2em] uppercase shadow-sm hover:border-brand-teal hover:bg-brand-ice transition-all flex items-center justify-center gap-3"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Explore Programs
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Three Core Pillars Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-navy mb-4">A Comprehensive Approach to Health</h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Pillar 1 */}
            <motion.div variants={itemFadeIn} className="bg-brand-light border border-brand-teal/10 rounded-[1.5rem] p-6 hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-500 group flex flex-col">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-teal shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-cormorant text-xl md:text-2xl font-bold text-brand-navy mb-2">Integrative Medicine</h3>
              <p className="font-dm text-xs text-brand-teal font-bold tracking-wide uppercase mb-5">For patients with existing medical conditions.</p>
              
              <ul className="space-y-2.5 mb-6">
                {['Cardiovascular disease', 'Diabetes complications', 'Chronic fatigue', 'Chronic pain', 'Allergic & inflammatory disorders', 'Autoimmune disorders', 'Neurological disorders', 'Stress-related disorders'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-text font-dm text-[13px]">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-xl p-3 border border-brand-teal/5 mt-auto">
                <p className="font-dm text-[10px] text-brand-navy font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2">
                  Diagnosis <ArrowRight className="w-3 h-3 text-brand-teal" /> Treatment <ArrowRight className="w-3 h-3 text-brand-teal" /> Recovery
                </p>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div variants={itemFadeIn} className="bg-brand-light border border-brand-teal/10 rounded-[1.5rem] p-6 hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-500 group flex flex-col">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-teal shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-cormorant text-xl md:text-2xl font-bold text-brand-navy mb-2">Healthspan Optimisation</h3>
              <p className="font-dm text-xs text-brand-teal font-bold tracking-wide uppercase mb-5">For long-term vitality and prevention.</p>
              
              <ul className="space-y-2.5 mb-6">
                {['Metabolic health', 'Energy optimisation', 'Preventive care', 'Healthy aging', 'Gut health', 'Neuro-emotional balance'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-text font-dm text-[13px]">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-xl p-3 border border-brand-teal/5 mt-auto">
                <p className="font-dm text-[10px] text-brand-navy font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2">
                  Assessment <ArrowRight className="w-3 h-3 text-brand-teal" /> Optimisation <ArrowRight className="w-3 h-3 text-brand-teal" /> Prevention
                </p>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div variants={itemFadeIn} className="bg-brand-light border border-brand-teal/10 rounded-[1.5rem] p-6 hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-500 group flex flex-col">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-teal shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-cormorant text-xl md:text-2xl font-bold text-brand-navy mb-2">Functional & Regenerative Gynaecology</h3>
              <p className="font-dm text-xs text-brand-teal font-bold tracking-wide uppercase mb-5">For women's health and quality of life.</p>
              
              <ul className="space-y-2.5 mb-6">
                {['Hormonal imbalance', 'Menopausal symptoms', 'Pelvic health issues', 'Sexual wellness', 'Post-delivery recovery', 'Vaginal health'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-text font-dm text-[13px]">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-xl p-3 border border-brand-teal/5 mt-auto">
                <p className="font-dm text-[10px] text-brand-navy font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2">
                  Assessment <ArrowRight className="w-3 h-3 text-brand-teal" /> Restoration <ArrowRight className="w-3 h-3 text-brand-teal" /> Regeneration
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Integrated Clinical Model Section */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-6">One Unified Clinical Pathway</h2>
            <p className="font-dm text-xl text-white/80 max-w-2xl mx-auto">
              Treat illness. Restore function. Optimise vitality. Support lifelong wellness.
            </p>
          </motion.div>

          {/* Responsive Timeline */}
          <div className="relative mt-16 mb-10 max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-y-12 gap-x-4 md:gap-x-6">
              {['Assessment', 'Diagnosis', 'Integrative Treatment', 'Restoration', 'Regeneration', 'Optimisation', 'Healthspan'].map((step, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  key={index} 
                  className="flex items-center gap-4 md:gap-6 group"
                >
                  <div className="flex flex-col items-center text-center w-[120px]">
                    <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:border-brand-gold transition-colors duration-300 mb-4 shadow-lg shadow-brand-gold/5">
                       <div className="w-2.5 h-2.5 rounded-full bg-brand-gold group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                    <span className="font-dm text-[10px] font-bold tracking-[0.2em] uppercase text-white/90">
                      {step}
                    </span>
                  </div>
                  {index < 6 && (
                    <ArrowRight className="w-5 h-5 text-white/20 hidden md:block -mt-8" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vitality Axis Section */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <motion.div {...fadeInUp} className="lg:col-span-1">
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-navy mb-6">The Science of Vitality</h2>
              <p className="font-dm text-lg text-brand-text mb-8">
                Health depends on interconnected systems. ALMACURA therapies are designed to restore and optimise these systems for true, lasting well-being.
              </p>
              <div className="w-16 h-1 bg-brand-teal rounded-full"></div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              {[
                { name: 'Circulation', icon: '🩸' },
                { name: 'Oxygen Delivery', icon: '💨' },
                { name: 'Cellular Energy', icon: '⚡' },
                { name: 'Inflammation Balance', icon: '🛡️' },
                { name: 'Gut Health', icon: '🦠' },
                { name: 'Neuro-Emotional Balance', icon: '🧠' }
              ].map((system, i) => (
                <motion.div 
                  variants={itemFadeIn}
                  key={i} 
                  className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-brand-navy/5 hover:-translate-y-2 transition-all duration-300 border border-brand-teal/5"
                >
                  <div className="text-4xl mb-4 opacity-80">{system.icon}</div>
                  <h4 className="font-dm text-sm font-bold text-brand-navy">{system.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Signature Programs Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-navy mb-4">Signature Programs</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-ice rounded-[2rem] p-8 border border-brand-teal/10"
            >
              <h3 className="font-cormorant text-2xl font-bold text-brand-navy mb-6">Integrative Medicine Programs</h3>
              <ul className="space-y-4">
                {[
                  'Cardiac Recovery & Circulation Program',
                  'Diabetes Complication Recovery Program',
                  'Pain Recovery Program'
                ].map((prog, i) => (
                  <li key={i} className="bg-white rounded-xl p-4 shadow-sm border border-brand-teal/5 font-dm text-sm font-medium text-brand-text flex items-center gap-3 group hover:border-brand-teal/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-brand-teal group-hover:scale-150 transition-transform"></div>
                    {prog}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Category 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brand-ice rounded-[2rem] p-8 border border-brand-teal/10"
            >
              <h3 className="font-cormorant text-2xl font-bold text-brand-navy mb-6">Healthspan Optimisation Programs</h3>
              <ul className="space-y-4">
                {[
                  'Vitality & Energy Restoration Program',
                  'Executive Healthspan Optimisation Program'
                ].map((prog, i) => (
                  <li key={i} className="bg-white rounded-xl p-4 shadow-sm border border-brand-teal/5 font-dm text-sm font-medium text-brand-text flex items-center gap-3 group hover:border-brand-teal/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-brand-teal group-hover:scale-150 transition-transform"></div>
                    {prog}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Category 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-brand-ice rounded-[2rem] p-8 border border-brand-teal/10"
            >
              <h3 className="font-cormorant text-2xl font-bold text-brand-navy mb-6">Women's Health Programs</h3>
              <ul className="space-y-4">
                {[
                  'Hormonal Balance Program',
                  'Menopause Support Program',
                  'Pelvic Health & Recovery Program',
                  'Intimate Wellness & Regeneration Program'
                ].map((prog, i) => (
                  <li key={i} className="bg-white rounded-xl p-4 shadow-sm border border-brand-teal/5 font-dm text-sm font-medium text-brand-text flex items-center gap-3 group hover:border-brand-teal/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-brand-teal group-hover:scale-150 transition-transform"></div>
                    {prog}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/programs">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-brand-navy border border-brand-teal/20 rounded-full font-dm font-bold text-xs tracking-[0.2em] uppercase shadow-sm hover:border-brand-teal hover:bg-brand-ice transition-all inline-flex items-center gap-3"
              >
                View All Programs <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Therapies Section */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-navy mb-4">Therapies</h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Hyperbaric Oxygen Therapy (HBOT)', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' },
              { name: 'EECP Therapy', img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800' },
              { name: 'Ozone Therapy', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800' },
              { name: 'Red Light Therapy', img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800' },
              { name: 'Molecular Hydrogen Therapy', img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800' },
              { name: 'PRP Therapy', img: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800' },
              { name: 'Pain Portal Blocks', img: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800' },
              { name: 'Functional Gynaecology Procedures', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' }
            ].map((therapy, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
              >
                <img src={therapy.img} alt={therapy.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h4 className="font-cormorant text-xl font-bold text-white mb-2">{therapy.name}</h4>
                  <p className="font-dm text-xs text-brand-gold uppercase tracking-wider font-bold flex items-center gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Patient Journey Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-navy mb-4">Your Health Restoration Journey</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-5xl mx-auto">
            {['Consultation', 'Assessment', 'Diagnosis', 'Program', 'Therapy', 'Recovery', 'Optimisation'].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 lg:gap-6"
              >
                <div className="bg-brand-ice text-brand-teal font-dm font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-full border border-brand-teal/20 shadow-sm">
                  {step}
                </div>
                {i < 6 && <ArrowRight className="text-brand-teal/40 w-5 h-5 hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why ALMACURA Section */}
      <section className="py-24 bg-brand-navy text-white relative">
        <div className="absolute inset-0 bg-brand-teal/5"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-4">Why ALMACURA</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Hospital-based integrative model' },
              { title: 'Combines multiple validated systems of care' },
              { title: 'Structured program-based protocols' },
              { title: 'Focus on root causes and function' },
              { title: '30+ years clinical leadership' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <CheckCircle className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                <p className="font-dm text-sm font-medium leading-relaxed">{feature.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA Section */}
      <section className="py-32 bg-brand-beige relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-brand-navy mb-8">Start Your Health Restoration Journey</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-brand-navy text-white rounded-full font-dm font-bold text-sm tracking-[0.2em] uppercase shadow-xl hover:bg-brand-teal transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </motion.button>
              </Link>
              <a href="https://wa.me/919989033686" target="_blank" rel="noreferrer">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-[#25D366] text-white rounded-full font-dm font-bold text-sm tracking-[0.2em] uppercase shadow-xl hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp Now
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
