'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Sparkles,
 
} from 'lucide-react';

import { useSectionInView } from '@/common/lib/hooks';
import { useActiveSectionContext } from '@/common/stores/active-section';

export default function Hero() {
  const { ref } = useSectionInView('home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-background pt-20"
    >
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center text-center gap-2 px-4 py-2 sm:py-1.5 rounded-3xl sm:rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-bold tracking-widest uppercase"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Software Developer</span>
            </div>
            <span className="hidden sm:inline">·</span>
            <span className="sm:inline">Around 2 Years Experience</span>
            <span className="hidden sm:inline">·</span>
            <span className="sm:inline">Open for Opportunities</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight flex flex-col sm:flex-row items-center justify-center sm:gap-4"
            >
              <span className="text-foreground uppercase">MUHAMMAD</span>
              <span className="text-primary uppercase">AREEB</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-primary font-black uppercase tracking-[0.5em] text-sm md:text-base"
            >
              Software Developer
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto px-4 sm:px-0"
            >
              Specializing in{' '}
              <span className="text-foreground border-b-2 border-primary/40">
                React & Next.js
              </span>{' '}
              to build high performance{' '}
              <span className="text-foreground border-b-2 border-accent/40">
                web experiences
              </span>
              . Around 2 years of experience delivering scalable production
              grade applications.
            </motion.p>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center"
          >
            <a
              href="#contact"
              className="group relative inline-flex h-14 w-full sm:w-64 items-center justify-center overflow-hidden rounded-xl bg-primary px-8 font-bold text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-2 font-black uppercase tracking-widest text-sm">
                LET&apos;S CONNECT{' '}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="#projects"
              className="group inline-flex h-14 w-full sm:w-64 items-center justify-center rounded-xl border-2 border-muted bg-background px-8 font-bold text-foreground transition-all hover:bg-muted/50 hover:border-primary/50 font-black uppercase tracking-widest text-sm"
            >
              VIEW PROJECTS
            </a>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-12 flex flex-wrap justify-center gap-8 md:gap-16 w-full max-w-4xl"
          >
            {[
              { label: 'EXPERIENCE', value: '2 YEARS' },
              { label: 'FREELANCE', value: '1 YEAR' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center space-y-1">
                <span className="text-3xl font-black text-foreground">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute top-[15%] right-[10%] hidden lg:block">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="p-4 rounded-2xl bg-card border border-border shadow-2xl backdrop-blur-xl"
        >
          <div className="w-12 h-1 bg-primary rounded-full mb-3" />
          <div className="w-24 h-1 bg-muted rounded-full mb-2" />
          <div className="w-16 h-1 bg-muted rounded-full" />
        </motion.div>
      </div>

      <div className="absolute bottom-[20%] left-[10%] hidden lg:block">
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="p-6 rounded-full bg-accent/10 border border-accent/20 border-border shadow-2xl backdrop-blur-xl"
        >
          <Star className="w-8 h-8 text-accent fill-accent" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-20 text-background"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
