import React from 'react';
import { Award, ExternalLink, CheckCircle2, Calendar } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1.5">
            CREDENTIALS & SPECIALIZATIONS
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Certifications
          </h2>
        </div>

        {/* Vertical Timeline matching Education style */}
        <div className="relative pl-6 sm:pl-8 space-y-6">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[9px] sm:left-[15px] top-3 bottom-3 w-[2px] bg-emerald-500/30 dark:bg-emerald-500/40" />

          {CERTIFICATIONS_DATA.map((cert) => {
            return (
              <div key={cert.id} className="relative group">
                
                {/* Node Marker on Line */}
                <div className="absolute -left-[23px] sm:-left-[29px] top-5 w-4 h-4 rounded-full border-2 border-[#f4fbf8] dark:border-[#0b1614] bg-emerald-500 shadow-md group-hover:scale-125 transition-transform" />

                {/* Certification Card */}
                <div className="rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/50 shadow-sm hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all duration-300">
                  
                  {/* Top Bar: Issue Date & Verified Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.issueDate}
                    </span>

                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>Verified Credential</span>
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-emerald-500 inline shrink-0" />
                        <span>{cert.title}</span>
                      </h3>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        Issued by <strong className="text-slate-800 dark:text-slate-200">{cert.issuer}</strong>
                        {cert.partner && <span> ({cert.partner})</span>}
                      </p>
                    </div>

                    {/* View Certificate Link Button */}
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all hover:scale-105 whitespace-nowrap shrink-0"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {cert.description}
                  </p>

                  {/* Skills Tagged */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-emerald-900/30">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0c1815] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-emerald-950"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
