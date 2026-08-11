'use client';

import React from 'react';
import { Check, X, ShieldCheck, Zap } from 'lucide-react';

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
    <section className="py-20 md:py-28 bg-[#F8FAFC] text-[#111827] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B3A]/5 border border-[#0B1B3A]/10 text-xs font-semibold text-[#0B1B3A] mb-3">
            <Zap className="w-3.5 h-3.5 text-[#F2B84B]" />
            <span>The Ahadu Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B3A]">
            Why Ambitious Organizations Partner With Ahadu
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Setting a new standard for financial advisory and accounting services in Ethiopia.
          </p>
        </div>

        {/* Side-by-Side Comparison Matrix Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 text-sm font-bold">
            <div className="md:col-span-4 p-5 bg-slate-50 text-slate-700 uppercase tracking-wider text-xs flex items-center">
              Dimension
            </div>
            <div className="md:col-span-4 p-5 bg-slate-100 text-slate-500 uppercase tracking-wider text-xs border-t md:border-t-0 md:border-l border-slate-200 flex items-center gap-2">
              <X className="w-4 h-4 text-rose-500" />
              <span>Standard Accounting</span>
            </div>
            <div className="md:col-span-4 p-5 bg-[#0B1B3A] text-white uppercase tracking-wider text-xs border-t md:border-t-0 border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#1FA971]" />
                <span className="text-[#F2B84B]">Ahadu Financial Solutions</span>
              </div>
              <ShieldCheck className="w-4 h-4 text-[#1FA971]" />
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisons.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm hover:bg-slate-50/80 transition-colors">
                {/* Dimension */}
                <div className="md:col-span-4 p-5 font-semibold text-[#0B1B3A] flex items-center bg-slate-50/40">
                  {item.label}
                </div>
                {/* Standard */}
                <div className="md:col-span-4 p-5 text-slate-500 flex items-center gap-2 md:border-l border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-xs shrink-0 font-bold">
                    -
                  </span>
                  <span>{item.standard}</span>
                </div>
                {/* Ahadu */}
                <div className="md:col-span-4 p-5 bg-[#071228] text-white font-semibold flex items-center gap-2 border-t md:border-t-0 border-slate-100">
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
