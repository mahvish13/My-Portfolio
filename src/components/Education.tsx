import { GraduationCap, Building2, MapPin, Calendar } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Education() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className={`max-w-7xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-blue-400 mb-2">05 / Education</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-12">
            {/* Timeline line */}
            <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-blue-500 to-transparent" />

            <div className="relative">
              <div className="absolute -left-[1.45rem] sm:-left-[1.95rem] top-1.5 w-6 h-6 rounded-full gradient-bg flex items-center justify-center glow-purple">
                <GraduationCap size={12} className="text-white" />
              </div>

              <div className="p-6 rounded-2xl glass card-hover">
                <h3 className="text-lg font-semibold mb-1">
                  B.Tech — Computer Science and Engineering
                </h3>
                <p className="text-blue-400 text-sm flex items-center gap-1.5 mb-3">
                  <Building2 size={14} />
                  Babu Banarasi Das Institute of Technology and Management (BBDITM)
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs">
                    <Calendar size={12} />
                    2023 – 2027
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs">
                    <MapPin size={12} />
                    Lucknow, India
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Currently pursuing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
