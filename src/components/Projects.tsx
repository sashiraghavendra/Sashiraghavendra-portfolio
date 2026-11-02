import React, { useState } from 'react';
import { Github, ExternalLink, ShieldAlert, KeyRound, Users, TrendingUp, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { InteractiveCryptoDemo } from './InteractiveCryptoDemo';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [showLiveSimulator, setShowLiveSimulator] = useState<boolean>(false);

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1.5">
            WHAT I'VE BUILT
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Projects
          </h2>
        </div>

        {/* Live Simulator Accordion Toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowLiveSimulator(!showLiveSimulator)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 transition-all cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{showLiveSimulator ? 'Hide Scam Simulator' : 'Test Live Scam Simulator'}</span>
          </button>
        </div>

        {/* Live Simulator Accordion when clicked */}
        {showLiveSimulator && (
          <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-300">
            <InteractiveCryptoDemo />
          </div>
        )}

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((project) => {
            const isCrypto = project.id === 'crypto-tracker';

            return (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Preview Section */}
                  <div className="relative p-5 sm:p-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#0b1b17] dark:to-[#102923] border-b border-slate-200 dark:border-emerald-900/40 min-h-[170px] flex flex-col justify-between overflow-hidden">
                    
                    {/* Top Row: Ribbon Badge & GitHub Icon */}
                    <div className="flex items-center justify-between gap-2 z-10">
                      {project.featuredBadge && (
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500 text-white shadow-sm">
                          {project.featuredBadge}
                        </span>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View on GitHub"
                        className="p-2 rounded-full bg-white/90 dark:bg-[#132a24]/90 backdrop-blur-sm border border-slate-200 dark:border-emerald-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:scale-110 transition-all shadow-sm"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Visual Card Mockup */}
                    <div className="my-2 z-10">
                      {isCrypto ? (
                        <div className="bg-white/95 dark:bg-[#0b1714]/95 backdrop-blur-md rounded-xl p-3 border border-slate-200 dark:border-emerald-900/60 shadow-md max-w-xs">
                          <div className="flex items-center justify-between text-xs mb-1.5">
                            <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Crypto Portfolio Tracker
                            </span>
                            <span className="font-mono text-emerald-500 font-bold text-[11px]">+18.4%</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] py-1 px-2 rounded-lg bg-slate-50 dark:bg-[#122420]">
                            <span className="text-slate-500 dark:text-slate-400">Scam Detection</span>
                            <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                              <ShieldAlert className="w-3 h-3" /> 0 Threats Active
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white/95 dark:bg-[#0b1714]/95 backdrop-blur-md rounded-xl p-3 border border-slate-200 dark:border-emerald-900/60 shadow-md max-w-xs">
                          <div className="flex items-center justify-between text-xs mb-1.5">
                            <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                              <KeyRound className="w-3 h-3 text-emerald-500" />
                              University ERP Access
                            </span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                              RBAC Enabled
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-600 dark:text-slate-300 pt-0.5">
                            <span className="bg-slate-50 dark:bg-[#122420] p-1 rounded text-center">Student Portal</span>
                            <span className="bg-slate-50 dark:bg-[#122420] p-1 rounded text-center">Admin Controls</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Background abstract grid pattern */}
                    <div className="absolute inset-0 opacity-15 dark:opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    
                    {/* Tech Badges Row */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-[#0c1815] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-emerald-950"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Metrics row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-emerald-900/30">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-1.5">
                          {mIdx === 0 ? <Users className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> : <TrendingUp className="w-3.5 h-3.5 text-emerald-500 shrink-0" />}
                          <span className="truncate text-[11px]">{m.label}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Card Action Buttons (Bottom) */}
                <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-emerald-900/20">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>System Details</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
