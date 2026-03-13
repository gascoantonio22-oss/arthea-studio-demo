'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactIntro } from '@/components/contact/ContactIntro';
import { ConsultationForm } from '@/components/contact/ConsultationForm';
import { LocationSection } from '@/components/contact/LocationSection';

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="bg-[linear-gradient(180deg,#111111_0%,#161311_24%,#1a1613_52%,#121110_100%)]">
        <ContactIntro />
        <ConsultationForm />
        <LocationSection />
      </main>

      <Footer />
    </>
  );
}
