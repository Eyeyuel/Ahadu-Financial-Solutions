'use client';

import React, { useState } from 'react';
import { ArrowRight, Calendar, Shield, TrendingUp, CheckCircle, BarChart3, PieChart, Activity } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'visibility' | 'tax' | 'cashflow'>('visibility');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F8FAFC] dark:bg-[#071228] text-[#111827] dark:text-white overflow-hidden transition-colors duration-300 border-b border-slate-200 dark:border-white/10">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#1FA971]/10 dark:bg-[#1FA971]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F2B84B]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Amharic Philosophy Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-[#F2B84B]/30 shadow-sm dark:shadow-none backdrop-blur-md">
              <span className="text-sm font-bold text-[#F2B84B]">አሐዱ</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1FA971]" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                Unity • Long-Term Financial Advisory Partner in Ethiopia
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-[#0B1B3A] dark:text-white max-w-2xl">
              Empowering Businesses Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1B3A] via-[#1FA971] to-[#D99C2E] dark:from-white dark:via-slate-100 dark:to-[#F2B84B]">
                Financial Excellence
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-xl leading-relaxed font-normal">
              Ahadu Financial Solutions delivers professional bookkeeping, financial reporting, payroll administration, tax support, and strategic cash flow management for entrepreneurs, SMEs, and growing organizations across Ethiopia.
            </p>

            <blockquote className="pl-4 border-l-2 border-[#1FA971] text-sm text-slate-600 dark:text-slate-300 italic max-w-lg">
              “We become part of your business, not just your accounting firm.”
            </blockquote>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1FA971] to-[#168256] text-white text-sm font-semibold hover:shadow-xl hover:shadow-[#1FA971]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Calendar className="w-4 h-4 text-[#F2B84B]" />
                <span>Book Financial Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="#framework"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 text-sm font-medium border border-slate-200 dark:border-white/15 shadow-sm transition-all"
              >
                <span>Explore Ahadu Framework</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#1FA971]" />
                <span>100% Confidentiality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#F2B84B]" />
                <span>Ethiopian Tax Readiness</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#1FA971]" />
                <span>Forward-Looking Advisory</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Financial Clarity Dashboard */}
          <div className="lg:col-span-5">
            <div className="relative bg-white dark:bg-[#0B1B3A] border border-slate-200 dark:border-[#F2B84B]/30 rounded-2xl p-6 shadow-xl dark:shadow-2xl overflow-hidden backdrop-blur-xl transition-colors duration-300">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1FA971] animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                    Financial Clarity Dashboard
                  </span>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F2B84B]/15 text-[#D99C2E] dark:text-[#F2B84B] font-mono border border-[#F2B84B]/30 font-semibold">
                  AHADU ARCHITECTURE
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 dark:bg-white/5 rounded-lg mb-6 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('visibility')}
                  className={`py-2 rounded-md transition-all ${
                    activeTab === 'visibility' ? 'bg-[#1FA971] text-white font-semibold shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Reporting
                </button>
                <button
                  onClick={() => setActiveTab('tax')}
                  className={`py-2 rounded-md transition-all ${
                    activeTab === 'tax' ? 'bg-[#1FA971] text-white font-semibold shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Tax Support
                </button>
                <button
                  onClick={() => setActiveTab('cashflow')}
                  className={`py-2 rounded-md transition-all ${
                    activeTab === 'cashflow' ? 'bg-[#1FA971] text-white font-semibold shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Cash Flow
                </button>
              </div>

              {/* Tab Content Display */}
              {activeTab === 'visibility' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-300">Monthly Statement Readiness</span>
                      <span className="text-[#1FA971] dark:text-[#34D399] font-semibold">Investor Ready</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#1FA971] to-[#F2B84B] w-[95%]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                      <div className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1">
                        <BarChart3 className="w-3.5 h-3.5 text-[#F2B84B]" />
                        <span>Income Statement</span>
                      </div>
                      <div className="text-sm font-bold text-[#0B1B3A] dark:text-white">Categorized & Clean</div>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                      <div className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1">
                        <PieChart className="w-3.5 h-3.5 text-[#1FA971]" />
                        <span>Balance Sheet</span>
                      </div>
                      <div className="text-sm font-bold text-[#0B1B3A] dark:text-white">Reconciled</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tax' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">Compliance Risk Score</span>
                      <span className="px-2 py-0.5 rounded bg-[#1FA971]/20 text-[#1FA971] dark:text-[#34D399] font-mono text-[11px] font-bold">
                        OPTIMAL (LOW RISK)
                      </span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-200">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#1FA971]" />
                        <span>Tax records organized & audit ready</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#1FA971]" />
                        <span>Filing documentation structured</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'cashflow' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-700 dark:text-slate-300">90-Day Liquidity Forecast</span>
                      <span className="text-[#D99C2E] dark:text-[#F2B84B] font-semibold flex items-center gap-1">
                        <Activity className="w-3.5 h-3.5" />
                        <span>Predictable</span>
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Proactive cash management ensures working capital adequacy for payroll, supplier payments, and strategic growth opportunities.
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Quote Pill */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Ethiopian Business Context</span>
                <span className="text-[#D99C2E] dark:text-[#F2B84B] font-medium">Ahadu Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
