'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, MapPin, Calendar } from 'lucide-react';

import { educationData } from '@/common/lib/data';
import { useSectionInView } from '@/common/lib/hooks';

export default function Education() {
  const { ref } = useSectionInView('education');

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Glow accents */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-widest uppercase mb-6">
            <GraduationCap className="w-4 h-4" />
            Academic Background
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight">
            EDUCATION
          </h2>
        </motion.div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto"
          >
            {/* Main Education Card */}
            <div className="relative group">
              {/* Animated border glow */}
              <div className="absolute -inset-px rounded-[3rem] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />

              <div className="relative p-10 md:p-14 rounded-[3rem] bg-card/60 backdrop-blur-xl border border-border shadow-2xl">
                {/* Top Row: Degree + Date */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="relative shrink-0">
                      <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                        <GraduationCap className="w-9 h-9 text-primary group-hover:text-white transition-colors duration-500" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -inset-1 rounded-3xl border border-primary/20"
                      />
                    </div>

                    {/* Degree Info */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-bold text-base uppercase tracking-widest mt-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 mt-3">
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium">
                          <Calendar className="w-4 h-4" />
                          {edu.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CGPA Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="shrink-0 flex flex-col items-center justify-center p-6 rounded-3xl bg-primary/10 border border-primary/20 min-w-[140px]"
                  >
                    <Award className="w-8 h-8 text-primary mb-2" />
                    <span className="text-3xl font-black text-foreground">
                      {edu.cgpa}
                    </span>
                    <span className="text-[10px] font-black tracking-widest text-muted-foreground uppercase mt-1">
                      CGPA
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
