import { useState } from 'react';
import { Github, ExternalLink, X, Sparkles, Lightbulb, Wrench, GraduationCap } from 'lucide-react';
import { MessageSquare, Brush, type LucideIcon } from 'lucide-react';
import { projects, projectTechnologies, type Project } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Brush,
};

export default function Projects() {
  const { ref, visible } = useScrollReveal();
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.technologies.includes(filter));

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className={`max-w-7xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-blue-400 mb-2">04 / Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            Practical applications I've built to learn and demonstrate my skills.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projectTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === tech
                  ? 'gradient-bg text-white'
                  : 'glass text-gray-400 hover:text-white hover:border-blue-400/30'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project) => {
            const Icon = iconMap[project.icon] ?? MessageSquare;
            return (
              <div
                key={project.id}
                className="group p-6 rounded-2xl glass card-hover cursor-pointer relative overflow-hidden"
                onClick={() => setSelected(project)}
              >
                {project.featured && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                    <Sparkles size={11} />
                    Featured
                  </span>
                )}

                {/* Visual */}
                <div className="mb-5 h-36 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent" />
                  </div>
                  <Icon size={48} className="text-blue-400/60 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-sm text-gray-300 hover:text-white transition-all"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-sm text-gray-300 hover:text-blue-400 transition-all"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                  <span className="ml-auto text-xs text-blue-400 group-hover:translate-x-1 transition-transform">
                    View Details →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-8">No projects match this filter.</p>
        )}
      </div>

      {/* Project Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl glass border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="sticky top-0 flex items-start justify-between p-6 border-b border-white/5 glass z-10">
              <div>
                {selected.featured && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-2">
                    <Sparkles size={11} />
                    Featured Project
                  </span>
                )}
                <h3 className="text-xl font-semibold">{selected.title}</h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-gray-400 leading-relaxed">{selected.shortDescription}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb size={16} className="text-amber-400" />
                    <h4 className="font-medium text-sm">Problem</h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {selected.longDescription.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={16} className="text-blue-400" />
                    <h4 className="font-medium text-sm">Solution</h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {selected.longDescription.solution}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Wrench size={16} className="text-violet-400" />
                  <h4 className="font-medium text-sm">Technologies</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selected.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap size={16} className="text-green-400" />
                  <h4 className="font-medium text-sm">What I Learned</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {selected.longDescription.learned}
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-bg text-white font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
                {selected.liveDemo && (
                  <a
                    href={selected.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass text-gray-200 font-medium text-sm hover:text-blue-400 transition-all"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
