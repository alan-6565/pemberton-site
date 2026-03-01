import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pemberton Tailwheel Training",
  description: "Tailwheel flight training at Pemberton Aerodrome (3NJ1).",
};

const EMAIL = "info.schedule@pembertontailwheel.com";
const PHONE_DISPLAY = "609-864-1366";
const PHONE_LINK = "16098641366";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f3e8db] text-black">
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3e8db]/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-black/10 bg-white">
                <Image
                  src="/logo.png"
                  alt="Pemberton Tailwheel Training logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <div className="font-semibold">
                  Pemberton Tailwheel Training
                </div>
                <div className="text-xs text-black/60">
                  Pemberton Aerodrome • 3NJ1
                </div>
              </div>
            </Link>

            <nav className="hidden gap-6 md:flex">
              <Link href="/" className="text-sm text-black/70 hover:text-black">
                Home
              </Link>
              <Link
                href="/aircraft-rates"
                className="text-sm text-black/70 hover:text-black"
              >
                Rates
              </Link>
              <Link
                href="/faqs"
                className="text-sm text-black/70 hover:text-black"
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                className="text-sm text-black/70 hover:text-black"
              >
                Contact
              </Link>
            </nav>

            <a
              href={`tel:+${PHONE_LINK}`}
              className="rounded-lg bg-[#b35645] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Call/Text
            </a>
          </div>
        </header>

        <main>{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-black/10 bg-[#f3e8db]">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-black/70">
            <div className="font-semibold text-black">
              Pemberton Tailwheel Training
            </div>

            <div className="mt-2">
              Phone:{" "}
              <a
                href={`tel:+${PHONE_LINK}`}
                className="font-semibold hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div>
              Email:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-semibold hover:underline"
              >
                {EMAIL}
              </a>
            </div>

            <div className="mt-2">
              Operating Hours: By appointment only • 7 days a week
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}