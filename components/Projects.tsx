import React from 'react';
import { SectionId, Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers utilizing modern data visualization techniques.",
    tech: ["Next.js", "TypeScript", "Recharts"],
    link: "#",
  },
  {
    id: 2,
    title: "AI Content Studio",
    description: "Generative AI platform allowing users to create marketing copy and imagery in seconds.",
    tech: ["React", "Gemini API", "Tailwind"],
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-[#F0EEE6]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Selected Work</h2>
          <span className="hidden md:block text-secondary">2023 — Present</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col justify-between h-80"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0" />
                </div>
                <p className="text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full text-gray-600 uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;