import React from "react";
import { SectionId, Project } from "../types";
import { ArrowUpRight } from "lucide-react";

const projects: Project[] = [
  {
    id: 1,
    title: "AI Chatbot",
    description:
      "Developed a real-time AI chatbot using Next.js and Mistral AI Open API to support conversational access to document-based information.",
    tech: ["React", "Tailwind CSS", "Mistral AI Open API"],
    link: "https://github.com/karan-dev-ctrl/MIstral-AI---Chatbot",
  },
  {
    id: 2,
    title: "Data Clustering & Classification - Google Review Dataset",
    description:
      "Designed and evaluated unsupervised ML pipelines using K-Means, DBSCAN, Spectral Clustering, and PCA.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "PCA"],
    link: "https://github.com/karan-dev-ctrl/Machine-Learning---Data-Clustering-project/blob/master/Data%20Clustering.ipynb",
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
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col justify-between h-80"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={24}
                    className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0"
                  />
                </div>
                <p className="text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full text-gray-600 uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
