import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Layout, Activity, Heart, Users, FileText, Globe } from 'lucide-react';

const sitemapData = [
  {
    title: "Core Navigation",
    icon: <Globe className="w-5 h-5" />,
    links: [
      { name: "Home", path: "/" },
      { name: "About the Institute", path: "/about" },
      { name: "Meet Our Specialists", path: "/team" },
      { name: "Our Founder", path: "/founder" },
      { name: "Clinical Programs", path: "/programs" },
      { name: "Contact & Appointments", path: "/contact" }
    ]
  },
  {
    title: "Clinical Hub",
    icon: <Activity className="w-5 h-5" />,
    links: [
      { name: "Integrative Medicine", path: "/integrative-medicine" },
      { name: "Healthspan Optimization", path: "/healthspan-optimization" },
      { name: "Functional Gynaecology", path: "/functional-gynaecology" },
      { name: "Advanced Therapeutic Modalities", path: "/therapies" }
    ]
  },
  {
    title: "Therapeutic Modalities",
    icon: <Heart className="w-5 h-5" />,
    links: [
      { name: "HBOT (Oxygen Therapy)", path: "/therapies/hbot" },
      { name: "EECP (Heart Health)", path: "/therapies/eecp" },
      { name: "IV Nutrition", path: "/therapies/iv-therapy" },
      { name: "Ozone Therapy", path: "/therapies/ozone" },
      { name: "PRP Therapy", path: "/therapies/prp" },
      { name: "HIFEM Pelvic Chair", path: "/therapies/hifem" },
      { name: "HIFU Women Wellness", path: "/therapies/hifu" },
      { name: "Pain Management", path: "/therapies/dscb" }
    ]
  },
  {
    title: "Resources & Legal",
    icon: <FileText className="w-5 h-5" />,
    links: [
      { name: "Frequently Asked Questions", path: "/faq" },
      { name: "For Doctors & Referrals", path: "/for-doctors" },
      { name: "Medical Disclaimer", path: "/disclaimer" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Treatment", path: "/terms" }
    ]
  }
];

export default function Sitemap() {
  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="font-dm text-[11px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-4 block">
            Navigation Index
          </span>
          <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-brand-navy mb-6">
            Sitemap
          </h1>
          <p className="font-dm text-lg text-brand-text/70 max-w-2xl leading-relaxed">
            A comprehensive directory of all services, resources, and clinical documentation available at ALMACURA Institute.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {sitemapData.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-brand-teal/5"
            >
              <div className="flex items-center gap-3 mb-8 text-brand-teal">
                {section.icon}
                <h3 className="font-dm font-bold text-[13px] tracking-wider uppercase text-brand-navy">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="group flex items-center gap-2 text-brand-text/60 hover:text-brand-teal transition-all text-[13px] font-dm"
                    >
                      <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
