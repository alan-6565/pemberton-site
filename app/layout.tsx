import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "./components/SiteHeader";

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
        {/* ✅ Header with hamburger menu */}
        <SiteHeader />

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
              <span className="ml-2 text-black/60">(call/text)</span>
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