'use client';

import React from 'react';
import { Calendar, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onOpenBooking: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 md:py-28 bg-[#071228] text-white relative overflow-hidden border-t border-[#F2B84B]/20">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1FA971]/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#0B1B3A] to-[#071228] border border-[#F2B84B]/40 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1FA971]/20 text-[#34D399] border border-[#1FA971]/40 text-xs font-bold uppercase tracking-wider">
                <span>Start Your Financial Partnership</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Let’s Build Your Financial Future Together.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Partner with Ahadu Financial Solutions today. Whether you need reliable bookkeeping, organized tax support, payroll administration, or cash flow forecasting, we are here to support your growth.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#1FA971] to-[#168256] text-white text-base font-semibold hover:shadow-xl hover:shadow-[#1FA971]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Calendar className="w-5 h-5 text-[#F2B84B]" />
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Right Contact Quick Box */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#F2B84B]">
                Direct Contact
              </h3>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#1FA971] shrink-0" />
                  <a href="tel:+251901049961" className="hover:text-white transition-colors">
                    +251 901 049 961
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#1FA971] shrink-0" />
                  <a href="mailto:ahadufinancial@gmail.com" className="hover:text-white transition-colors">
                    ahadufinancial@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#1FA971] shrink-0" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 italic">
                “Ahadu” means “One” or “Unity” — your trusted financial advisory partner.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
