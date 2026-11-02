import React from 'react';
import { X, Download, ExternalLink, GraduationCap, Briefcase, Code, Award, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0f1f1b] border border-slate-200 dark:border-emerald-900/60 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-emerald-900/40 flex items-center justify-between bg-slate-50 dark:bg-[#0b1714]">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Resume Overview</span>
              <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                Official PDF Available
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {PERSONAL_INFO.fullName} · {PERSONAL_INFO.location}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Desha_Sashi_Raghavendra_Resume.pdf"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-emerald-950/40 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
          
          {/* Executive Summary */}
          <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              Professional Summary
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-500" />
              <span>Education</span>
            </h4>
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/30">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-slate-900 dark:text-white">
                    B.Tech in Computer Science — Kalasalingam Academy of Research and Education
                  </span>
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                    2022 – 2026
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Tamilnadu, India</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">CGPA: 8.31 / 10</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/30">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-slate-900 dark:text-white">
                    Intermediate (MPC) — SDRS Akanksha Junior College
                  </span>
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                    2020 – 2022
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Andhra Pradesh, India</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Percentage: 83.6%</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/30">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-slate-900 dark:text-white">
                    Secondary Schooling — Sri Shanthiniketan E.M School
                  </span>
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                    2019 – 2020
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Andhra Pradesh, India</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Percentage: 98.3%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-500" />
              <span>Internship Experience</span>
            </h4>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/30 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-bold text-slate-900 dark:text-white">
                  Infosys Springboard Internship 6.0
                </span>
                <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                  Nov 2025 – Jan 2026
                </span>
              </div>
              <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Cryptocurrency Portfolio Tracker with Risk and Scam Detection [Verified Certificate]
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Centralized system tracking user crypto investments with live price feeds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Scam detection engine checking contract risk and alerting users before investing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>CSV download option exporting complete historical portfolio ledger.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-emerald-500" />
              <span>Technical Skills</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/30">
                <strong className="block text-slate-900 dark:text-white mb-1">Languages:</strong>
                <span className="text-slate-600 dark:text-slate-300">Java, SQL, HTML, CSS</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/30">
                <strong className="block text-slate-900 dark:text-white mb-1">Tools:</strong>
                <span className="text-slate-600 dark:text-slate-300">Git & GitHub, Eclipse, VS Code</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-500" />
              <span>Certifications</span>
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/30 flex items-center justify-between">
                <span className="text-slate-800 dark:text-slate-200">Introduction to Java — Coursera (LearnQuest)</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Jun 2025</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/30 flex items-center justify-between">
                <span className="text-slate-800 dark:text-slate-200">SQL Fundamentals — IBM SkillsBuild</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Jul 2025</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/30 flex items-center justify-between">
                <span className="text-slate-800 dark:text-slate-200">Introduction to Git and GitHub — Coursera (Google)</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Jul 2025</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-emerald-900/40 bg-slate-50 dark:bg-[#0b1714] flex items-center justify-between text-xs">
          <span className="text-slate-500 dark:text-slate-400">
            Original resume stored at {PERSONAL_INFO.resumePath}
          </span>
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noreferrer"
            className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
          >
            <span>Open Raw PDF in Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
