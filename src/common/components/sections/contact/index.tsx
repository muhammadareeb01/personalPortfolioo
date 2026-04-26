'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Mail,
  MessageSquare,
  Send,
  Phone,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    isSubmitting: false,
    submitted: false,
    error: false,
  });
  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setFormState({ isSubmitting: true, submitted: false, error: false });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send');

      setFormState({ isSubmitting: false, submitted: true, error: false });
      setFormData({ email: '', message: '' });
      setTimeout(() => setFormState(s => ({ ...s, submitted: false })), 5000);
    } catch (error) {
      setFormState({ isSubmitting: false, submitted: false, error: true });
      setTimeout(() => setFormState(s => ({ ...s, error: false })), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.04]" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '32px 32px' }} 
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            <div className="space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-widest uppercase"
              >
                <Sparkles className="w-4 h-4" />
                GET IN TOUCH
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight leading-none">
                Let's Work <br />
                <span className="text-primary italic">Together</span>
              </h2>
              
              <p className="text-muted-foreground text-lg font-medium max-w-md mx-auto lg:mx-0">
              Feel free to reach out for collaboration or a quick chat.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: <Mail />, label: 'EMAIL ME', value: 'syedareebali795@gmail.com', href: 'mailto:syedareebali795@gmail.com' },
                { icon: <Phone />, label: 'CALL ME', value: '+92 331 3521879', href: 'tel:+923313521879' }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-card border border-border group hover:border-primary/50 transition-all"
                >
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-black tracking-widest text-muted-foreground uppercase mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-foreground">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10" />
            
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-card border border-border shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-xs font-black tracking-widest text-muted-foreground uppercase ml-2">YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="w-full h-16 px-6 rounded-2xl bg-muted/30 border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-foreground"
                  />
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-black tracking-widest text-muted-foreground uppercase ml-2">YOUR MESSAGE</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full p-6 rounded-2xl bg-muted/30 border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-foreground resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState.isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-16 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {formState.isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      SEND MESSAGE <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {formState.submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 font-bold justify-center"
                    >
                      <CheckCircle2 className="w-5 h-5" /> Message Received
                    </motion.div>
                  )}
                  {formState.error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 font-bold justify-center"
                    >
                      <AlertCircle className="w-5 h-5" /> Error sending message. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
