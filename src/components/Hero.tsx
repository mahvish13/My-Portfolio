import { ArrowRight, Mail, Sparkles, Terminal, Circle } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Animated gradient background blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-float [animation-delay:2s]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="animate-fade-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-gray-300">
                Currently Software Development Intern @ TEN
              </span>
            </div>

            <p className="text-lg text-gray-400 mb-3 font-mono">
              Hi, I'm Mahvish Siddique
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              B.Tech CSE Student &{' '}
              <span className="gradient-text">Aspiring Software Developer</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
              I build practical software projects, explore AI and machine learning, and
              continuously improve my problem-solving and development skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-all hover:scale-[1.02]"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass text-gray-200 font-medium hover:border-blue-400/40 transition-all"
              >
                <Mail size={18} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right: Code window visual */}
          <div className="animate-fade-in-delayed hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 gradient-bg opacity-10 rounded-3xl blur-2xl" />
              <div className="relative glass rounded-2xl overflow-hidden shadow-2xl">
                {/* Window header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <Circle size={12} className="fill-red-500/80 text-red-500/80" />
                  <Circle size={12} className="fill-yellow-500/80 text-yellow-500/80" />
                  <Circle size={12} className="fill-green-500/80 text-green-500/80" />
                  <span className="ml-2 text-xs text-gray-500 font-mono">developer.ts</span>
                </div>

                {/* Code content */}
                <div className="p-5 font-mono text-sm leading-relaxed">
                  <div className="flex gap-3">
                    <span className="text-gray-600 select-none w-4 text-right">1</span>
                    <div>
                      <span className="text-violet-400">const</span>{' '}
                      <span className="text-blue-400">developer</span>{' '}
                      <span className="text-gray-500">=</span>{' '}
                      <span className="text-gray-300">{'{'}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-600 select-none w-4 text-right">2</span>
                    <div className="pl-4">
                      <span className="text-violet-400">name</span>
                      <span className="text-gray-500">:</span>{' '}
                      <span className="text-green-400">'Mahvish Siddique'</span>
                      <span className="text-gray-500">,</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-600 select-none w-4 text-right">3</span>
                    <div className="pl-4">
                      <span className="text-violet-400">role</span>
                      <span className="text-gray-500">:</span>{' '}
                      <span className="text-green-400">'CSE Student'</span>
                      <span className="text-gray-500">,</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-600 select-none w-4 text-right">4</span>
                    <div className="pl-4">
                      <span className="text-violet-400">internship</span>
                      <span className="text-gray-500">:</span>{' '}
                      <span className="text-green-400">'TEN'</span>
                      <span className="text-gray-500">,</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-600 select-none w-4 text-right">5</span>
                    <div className="pl-4">
                      <span className="text-violet-400">interests</span>
                      <span className="text-gray-500">:</span>{' '}
                      <span className="text-gray-300">[</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-600 select-none w-4 text-right">6</span>
                    <div className="pl-8">
                      <span className="text-green-400">'Web Dev'</span>
                      <span className="text-gray-500">,</span>{' '}
                      <span className="text-green-400">'AI/ML'</span>
                      <span className="text-gray-500">,</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-600 select-none w-4 text-right">7</span>
                    <div className="pl-8">
                      <span className="text-green-400">'Problem Solving'</span>
                      <span className="text-gray-500">,</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-600 select-none w-4 text-right">8</span>
                    <div className="pl-4">
                      <span className="text-gray-300">]</span>
                      <span className="text-gray-500">,</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-600 select-none w-4 text-right">9</span>
                    <div className="pl-4">
                      <span className="text-violet-400">learning</span>
                      <span className="text-gray-500">:</span>{' '}
                      <span className="text-blue-400">true</span>
                      <span className="text-gray-500">,</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-600 select-none w-4 text-right">10</span>
                    <div>
                      <span className="text-gray-300">{'}'}</span>
                      <span className="animate-blink text-blue-400">|</span>
                    </div>
                  </div>
                </div>

                {/* Bottom badge */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-t border-white/5 bg-black/20">
                  <Sparkles size={12} className="text-blue-400" />
                  <span className="text-xs text-gray-500 font-mono">Always building, always learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-fade-in-delayed">
        <span className="text-xs text-gray-600 font-mono">scroll</span>
        <div className="w-5 h-9 rounded-full border border-gray-700 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-blue-400 animate-float" />
        </div>
      </div>
    </section>
  );
}
