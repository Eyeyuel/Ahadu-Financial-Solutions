'use client';

import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Send, Shield, Sparkles } from 'lucide-react';
import { AhaduLogo } from './AhaduLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceInterest: 'Bookkeeping & Reporting',
    sector: 'SMEs & Enterprises',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#071228] border border-slate-200 dark:border-[#F2B84B]/30 rounded-2xl shadow-2xl overflow-hidden text-[#111827] dark:text-white transition-colors duration-300">
        {/* Decorative Top Accent Line */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0B1B3A] via-[#1FA971] to-[#F2B84B]" />
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-10 text-center space-y-6">
            <div className="w-16 h-16 bg-[#1FA971]/20 border border-[#1FA971] rounded-full flex items-center justify-center mx-auto text-[#1FA971] dark:text-[#34D399]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0B1B3A] dark:text-white mb-2">Consultation Request Received</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Thank you, <span className="text-[#1FA971] dark:text-[#F2B84B] font-semibold">{formData.fullName}</span>. Our advisory team will reach out to <span className="font-semibold">{formData.email}</span> within 24 hours to schedule your strategic financial assessment.
              </p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto flex items-center gap-2 text-left border border-slate-200 dark:border-white/10">
              <Shield className="w-4 h-4 text-[#1FA971] shrink-0" />
              <span>All details provided remain strictly confidential under Ahadu partner non-disclosure standards.</span>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-lg bg-[#1FA971] hover:bg-[#168256] text-white font-semibold text-sm transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1FA971] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#F2B84B]" />
                  <span>Strategic Assessment</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B1B3A] dark:text-white">Book Your Consultation</h2>
              </div>
              <AhaduLogo variant="auto" size="sm" showSubtitle={false} />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Abebe Bikila"
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/15 rounded-lg text-sm text-[#111827] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#1FA971] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Growth Technologies PLC"
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/15 rounded-lg text-sm text-[#111827] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#1FA971] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/15 rounded-lg text-sm text-[#111827] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#1FA971] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+251 91 123 4567"
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/15 rounded-lg text-sm text-[#111827] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#1FA971] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Primary Service Area</label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0B1B3A] border border-slate-300 dark:border-white/15 rounded-lg text-sm text-[#111827] dark:text-white focus:outline-none focus:border-[#1FA971]"
                  >
                    <option>Bookkeeping & Reporting</option>
                    <option>Payroll Administration</option>
                    <option>Tax Support Services</option>
                    <option>Cash Flow Management</option>
                    <option>Complete Financial Management</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Industry Sector</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0B1B3A] border border-slate-300 dark:border-white/15 rounded-lg text-sm text-[#111827] dark:text-white focus:outline-none focus:border-[#1FA971]"
                  >
                    <option>Startups & Tech</option>
                    <option>SMEs & Enterprises</option>
                    <option>Retail & Commerce</option>
                    <option>Construction & Real Estate</option>
                    <option>Manufacturing & Logistics</option>
                    <option>Hospitality & Tourism</option>
                    <option>Healthcare Services</option>
                    <option>Professional Services</option>
                    <option>NGOs & Non-Profits</option>
                    <option>Import & Export</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Brief Overview of Financial Goals or Challenges</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your current financial reporting or compliance needs..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/15 rounded-lg text-sm text-[#111827] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#1FA971] transition-colors"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Shield className="w-3.5 h-3.5 text-[#1FA971]" />
                  <span>Confidential & Secure</span>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#1FA971] to-[#168256] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#1FA971]/25 transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#F2B84B]" />
                  <span>Request Assessment</span>
                  <Send className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
