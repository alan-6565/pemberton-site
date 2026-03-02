"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const EMAIL = "info.schedule@pembertontailwheel.com";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/aircraft-rates", label: "Rates" }, // ✅ FIXED
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const activeClass = (href: string) =>
    pathname === href ? "text-black font-semibold" : "text-black/70 hover:text-black";

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3eee4]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-black/10 bg-white">
            <Image
              src="/logo.png"
              alt="Pemberton Tailwheel Training"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold text-black">
              Pemberton Tailwheel Training
            </div>
            <div className="text-xs text-black/60">Pemberton Aerodrome • 3NJ1</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={activeClass(item.href)}>
              {item.label}
            </Link>
          ))}

          <a
            href="tel:+16098641366"
            className="rounded-lg bg-[#b35645] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Call/Text
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="tel:+16098641366"
            className="rounded-lg bg-[#b35645] px-3 py-2 text-xs font-semibold text-white hover:opacity-90"
          >
            Call/Text
          </a>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white hover:bg-black/5"
          >
            <span className="relative block h-4 w-5">
              <span
                className={[
                  "absolute left-0 top-0 h-0.5 w-5 bg-black transition",
                  open ? "translate-y-1.5 rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-1.5 h-0.5 w-5 bg-black transition",
                  open ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-3 h-0.5 w-5 bg-black transition",
                  open ? "-translate-y-1.5 -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-black/10 bg-[#f3eee4]">
          <nav className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-lg px-3 py-2 text-sm",
                    pathname === item.href
                      ? "bg-black/5 font-semibold text-black"
                      : "text-black/80 hover:bg-black/5 hover:text-black",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}

              {/* Extra useful action: email (mobile-friendly) */}
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-lg px-3 py-2 text-sm text-black/80 hover:bg-black/5 hover:text-black"
              >
                Email Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}