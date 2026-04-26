'use client';

import About from '@/common/components/sections/about';
import { Contact } from '@/common/components/sections/contact/index';
import Education from '@/common/components/sections/education';
import Experience from '@/common/components/sections/experience';
import Hero from '@/common/components/sections/hero';
import Projects from '@/common/components/sections/projects';
import Skills from '@/common/components/sections/skills';
import Testimonials from '@/common/components/sections/testimonal';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-0">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Testimonials />
      <Contact />
    </main>
  );
}
