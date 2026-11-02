import React, { useState, useEffect } from 'react';
import { Eye, Send, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const words = PERSONAL_INFO.typingWords;

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        setTypingSpeed(100);

        if (displayedText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        setTypingSpeed(50);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, typingSpeed, words]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center pt-20 pb-12 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Typographic Presentation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-emerald-500" />
              <span className="text-xs font-semibold tracking-wider text-emerald-600 dark:text-emerald-400">
                Hello, I'm
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-3">
              <span>{PERSONAL_INFO.firstName}</span>
              <br />
              <span className="font-display italic font-semibold text-emerald-600 dark:text-emerald-400">
                {PERSONAL_INFO.lastName}
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="flex items-center text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200 mb-4 min-h-[2rem]">
              <span>I build&nbsp;</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                {displayedText}
              </span>
              <span className="inline-block w-[2.5px] h-5 bg-emerald-500 ml-1 animate-pulse" />
            </div>

            {/* Summary */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed mb-6">
              B.Tech Computer Science graduate & aspiring Software Developer with hands-on experience in Java, MySQL, and modern web architectures. Building real-world systems with robust backend logic and pixel-perfect design.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-medium shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Eye className="w-4 h-4" />
                <span>View Work</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-emerald-500/50 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/40 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/40 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/40 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Personal Photo (Scaled Down) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[250px] sm:max-w-[275px]">
              {/* Outer decorative card border */}
              <div className="relative rounded-[1.75rem] p-1.5 bg-gradient-to-b from-emerald-500/20 via-transparent to-emerald-500/10 dark:from-emerald-500/30 dark:to-transparent shadow-xl">
                <div className="relative rounded-[1.4rem] overflow-hidden aspect-[4/5] bg-slate-200 dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/50">
                  <img
                    src={PERSONAL_INFO.photoPath}
                    alt={PERSONAL_INFO.fullName}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator at Bottom */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About section"
            className="p-1.5 rounded-full border border-slate-300 dark:border-emerald-900/60 text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all animate-bounce"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
