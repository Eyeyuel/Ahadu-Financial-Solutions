import React from 'react';
import Link from 'next/link';
import { AhaduLogo } from '../shared/AhaduLogo';
import { Mail, Phone, MapPin, Globe, Shield, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#071228] text-slate-300 border-t border-[#F2B84B]/20 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Grid Line Accents */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#1FA971]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <AhaduLogo variant="white" size="lg" />
            <p className="text-sm text-slate-400 max-w-md leading-relaxed mt-4">
              Ahadu Financial Solutions is an Ethiopia-based professional accounting, financial management, and business advisory firm. Built on the Amharic principle of <strong className="text-white">“Ahadu” (አሐዱ — Unity)</strong>, we partner with growing enterprises to build sound financial architecture for sustainable growth.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-[#34D399]">
                <Shield className="w-3.5 h-3.5 text-[#F2B84B]" />
                <span>Strict Confidentiality & Ethics</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2B84B] mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#bookkeeping" className="hover:text-[#1FA971] transition-colors">
                  Bookkeeping Services
                </Link>
              </li>
              <li>
                <Link href="/services#reporting" className="hover:text-[#1FA971] transition-colors">
                  Financial Reporting
                </Link>
              </li>
              <li>
                <Link href="/services#payroll" className="hover:text-[#1FA971] transition-colors">
                  Payroll Administration
                </Link>
              </li>
              <li>
                <Link href="/services#tax" className="hover:text-[#1FA971] transition-colors">
                  Tax Support Services
                </Link>
              </li>
              <li>
                <Link href="/services#cashflow" className="hover:text-[#1FA971] transition-colors">
                  Cash Flow Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2B84B] mb-4">
              Organization
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#1FA971] transition-colors">
                  About Ahadu
                </Link>
              </li>
              <li>
                <Link href="/#journey" className="hover:text-[#1FA971] transition-colors">
                  The 6-Stage Journey
                </Link>
              </li>
              <li>
                <Link href="/#sectors" className="hover:text-[#1FA971] transition-colors">
                  Sector Expertise
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[#1FA971] transition-colors">
                  Insights & Articles
                </Link>
              </li>
              <li>
                <button onClick={onOpenBooking} className="text-[#1FA971] font-semibold hover:underline text-left">
                  Book Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2B84B] mb-4">
              Contact & Location
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1FA971] shrink-0 mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1FA971] shrink-0" />
                <a href="mailto:ahadufinancial@gmail.com" className="hover:text-white transition-colors">
                  ahadufinancial@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1FA971] shrink-0" />
                <a href="tel:+251901049961" className="hover:text-white transition-colors">
                  +251 901 049 961
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#1FA971] shrink-0" />
                <a href="https://www.ahadufinancial.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>www.ahadufinancial.com</span>
                  <ArrowUpRight className="w-3 h-3 text-[#F2B84B]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Ahadu Financial Solutions. All rights reserved. Founded by <span className="text-white font-medium">Arsema Habtamu</span>.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors">Privacy Policy & Confidentiality</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">Terms of Engagement</span>
            <span>•</span>
            <span className="text-[#34D399]">Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
