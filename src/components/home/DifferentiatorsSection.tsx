'use client';

import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';

export const DifferentiatorsSection: React.FC = () => {
  const comparisons = [
    {
      label: 'Engagement Model',
      standard: 'Transactional relationship',
      ahadu: 'Trusted Advisory Partner',
    },
    {
      label: 'Reporting Vision',
      standard: 'Backward-looking historical recording',
      ahadu: 'Forward-Looking Strategy & Cash Forecasting',
    },
    {
      label: 'Service Delivery',
      standard: 'Generic, standard templates',
      ahadu: 'Bespoke, Tailored Solutions for Ethiopian Context',
    },
    {
      label: 'Communication',
      standard: 'Fragmented & reactive communication',
      ahadu: 'Client-First, Continuous Support & Dialogue',
    },
    {
      label: 'Business Objective',
      standard: 'Compliance-focused only',
      ahadu: 'Growth & Measurable Value-Driven',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#071228] text-[#111827] dark:text-slate-100 relative overflow-hidden border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B3A] dark:text-white">
            Why Ambitious Organizations Partner With Ahadu
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            Setting a new standard for financial advisory and accounting services in Ethiopia.
          </p>
        </div>

        {/* Side-by-Side Comparison Matrix Table */}
        <div className="bg-white dark:bg-[#0B1B3A] rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 dark:border-white/10 text-sm font-bold">
            <div className="md:col-span-4 p-5 bg-slate-50 dark:bg-[#071228] text-slate-700 dark:text-slate-200 uppercase tracking-wider text-xs flex items-center">
              Dimension
            </div>
            <div className="md:col-span-4 p-5 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 uppercase tracking-wider text-xs border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/10 flex items-center gap-2">
              <X className="w-4 h-4 text-rose-500" />
              <span>Standard Accounting</span>
            </div>
            <div className="md:col-span-4 p-5 bg-[#0B1B3A] dark:bg-[#11254B] text-white uppercase tracking-wider text-xs border-t md:border-t-0 border-slate-200 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#1FA971]" />
                <span className="text-[#F2B84B]">Ahadu Financial Solutions</span>
              </div>
              <ShieldCheck className="w-4 h-4 text-[#1FA971]" />
            </div>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-white/5">
            {comparisons.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm hover:bg-slate-50/80 dark:hover:bg-white/5 transition-colors">
                {/* Dimension */}
                <div className="md:col-span-4 p-5 font-semibold text-[#0B1B3A] dark:text-white flex items-center bg-slate-50/40 dark:bg-white/5">
                  {item.label}
                </div>
                {/* Standard */}
                <div className="md:col-span-4 p-5 text-slate-600 dark:text-slate-300 flex items-center gap-2 md:border-l border-slate-100 dark:border-white/5">
                  <span className="w-5 h-5 rounded-full bg-rose-50 dark:bg-rose-500/20 text-rose-500 flex items-center justify-center text-xs shrink-0 font-bold">
                    -
                  </span>
                  <span>{item.standard}</span>
                </div>
                {/* Ahadu */}
                <div className="md:col-span-4 p-5 bg-[#071228] dark:bg-[#0B1B3A] text-white font-semibold flex items-center gap-2 border-t md:border-t-0 border-slate-100 dark:border-white/5">
                  <span className="w-5 h-5 rounded-full bg-[#1FA971]/20 text-[#34D399] flex items-center justify-center text-xs shrink-0 font-bold">
                    ✓
                  </span>
                  <span className="text-slate-100">{item.ahadu}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
