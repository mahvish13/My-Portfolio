import { Briefcase, CheckCircle2, Circle, Building2, Calendar } from 'lucide-react';
import { internshipJourney } from '@/data/journey';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Experience() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className={`max-w-7xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-blue-400 mb-2">03 / Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Internship & Experience</h2>
        </div>

        {/* Main timeline */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="relative pl-8 sm:pl-12">
            {/* Timeline line */}
            <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-transparent" />

            <div className="relative">
              <div className="absolute -left-[1.45rem] sm:-left-[1.95rem] top-1.5 w-6 h-6 rounded-full gradient-bg flex items-center justify-center glow-blue">
                <Briefcase size={12} className="text-white" />
              </div>

              <div className="p-6 rounded-2xl glass card-hover">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">Software Development Intern</h3>
                    <p className="text-blue-400 text-sm flex items-center gap-1.5 mt-1">
                      <Building2 size={14} />
                      The Entrepreneurship Network (TEN)
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                    <Calendar size={12} />
                    2026 – Present
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Selected for a Software Development Internship at TEN, working on practical
                  development tasks and improving my technical and professional skills.
                </p>
                <div className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Active
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Internship Journey */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold">Internship Journey</h3>
          <p className="text-gray-400 mt-2 text-sm">
            A snapshot of my progress through the internship program.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {internshipJourney.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl glass card-hover relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-2xl font-bold gradient-text">{item.step}</span>
                {item.status === 'active' ? (
                  <CheckCircle2 size={18} className="text-green-400" />
                ) : (
                  <Circle size={18} className="text-gray-600" />
                )}
              </div>
              <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mt-6 font-mono">
          This section will be updated as the internship progresses.
        </p>
      </div>
    </section>
  );
}
