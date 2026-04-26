'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { links } from '@/common/lib/data';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll
      const sections = links.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
           setActiveSection(links[index].id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-4 sm:py-6">
      <div className={`container mx-auto px-4 md:px-6`}>
        <motion.div 
          className={`flex items-center justify-between px-6 py-4 rounded-3xl transition-all duration-500 border ${
            scrolled 
            ? 'bg-[#0b1222] border-white/10 shadow-2xl scale-[1.02]' 
            : 'bg-[#0b1222]/90 border-white/5 shadow-lg'
          }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {/* Logo Section */}
          <Link 
            href="#home"
            onClick={(e) => smoothScrollTo(e, 'home')}
            className="flex flex-col group relative"
          >
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white group-hover:text-primary transition-colors uppercase">
              MUHAMMAD AREEB
            </span>
            <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase leading-none mt-1">
              Software Developer
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    onClick={(e) => smoothScrollTo(e, link.id)}
                    className={`relative px-3 py-2 text-xs font-black uppercase tracking-wider transition-colors ${
                      activeSection === link.id ? 'text-primary' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA / Actions */}
          <div className="flex items-center gap-4">
             <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-primary text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
              >
                Connect <ArrowRight className="w-4 h-4" />
              </motion.a>

              {/* Mobile Toggle */}
              <button 
                className="lg:hidden p-2 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 p-6 rounded-3xl bg-background/95 backdrop-blur-2xl border border-border shadow-2xl md:hidden"
          >
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    onClick={(e) => smoothScrollTo(e, link.id)}
                    className="block text-lg font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-border">
                <a href="#contact" className="flex items-center justify-between p-4 rounded-2xl bg-primary text-white font-black uppercase tracking-widest">
                  Let's Talk <ArrowRight />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
