'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AhaduLogo } from '../shared/AhaduLogo';
import { Menu, X, ArrowRight, Calendar, Phone, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesList = [
    { title: 'Bookkeeping Services', desc: 'Accurate daily financial recording & ledger management', href: '/services#bookkeeping' },
    { title: 'Financial Reporting', desc: 'Statements, income sheets & management reports', href: '/services#reporting' },
    { title: 'Payroll Administration', desc: 'Compliant salary calculations, deductions & record management', href: '/services#payroll' },
    { title: 'Tax Support Services', desc: 'Tax readiness, documentation & compliance assistance', href: '/services#tax' },
    { title: 'Cash Flow Management', desc: 'Liquidity forecasting & strategic capital allocation', href: '/services#cashflow' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1B3A]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#F2B84B]/20'
          : 'bg-[#0B1B3A] py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <AhaduLogo variant="white" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative group" onMouseEnter={() => setServicesDropdownOpen(true)} onMouseLeave={() => setServicesDropdownOpen(false)}>
              <button
                className="flex items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-[#F2B84B] transition-colors py-2"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#F2B84B]' : 'text-slate-400'}`} />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-[#071228] border border-[#F2B84B]/20 rounded-xl shadow-2xl p-3 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  {servicesList.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      className="p-2.5 rounded-lg hover:bg-white/5 transition-all group/item block"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="text-sm font-semibold text-white group-hover/item:text-[#1FA971] flex items-center justify-between">
                        {service.title}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#1FA971]" />
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">{service.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#framework" className="text-sm font-medium text-slate-200 hover:text-[#F2B84B] transition-colors">
              Framework
            </Link>

            <Link href="/#journey" className="text-sm font-medium text-slate-200 hover:text-[#F2B84B] transition-colors">
              Engagement Journey
            </Link>

            <Link href="/#sectors" className="text-sm font-medium text-slate-200 hover:text-[#F2B84B] transition-colors">
              Sectors
            </Link>

            <Link href="/about" className="text-sm font-medium text-slate-200 hover:text-[#F2B84B] transition-colors">
              About Us
            </Link>

            <Link href="/insights" className="text-sm font-medium text-slate-200 hover:text-[#F2B84B] transition-colors">
              Insights
            </Link>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Amharic Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#1FA971]/15 border border-[#1FA971]/30 text-[#34D399] text-xs font-medium">
              <span className="font-bold">አሐዱ</span>
              <span className="text-slate-400">|</span>
              <span>Unity</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#1FA971] to-[#168256] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#1FA971]/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Calendar className="w-4 h-4 text-[#F2B84B]" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="p-2 rounded-lg bg-[#1FA971] text-white text-xs font-semibold"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#071228] border-b border-[#F2B84B]/20 shadow-2xl p-6 animate-in slide-in-from-top duration-300">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1FA971]">
              <span>አሐዱ</span>
              <span className="text-slate-500">•</span>
              <span>Financial Clarity for Ethiopian Business</span>
            </div>
          </div>

          <nav className="flex flex-col gap-4">
            <Link
              href="/services"
              className="text-base font-semibold text-white hover:text-[#F2B84B]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Services
            </Link>
            <div className="pl-4 flex flex-col gap-2 border-l border-white/10 my-1">
              {servicesList.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  className="text-xs text-slate-300 hover:text-[#1FA971]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {s.title}
                </Link>
              ))}
            </div>

            <Link
              href="/#framework"
              className="text-base font-semibold text-white hover:text-[#F2B84B]"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Ahadu Framework
            </Link>
            <Link
              href="/#journey"
              className="text-base font-semibold text-white hover:text-[#F2B84B]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Engagement Journey
            </Link>
            <Link
              href="/#sectors"
              className="text-base font-semibold text-white hover:text-[#F2B84B]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sector Expertise
            </Link>
            <Link
              href="/about"
              className="text-base font-semibold text-white hover:text-[#F2B84B]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/insights"
              className="text-base font-semibold text-white hover:text-[#F2B84B]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights & Advisory
            </Link>
          </nav>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-[#1FA971] to-[#168256] text-white font-semibold text-sm"
            >
              <Calendar className="w-4 h-4 text-[#F2B84B]" />
              <span>Book Financial Consultation</span>
            </button>
            <a
              href="tel:+251901049961"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/15 text-slate-300 text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#1FA971]" />
              <span>+251 901 049 961</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
