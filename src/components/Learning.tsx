import { Binary, BrainCircuit, Network, Globe, Workflow, type LucideIcon } from 'lucide-react';
import { learningItems } from '@/data/learning';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Binary,
  BrainCircuit,
  Network,
  Globe,
  Workflow,
};

export default function Learning() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="learning" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className={`max-w-7xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-blue-400 mb-2">06 / Growth</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Currently Learning</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            I believe consistent learning and hands-on projects are the best ways to improve
            as a developer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {learningItems.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Binary;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-2xl glass card-hover"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 flex items-center justify-center">
                  <Icon size={22} className="text-blue-400" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              </div>
            );
          })}

          {/* Quote card */}
          <div className="flex items-center p-5 rounded-2xl gradient-bg text-white">
            <p className="text-sm font-medium leading-relaxed">
              "Consistent learning and hands-on projects are the best ways to grow."
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6 font-mono">
          This section is updated as I explore new areas.
        </p>
      </div>
    </section>
  );
}
