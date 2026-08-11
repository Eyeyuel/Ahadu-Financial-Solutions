'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookingModal } from '@/components/shared/BookingModal';
import { HeroSection } from '@/components/home/HeroSection';
import { GrowthParadoxSection } from '@/components/home/GrowthParadoxSection';
import { FrameworkSection } from '@/components/home/FrameworkSection';
import { EngagementJourneySection } from '@/components/home/EngagementJourneySection';
import { SectorExpertiseSection } from '@/components/home/SectorExpertiseSection';
import { DifferentiatorsSection } from '@/components/home/DifferentiatorsSection';
import { FounderSection } from '@/components/home/FounderSection';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] flex flex-col font-sans selection:bg-[#1FA971] selection:text-white">
      {/* Sticky Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <HeroSection onOpenBooking={handleOpenBooking} />
        <GrowthParadoxSection />
        <FrameworkSection />
        <EngagementJourneySection />
        <SectorExpertiseSection />
        <DifferentiatorsSection />
        <FounderSection />
        <CTASection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Consultation Booking Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />
    </div>
  );
}
