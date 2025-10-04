// app/dallas/page.tsx
// Dallas location page for the Sguild Nail Techs home service
// Single-file drop-in. Swap the PHONE value and URLs as needed.

import Link from "next/link";

export const metadata = {
  title: "Dallas | Sguild Nail Techs — Mobile, At‑Home Manicures & Pedicures",
  description:
    "Book luxury, at‑home manicures and pedicures in Dallas. We come to you — Uptown, Downtown, Lakewood, Highland Park, Plano, Richardson, and more.",
  openGraph: {
    title: "Dallas | Sguild Nail Techs",
    description:
      "Luxury mobile nail services across Dallas — manicures, pedicures, gel, acrylics, and nail art. We come to you.",
    url: "https://sguildnails.com/dallas",
    type: "website",
  },
};

// —— Config ——
const BUSINESS_NAME = "Sguild Nail Techs";
// Replace with your real business number (E.164 format is safest) or set NEXT_PUBLIC_SGUILD_NAILS_PHONE
const PHONE = process.env.NEXT_PUBLIC_SGUILD_NAILS_PHONE || ""; // env-driven; falls back to contact form if empty
const CONTACT_PATH = "/contact"; // Fallback route for contact form
// —— Asset paths (update to match your repo) ——
const LOGO_SRC = "/assets/logo-graphic.png"; // textless mark generated earlier
const HERO_IMAGE_SRC = "/assets/nails-hero.jpg"; // nails hero image generated earlier
const HERO_IMAGE_ALT = "Luxury at-home nail services in Dallas";

function smsLink(phone: string, body: string) {
  const text = encodeURIComponent(body);
  // iOS uses &body, Android accepts ?body or &body — using ?&body works widely
  return phone ? `sms:${phone}?&body=${text}` : CONTACT_PATH;
}

function telLink(phone: string) {
  return phone ? `tel:${phone}` : CONTACT_PATH;
}

export default function DallasPage() {
  const smsHref = smsLink(
    PHONE,
    `Hi ${BUSINESS_NAME} — I'd like to book a home nail appointment in Dallas.`
  );
  const callHref = telLink(PHONE);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label={`${BUSINESS_NAME} home`}>
            <img src={LOGO_SRC} alt="Sguild Nail Techs logo" className="h-9 w-auto" />
            <span className="text-base font-semibold tracking-tight text-slate-900">
              Sguild <span className="text-slate-500">Nail Techs</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-slate-900 text-slate-600">Home</Link>
            <Link href="/locations" className="hover:text-slate-900 text-slate-600">Locations</Link>
            <Link href={CONTACT_PATH} className="hover:text-slate-900 text-slate-600">Contact</Link>
            <a href={callHref} className="inline-flex items-center rounded-xl border border-slate-300 px-3 py-1.5 hover:bg-slate-50">Call</a>
            <a href={smsHref} className="inline-flex items-center rounded-xl bg-slate-900 px-3 py-1.5 text-white hover:bg-slate-800">Text Us</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6 justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Dallas, TX</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Luxury, at‑home <span className="text-slate-500">nail services</span> in Dallas
            </h1>
            <p className="text-slate-600 text-base md:text-lg">
              Manicures, pedicures, gel, acrylics, and custom nail art — delivered to your home, office, or hotel. We bring the salon to you.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={smsHref} className="inline-flex items-center rounded-2xl bg-slate-900 px-5 py-3 text-white hover:bg-slate-800">
                Text to Book
              </a>
              <a href={callHref} className="inline-flex items-center rounded-2xl border border-slate-300 px-5 py-3 hover:bg-slate-50">
                Call Now
              </a>
              <Link href={CONTACT_PATH} className="inline-flex items-center rounded-2xl border border-slate-300 px-5 py-3 hover:bg-slate-50">
                Use Contact Form
              </Link>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> Licensed & insured</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> Hospital‑grade sanitation</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> Evening & weekend availability</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> Groups & events welcome</li>
            </ul>
          </div>
          <div className="relative">
            <img
              src={HERO_IMAGE_SRC}
              alt={HERO_IMAGE_ALT}
              className="w-full h-auto rounded-3xl border border-slate-200 shadow-sm object-cover"
            />
                        <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/70 backdrop-blur p-4 border border-slate-200 text-sm text-slate-600">
              We travel across Dallas — Uptown, Downtown, Highland Park, Lakewood, and more.
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Popular services</h2>
        <p className="mt-2 text-slate-600">Transparent, travel‑included pricing. Final quotes confirmed over text.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Classic Manicure", desc: "Cuticle care, file & shape, buff or polish.", price: "$55+" },
            { name: "Classic Pedicure", desc: "Soak, exfoliate, cuticle care, file & shape, polish.", price: "$75+" },
            { name: "Gel Manicure", desc: "Long‑lasting gel color and shine.", price: "$75+" },
            { name: "Acrylic Full Set", desc: "Sculpted to your preferred length & shape.", price: "$110+" },
            { name: "Fill / Maintenance", desc: "Keep your set fresh every 2–3 weeks.", price: "$70+" },
            { name: "Custom Nail Art", desc: "French, chrome, ombré, decals — priced by design.", price: "Quote" },
          ].map((s) => (
            <div key={s.name} className="rounded-2xl border border-slate-200 p-5 hover:shadow-sm transition-shadow">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-semibold">{s.name}</h3>
                <span className="text-sm text-slate-500">{s.price}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <div className="mt-4 flex gap-2">
                <a href={smsHref} className="text-sm inline-flex items-center rounded-xl bg-slate-900 px-3 py-1.5 text-white hover:bg-slate-800">Text to book</a>
                <a href={callHref} className="text-sm inline-flex items-center rounded-xl border border-slate-300 px-3 py-1.5 hover:bg-slate-50">Call</a>
              </div>
            </div>
          ))}
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

      {/* Service Area */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Dallas service area</h2>
          <span className="text-sm text-slate-500">Travel fees included in quote</span>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm text-slate-700">
          {["Downtown", "Uptown", "Oak Lawn", "Lakewood", "Deep Ellum", "Bishop Arts", "Design District", "Highland Park", "University Park", "Preston Hollow", "Knox / Henderson", "Lower Greenville", "Addison", "Richardson", "Plano", "Irving", "Garland", "Mesquite"].map((n) => (
            <div key={n} className="rounded-xl border border-slate-200 px-3 py-2 text-center">{n}</div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
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

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-slate-200 p-8 md:p-10 text-center bg-gradient-to-br from-slate-50 to-white">
          <h3 className="text-2xl md:text-3xl font-semibold">Ready for salon‑quality nails at home?</h3>
          <p className="mt-2 text-slate-600">Text us your address and preferred time. We’ll confirm your appointment in minutes.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={smsHref} className="inline-flex items-center rounded-2xl bg-slate-900 px-5 py-3 text-white hover:bg-slate-800">Text to Book</a>
            <a href={callHref} className="inline-flex items-center rounded-2xl border border-slate-300 px-5 py-3 hover:bg-slate-50">Call</a>
            <Link href={CONTACT_PATH} className="inline-flex items-center rounded-2xl border border-slate-300 px-5 py-3 hover:bg-slate-50">Contact Form</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-700">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-700">Terms</Link>
            <Link href={CONTACT_PATH} className="hover:text-slate-700">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
