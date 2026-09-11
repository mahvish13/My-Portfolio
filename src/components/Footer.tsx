import { Github, Mail, Linkedin, ArrowUp } from 'lucide-react';

const GITHUB_URL = 'https://github.com/mahvish13';
const EMAIL = 'mahvishsiddiqui74@gmail.com';
// To add LinkedIn, replace '#' with your LinkedIn profile URL
const LINKEDIN_URL = '#';

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Name */}
          <button
            onClick={() => scrollTo('home')}
            className="text-2xl font-bold tracking-tight"
          >
            Mahvish Siddique
          </button>

          <p className="text-sm text-gray-400">
            B.Tech CSE Student | Aspiring Software Developer
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-blue-400 hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={LINKEDIN_URL}
              target={LINKEDIN_URL !== '#' ? '_blank' : undefined}
              rel={LINKEDIN_URL !== '#' ? 'noopener noreferrer' : undefined}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-blue-400 hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-blue-400 hover:scale-110 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-400 transition-colors font-mono"
          >
            <ArrowUp size={14} />
            Back to top
          </button>

          <p className="text-xs text-gray-600">
            &copy; 2026 Mahvish Siddique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
