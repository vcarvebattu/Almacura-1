import { motion } from 'framer-motion';
import { Shield, Heart, Activity, Leaf, CheckCircle, ArrowRight } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <main className="w-full pt-32 pb-24 min-h-screen bg-brand-beige">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-8 max-w-[1440px] mx-auto mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="font-dm text-[11px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-4 block">
            Our Institute
          </span>
          <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-brand-navy mb-8">
            About <span className="italic text-brand-teal">ALMACURA</span>
          </h1>
          <p className="font-dm text-xl text-brand-text leading-relaxed">
            ALMACURA is a clinical institute dedicated to restoring health, enhancing vitality, and improving quality of life through a structured model integrating:
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto"
        >
          {[
            { title: 'Modern Clinical Medicine', icon: Shield },
            { title: 'Integrative Therapeutic Approaches', icon: Heart },
            { title: 'Healthspan Optimisation', icon: Activity },
            { title: 'Functional & Regenerative Gynaecology', icon: Leaf }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-6 text-center border border-brand-teal/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-ice rounded-xl flex items-center justify-center mx-auto mb-4 text-brand-teal">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-dm text-sm font-bold text-brand-navy leading-relaxed">{item.title}</h3>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Sections Grid */}
      <section className="px-4 sm:px-8 max-w-[1440px] mx-auto space-y-24">
        
        {/* Integrative Medicine & Yoga */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeInUp} className="bg-white p-12 rounded-[2.5rem] border border-brand-teal/10 shadow-lg shadow-brand-navy/5">
            <h2 className="font-cormorant text-4xl font-bold text-brand-navy mb-6">Integrative Medicine</h2>
            <p className="font-dm text-lg text-brand-text mb-6">
              At ALMACURA, integrative medicine builds upon conventional treatment.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span className="font-dm text-brand-text">Conventional care is the foundation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span className="font-dm text-brand-text">Additional therapies enhance recovery</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span className="font-dm text-brand-text">Multiple modalities are combined in a structured manner</span>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-brand-navy text-white p-12 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <h2 className="font-cormorant text-4xl font-bold mb-6">Core Component – Yoga Therapy</h2>
              <p className="font-dm text-lg text-white/80 mb-6">
                Yoga therapy plays a central role in:
              </p>
              <ul className="space-y-4 mb-8">
                {['Improving physiological balance', 'Regulating stress', 'Supporting recovery', 'Enhancing long-term resilience'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-gold mt-2 shrink-0"></div>
                    <span className="font-dm text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-white/10">
                <h3 className="font-dm text-sm font-bold uppercase tracking-wider text-brand-gold mb-4">Supportive Modalities</h3>
                <p className="font-dm text-white/80 text-sm">
                  In selected cases, Ayurvedic therapies and Homeopathy may be incorporated as complementary approaches within a clinical framework.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Functional Gynaecology & Conditions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
            <h2 className="font-cormorant text-4xl font-bold text-brand-navy mb-8">Conditions Addressed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Cardiovascular disease', 'Diabetes', 'Chronic fatigue', 'Chronic pain', 
                'Allergic & inflammatory disorders', 'Autoimmune disorders', 'Neurological disorders', 'Stress-related disorders'
              ].map((condition, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-brand-teal/5 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal"></div>
                  <span className="font-dm text-sm font-medium text-brand-text">{condition}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-brand-ice p-12 rounded-[2.5rem] border border-brand-teal/10 order-1 lg:order-2">
            <h2 className="font-cormorant text-4xl font-bold text-brand-navy mb-6">Functional & Regenerative Gynaecology</h2>
            <p className="font-dm text-lg text-brand-text mb-8">
              ALMACURA offers non-surgical, function-oriented approaches to women's health.
            </p>
            <h3 className="font-dm text-sm font-bold uppercase tracking-wider text-brand-teal mb-4">Focus Areas</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Hormonal balance', 'Menopause management', 'Pelvic floor health',
                'Sexual wellness', 'Vaginal rejuvenation', 'Post-delivery recovery'
              ].map((area, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-gold" />
                  <span className="font-dm text-sm text-brand-navy">{area}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white p-6 rounded-2xl border border-brand-teal/5">
              <p className="font-dm text-sm font-bold text-brand-navy">
                <span className="text-brand-teal uppercase tracking-wider block text-xs mb-1">Goal</span>
                To improve function, comfort, and quality of life.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Healthspan & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeInUp} className="bg-white p-12 rounded-[2.5rem] border border-brand-teal/10 shadow-lg shadow-brand-navy/5">
            <h2 className="font-cormorant text-4xl font-bold text-brand-navy mb-6">Healthspan Optimisation</h2>
            <p className="font-dm text-lg text-brand-text mb-6">Focuses on:</p>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Early detection', icon: '🔍' },
                { title: 'Metabolic correction', icon: '⚖️' },
                { title: 'Energy enhancement', icon: '⚡' },
                { title: 'Disease prevention', icon: '🛡️' }
              ].map((item, i) => (
                <li key={i} className="bg-brand-light p-4 rounded-xl flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-dm text-sm font-bold text-brand-navy">{item.title}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-8 border-t border-brand-teal/10">
              <h3 className="font-dm text-sm font-bold uppercase tracking-wider text-brand-teal mb-4">Model of Care</h3>
              <div className="flex flex-wrap gap-2 items-center text-xs font-dm font-bold text-brand-navy bg-brand-light p-4 rounded-xl">
                Treatment <ArrowRight className="w-3 h-3 text-brand-teal" /> 
                Recovery <ArrowRight className="w-3 h-3 text-brand-teal" /> 
                Restoration <ArrowRight className="w-3 h-3 text-brand-teal" /> 
                Regeneration <ArrowRight className="w-3 h-3 text-brand-teal" /> 
                Optimisation <ArrowRight className="w-3 h-3 text-brand-teal" /> 
                Healthspan
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex items-center h-full">
            <div className="w-full text-center lg:text-left">
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-navy mb-8">Our Philosophy</h2>
              <p className="font-dm text-2xl text-brand-teal italic mb-10 max-w-xl mx-auto lg:mx-0">
                "We aim to treat root causes, restore function, enhance vitality, and support healthy aging."
              </p>
              
              <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto lg:mx-0">
                {['Treat root causes', 'Restore function', 'Enhance vitality', 'Support healthy aging'].map((goal, i) => (
                  <div key={i} className="border-b border-brand-teal/20 pb-4">
                    <span className="font-dm text-lg font-bold text-brand-navy">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </section>
    </main>
  );
}
