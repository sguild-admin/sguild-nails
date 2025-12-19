import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sguildnails.com"),
  title: "Sguild Nails — At-Home Nail Techs in Dallas",
  description:
    "Luxury, at-home manicures and gel extensions in Dallas. Licensed mobile nail techs that come to you.",
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/nail-icon-pink.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/icons/favicon-32.png",
  },
  openGraph: {
    title: "Sguild Nails — At-Home Nail Techs in Dallas",
    description:
      "Luxury, at-home manicures and gel extensions in Dallas. Licensed mobile nail techs that come to you.",
    url: "https://sguildnails.com",
    siteName: "Sguild Nails",
    images: [
      {
        url: "/icons/og-nail-card.jpg",
        width: 1200,
        height: 630,
        alt: "Sguild Nails — at-home manicures in Dallas",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sguild Nails — At-Home Nail Techs in Dallas",
    description:
      "Luxury, at-home manicures and gel extensions in Dallas. Licensed mobile nail techs that come to you.",
    images: ["/icons/og-nail-card.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17815480470"
        strategy="afterInteractive"
      />
      <Script id="google-ads-nails" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17815480470');
        `}
      </Script>

      <body className="min-h-dvh bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}