'use client';
import { motion } from 'framer-motion';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center space-y-4 mb-20 group">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        className="h-1.5 w-24 bg-primary rounded-full"
      />
      <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight text-center">
        {children}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '60px' }}
        viewport={{ once: true }}
        className="h-0.5 bg-accent/40 rounded-full"
      />
    </div>
  );
}
