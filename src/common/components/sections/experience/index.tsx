'use client';

import { motion } from 'framer-motion';
import React from 'react';

import SectionHeading from '@/common/components/shared/section-heading';
import { experiencesData } from '@/common/lib/data';
import { useSectionInView } from '@/common/lib/hooks';

export default function Experience() {
  const { ref } = useSectionInView('experience');

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden md:block" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading>Professional Experience</SectionHeading>

        <div className="max-w-5xl mx-auto mt-16 space-y-12">
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className="flex-1 w-full">
                <div className="p-8 rounded-[2.5rem] bg-card/50 backdrop-blur-xl border border-border hover:border-primary/50 transition-all duration-500 shadow-xl group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                        {item.icon}
                      </div>
                      <span className="text-xs font-black tracking-widest text-muted-foreground uppercase bg-muted/50 px-3 py-1 rounded-full">
                        {item.date}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-2xl font-black text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-primary font-bold text-sm uppercase tracking-widest">
                        {item.location}
                      </p>
                    </div>

                    <ul className="!mt-4 space-y-2">
                      {item.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-muted-foreground font-medium leading-relaxed group/item"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 group-hover/item:scale-150 transition-transform" />
                          <span className="text-sm md:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Center Dot */}
              <div className="relative hidden md:flex items-center justify-center w-12">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] z-20" />
                <div className="absolute w-12 h-12 rounded-full bg-primary/10 animate-pulse" />
              </div>

              {/* Empty Space for alignment */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
