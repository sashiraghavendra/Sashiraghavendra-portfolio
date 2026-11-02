import React from 'react';
import { Code2, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code2 className="w-4 h-4 text-emerald-500" />;
      case 'Wrench':
      default:
        return <Wrench className="w-4 h-4 text-emerald-500" />;
    }
  };

  return (
    <section id="skills" className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1.5">
            WHAT I KNOW
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white">
            My Toolkit
          </h2>
        </div>

        {/* 2 Bento Cards Grid: Languages & Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-5 sm:p-6 bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-slate-100 dark:border-emerald-900/30">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Items */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="group">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: skill.color }}
                          />
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          {skill.levelName}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-[#0c1815] rounded-full overflow-hidden p-[0.5px]">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-4 mt-5 border-t border-slate-100 dark:border-emerald-900/30 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Core Competency</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                  {category.skills.length} {category.title === 'Languages' ? 'Languages' : 'Tools'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
