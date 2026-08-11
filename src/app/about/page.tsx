'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookingModal } from '@/components/shared/BookingModal';
import { FounderSection } from '@/components/home/FounderSection';
import { ShieldCheck, HeartHandshake, Award, Sparkles, Building2, MapPin } from 'lucide-react';

export default function AboutPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] flex flex-col font-sans">
      <Header onOpenBooking={() => setBookingModalOpen(true)} />

      <main className="flex-grow pt-32 pb-20">
        {/* Page Banner */}
        <section className="bg-[#0B1B3A] text-white py-16 border-b border-[#F2B84B]/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#F2B84B]/30 text-xs font-semibold text-[#F2B84B]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Story & Philosophy</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                About Ahadu Financial Solutions
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Founded on the Amharic principle of <strong className="text-[#F2B84B]">“Ahadu” (አሐዱ — Unity)</strong>, we empower Ethiopian businesses through financial excellence, strategic insight, and unwavering integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-bold text-[#0B1B3A]">
                Building Financially Sound, Well-Managed, and Resilient Businesses
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Ahadu Financial Solutions is a professional accounting and financial management firm established in Ethiopia to serve entrepreneurs, startups, small and medium-sized enterprises (SMEs), and growing organizations.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We believe that behind every successful business is a commitment to sound financial management, ethical practices, and continuous improvement. We see ourselves not simply as service providers, but as long-term trusted partners who work alongside our clients to build lasting financial stability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-[#1FA971] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#0B1B3A] text-sm">True Partnership</div>
                    <div className="text-xs text-slate-500 mt-0.5">Your goals become our responsibility and your success is our motivation.</div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#F2B84B] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#0B1B3A] text-sm">Uncompromising Discretion</div>
                    <div className="text-xs text-slate-500 mt-0.5">Safeguarding all financial and business data with absolute confidentiality.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#071228] text-white p-8 rounded-2xl border border-[#F2B84B]/30 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-[#1FA971]" />
                <h3 className="text-xl font-bold text-white">Company Profile Summary</h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-300 divide-y divide-white/10">
                <li className="pt-2 flex justify-between">
                  <span className="text-slate-400">Public Brand:</span>
                  <span className="font-semibold text-white">Ahadu Financial Solutions</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span className="text-slate-400">Meaning of Name:</span>
                  <span className="font-semibold text-[#F2B84B]">Ahadu (አሐዱ) — Unity / One</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span className="text-slate-400">Founder & Director:</span>
                  <span className="font-semibold text-white">Arsema Habtamu</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-white flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#1FA971]" /> Addis Ababa, Ethiopia
                  </span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span className="text-slate-400">Primary Focus:</span>
                  <span className="font-semibold text-white">SMEs, Startups & Enterprises</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Founder & Core Values Section */}
        <FounderSection />
      </main>

      <Footer onOpenBooking={() => setBookingModalOpen(true)} />
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </div>
  );
}
