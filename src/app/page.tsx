// ─────────────────────────────────────────────────────────────────────────────
// Sguild Nails — Single Page (match swim-site minimalist style)
// Next.js App Router, TypeScript, TailwindCSS
// Uses only nail-business assets you named
// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PHONE_NUMBER = "+1-000-000-0000"; // ← update when ready
const SMS_COPY = encodeURIComponent("Hi Sguild Nails! I'd like to book an appointment.");

function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iphone|ipad|ipod|android|mobile/i.test(navigator.userAgent));
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <Link href="#top" className="flex items-center gap-3" aria-label="Sguild Nails home">
          <Image src="/assets/logo-graphic.png" alt="Sguild Nails logo" width={36} height={36} className="h-9 w-auto" />
          <span className="text-base font-semibold tracking-tight text-slate-900">
            Sguild <span className="text-slate-500">Nails</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#services" className="hover:text-pink-600">Services</Link>
          <Link href="#faq" className="hover:text-pink-600">FAQ</Link>
        </nav>
        {isMobile ? (
          <a
            href={`sms:${PHONE_NUMBER}?&body=${SMS_COPY}`}
            className="hidden md:inline-flex items-center rounded-lg border border-pink-200 bg-pink-50 px-3 py-2 text-sm font-medium text-pink-700 hover:bg-pink-100"
          >
            Text us
          </a>
        ) : (
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-black"
          >
            Book now
          </Link>
        )}
        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-slate-300"
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      <div id="mobile-menu" className={`md:hidden border-t border-slate-200 bg-white ${open ? "" : "hidden"}`}>
        <div className="px-4 py-3 grid gap-3 text-base">
          <Link href="#services" className="block hover:text-pink-600">Services</Link>
          <Link href="#faq" className="block hover:text-pink-600">FAQs</Link>
          <Link href="#contact" className="block hover:text-pink-600">Book Now</Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Sguild Nails</p>
        <p>Dallas, TX</p>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div id="top" className="bg-white text-slate-800 min-h-screen">
      {/* background accents like swim-site */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-fuchsia-200/60 blur-3xl" />
      </div>

      <Header />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Luxury, at‑home nail care in <span className="text-pink-600">Dallas</span></h1>
            <p className="mt-3 text-lg text-slate-600">Gel manicures, structured manicures, and extensions — in the comfort of your home. We bring the salon to you.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#contact" className="rounded-xl bg-pink-600 px-5 py-3 text-sm font-medium text-white hover:bg-pink-700">Book your appointment</Link>
              <a href="#services" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50">See services</a>
            </div>
          </div>
          <figure className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200">
            <Image src="/assets/nails-hero.jpg" alt="Modern gel manicure setup at home" width={1200} height={900} className="h-full w-full object-cover" priority />
          </figure>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Popular services</h2>
        <p className="mt-2 text-slate-600">Transparent, travel‑included pricing. Final quotes confirmed over text.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name: "Structured Gel Manicure", desc: "Natural nail strengthening with impeccable finish.", price: "$85+" },
              { name: "Gel X / Extensions", desc: "Lightweight, durable length and shape you love.", price: "$110+" },
              { name: "Classic Manicure", desc: "Clean shaping, cuticle care, and gel polish.", price: "$70+" },
            ].map((s) => (
              <div key={s.name} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-base font-semibold">{s.name}</h3>
                  <span className="text-sm text-slate-600">{s.price}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


  {/* How it Works */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How it works</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { step: "1", title: "Text or call", body: "Send your address, preferred time, and the services you want." },
            { step: "2", title: "We come to you", body: "Your tech arrives with professional tools and sanitization." },
            { step: "3", title: "Relax & enjoy", body: "Sit back. No parking, no waiting room, just flawless nails." },
          ].map((it) => (
            <div key={it.step} className="rounded-2xl border border-slate-200 p-6">
              <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center font-semibold">{it.step}</div>
              <h3 className="mt-4 text-base font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQs</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {[
            { q: "Do you bring everything?", a: "Yes. We bring tools, polishes, and protective coverings. Please provide a clear, well‑lit workspace and access to water and power." },
            { q: "How do I pay?", a: "We accept major cards and cash. A small deposit may be required for group bookings or peak times." },
            { q: "What is your sanitation process?", a: "Implements are cleaned and either disinfected in hospital‑grade solution or single‑use. Surfaces are wiped with EPA‑registered disinfectant." },
            { q: "Do you serve hotels and offices?", a: "Absolutely — we regularly serve hotels, offices, and events across Dallas. Message us with details for a custom quote." },
          ].map((f, i) => (
            <details key={i} className="group open:bg-slate-50">
              <summary className="cursor-pointer list-none px-5 py-4 font-medium flex items-center justify-between">
                <span>{f.q}</span>
                <span className="text-slate-400 group-open:rotate-45 transition">＋</span>
              </summary>
              <div className="px-5 pb-5 text-slate-600 text-sm">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-3xl font-bold">Book Your Appointment</h2>
            <p className="mt-2 text-sm text-slate-600">Text is fastest. Send your preferred date/time, location (ZIP), and services.</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a href={`sms:${PHONE_NUMBER}?&body=${SMS_COPY}`} className="rounded-xl bg-pink-600 px-5 py-3 text-sm font-medium text-white hover:bg-pink-700">Text us</a>
              <a href={`tel:${PHONE_NUMBER}`} className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50">Call us</a>
              <a href="mailto:hello@sguildnails.com" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50">Email</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

