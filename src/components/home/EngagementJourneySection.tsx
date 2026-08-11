'use client';

import React, { useState } from 'react';
import { Search, ClipboardCheck, Layout, Settings, FileSpreadsheet, HeartHandshake, ChevronRight, Check } from 'lucide-react';

export const EngagementJourneySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: 1,
      title: 'Discovery',
      icon: Search,
      subtitle: 'Understanding Your Context',
      desc: 'We begin by conducting an in-depth deep dive into your business model, operational realities, operational goals, and current financial pain points.',
      outputs: ['Operational workflow map', 'Stakeholder alignment', 'Pain point diagnosis'],
    },
    {
      num: 2,
      title: 'Financial Assessment',
      icon: ClipboardCheck,
      subtitle: 'System & Compliance Audit',
      desc: 'Comprehensive review of your existing accounting records, general ledger structure, bank reconciliation practices, and regulatory tax readiness.',
      outputs: ['Financial health scorecard', 'Gap analysis report', 'Tax readiness audit'],
    },
    {
      num: 3,
      title: 'Planning',
      icon: Layout,
      subtitle: 'Bespoke Architecture',
      desc: 'Designing a tailored financial management structure, standard operating procedures, custom reporting schedules, and compliance timeline.',
      outputs: ['Tailored accounting roadmap', 'Chart of accounts design', 'SOP documentation'],
    },
    {
      num: 4,
      title: 'Implementation',
      icon: Settings,
      subtitle: 'Seamless Onboarding',
      desc: 'Systematic deployment of clean bookkeeping workflows, automated payroll structures, tax documentation processes, and cash flow controls.',
      outputs: ['Ledger & payroll integration', 'Historical cleanup', 'Team alignment'],
    },
    {
      num: 5,
      title: 'Reporting',
      icon: FileSpreadsheet,
      subtitle: 'Actionable Intelligence',
      desc: 'Regular delivery of structured Income Statements, Balance Sheets, Cash Flow forecasts, and management review summaries.',
      outputs: ['Monthly financial package', 'Management reviews', 'Executive summaries'],
    },
    {
      num: 6,
      title: 'Continuous Support',
      icon: HeartHandshake,
      subtitle: 'Long-Term Strategic Advisory',
      desc: 'Ongoing financial partnership, proactive tax support, liquidity monitoring, and strategic advice to ensure sustainable long-term business growth.',
      outputs: ['Quarterly strategic reviews', 'Tax filing support', 'Growth modeling'],
    },
  ];

  return (
    <section id="journey" className="py-20 md:py-28 bg-[#F8FAFC] text-[#111827] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B3A]/5 border border-[#0B1B3A]/10 text-xs font-semibold text-[#0B1B3A] mb-3">
            <ChevronRight className="w-3.5 h-3.5 text-[#1FA971]" />
            <span>6-Stage Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B3A]">
            The Engagement Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A structured, six-stage methodology for seamless integration, financial organization, and ongoing strategic support.
          </p>
        </div>

        {/* 6-Stage Progress Stepper Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-xl text-left transition-all border relative overflow-hidden ${
                  isActive
                    ? 'bg-[#0B1B3A] text-white border-[#F2B84B] shadow-lg scale-105 z-10'
                    : isCompleted
                    ? 'bg-emerald-50 text-[#0B1B3A] border-[#1FA971]/40'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                    isActive
                      ? 'bg-[#F2B84B] text-[#0B1B3A]'
                      : isCompleted
                      ? 'bg-[#1FA971] text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#1FA971]' : 'text-slate-400'}`} />
                </div>
                <div className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-[#0B1B3A]'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="bg-[#071228] text-white rounded-2xl p-6 sm:p-10 border border-[#F2B84B]/30 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Stage Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#1FA971]/20 text-[#34D399] font-mono text-xs font-bold">
                  STAGE 0{steps[activeStep].num} OF 06
                </span>
                <span className="text-xs text-[#F2B84B] font-semibold uppercase tracking-wider">
                  {steps[activeStep].subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {steps[activeStep].desc}
              </p>
            </div>

            {/* Right Stage Deliverable Outputs */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F2B84B]">
                Key Stage Outputs
              </h4>
              <div className="space-y-2.5">
                {steps[activeStep].outputs.map((out, oIdx) => (
                  <div key={oIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1FA971]" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
