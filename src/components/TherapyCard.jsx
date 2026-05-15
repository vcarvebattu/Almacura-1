import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Atom, Lightbulb, Shield, ShieldAlert, Sparkles, Syringe, Waves, Wind, Zap } from 'lucide-react';

const iconMap = {
  Activity,
  Atom,
  Lightbulb,
  Shield,
  ShieldAlert,
  Sparkles,
  Syringe,
  Waves,
  Wind,
  Zap
};

export default function TherapyCard({ icon, title, description, slug, sessionDuration }) {
  const Icon = iconMap[icon] || Activity;

  return (
    <Link to={`/therapies/${slug}`} aria-label={`View details for ${title}`} className="block h-full">
      <motion.div
        whileHover={{ y: -6 }}
        className="glass-card p-6 h-full min-h-[280px] group relative overflow-hidden transition-all duration-300 hover:border-brand-teal hover:shadow-2xl hover:shadow-brand-teal/10 rounded-2xl flex flex-col"
      >
        <div className="absolute left-0 top-0 h-full w-1 bg-brand-teal scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
        
        <div className="mb-5 text-brand-teal bg-brand-ice w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        
        <h3 className="font-cormorant text-2xl text-brand-navy mb-3 leading-tight">{title}</h3>
        
        {sessionDuration && (
          <div className="font-dm text-[10px] font-bold text-brand-teal uppercase tracking-[0.2em] mb-4">
            {sessionDuration}
          </div>
        )}
        
        <p className="text-brand-muted text-sm leading-relaxed mb-5">{description}</p>
        
        <div className="mt-auto flex items-center gap-2 text-brand-teal text-[11px] uppercase tracking-[0.18em] font-dm font-bold group-hover:text-brand-navy transition-colors">
          <span>View Details</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </Link>
  );
}
