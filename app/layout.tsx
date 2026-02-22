import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pemberton Tailwheel Training",
  description: "Tailwheel flight instruction at Pemberton Aerodrome (3NJ1).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f3efe6] text-[#1f1f1f]">
        {/* Header / Nav */}
        <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3efe6]/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Pemberton Tailwheel Training"
                width={44}
                height={44}
                className="rounded-full"
                priority
              />
              <div className="leading-tight">
                <div className="font-semibold tracking-tight">
                  Pemberton Tailwheel Training
                </div>
                <div className="text-sm text-black/60">
                  Pemberton Aerodrome • 3NJ1
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
              <Link href="/" className="hover:opacity-70">
                Home
              </Link>
              <Link href="/aircraft-rates" className="hover:opacity-70">
                Our Aircraft / Rates
              </Link>
              <Link href="/faqs" className="hover:opacity-70">
                FAQs
              </Link>
              <Link href="/contact" className="hover:opacity-70">
                Contact Us
              </Link>
            </nav>

            {/* Mobile nav (simple) */}
            <nav className="flex items-center gap-3 text-sm font-medium md:hidden">
              <Link href="/" className="hover:opacity-70">
                Home
              </Link>
              <Link href="/aircraft-rates" className="hover:opacity-70">
                Rates
              </Link>
              <Link href="/faqs" className="hover:opacity-70">
                FAQs
              </Link>
              <Link href="/contact" className="hover:opacity-70">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Page */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-black/10 bg-[#f3efe6]">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="font-semibold">Pemberton Tailwheel Training</div>
                <div className="mt-2 text-sm text-black/70">
                  Pemberton Aerodrome (3NJ1)
                </div>
              </div>

              <div className="text-sm text-black/70">
                <div className="font-semibold text-black">Contact</div>
                <div className="mt-2">Phone: 609-864-1366 (call/text)</div>
                <div>Email: (to be added)</div>
              </div>

              <div className="text-sm text-black/70">
                <div className="font-semibold text-black">Hours</div>
                <div className="mt-2">
                  Operating Hours: By appointment only
                  <br />
                  7 days a week
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-black/60 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} Pemberton Tailwheel Training</div>
              <div className="flex gap-4">
                <Link href="#" className="hover:opacity-70">
                  Follow us on Facebook
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}