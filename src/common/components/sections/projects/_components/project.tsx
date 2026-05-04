'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

interface ProjectProps {
  title: string;
  description: string;
  tags: readonly string[];
  githubUrl: string;
  liveUrl?: string;
}

export default function Project({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-8 last:mb-0 w-full max-w-4xl mx-auto"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700" />

        <div className="flex flex-col p-10 md:p-14 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">
              Featured Project
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
            <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight leading-tight">
              {title}
            </h3>

            <div className="flex items-center gap-4 shrink-0">
              {liveUrl && (
                <Link
                  href={liveUrl}
                  target="_blank"
                  className="p-4 rounded-2xl bg-primary text-white hover:scale-110 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 group/btn"
                  title="Live Preview"
                >
                  <ExternalLink className="w-6 h-6" />
                </Link>
              )}
              <Link
                href={githubUrl}
                target="_blank"
                className="p-4 rounded-2xl bg-muted border border-border hover:border-primary hover:scale-110 transition-all group/btn"
                title="Source Code"
              >
                <Github className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <p className="text-muted-foreground text-xl leading-relaxed mb-10 font-medium italic max-w-3xl">
            &quot;{description}&quot;
          </p>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-6 py-2 rounded-2xl bg-muted/50 border border-border text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 3D Border Light Effect */}
        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-[2.5rem] transition-colors duration-500 pointer-events-none shadow-inner" />
      </div>
    </motion.div>
  );
}
