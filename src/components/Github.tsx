import { Github, Star, GitFork, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const GITHUB_URL = 'https://github.com/mahvish13';

export default function GithubSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="github" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="relative p-8 sm:p-12 rounded-3xl glass overflow-hidden text-center">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/15 rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-violet-600/15 rounded-full blur-[80px]" />

          <div className="relative">
            <p className="font-mono text-sm text-blue-400 mb-2">07 / GitHub</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Building in Public</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Explore my projects and development work on GitHub.
            </p>

            {/* GitHub stats cards (no fabricated numbers) */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <Star size={20} className="text-amber-400 mx-auto mb-2" />
                <p className="text-xs text-gray-500">Stars</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <GitFork size={20} className="text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-gray-500">Forks</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <Github size={20} className="text-violet-400 mx-auto mb-2" />
                <p className="text-xs text-gray-500">Repos</p>
              </div>
            </div>

            {/* Contribution-style visual (decorative, no fabricated numbers) */}
            <div className="max-w-md mx-auto mb-8 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="grid grid-cols-12 gap-1.5">
                {Array.from({ length: 84 }).map((_, i) => {
                  const intensity = Math.random();
                  const bg =
                    intensity > 0.7
                      ? 'bg-blue-500'
                      : intensity > 0.4
                        ? 'bg-blue-500/40'
                        : intensity > 0.2
                          ? 'bg-blue-500/20'
                          : 'bg-white/5';
                  return (
                    <div
                      key={i}
                      className={`aspect-square rounded-sm ${bg} transition-all hover:scale-125`}
                    />
                  );
                })}
              </div>
              <p className="text-xs text-gray-600 mt-3 font-mono">
                Contribution activity — visit GitHub for details
              </p>
            </div>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-all hover:scale-[1.02]"
            >
              <Github size={20} />
              Visit My GitHub
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
