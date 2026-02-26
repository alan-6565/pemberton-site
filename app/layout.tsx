import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pemberton Tailwheel Training",
  description: "Tailwheel training, rates, FAQs, and sightseeing at Pemberton Aerodrome (3NJ1).",
};

const EMAIL = "info.schedule@pembertontailwheel.com";
const PHONE_DISPLAY = "609-864-1366";
const PHONE_TEL = "16098641366";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f3eae1] text-black">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3eae1]/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-black/10 bg-white/50">
                <Image
                  src="/logo.png"
                  alt="Pemberton Tailwheel Training logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="leading-tight">
                <div className="text-base font-semibold tracking-tight">
                  Pemberton Tailwheel Training
                </div>
                <div className="text-xs text-black/70">Pemberton Aerodrome • 3NJ1</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 text-sm md:flex">
              <Link className="text-black/80 hover:text-black hover:underline" href="/">
                Home
              </Link>
              <Link className="text-black/80 hover:text-black hover:underline" href="/aircraft-rates">
                Rates
              </Link>
              <Link className="text-black/80 hover:text-black hover:underline" href="/faqs">
                FAQs
              </Link>
              <Link className="text-black/80 hover:text-black hover:underline" href="/contact">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="hidden rounded-lg bg-[#b35645] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-110 md:inline-flex"
              >
                Call/Text
              </a>

              <div className="md:hidden text-xs text-black/60">Menu</div>
            </div>
          </div>

          {/* Mobile nav */}
          <div className="border-t border-black/10 md:hidden">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-sm">
              <Link className="text-black/80 hover:text-black hover:underline" href="/">
                Home
              </Link>
              <Link className="text-black/80 hover:text-black hover:underline" href="/aircraft-rates">
                Rates
              </Link>
              <Link className="text-black/80 hover:text-black hover:underline" href="/faqs">
                FAQs
              </Link>
              <Link className="text-black/80 hover:text-black hover:underline" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-16 border-t border-black/10 bg-[#f3eae1]">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="font-semibold">Pemberton Tailwheel Training</div>
                <div className="mt-1 text-sm text-black/70">Pemberton Aerodrome • 3NJ1</div>
              </div>

              <div className="text-sm text-black/80">
                <div>
                  Phone (Call/Text):{" "}
                  <a className="font-semibold hover:underline" href={`tel:${PHONE_TEL}`}>
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="mt-1">
                  Email: <span className="font-semibold">{EMAIL}</span>
                </div>
                <div className="mt-1">Operating Hours: By appointment only • 7 days a week</div>
              </div>

              <div className="text-sm text-black/80">
                <div className="font-semibold">Quick Links</div>
                <div className="mt-2 flex flex-col gap-1">
                  <Link className="hover:underline" href="/">
                    Home
                  </Link>
                  <Link className="hover:underline" href="/aircraft-rates">
                    Our Aircraft / Rates
                  </Link>
                  <Link className="hover:underline" href="/faqs">
                    FAQs
                  </Link>
                  <Link className="hover:underline" href="/contact">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 text-xs text-black/50">
              © {new Date().getFullYear()} Pemberton Tailwheel Training. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}