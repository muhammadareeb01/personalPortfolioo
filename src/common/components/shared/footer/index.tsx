'use client';

import { motion } from 'framer-motion';
import {
  Heart,
  Code,
  Sparkles,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Rocket,
  Star,
  Zap,
} from 'lucide-react';

export default function Footer() {

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/muhammad-areeb-ali', // Example link based on name
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-400',
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/muhammadareeb01',
      label: 'GitHub',
      gradient: 'from-gray-800 to-gray-600',
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    // { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    // { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-slate-900 via-slate-900 to-black dark:from-slate-950 dark:via-slate-950 dark:to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          style={{ bottom: '20%', right: '10%' }}
        />

        {/* Floating Stars */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-3 h-3 text-orange-400 fill-current" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="flex flex-row flex-wrap justify-between gap-12 lg:gap-8 mb-16">
            {/* Column 1: Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-sm lg:max-w-md"
            >
              {/* Text Logo */}
              <motion.div
                className="flex flex-col mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl font-black tracking-tighter text-white hover:text-primary transition-colors">MUHAMMAD AREEB</span>
                <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase leading-none mt-1">Portfolio</span>
              </motion.div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Specializing in building production-grade web applications with a focus on performance, accessibility, and modern user experiences.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {[
                  {
                    icon: <Mail className="w-4 h-4" />,
                    text: 'syedareebali795@gmail.com',
                    href: 'mailto:syedareebali795@gmail.com',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-orange-400">{item.icon}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-sm">{item.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="min-w-[150px]"
            >
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(link.href.slice(1))
                          ?.scrollIntoView({
                            behavior: 'smooth',
                          });
                      }}
                      className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="relative h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex justify-center items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-300`}
                  />
                  <div className="relative bg-slate-800 hover:bg-slate-700 p-3 rounded-lg border border-gray-700 hover:border-transparent transition-all duration-300">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center md:text-left"
            >
              <p className="text-gray-400 text-sm flex items-center gap-2 flex-wrap justify-center md:justify-start">
                <span>
                  &copy; 2025 Muhammad Areeb. All rights reserved.
                </span>
                {/* <span className="hidden sm:inline">•</span> */}
                {/* <span className="flex items-center gap-1">
                  Made with
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                  </motion.span>
                  by Muhammad Areeb
                </span> */}
              </p>
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300" />
              <div className="relative flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2.5 rounded-full font-semibold">
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                <span className="text-sm">Back to Top</span>
              </div>
            </motion.button>
          </div>
        </div>

      </div>

      {/* Bottom Gradient Line */}
      <motion.div
        className="h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.7 }}
      />
    </footer>
  );
}
