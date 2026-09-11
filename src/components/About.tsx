import { Puzzle, BookOpen, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const highlights = [
  {
    icon: Puzzle,
    title: 'Problem Solving',
    description: 'Breaking down complex problems into manageable steps and building practical solutions.',
  },
  {
    icon: BookOpen,
    title: 'Project-Based Learning',
    description: 'Learning by building real applications rather than just studying theory.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    description: 'Consistently improving skills through practice, projects, and new technologies.',
  },
];

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className={`max-w-7xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-blue-400 mb-2">01 / About</p>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Description */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              I am a Computer Science and Engineering student graduating in 2027. I enjoy
              building practical applications and learning technologies by working on real
              projects. My interests include software development, web technologies,
              artificial intelligence, and machine learning.
            </p>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              I am currently gaining practical experience through my Software Development
              Internship at The Entrepreneurship Network (TEN), where I am working on tasks
              that help me strengthen my development, problem-solving, and professional skills.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="px-4 py-2 rounded-lg glass text-sm">
                <span className="text-gray-500">Location:</span>{' '}
                <span className="text-gray-200">Lucknow, India</span>
              </div>
              <div className="px-4 py-2 rounded-lg glass text-sm">
                <span className="text-gray-500">Graduation:</span>{' '}
                <span className="text-gray-200">2027</span>
              </div>
              <div className="px-4 py-2 rounded-lg glass text-sm">
                <span className="text-gray-500">Focus:</span>{' '}
                <span className="text-gray-200">Software Development</span>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="lg:col-span-2 space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-2xl glass card-hover"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <item.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
