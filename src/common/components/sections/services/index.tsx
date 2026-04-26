'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import {
  Code,
  Palette,
  Shield,
  Cpu,
  Smartphone,
  Zap,
  ArrowRight,
  TrendingUp,
  Database,
  BarChart3,
  SearchCode
} from 'lucide-react';

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Frontend Engineering',
    description: 'Building high-performance, scalable web applications using React and Next.js with a focus on clean architecture.',
    color: 'primary'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Performance Optimization',
    description: 'Achieving high Lighthouse scores through route-level code splitting, lazy loading, and image optimization.',
    color: 'secondary'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Payment Integration',
    description: 'Integrating secure payment flows like Stripe, PayFast, and Easypaisa with JWT-secured token exchange.',
    color: 'accent'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Data Visualization',
    description: 'Building interactive experiment visualizations and dashboards using Chart.js for complex data analysis.',
    color: 'primary'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Backend & APIs',
    description: 'Designing REST API contracts and implementing robust state management using Redux Toolkit and RTK Query.',
    color: 'secondary'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Responsive Design',
    description: 'Crafting pixel-perfect, mobile-first interfaces with Tailwind CSS and Framer Motion for smooth micro-interactions.',
    color: 'accent'
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1 rounded-full bg-muted border border-border text-xs font-bold tracking-widest text-muted-foreground uppercase"
          >
            Expertise
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground uppercase">
            WHAT <span className="text-primary italic">I DO</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg font-medium">
            Specialized frontend engineering and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute -top-12 -right-12 w-24 h-24 bg-${service.color}/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
              
              <div className={`inline-flex p-4 rounded-2xl bg-${service.color}/10 text-${service.color} mb-6 transition-colors group-hover:bg-${service.color} group-hover:text-white`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground tracking-tight group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-bold text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-primary">
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
           className="mt-20 p-12 rounded-[40px] bg-foreground text-background relative overflow-hidden group shadow-2xl"
        >
           <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="space-y-4 text-center md:text-left">
               <h3 className="text-3xl md:text-4xl font-black tracking-tight uppercase">Ready to start <br /> your next project?</h3>
               <p className="text-background/60 font-medium max-w-md">Let's build something unique that pushes the limits of what is possible.</p>
             </div>
             <a
               href="#contact"
               className="inline-flex h-16 items-center justify-center rounded-2xl bg-primary px-10 text-lg font-black text-white shadow-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
             >
               GET STARTED
             </a>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
