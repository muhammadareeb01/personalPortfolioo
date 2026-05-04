'use client';

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import { useRef, useState, useEffect, useCallback } from 'react';

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const testimonials = [
    {
      name: 'bilalkiani676',
      location: 'United Kingdom',
      image: '👩‍💼',
      rating: 5,
      text: 'Areeb was a pleasure to work with. He delivered the project on time, maintained excellent communication throughout, and demonstrated great professionalism. The quality of his work exceeded expectations, and he handled everything with efficiency and attention to detail. Highly recommended for any future projects.',
      gradient: 'from-blue-100 to-cyan-100', // Subdued
    },
    {
      name: 'alstoncobb',
      location: 'United States',
      image: '👨‍🔬',
      rating: 5,
      text: 'Working with Muhammad was overall a good experience and we were able to get to the final result. As a new coder the only difficult part was understanding the technical specifications he provided however we offered to continually help if I had any questions going forward. Nonetheless, it was definitely great value and he got the job done and did a great job.',
      gradient: 'from-purple-100 to-pink-100', // Subdued
    },
    {
      name: 'testaccmve',
      location: 'Belgium',
      image: '👨‍💼',
      rating: 5,
      text: 'Wow! Where can I even start? Muhammad went beyond every expectation! What an incredible talent! Could not recommend him enough! Nothing was too much, everything was done smoothly, fast and reliable. Thanks a lot for everything Muhammad. We will definitely work together again!',
      gradient: 'from-orange-100 to-rose-100', // Subdued
    },
    {
      name: 'oarthus',
      location: 'France',
      image: '👩‍💻',
      rating: 5,
      text: 'Working with Muhammad Areeb in Software Development was an EXCELLENT experience! His professionalism and attention to detail exceeded my expectations, and his proactive communication and quick responsiveness made the process seamless. Highly recommend his services! 😊',
      gradient: 'from-green-100 to-emerald-100', // Subdued
    },
    {
      name: 'sino2022',
      location: 'Germany',
      image: '👨‍💼',
      rating: 5,
      text: 'Muhammad wurde beauftragt, eine komplexe Personaldaten-Seite in ein Prisma-Modell zu integrieren. Dabei lag der Fokus darauf, die Datenstruktur anzupassen, Model-Relationen sicherzustellen und die Funktionen für Speicherung, Abruf, Bearbeitung sowie Aktualisierung zu implementieren. Die Aufgabe wurde mit höchster Präzision und zur vollsten Zufriedenheit abgeschlossen.',
      gradient: 'from-yellow-100 to-orange-100', // Subdued
    },
  ];

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-32 px-4 sm:px-6 lg:px-8 w-full bg-background overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-xs font-black tracking-widest text-muted-foreground uppercase">
              SUCCESS STORIES
            </span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-foreground uppercase tracking-tight">
            WHAT CLIENTS <span className="text-primary italic">SAY</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32"
        >
          {[
            {
              icon: <Users />,
              number: '15+',
              label: 'Happy Clients',
              color: 'primary',
            },
            {
              icon: <Award />,
              number: '15+',
              label: 'Projects Done',
              color: 'accent',
            },
            {
              icon: <TrendingUp />,
              number: '100%',
              label: 'Satisfaction',
              color: 'primary',
            },
            {
              icon: <Star />,
              number: '5.0',
              label: 'Avg Rating',
              color: 'accent',
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-card border border-border text-center shadow-sm"
            >
              <div
                className={`inline-flex p-3 rounded-2xl bg-muted text-${stat.color} mb-3`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-foreground uppercase">
                {stat.number}
              </div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute w-full"
              >
                <div className="relative flex flex-col md:flex-row bg-card border border-border rounded-[3rem] overflow-hidden shadow-2xl">
                  {/* Left Signature Side */}
                  <div
                    className={`md:w-1/3 p-10 bg-muted flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-border`}
                  >
                    <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center text-5xl mb-6 shadow-xl border-4 border-border">
                      {testimonials[activeIndex].image}
                    </div>
                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight mb-1">
                      {testimonials[activeIndex].name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      <MapPin className="w-3 h-3" />
                      {testimonials[activeIndex].location}
                    </div>
                  </div>

                  {/* Right Content Side */}
                  <div className="md:w-2/3 p-10 md:p-14 relative">
                    <Quote className="absolute top-10 right-10 w-20 h-20 text-muted opacity-20 pointer-events-none" />

                    <div className="flex gap-1 mb-8">
                      {[...Array(testimonials[activeIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-yellow-400"
                          />
                        ),
                      )}
                    </div>

                    <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed italic">
                      &quot;{testimonials[activeIndex].text}&quot;
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-8 mt-16">
            <button
              onClick={handlePrev}
              className="p-4 rounded-full bg-muted border border-border hover:border-primary transition-colors text-foreground"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-primary shadow-glow shadow-primary/50'
                      : 'w-2 bg-muted'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-4 rounded-full bg-muted border border-border hover:border-primary transition-colors text-foreground"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
