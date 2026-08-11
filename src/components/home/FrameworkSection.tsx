'use client';

import React, { useState } from 'react';
import { BookOpen, BarChart3, Users, Scale, Coins, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const FrameworkSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services = [
    {
      id: 'bookkeeping',
      icon: BookOpen,
      title: 'Bookkeeping Services',
      subtitle: 'Accurate, day-to-day financial recording',
      tagline: 'The foundation of every successful business.',
      deliverables: [
        'Recording daily financial transactions in compliance with standard principles',
        'Maintaining structured general ledgers & account charts',
        'Bank and cash reconciliations',
        'Accounts receivable & payable management',
        'Expense recording and classification',
        'Financial record organization for easy access',
      ],
      benefit: 'Better financial control, reduced accounting errors, easier tax preparation, and reliable decision-making data.',
    },
    {
      id: 'reporting',
      icon: BarChart3,
      title: 'Financial Reporting',
      subtitle: 'Professional statements for management and investors',
      tagline: 'Clear financial reports that provide actionable clarity.',
      deliverables: [
        'Income Statements (Profit & Loss)',
        'Statements of Financial Position (Balance Sheets)',
        'Cash Flow Statements & Changes in Equity',
        'Management Reports & Monthly KPI reviews',
        'Annual Financial Reports',
        'Financial performance trend analysis',
      ],
      benefit: 'Clear understanding of business performance, improved strategic planning, investor confidence, and financial transparency.',
    },
    {
      id: 'payroll',
      icon: Users,
      title: 'Payroll Administration',
      subtitle: 'Efficient, compliant employee compensation management',
      tagline: 'Managing employee payroll accurately and on time.',
      deliverables: [
        'Timely payroll preparation & salary calculations',
        'Employee statutory deductions & withholdings',
        'Payroll record management & documentation',
        'Payroll reporting for management',
        'Leave and overtime calculations',
      ],
      benefit: 'Accurate payroll processing, reduced administrative workload, employee confidence, and compliance with statutory requirements.',
    },
    {
      id: 'tax',
      icon: Scale,
      title: 'Tax Support Services',
      subtitle: 'Proactive compliance and precise filing support',
      tagline: 'Navigating tax obligations with peace of mind.',
      deliverables: [
        'Tax record preparation & documentation organizing',
        'Tax compliance support and risk evaluation',
        'Financial documentation structure for tax authorities',
        'Tax planning support & advisory guidance',
        'Filing preparation assistance',
      ],
      benefit: 'Better tax organization, reduced compliance risks, timely document preparation, and improved tax-efficient financial planning.',
    },
    {
      id: 'cashflow',
      icon: Coins,
      title: 'Cash Flow Management',
      subtitle: 'Forecasting, liquidity & resource allocation',
      tagline: 'Securing liquidity so your business operates with confidence.',
      deliverables: [
        'Cash flow forecasting (90-day & annual projections)',
        'Liquidity monitoring and working capital optimization',
        'Receivables collection acceleration strategies',
        'Cash outflow timing and reserve planning',
      ],
      benefit: 'Improved cash management, stronger financial discipline, increased business stability, and capital availability for growth.',
    },
    {
      id: 'advisory',
      icon: Compass,
      title: 'Business Advisory & Strategy',
      subtitle: 'Guiding long-term growth and capital efficiency',
      tagline: 'Forward-looking advice that translates numbers into strategic advantage.',
      deliverables: [
        'Budgeting & financial modeling',
        'Cost structure optimization',
        'Strategic financial planning for expansion',
        'Ongoing management consultation',
      ],
      benefit: 'Operational agility, risk mitigation, and executive confidence in scaling your Ethiopian business.',
    },
  ];

  return (
    <section id="framework" className="py-20 md:py-28 bg-[#0B1B3A] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1FA971]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#F2B84B]/30 text-xs font-semibold text-[#F2B84B]">
            <span>The Ahadu Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            The Ahadu Framework
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Comprehensive financial clarity from a single, trusted partner. An integrated suite of solutions designed to turn operational chaos into strategic growth.
          </p>
        </div>

        {/* Interactive Service Pills Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeTab === idx;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#1FA971] text-white shadow-lg shadow-[#1FA971]/30 scale-105'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#F2B84B]'}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed View */}
        <div className="bg-[#071228] border border-[#F2B84B]/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Info & Key Benefit */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#1FA971]/20 border border-[#1FA971]/40 text-[#34D399]">
                  {React.createElement(services[activeTab].icon, { className: 'w-7 h-7' })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{services[activeTab].title}</h3>
                  <p className="text-xs text-[#F2B84B] font-medium">{services[activeTab].subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 italic border-l-2 border-[#F2B84B] pl-3 py-1">
                “{services[activeTab].tagline}”
              </p>

              {/* Key Benefit Highlight Box */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#34D399]">
                  Primary Client Benefit
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {services[activeTab].benefit}
                </p>
              </div>
            </div>

            {/* Right: Deliverables Checklist */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Core Deliverables & Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services[activeTab].deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#1FA971]/50 transition-colors flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1FA971] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-normal">{item}</span>
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
