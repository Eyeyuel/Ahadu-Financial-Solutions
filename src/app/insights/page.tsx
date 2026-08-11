'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookingModal } from '@/components/shared/BookingModal';
import { Clock, ArrowRight, TrendingUp } from 'lucide-react';

export default function InsightsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const articles = [
    {
      id: 1,
      title: 'Navigating Financial Visibility: Why Ethiopian SMEs Outgrow Cash-Based Bookkeeping',
      category: 'Financial Strategy',
      readTime: '5 min read',
      date: 'August 2026',
      summary: 'As a business scales, relying on informal cash receipts or memory leads to blind spots. Learn how structured income statements and balance sheets transform executive decision-making.',
    },
    {
      id: 2,
      title: 'Understanding 90-Day Cash Flow Forecasting for Seasonal Businesses in Addis Ababa',
      category: 'Cash Flow Management',
      readTime: '6 min read',
      date: 'July 2026',
      summary: 'Profitability on paper does not guarantee liquidity. Explore practical steps for working capital management and cash buffer allocation.',
    },
    {
      id: 3,
      title: 'Building Audit-Ready Tax Documentation: A Guide for Growing Enterprises',
      category: 'Tax Support',
      readTime: '7 min read',
      date: 'June 2026',
      summary: 'Organizing daily accounting records reduces compliance stress during filing windows. A framework for structured tax record management.',
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
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Thought Leadership & Knowledge</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0B1B3A] dark:text-white">
                Insights & Financial Advisory
              </h1>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Practical guides, financial management strategy, and compliance insights for business leaders and entrepreneurs across Ethiopia.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art) => (
              <div
                key={art.id}
                className="bg-white dark:bg-[#0B1B3A] rounded-2xl border border-slate-200 dark:border-white/10 p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="px-2.5 py-1 rounded-full bg-[#1FA971]/15 text-[#168256] dark:text-[#34D399] font-semibold">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#0B1B3A] dark:text-white leading-snug">
                    {art.title}
                  </h2>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs text-[#1FA971] dark:text-[#34D399] font-semibold mt-6">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer onOpenBooking={() => setBookingModalOpen(true)} />
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </div>
  );
}
