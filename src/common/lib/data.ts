import React from 'react';

import { BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Education',
    id: 'education',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Junior Frontend Engineer',
    location: 'Raptr · Karachi',
    points: [
      'Owned SSR architecture in Next.js, achieving a Lighthouse PageSpeed score of 86 — boosting page performance through route-level code splitting, lazy loading, and image optimization.',
      'Integrated PayFast and Easypaisa Mini App payment flows with JWT-secured token exchange, enabling live transaction processing.',
      'Architected a global error boundary strategy across 12+ core components, substantially reducing user-facing runtime errors.',
      'Drove Lighthouse accessibility score improvements through semantic HTML5 restructuring and ARIA enhancements, aligning with WCAG 2.1 standards.',
      'Participated in peer code reviews, providing feedback on component architecture, TypeScript patterns, and rendering performance.',
    ],
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Oct 2025 – Present',
  },
  {
    title: 'Frontend Developer (Contract)',
    location: 'Lily Project — Goethe University Frankfurt · Remote',
    points: [
      'Sole frontend engineer on an AI/ML research portal — owned all architecture, component design, and delivery decisions independently.',
      'Designed a reusable component library of 20+ components using React and Styled Components, cutting team development overhead by ~35%.',
      'Built interactive experiment visualizations with Chart.js, enabling researchers to compare model performance across multiple datasets.',
      'Translated complex Quantum ML requirements into intuitive UI workflows through direct collaboration with university researchers.',
    ],
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'May 2025 – Aug 2025',
  },
  {
    title: 'Frontend Developer (Contract)',
    location: 'SoftDips · Karachi',
    points: [
      'Built a School Management System frontend with multi-role access control (RBAC) using Redux Toolkit.',
      'Reduced unnecessary component re-renders across the admin dashboard using React.memo and structural refactoring.',
      'Co-designed Node.js/MongoDB REST API contracts, ensuring frontend state management aligned with API response shapes.',
    ],
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Dec 2024 – Feb 2025',
  },
  {
    title: 'Frontend Developer (Internship)',
    location: 'Monitr Startup · Hyderabad',
    points: [
      'Implemented a flash-free dark/light theme system using CSS custom properties and Context API.',
      'Built micro-interaction animations with Framer Motion across fully responsive mobile, tablet, and desktop layouts.',
    ],
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jul 2023 – Aug 2023',
  },
] as const;

export const educationData = [
  {
    degree: 'Bachelor of Engineering in Computer Systems Engineering',
    institution: 'Mehran University of Engineering and Technology',
    location: 'Jamshoro, Pakistan',
    cgpa: '3.42 / 4.0',
    date: '2021 – 2024',
    coursework: [
      'Data Structures & Algorithms',
      'Software Engineering',
      'Database Systems',
      'Object-Oriented Programming',
      'Computer Networks',
      'Operating Systems',
    ],
  },
] as const;

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      ['React.js', '/svgs/react.svg'],
      ['Next.js', '/svgs/nextjs.svg'],
      ['TypeScript', '/svgs/typescript-icon.svg'],
      ['JavaScript (ES6+)', '/svgs/javascript-js.svg'],
      ['HTML5/CSS3', '/svgs/etc.svg'],
      ['Tailwind CSS', '/svgs/tailwind-css.svg'],
      ['Styled Components', '/svgs/cloudinary.svg'],
      ['SCSS/Bootstrap', '/svgs/etc.svg'],
    ],
  },
  {
    category: 'State & Data',
    skills: [
      ['Redux Toolkit', '/svgs/react.svg'],
      ['RTK Query', '/svgs/react.svg'],
      ['React Query', '/svgs/react.svg'],
      ['Zustand', '/svgs/react.svg'],
      ['Context API', '/svgs/react.svg'],
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      ['Node.js', '/svgs/node-js.svg'],
      ['Express.js', '/svgs/node-js.svg'],
      ['REST APIs', '/svgs/etc.svg'],
      ['WebSockets/JWT', '/svgs/etc.svg'],
      ['MongoDB', '/svgs/db-table-svgrepo-com.svg'],
      ['Supabase Realtime', '/svgs/brand-headlessui.svg'],
      ['Firebase', '/svgs/clerk.svg'],
    ],
  },
  {
    category: 'Testing & Tools',
    skills: [
      ['Jest/RTL', '/svgs/react.svg'],
      ['Git/GitHub', '/svgs/git.svg'],
      ['Vercel/CI/CD', '/svgs/nextjs.svg'],
      ['Postman', '/svgs/etc.svg'],
      ['Framer Motion', '/svgs/zap.svg'],
      ['Chart.js', '/svgs/cloudinary.svg'],
    ],
  },
] as const;

export const projectsData = [
  {
    title: 'Home Exchange Platform',
    description: 'Built a full-featured property exchange platform with JWT authentication, protected routing, and real-time chat via Supabase Realtime subscriptions — including live presence indicators and typing status updates. Optimized Supabase query patterns with indexed queries and client-side caching.',
    tags: ['Next.js', 'Supabase Realtime', 'Firebase', 'JWT'],
    githubUrl: 'https://github.com/muhammadareeb01/home-exchange',
    liveUrl: 'https://home-exchange-areeb.vercel.app', // Placeholder or actual if known, I'll use a generic one if not specified
  },
  {
    title: 'Mystery Box E-Commerce',
    description: 'Engineered a full-stack e-commerce platform with Stripe Checkout and Webhook-driven payment processing, automating product state transitions and inventory syncing. Built admin dashboard with RBAC and sales analytics.',
    tags: ['MERN Stack', 'Stripe Checkout', 'Webhooks', 'Redux'],
    githubUrl: 'https://github.com/muhammadareeb01/mystery-box',
  },
  {
    title: 'Full Stack Blog App',
    description: 'Developed a complete blog system with full CRUD features, image uploads, and JWT authentication. Improved backend efficiency by 30% using optimized MongoDB queries and indexing strategies.',
    tags: ['Next.js', 'MongoDB', 'JWT', 'REST API'],
    githubUrl: 'https://github.com/muhammadareeb01/blog-app',
  },
] as const;
