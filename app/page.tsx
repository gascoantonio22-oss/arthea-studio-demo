'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/landing/Hero';
import { Filosofia } from '@/components/landing/Filosofia';
import { LaExperiencia } from '@/components/landing/LaExperiencia';
import { AntesDespues } from '@/components/landing/AntesDespues';
import { Metodologia } from '@/components/landing/Metodologia';
import { FAQ } from '@/components/landing/FAQ';
import { FinalCTA } from '@/components/landing/FinalCTA';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <LaExperiencia />
        <Filosofia />
        <AntesDespues />
        <Metodologia />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
