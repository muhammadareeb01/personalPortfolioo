'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Plus,
  Minus,
  HelpCircle,
  Zap,
  Globe,
  Award,
  CheckCircle2,
  Sparkles,
  Clock,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '@/common/components/shared/section-heading';

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'I specialize in building production-grade web applications with React, Next.js, and TypeScript. I also handle backend integration, performance optimization, and creating reusable component libraries.',
    icon: <Zap />
  },
  {
    question: 'How long does a project usually take?',
    answer: 'The timeline varies based on complexity. A dedicated landing page might take a week, while a full-scale SaaS platform could take several months. I follow agile methodologies to ensure iterative delivery.',
    icon: <Clock />
  },
  {
    question: 'Do you work with clients across the world?',
    answer: 'Yes, I am experienced in working with international teams, including a German university research portal. I am open to remote roles with EU/US time zone overlap.',
    icon: <Globe />
  },
  {
    question: 'Why should we work together?',
    answer: 'I bring 1+ year of experience in shipping production ready code. I focus on high performance (Lighthouse scores of 86+), accessibility (WCAG 2.1), and secure payment integrations.',
    icon: <Sparkles />
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading>Common Questions</SectionHeading>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl border transition-all duration-300 ${
                openIndex === index 
                ? 'bg-card border-primary shadow-2xl shadow-primary/5' 
                : 'bg-muted/10 border-border hover:border-muted-foreground/30'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 md:p-8 flex items-center justify-between gap-6 text-left"
              >
                <div className="flex items-center gap-6">
                  <div className={`p-3 rounded-2xl transition-colors ${
                    openIndex === index ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                  }`}>
                    {faq.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <div className={`p-2 rounded-full border transition-colors ${
                  openIndex === index ? 'border-primary text-primary' : 'border-border text-muted-foreground'
                }`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 pt-0 ml-14 md:ml-20">
                      <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-foreground font-black uppercase tracking-widest text-sm"
          >
            HAVE MORE QUESTIONS? <span className="text-primary group-hover:underline underline-offset-4">ASK ME DIRECTLY</span>
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
