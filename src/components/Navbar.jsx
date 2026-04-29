import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Therapies', path: '/therapies' },
  { name: 'Functional Gynaecology', path: '/functional-gynaecology' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none"
      >
        {/* Top Bar - Administrative & Mission */}
        <div className="bg-brand-navy text-white/60 py-2 px-8 hidden sm:block border-b border-brand-teal/20 pointer-events-auto shadow-sm shadow-brand-navy/5">
          <div className="max-w-[1440px] mx-auto flex justify-between items-center">
            <span className="text-[9px] font-dm font-bold tracking-[0.3em] uppercase">Institute of Integrative Medicine, Healthspan Optimisation & Functional Gynaecology</span>
            <div className="flex gap-6 items-center">
              <span className="text-[9px] font-dm font-bold tracking-[0.3em] uppercase text-brand-teal">Hyderabad</span>
            </div>
          </div>
        </div>

        {/* Main Nav Bar */}
        <div className={`transition-all duration-700 ${scrolled ? 'pt-2' : 'pt-4'}`}>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
            <div 
              className={`flex items-center justify-between transition-all duration-700 rounded-full px-8 py-4 ${
                scrolled 
                  ? 'bg-white/95 backdrop-blur-3xl shadow-[0_20px_50px_rgba(11,110,110,0.12)] border border-brand-teal/10' 
                  : 'bg-white/60 backdrop-blur-xl border border-white/40 shadow-sm'
              }`}
            >
              {/* Logo - Left */}
              <Link to="/" className="flex items-center gap-5 group flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="ALMACURA"
                  className="h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="flex flex-col border-l border-brand-navy/10 pl-5">
                  <span className="font-cormorant text-[20px] font-bold tracking-[0.3em] text-brand-navy leading-none">
                    ALMACURA
                  </span>
                  <span className="font-dm text-[7px] tracking-[0.5em] text-brand-teal uppercase mt-1.5 font-bold opacity-60">
                    Clinic & Institute
                  </span>
                </div>
              </Link>

              {/* Nav Links - Right-aligned */}
              <div className="hidden lg:flex items-center gap-12">
                <nav className="flex items-center gap-9">
                  {navLinks.slice(1, 5).map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`font-dm text-[11px] font-bold tracking-[0.2em] uppercase transition-all flex items-center h-10 ${
                        location.pathname === link.path ? 'text-brand-teal' : 'text-brand-navy/60 hover:text-brand-teal'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                
                <Link to="/contact" className="flex items-center h-10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-navy text-white px-8 py-3 rounded-full font-dm font-bold text-[11px] tracking-[0.2em] uppercase shadow-lg shadow-brand-navy/10 hover:shadow-brand-teal/20 hover:bg-brand-teal transition-all h-full flex items-center justify-center min-w-[140px]"
                  >
                    Book Consultation
                  </motion.button>
                </Link>
              </div>

              {/* Mobile Menu Button - Also Center Aligned */}
              <div className="lg:hidden flex items-center h-10">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-3 rounded-full hover:bg-brand-teal/5 text-brand-navy transition-colors pointer-events-auto"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Ultra-High-Fidelity Backdrop */}
            <div className="absolute inset-0 bg-white/98 backdrop-blur-[40px]"></div>
            
            <div className="relative h-full flex flex-col justify-between px-8 py-14 z-10 overflow-hidden">
              {/* Header inside menu */}
              <div className="flex flex-col items-center">
                <span className="font-dm text-[9px] uppercase tracking-[0.4em] text-brand-teal font-bold mb-3">Institute Menu</span>
                <div className="w-10 h-[1.5px] bg-brand-teal/20"></div>
              </div>

              {/* Main Links Container - Scrollable if needed */}
              <div className="w-full flex flex-col items-center gap-1.5 overflow-y-auto pt-4 pb-8 no-scrollbar">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: shouldReduceMotion ? 0 : index * 0.04,
                        duration: 0.3
                      }}
                      className="w-full text-center"
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group relative inline-block py-2 font-cormorant transition-all duration-300 ${
                          isActive
                            ? 'text-brand-teal font-bold italic'
                            : 'text-brand-navy hover:text-brand-teal'
                        }`}
                        style={{ fontSize: '26px' }}
                      >
                        {link.name}
                        {isActive && (
                          <motion.div 
                            layoutId="activeTabMobile"
                            className="absolute -bottom-1 left-2 right-2 h-[1px] bg-brand-teal"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer CTA & Contact Bar */}
              <div className="flex flex-col items-center gap-6 mt-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full"
                >
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 bg-brand-navy text-white font-dm font-bold uppercase tracking-[0.2em] text-[10px] rounded-full shadow-xl shadow-brand-navy/10 transition-all"
                    >
                      Book Consultation
                    </motion.button>
                  </Link>
                  <div className="flex flex-col items-center gap-2 mt-6 opacity-40 font-dm text-[8px] uppercase tracking-widest font-bold text-brand-navy">
                    <span>Direct: +91 99890 33686</span>
                    <span>doctorkvsreddy@yahoo.com</span>
                  </div>
                </motion.div>

                {/* Decorative Brand Mark - Reduced scale */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.02 }}
                  transition={{ delay: 0.6 }}
                  className="font-cormorant text-5xl font-bold uppercase tracking-[0.4em] text-brand-navy leading-none pointer-events-none select-none"
                >
                  ALMA
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
