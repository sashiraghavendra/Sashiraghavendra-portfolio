/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Theme, Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme-mode');
    return saved === 'white' ? 'white' : 'dark';
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.className = 'bg-[#0b1614] text-slate-100 transition-colors duration-300';
    } else {
      root.classList.remove('dark');
      document.body.className = 'bg-[#f4fbf8] text-slate-900 transition-colors duration-300';
    }
    localStorage.setItem('theme-mode', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'white' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[#f4fbf8] dark:bg-[#0b1614] text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white transition-colors duration-300 font-sans">
      
      {/* Top Fixed Header with 3-Zone Contract */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Skills / My Toolkit Section */}
        <Skills />

        {/* Education Section */}
        <Education />

        {/* Certifications Section */}
        <Certifications />

        {/* Projects Section */}
        <Projects onSelectProject={(p) => setSelectedProject(p)} />

        {/* Contact / Get In Touch Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
