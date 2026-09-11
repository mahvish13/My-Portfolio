import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0f] transition-opacity duration-500">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="h-16 w-16 rounded-2xl gradient-bg animate-gradient" />
          <div className="absolute inset-0 h-16 w-16 rounded-2xl border-2 border-blue-400/30 animate-spin-slow" />
        </div>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]" />
          <span className="h-2 w-2 rounded-full bg-violet-500 animate-bounce [animation-delay:-0.15s]" />
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" />
        </div>
        <p className="font-mono text-sm text-gray-500">Loading...</p>
      </div>
    </div>
  );
}
