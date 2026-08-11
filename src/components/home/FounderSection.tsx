'use client';

import React from 'react';
import { Quote, ShieldCheck, Award, Users2, Lock, Lightbulb, Handshake, TrendingUp, CheckCircle2 } from 'lucide-react';

export const FounderSection: React.FC = () => {
  const values = [
    { title: 'Integrity', icon: ShieldCheck, desc: 'Honesty, transparency, and doing what is right even when no one is watching.' },
    { title: 'Professional Excellence', icon: Award, desc: 'Adhering strictly to standard accounting practices & continuous learning.' },
    { title: 'Client Success', icon: Users2, desc: 'Your goals become our responsibility and your success becomes our motivation.' },
    { title: 'Accountability', icon: CheckCircle2, desc: 'Taking absolute ownership of commitments, reliability, and precision.' },
    { title: 'Confidentiality', icon: Lock, desc: 'Safeguarding all financial and business data with strict discretion.' },
    { title: 'Innovation', icon: Lightbulb, desc: 'Embracing modern technologies to provide efficient, value-driven solutions.' },
    { title: 'Collaboration', icon: Handshake, desc: 'Working closely with clients, fostering open communication & shared success.' },
    { title: 'Continuous Improvement', icon: TrendingUp, desc: 'Learning, improving, and adapting to consistently deliver outstanding value.' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0B1B3A] text-[#111827] dark:text-white relative overflow-hidden transition-colors duration-300 border-b border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Founder's Statement Card */}
        <div className="bg-white dark:bg-[#071228] border border-slate-200 dark:border-[#F2B84B]/30 rounded-3xl p-8 sm:p-12 shadow-xl dark:shadow-2xl mb-20 transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1FA971]/15 text-[#168256] dark:text-[#34D399] border border-[#1FA971]/30 text-xs font-semibold">
                <Quote className="w-3.5 h-3.5 text-[#F2B84B]" />
                <span>Founder's Message</span>
              </div>

              <blockquote className="text-lg sm:text-xl text-[#0B1B3A] dark:text-slate-100 font-light leading-relaxed italic">
                “I founded Ahadu Financial Solutions with a simple but meaningful purpose: to help businesses build stronger financial foundations and make informed decisions that support sustainable growth. The name <strong className="text-[#F2B84B] font-semibold">‘Ahadu’</strong>, meaning <strong className="text-[#1FA971] dark:text-[#34D399] font-semibold">‘One’ or ‘Unity’ in Amharic</strong>, reflects the philosophy upon which our company is built. We believe that the strongest results are achieved through partnership, trust, and shared success.”
              </blockquote>

              <div>
                <div className="text-lg font-bold text-[#0B1B3A] dark:text-white">Arsema Habtamu</div>
                <div className="text-xs text-[#F2B84B] font-semibold tracking-wider uppercase">
                  Founder & Managing Director • Ahadu Financial Solutions
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-2xl space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#F2B84B]">
                Our Direction
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-bold text-[#0B1B3A] dark:text-white uppercase tracking-wider">Vision</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    To become Ethiopia’s most trusted accounting and business advisory firm, empowering businesses through financial excellence, strategic insight, and unwavering integrity.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-white/10">
                  <div className="text-xs font-bold text-[#0B1B3A] dark:text-white uppercase tracking-wider">Mission</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    To provide reliable accounting, financial management, and business advisory services that empower entrepreneurs to make informed decisions and achieve stability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Core Values Grid */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1B3A] dark:text-white">Our Core Non-Negotiables</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              The ethical framework governing every engagement at Ahadu Financial Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-[#1FA971]/50 shadow-sm transition-all space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1FA971]/15 text-[#1FA971] dark:text-[#34D399] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1B3A] dark:text-white">{v.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
