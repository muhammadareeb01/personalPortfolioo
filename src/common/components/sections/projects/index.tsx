'use client';

import React from 'react';

import SectionDivider from '@/common/components/shared/section-divider';
import SectionHeading from '@/common/components/shared/section-heading';
import { projectsData } from '@/common/lib/data';
import { useSectionInView } from '@/common/lib/hooks';

import Project from './_components/project';

export default function Projects() {
  const { ref } = useSectionInView('projects', 0.25);

  return (
    <section
      className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center dark:bg-background dark:text-foreground"
      id="projects"
      ref={ref}
    >
      <SectionHeading>Selected Projects</SectionHeading>
      <div className="my-24">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <SectionDivider />
    </section>
  );
}
