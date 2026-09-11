import { useState } from 'react';
import { Mail, Github, Send, User, MessageSquare, CheckCircle2, type LucideIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const GITHUB_URL = 'https://github.com/mahvish13';
const EMAIL = 'mahvishsiddiqui74@gmail.com';

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-blue-400 mb-2">08 / Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Let's Build Something Together</h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            I'm always interested in learning, collaborating, and working on meaningful
            technology projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 p-5 rounded-2xl glass card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Mail size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium text-gray-200 break-all">{EMAIL}</p>
              </div>
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl glass card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <Github size={20} className="text-violet-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">GitHub</p>
                <p className="text-sm font-medium text-gray-200">github.com/mahvish13</p>
              </div>
            </a>

            <div className="p-5 rounded-2xl gradient-bg text-white">
              <p className="text-sm leading-relaxed">
                Open to internship opportunities, collaboration, and interesting projects.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-6 sm:p-8 rounded-2xl glass space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-200 placeholder-gray-600 focus:border-blue-400/40 focus:outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-200 placeholder-gray-600 focus:border-blue-400/40 focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-200 placeholder-gray-600 focus:border-blue-400/40 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-200 placeholder-gray-600 focus:border-blue-400/40 focus:outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all ${
                sent
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'gradient-bg text-white hover:opacity-90'
              }`}
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
