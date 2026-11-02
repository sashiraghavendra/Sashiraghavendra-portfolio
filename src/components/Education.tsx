import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1.5">
            MY JOURNEY
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Education
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 space-y-6">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[9px] sm:left-[15px] top-3 bottom-3 w-[2px] bg-emerald-500/30 dark:bg-emerald-500/40" />

          {EDUCATION_DATA.map((item, idx) => {
            return (
              <div key={item.id} className="relative group">
                
                {/* Node Marker on Line */}
                <div className="absolute -left-[23px] sm:-left-[29px] top-5 w-4 h-4 rounded-full border-2 border-[#f4fbf8] dark:border-[#0b1614] bg-emerald-500 shadow-md group-hover:scale-125 transition-transform" />

                {/* Timeline Card */}
                <div className="rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/50 shadow-sm hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all duration-300">
                  
                  {/* Top Bar: Period & Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400">
                      {item.period}
                    </span>

                    {item.badge && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-0.5 flex items-center gap-2">
                    {idx === 0 ? (
                      <GraduationCap className="w-4 h-4 text-emerald-500 inline shrink-0" />
                    ) : idx === 1 ? (
                      <BookOpen className="w-4 h-4 text-emerald-500 inline shrink-0" />
                    ) : (
                      <Award className="w-4 h-4 text-emerald-500 inline shrink-0" />
                    )}
                    <span>{item.title}</span>
                  </h3>

                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.organization} · {item.location}
                  </p>

                  {/* Summary if present */}
                  {item.description && item.description.trim().length > 0 && (
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  )}

                  {/* Bullet Highlights if present */}
                  {item.points && item.points.length > 0 && (
                    <ul className="space-y-1 mt-2 text-xs text-slate-600 dark:text-slate-300">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack badges if present */}
                  {item.techStack && item.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2 mt-2 border-t border-slate-100 dark:border-emerald-900/30">
                      {item.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0c1815] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-emerald-950"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
