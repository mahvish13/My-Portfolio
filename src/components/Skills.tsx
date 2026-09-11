import { Code2, Database, Globe, BrainCircuit, Wrench, type LucideIcon } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  Globe,
  BrainCircuit,
  Wrench,
};

export default function Skills() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className={`max-w-7xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-blue-400 mb-2">02 / Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Technical Skills</h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            Technologies and tools I work with across different areas of development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] ?? Code2;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl glass card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-gray-300 hover:border-blue-400/30 hover:text-blue-400 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
