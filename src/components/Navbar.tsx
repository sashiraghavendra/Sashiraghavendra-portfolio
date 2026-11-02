import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, FileText, ChevronDown, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  onOpenResumeModal
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'education', 'certifications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b1614]/90 dark:bg-[#0b1614]/90 bg-[#f4fbf8]/90 backdrop-blur-md shadow-md border-b border-emerald-950/20 dark:border-emerald-900/20 border-emerald-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="group flex items-center text-2xl font-bold tracking-tight whitespace-nowrap shrink-0 text-slate-900 dark:text-white"
          >
            <span className="font-display tracking-tight text-slate-800 dark:text-slate-100">
              {PERSONAL_INFO.initials.replace('.', '')}
            </span>
            <span className="text-emerald-500 font-extrabold text-3xl leading-none">.</span>
          </a>

          {/* Zone 2: Navigation Links (single-line, clean typography) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                      : 'text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (Theme Toggle & Resume Button) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle between Dark and White theme"
              title={`Switch to ${theme === 'dark' ? 'White' : 'Dark'} mode`}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-200/60 dark:hover:bg-emerald-950/50 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-5 h-5 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Resume Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/60 rounded-xl hover:border-emerald-500 dark:hover:border-emerald-500 transition-all shadow-sm whitespace-nowrap shrink-0"
              >
                <Download className="w-3.5 h-3.5 text-emerald-500" />
                <span>Resume</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${resumeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {resumeDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setResumeDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/60 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <button
                      onClick={() => {
                        setResumeDropdownOpen(false);
                        onOpenResumeModal();
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-2.5 transition-colors"
                    >
                      <FileText className="w-4 h-4 text-emerald-500" />
                      <span>View Resume (PDF)</span>
                    </button>
                    <a
                      href={PERSONAL_INFO.resumePath}
                      download="Desha_Sashi_Raghavendra_Resume.pdf"
                      onClick={() => setResumeDropdownOpen(false)}
                      className="w-full text-left px-4 py-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-2.5 transition-colors"
                    >
                      <Download className="w-4 h-4 text-emerald-500" />
                      <span>Download Resume (PDF)</span>
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-emerald-950/50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-3 border-t border-slate-200 dark:border-emerald-900/40 bg-white/95 dark:bg-[#0e1d1a]/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-emerald-950/30'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
