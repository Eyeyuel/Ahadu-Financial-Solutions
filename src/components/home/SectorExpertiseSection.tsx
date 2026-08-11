'use client';

import React, { useState } from 'react';
import { Rocket, Building2, ShoppingBag, HardHat, Factory, Hotel, Stethoscope, Briefcase, Globe2, Ship } from 'lucide-react';

export const SectorExpertiseSection: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<number>(0);

  const sectors = [
    {
      id: 'tech',
      title: 'Startups & Tech',
      icon: Rocket,
      focus: 'Runway modeling, burn-rate tracking, investor-ready reporting & equity structures.',
    },
    {
      id: 'smes',
      title: 'SMEs & Enterprises',
      icon: Building2,
      focus: 'Multi-line bookkeeping, management reporting, payroll & structured tax readiness.',
    },
    {
      id: 'retail',
      title: 'Retail & Commerce',
      icon: ShoppingBag,
      focus: 'Inventory accounting, cash reconciliations, margin analysis & point-of-sale audits.',
    },
    {
      id: 'construction',
      title: 'Construction & Real Estate',
      icon: HardHat,
      focus: 'Job costing, contractor payroll, progress billing & long-term project cash planning.',
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Logistics',
      icon: Factory,
      focus: 'Cost of goods sold (COGS), raw material inventory valuation & operational margin controls.',
    },
    {
      id: 'hospitality',
      title: 'Hospitality & Tourism',
      icon: Hotel,
      focus: 'Daily revenue reconciliations, seasonal liquidity management & statutory payroll.',
    },
    {
      id: 'healthcare',
      title: 'Healthcare Services',
      icon: Stethoscope,
      focus: 'Billing records, statutory compliance, equipment asset tracking & cash forecasting.',
    },
    {
      id: 'services',
      title: 'Professional Services',
      icon: Briefcase,
      focus: 'Client billing, partner equity accounting, overhead allocation & tax preparation.',
    },
    {
      id: 'ngos',
      title: 'NGOs & Non-Profits',
      icon: Globe2,
      focus: 'Grant tracking, donor financial reporting, fund accounting & strict compliance audits.',
    },
    {
      id: 'importexport',
      title: 'Import & Export',
      icon: Ship,
      focus: 'Customs tax documentation, foreign currency tracking, duty records & trade finance.',
    },
  ];

  return (
    <section id="sectors" className="py-20 md:py-28 bg-[#0B1B3A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Sector Expertise
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Adaptable financial management frameworks tailored to the unique regulatory, accounting, and cash flow dynamics of businesses across Ethiopia.
          </p>
        </div>

        {/* 10 Sector Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            const isSelected = selectedSector === idx;

            return (
              <button
                key={sec.id}
                onClick={() => setSelectedSector(idx)}
                className={`p-4 rounded-2xl text-center transition-all duration-300 border flex flex-col items-center justify-between min-h-[140px] ${
                  isSelected
                    ? 'bg-[#1FA971] text-white border-[#F2B84B] shadow-xl scale-105'
                    : 'bg-[#071228] text-slate-300 border-white/10 hover:border-[#1FA971] hover:text-white'
                }`}
              >
                <div className={`p-3 rounded-xl mb-2 ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-white/5 text-[#F2B84B]'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold leading-tight">
                  {sec.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Focus Spotlight */}
        <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-3xl mx-auto text-center space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#F2B84B]">
            Advisory Focus: {sectors[selectedSector].title}
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {sectors[selectedSector].focus}
          </p>
        </div>
      </div>
    </section>
  );
};
