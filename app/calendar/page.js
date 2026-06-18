'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import EventCalendar from '@/components/EventCalendar';

export default function CalendarPage() {
  return (
    <SmoothScroll>
      <main className="bg-bg">
        <Nav />
        
        {/* The Calendar component is self-contained with its own hero-like section padding */}
        <EventCalendar />

        <Footer />
      </main>
    </SmoothScroll>
  );
}
