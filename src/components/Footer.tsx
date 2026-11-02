import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-emerald-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        {/* Monogram Logo */}
        <div className="inline-block">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="text-2xl font-display font-bold text-slate-900 dark:text-white"
          >
            {PERSONAL_INFO.initials.replace('.', '')}
            <span className="text-emerald-500 font-extrabold text-2xl">.</span>
          </a>
        </div>

        {/* Full Name */}
        <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white">
          {PERSONAL_INFO.fullName}
        </h3>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Crafting reliable software solutions with engineering precision.
        </p>

        {/* Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400 pt-2">
          {['About', 'Skills', 'Education', 'Certifications', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="hover:text-emerald-500 transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-full bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/40 text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500 transition-all shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-full bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/40 text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500 transition-all shadow-sm"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Send Email"
            className="p-2.5 rounded-full bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/40 text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500 transition-all shadow-sm"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-400 dark:text-slate-500 pt-6">
          © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Built with React, TypeScript & Tailwind CSS.
        </div>

      </div>
    </footer>
  );
};
