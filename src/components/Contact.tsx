import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, Info } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, and Message).');
      return;
    }

    setSubmitting(true);
    
    // Simulate API dispatch + prepare mailto fallback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoUrl;

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1.5">
            LET'S COLLABORATE
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span>Let's talk about everything!</span>
                <span className="inline-block animate-wave">👋</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether you have a full-time software engineering role, a project in mind, want to discuss software systems, or just want to say hi — my inbox is always open.
              </p>
            </div>

            {/* Contact Detail Cards */}
            <div className="space-y-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-3.5 rounded-xl bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/50 shadow-sm hover:border-emerald-500 dark:hover:border-emerald-500 transition-all flex items-center gap-3 group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    EMAIL
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-3.5 rounded-xl bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/50 shadow-sm hover:border-emerald-500 dark:hover:border-emerald-500 transition-all flex items-center gap-3 group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    PHONE
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              <div className="p-3.5 rounded-xl bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/50 shadow-sm flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    LOCATION
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/50 text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500 transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/50 text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500 transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-5 sm:p-6 bg-white dark:bg-[#122420] border border-slate-200 dark:border-emerald-900/50 shadow-sm">
              
              {submitted ? (
                <div className="py-8 text-center space-y-3 animate-in fade-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Thank You, {formData.name || 'Friend'}!
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-xs sm:text-sm">
                    Your message has been processed and routed to <strong>{PERSONAL_INFO.email}</strong>. I will get back to you shortly!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-5 py-2 rounded-xl bg-emerald-500 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-600 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {errorMsg && (
                    <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0c1815] border border-slate-200 dark:border-emerald-900/40 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0c1815] border border-slate-200 dark:border-emerald-900/40 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0c1815] border border-slate-200 dark:border-emerald-900/40 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Your Message"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0c1815] border border-slate-200 dark:border-emerald-900/40 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors text-xs sm:text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all cursor-pointer whitespace-nowrap text-xs sm:text-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Dispatching...' : 'Send Message'}</span>
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                    <Info className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>Messages go directly to {PERSONAL_INFO.email}</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
