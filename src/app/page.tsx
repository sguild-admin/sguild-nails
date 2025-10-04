"use client";
import React from "react";
import Link from "next/link";

// Update these to match your actual service areas and routes
// Example: create /oahu and /dallas pages later, or point to /contact for waitlist
const LOCATIONS: Array<{
  key: string;
  name: string;
  href: string; // internal route
  image: string; // public asset path
  imageAlt: string;
  description: string;
  areaTag: string;
  badges?: string[];
}> = [
  {
    key: "dallas",
    name: "Dallas–Fort Worth, TX",
    href: "/dallas",
    image: "/assets/nails-dallas.jpg",
    imageAlt: "Neutral manicure in Dallas living room",
    description:
      "At‑home nail services across Dallas, Plano, Frisco, Arlington, and surrounding areas.",
    areaTag: "Metro Service",
    badges: ["Mobile", "Evenings & weekends"],
  },
  {
    key: "waitlist",
    name: "Not in these areas?",
    href: "/contact",
    image: "/assets/nails-generic.jpg",
    imageAlt: "Close‑up of polished nails",
    description:
      "Join the waitlist or request your city. We’ll text you when we launch near you.",
    areaTag: "Coming soon",
    badges: ["Request city"],
  },
];

export default function LocationSelectorPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header — keep formatting the same style as your existing header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Sguild Nail Techs home">
            <img
              src="/assets/logo-graphic.png"
              alt="Sguild Nail Techs logo"
              className="h-9 w-auto"
            />
            <span className="text-base font-semibold tracking-tight text-slate-900">
              Sguild <span className="text-slate-500">Nail Techs</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            {/* Book via text (deep link) */}
            <a
              href="sms:+18005551234?&body=Hi%20Sguild%20Nail%20Techs%2C%20I%27d%20like%20to%20book%20an%20appointment."
              className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Text us to book
            </a>
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 md:px-6 md:pt-14">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Pick your service area
            </h1>
            <p className="mt-3 max-w-prose text-slate-600">
              We bring salon‑quality manicures and nail art to your home. Choose your
              location to see availability, pricing, and service details. Booking is
              handled by text or phone.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="sms:+18005551234?&body=Hi%20Sguild%20Nail%20Techs%2C%20can%20you%20share%20availability%3F"
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Text availability
              </a>
              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                Call or message
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <img
                src="/assets/nails-hero.jpg"
                alt="Nail services at home"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations grid */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.key}
              href={loc.href}
              className="group block overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={loc.image}
                  alt={loc.imageAlt}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                    {loc.areaTag}
                  </span>
                  {loc.badges?.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600 ring-1 ring-inset ring-slate-200"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{loc.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-slate-600">{loc.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">View details</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Help & CTA */}
        <div className="mt-10 rounded-2xl border border-slate-200 p-6 text-center">
          <p className="text-slate-700">
            Not sure which area to pick or need a specific time? We can help.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="sms:+18005551234?&body=Hi%20Sguild%20Nail%20Techs%2C%20I%20have%20a%20question%20about%20booking."
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Text a question
            </a>
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer (minimal placeholder) */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-500 md:px-6">
          © {new Date().getFullYear()} Sguild Nail Techs. Mobile nail services. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
