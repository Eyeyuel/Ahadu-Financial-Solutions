'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookingModal } from '@/components/shared/BookingModal';
import { BookOpen, BarChart3, Users, Scale, Coins, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const detailedServices = [
    {
      id: 'bookkeeping',
      title: 'Bookkeeping Services',
      subtitle: 'Organized, accurate daily financial recording',
      icon: BookOpen,
      intro: 'Accurate bookkeeping is the foundation of every successful business. We help Ethiopian businesses maintain organized, up-to-date financial records in accordance with accepted accounting standards.',
      scope: [
        'Daily financial transaction recording & classification',
        'General ledger setup and ongoing maintenance',
        'Bank and cash account reconciliations',
        'Accounts receivable management & invoice tracking',
        'Accounts payable management & vendor tracking',
        'Expense classification & document archiving',
      ],
      benefits: [
        'Accurate, audit-ready financial records',
        'Reduced risk of accounting errors & miscalculations',
        'Improved visibility into operational spending',
        'Streamlined tax preparation documentation',
      ],
    },
    {
      id: 'reporting',
      title: 'Financial Reporting',
      subtitle: 'Professional statements for management and investors',
      icon: BarChart3,
      intro: 'Reliable financial reports provide business owners with a clear understanding of their company’s performance and position, supporting investor confidence and executive planning.',
      scope: [
        'Income Statements (Profit & Loss)',
        'Statements of Financial Position (Balance Sheets)',
        'Cash Flow Statements',
        'Statements of Changes in Equity',
        'Monthly & Annual Management Financial Reports',
        'Key performance indicator (KPI) trend analysis',
      ],
      benefits: [
        'Clear understanding of business profitability',
        'Enhanced investor and creditor confidence',
        'Actionable insights for strategic decision-making',
        'High financial transparency',
      ],
    },
    {
      id: 'payroll',
      title: 'Payroll Administration',
      subtitle: 'Accurate, compliant employee compensation management',
      icon: Users,
      intro: 'Managing employee payroll accurately and on time is essential for employee trust and statutory compliance in Ethiopia.',
      scope: [
        'Complete monthly payroll preparation & calculation',
        'Employee statutory deduction calculations',
        'Payroll record management & confidential archiving',
        'Payroll summaries for management accounting',
        'Leave and overtime calculation support',
      ],
      benefits: [
        'Timely and accurate salary processing',
        'Reduced administrative workload for leadership',
        'Improved employee satisfaction and trust',
        'Compliance with payroll statutory requirements',
      ],
    },
    {
      id: 'tax',
      title: 'Tax Support Services',
      subtitle: 'Proactive tax record readiness and compliance support',
      icon: Scale,
      intro: 'Tax compliance is a crucial responsibility. We assist clients in maintaining structured financial documentation and understanding tax obligations to ensure readiness.',
      scope: [
        'Tax record preparation & documentation organizing',
        'Tax compliance support and risk assessment',
        'Structuring financial records for tax filing assistance',
        'Tax planning support & advisory guidance',
      ],
      benefits: [
        'Better tax organization',
        'Reduced compliance risk and filing errors',
        'Timely preparation for regulatory documentation',
        'Improved tax-efficient business planning',
      ],
    },
    {
      id: 'cashflow',
      title: 'Cash Flow Management',
      subtitle: 'Liquidity forecasting & strategic capital allocation',
      icon: Coins,
      intro: 'Proper liquidity planning allows businesses to operate with greater confidence, stability, and financial discipline.',
      scope: [
        'Cash flow forecasting (90-day & annual projections)',
        'Liquidity monitoring & working capital analysis',
        'Cash buffer planning for operational expansion',
      ],
      benefits: [
        'Predictable cash management',
        'Stronger financial discipline',
        'Protection against liquidity crunches',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#071228] text-[#111827] dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Header onOpenBooking={() => setBookingModalOpen(true)} />

      <main className="flex-grow pt-32 pb-20">
        {/* Page Banner */}
        <section className="bg-slate-100 dark:bg-[#071228] text-[#0B1B3A] dark:text-white py-16 border-b border-slate-200 dark:border-[#F2B84B]/20 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-[#F2B84B]/30 text-xs font-semibold text-[#D99C2E] dark:text-[#F2B84B]">
                <span>Confirmed Service Offering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0B1B3A] dark:text-white">
                Our Core Services
              </h1>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Practical, reliable, and value-driven financial solutions tailored to empower entrepreneurs, SMEs, and growing organizations across Ethiopia.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Service Cards List */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {detailedServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white dark:bg-[#0B1B3A] rounded-3xl border border-slate-200 dark:border-white/10 p-8 sm:p-12 shadow-xl scroll-mt-36 transition-colors duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3.5 rounded-2xl bg-[#0B1B3A] dark:bg-white/10 text-[#1FA971] dark:text-[#34D399]">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B3A] dark:text-white">
                          {service.title}
                        </h2>
                        <div className="text-xs font-semibold text-[#D99C2E] dark:text-[#F2B84B] uppercase tracking-wider">
                          {service.subtitle}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {service.intro}
                    </p>

                    <button
                      onClick={() => setBookingModalOpen(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1FA971] text-white text-xs font-semibold hover:bg-[#168256] transition-colors"
                    >
                      <Calendar className="w-4 h-4 text-[#F2B84B]" />
                      <span>Engage Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Scope */}
                    <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1B3A] dark:text-white">
                        Scope & Deliverables
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                        {service.scope.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1FA971] shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="p-6 bg-slate-100 dark:bg-[#071228] text-[#111827] dark:text-white rounded-2xl border border-slate-200 dark:border-[#F2B84B]/20 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#168256] dark:text-[#F2B84B]">
                        Client Benefits
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1FA971] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer onOpenBooking={() => setBookingModalOpen(true)} />
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </div>
  );
}
