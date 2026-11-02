import React from 'react';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, Server } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#0f1f1b] border border-slate-200 dark:border-emerald-900/60 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-emerald-900/40 flex items-center justify-between bg-slate-50 dark:bg-[#0b1714]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500 text-white">
                {project.featuredBadge || project.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-emerald-950/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
          
          {/* Tagline */}
          <p className="text-base font-medium text-slate-700 dark:text-slate-200">
            {project.tagline}
          </p>

          {/* Description */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/30 text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-500" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-mono text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Core Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Key Features & Engineering Highlights</span>
            </h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture & Implementation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-500" />
              <span>System Architecture & Relational Design</span>
            </h4>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/30 space-y-2">
              {project.architecture.map((arch, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <Layers className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-emerald-900/40 bg-slate-50 dark:bg-[#0b1714] flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-emerald-950 text-white border border-slate-700 dark:border-emerald-800 text-xs sm:text-sm font-semibold hover:border-emerald-500 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Code on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-600 transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
