import React, { useState } from 'react';
import { MapPin, Phone, Languages, GraduationCap, Code, Database, Sparkles, Download, ChevronDown, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenResumeModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResumeModal }) => {
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);

  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1.5">
            WHO I AM
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Portrait & Badge (Scaled Down) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[240px] sm:max-w-[260px]">
              {/* Photo Frame */}
              <div className="rounded-[1.6rem] overflow-hidden bg-slate-200 dark:bg-[#122420] border-2 border-slate-200 dark:border-emerald-900/60 shadow-lg aspect-[4/5] relative">
                <img
                  src={PERSONAL_INFO.photoPath}
                  alt={PERSONAL_INFO.fullName}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Badge (B.Tech Graduate) */}
              <div className="absolute -bottom-3 -right-3 bg-emerald-500 text-white rounded-xl px-3 py-2 shadow-lg flex flex-col items-center justify-center border-2 border-white dark:border-[#0b1614]">
                <span className="text-xs font-black uppercase tracking-tight">B.Tech</span>
                <span className="text-[10px] font-medium opacity-90">CSE '26</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Prose, Metadata Grid, & Role Cards */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I am pursuing my <strong className="text-slate-900 dark:text-white font-semibold">B.Tech in Computer Science and Engineering at Kalasalingam Academy of Research and Education</strong>, Tamil Nadu. My journey bridges the gap between engineering logic and scalable software development.
              </p>
              <p>
                I am an aspiring Software Developer with hands-on experience in <strong className="text-slate-900 dark:text-white font-semibold">Java, MySQL, and modern web technologies</strong>. I completed a virtual internship at <strong className="text-slate-900 dark:text-white font-semibold">Infosys Springboard 6.0</strong>, where I built a Cryptocurrency Portfolio Tracker with risk scoring and scam detection — a real-world investment tracking platform. I ensure every product I build is reliable, secure, and performant.
              </p>
            </div>

            {/* Metadata 4-Box Grid with Green Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold block text-slate-900 dark:text-white">Location</span>
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold block text-slate-900 dark:text-white">Phone</span>
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Languages className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold block text-slate-900 dark:text-white">Languages</span>
                  <span>{PERSONAL_INFO.languages.join(', ')}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold block text-slate-900 dark:text-white">Academic Standing</span>
                  <span>CGPA: 8.31 / 10</span>
                </div>
              </div>
            </div>

            {/* 3 Role Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/50 shadow-sm hover:border-emerald-500 dark:hover:border-emerald-500 transition-all flex flex-col items-center text-center">
                <div className="text-emerald-500 mb-1.5">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Java Developer</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">OOP</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/50 shadow-sm hover:border-emerald-500 dark:hover:border-emerald-500 transition-all flex flex-col items-center text-center">
                <div className="text-emerald-500 mb-1.5">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Database Architect</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">MySQL & Relational DB</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/50 shadow-sm hover:border-emerald-500 dark:hover:border-emerald-500 transition-all flex flex-col items-center text-center">
                <div className="text-emerald-500 mb-1.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Problem Solver</h4>
              </div>
            </div>

            {/* Download CV Button with Dropdown */}
            <div className="pt-2 relative inline-block">
              <button
                onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-medium shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${cvDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {cvDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setCvDropdownOpen(false)} />
                  <div className="absolute left-0 mt-2 w-52 bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/60 rounded-xl shadow-xl py-1.5 z-50">
                    <button
                      onClick={() => {
                        setCvDropdownOpen(false);
                        onOpenResumeModal();
                      }}
                      className="w-full text-left px-3.5 py-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-2"
                    >
                      <FileText className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Preview Resume Modal</span>
                    </button>
                    <a
                      href={PERSONAL_INFO.resumePath}
                      download="Desha_Sashi_Raghavendra_Resume.pdf"
                      onClick={() => setCvDropdownOpen(false)}
                      className="w-full text-left px-3.5 py-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-2"
                    >
                      <Download className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Download PDF Resume</span>
                    </a>
                  </div>
                </>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
