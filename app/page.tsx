'use client';
import Hero from '@/components/main/Hero';
import Updates from '@/components/main/Updates';
import Students from '@/components/main/Students';
import Timetable from '@/components/main/Timetable';
import Faculty from '@/components/main/Faculty';
import Photos from '@/components/main/Photos';
import Footer from '@/components/main/Footer';
import React from 'react';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-12 md:gap-24 lg:gap-32">
        <Hero />
        <Updates />
        <Students />
        <Timetable />
        <Faculty />
        <Photos />
        <Footer />
      </div>
    </main>
  );
}
