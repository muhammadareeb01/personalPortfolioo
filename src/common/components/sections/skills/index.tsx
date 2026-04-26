"use client";

import React from "react";
import { skillsData } from "@/common/lib/data";
import { useSectionInView } from "@/common/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/common/components/shared/section-heading";
import { Code2, Database, ShieldCheck, Zap } from 'lucide-react';

const icons = [
  <Code2 className="w-6 h-6" key="frontend" />,
  <Zap className="w-6 h-6" key="state" />,
  <Database className="w-6 h-6" key="backend" />,
  <ShieldCheck className="w-6 h-6" key="tools" />
];

export default function Skills() {
  const { ref } = useSectionInView("skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading>Technical Expertise</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-card/50 backdrop-blur-xl border border-border hover:border-primary/30 transition-all duration-500 shadow-xl group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {icons[categoryIndex]}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-foreground">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border hover:border-primary/50 hover:bg-card transition-all cursor-default"
                  >
                    <Image
                      src={skill[1]}
                      alt={skill[0]}
                      width={20}
                      height={20}
                      className="w-5 h-5 object-contain grayscale group-hover:grayscale-0 transition-all"
                    />
                    <span className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">
                      {skill[0]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
