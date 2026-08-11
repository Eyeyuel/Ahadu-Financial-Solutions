'use client';

import React, { useState } from 'react';
import { EyeOff, Flame, AlertTriangle, Cpu, Compass, ArrowRight } from 'lucide-react';

export const GrowthParadoxSection: React.FC = () => {
  const [selectedParadox, setSelectedParadox] = useState<number>(0);

  const paradoxes = [
    {
      id: 'blindness',
      icon: EyeOff,
      title: 'Financial Blindness',
      shortDesc: 'Lack of real-time visibility and poor reporting.',
      fullDesc: 'Operating without structured, up-to-date income statements and balance sheets leaves leadership guessing. Business decisions are made on instinct rather than empirical financial truth.',
      solution: 'Ahadu delivers monthly structured financial reporting & clean general ledgers.',
    },
    {
      id: 'cashflow',
      icon: Flame,
      title: 'Cash Flow Crises',
      shortDesc: 'Inability to anticipate and manage liquidity.',
      fullDesc: 'A business can be profitable on paper yet fail due to timing mismatches between receivables and payables. Without cash forecasting, growth drains reserves.',
      solution: 'Ahadu implements 90-day cash flow forecasting & working capital controls.',
    },
    {
      id: 'compliance',
      icon: AlertTriangle,
      title: 'Compliance Risks',
      shortDesc: 'Navigating complex, shifting tax obligations.',
      fullDesc: 'Misinterpreting tax documentation or missing filing windows leads to unexpected penalties, administrative distraction, and strained regulatory relationships.',
      solution: 'Ahadu structures organized tax record preparation and compliance support.',
    },
    {
      id: 'inefficient',
      icon: Cpu,
      title: 'Inefficient Operations',
      shortDesc: 'Reliance on manual, error-prone accounting.',
      fullDesc: 'Fragmented spreadsheets and delayed reconciliations consume valuable executive bandwidth, leading to costly errors and missed invoices.',
      solution: 'Ahadu modernizes bookkeeping workflows, bank reconciliations & payroll.',
    },
    {
      id: 'paralysis',
      icon: Compass,
      title: 'Strategic Paralysis',
      shortDesc: 'Difficulty making informed decisions due to fragmented data.',
      fullDesc: 'When financial data is locked in disparate places, business owners hesitate on expansion, hiring, or capital investment opportunities.',
      solution: 'Ahadu provides forward-looking financial analysis and strategic business advisory.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#071228] text-[#111827] dark:text-slate-100 relative overflow-hidden border-y border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B3A] dark:text-white">
            The Growth Paradox
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            Expanding businesses often outgrow their financial foundations. Without robust financial architecture, growth introduces complexity, risk, and operational blind spots.
          </p>
        </div>

        {/* Interactive Cards & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid of 5 Paradox Pain Points */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {paradoxes.map((item, index) => {
              const Icon = item.icon;
              const isSelected = selectedParadox === index;

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedParadox(index)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#0B1B3A] text-white border-[#F2B84B] shadow-xl scale-[1.02]'
                      : 'bg-white dark:bg-[#0B1B3A]/80 text-[#111827] dark:text-slate-100 border-slate-200 dark:border-white/10 hover:border-[#1FA971] hover:shadow-md'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                    isSelected ? 'bg-[#1FA971] text-white' : 'bg-slate-100 dark:bg-white/10 text-[#0B1B3A] dark:text-[#F2B84B]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`font-bold text-base mb-1 ${isSelected ? 'text-white' : 'text-[#0B1B3A] dark:text-white'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                    {item.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Detail & Solution Panel */}
          <div className="lg:col-span-6 bg-[#071228] dark:bg-[#0B1B3A] text-white p-8 rounded-2xl border border-[#F2B84B]/30 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F2B84B]">
                Diagnosis & Solution #{selectedParadox + 1}
              </span>
              <span className="text-xs text-slate-300 font-mono">
                AHADU ARCHITECTURE
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {paradoxes[selectedParadox].title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {paradoxes[selectedParadox].fullDesc}
                </p>
              </div>

              {/* Solution Banner */}
              <div className="p-5 rounded-xl bg-[#1FA971]/15 border border-[#1FA971]/40 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#34D399]">
                  <ArrowRight className="w-4 h-4" />
                  <span>The Ahadu Solution</span>
                </div>
                <p className="text-sm text-white font-medium">
                  {paradoxes[selectedParadox].solution}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-300 border-t border-white/10">
                <span>Transform operational chaos into strategic advantage</span>
                <a href="#framework" className="text-[#F2B84B] font-semibold hover:underline">
                  View Framework →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
