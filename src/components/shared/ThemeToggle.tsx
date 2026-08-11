'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-lg bg-white/10" />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`p-2 rounded-lg transition-all duration-200 flex items-center justify-center border ${
        isDark
          ? 'bg-white/10 text-[#F2B84B] border-white/15 hover:bg-white/20'
          : 'bg-slate-100 text-[#0B1B3A] border-slate-300 hover:bg-slate-200'
      } ${className}`}
      aria-label="Toggle light and dark theme"
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#F2B84B] transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#0B1B3A] transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
};
