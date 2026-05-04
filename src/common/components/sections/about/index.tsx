'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Award,
  Star,
  Globe,
  TrendingUp,
  Zap,
  ArrowRight,
  ShieldCheck,
  Rocket,
} from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const stats = [
  {
    icon: <Star />,
    label: 'Fiverr Seller',
    value: 'Level 2',
    color: 'primary',
  },
  { icon: <Award />, label: 'EXPERIENCE', value: '1+ YEAR', color: 'accent' },
];

export default function About() {
  const containerRef = useRef(null);

  return (
    <section
      id="about"
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Background Accents (Simplified) */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Clean Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square group">
              {/* Subtle Animated Frame */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-[3rem] animate-[spin_30s_linear_infinite]" />

              {/* Main Image Container */}
              <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden shadow-2xl bg-card border-2 border-border group-hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/profile.jfif"
                  alt="Founder Muhammad Areeb"
                  fill
                  className="object-cover transition-all duration-700 hover:scale-110"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[10px] font-black tracking-widest text-white/70 uppercase mb-1">
                    FRONTEND ENGINEER
                  </span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                    MUHAMMAD AREEB
                  </h3>
                </div>
              </div>

              {/* Minimal Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -right-2 p-3 rounded-2xl bg-card border border-border shadow-lg"
              >
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Narrative Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-widest uppercase"
              >
                <Rocket className="w-4 h-4" />
                MY JOURNEY
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-tight leading-none">
                BUILDING DIGITAL <br />
                <span className="text-primary italic">EXPERIENCES.</span>
              </h2>

              <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                I am a results driven Software Developer with over 1 year of
                experience building scalable web applications. I specialize in
                the React ecosystem, including Next.js and TypeScript, to
                deliver high performance user interfaces. Currently open for new
                opportunities, I bring a strong foundation in modern frontend
                architecture, accessibility, and efficient state management. My
                background includes delivering full stack solutions and
                optimizing production grade platforms for diverse clients.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-card border border-border group hover:border-primary transition-all"
                >
                  <div
                    className={`mb-3 text-muted-foreground group-hover:text-primary transition-colors`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-xl font-black text-foreground uppercase">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-foreground font-black uppercase text-sm hover:text-primary transition-all"
              >
                LET&apos;S WORK TOGETHER <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
