import Image from "next/image";
import Link from "next/link";

export default function FAQs() {
  return (
    <main className="bg-[#f4eadc] text-[#1f1a16] min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-[#f4eadc]/90 backdrop-blur border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src="/logo.png"
                alt="Pemberton Tailwheel Training logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Pemberton Tailwheel Training</div>
              <div className="text-sm text-black/60">Pemberton Aerodrome • 3NJ1</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:opacity-80">Home</Link>
            <Link href="/aircraft-rates" className="hover:opacity-80">Our Aircraft / Rates</Link>
            <Link href="/faqs" className="hover:opacity-80">FAQs</Link>
            <Link
              href="/contact"
              className="rounded-md bg-[#b35645] px-4 py-2 text-white hover:bg-[#9e4738] transition"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* PAGE TITLE */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-5xl font-bold tracking-wide">
          Frequently Asked Questions
        </h1>
        <p className="mt-6 text-black/70">
          Please reach out with any questions you may have. We'd love to hear from you!
        </p>
      </section>

      {/* FAQ BUBBLES */}
      <section className="pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT */}
          <div className="space-y-6">
            <details className="bg-[#b35645] text-white px-8 py-6 rounded-2xl cursor-pointer hover:bg-[#9e4738] transition">
              <summary className="font-semibold text-lg">
                ▶ How long does it take to get a tailwheel endorsement?
              </summary>
              <p className="mt-4 text-white/90">
                There is no minimum hour requirement. It depends entirely on pilot proficiency.
                Most pilots take between 5–10 hours to complete the training.
              </p>
            </details>

            <details className="bg-[#b35645] text-white px-8 py-6 rounded-2xl cursor-pointer hover:bg-[#9e4738] transition">
              <summary className="font-semibold text-lg">
                ▶ What does the training consist of?
              </summary>
              <p className="mt-4 text-white/90">
                Refer to FAA Part 61.31. Flight training includes normal and crosswind takeoffs and
                landings, taxi procedures, three-point landings, wheel landings, and go-around procedures.
              </p>
            </details>

            <details className="bg-[#b35645] text-white px-8 py-6 rounded-2xl cursor-pointer hover:bg-[#9e4738] transition">
              <summary className="font-semibold text-lg">
                ▶ Does the tailwheel endorsement expire?
              </summary>
              <p className="mt-4 text-white/90">
                No, a tailwheel endorsement never expires. However, you must still meet general currency requirements.
              </p>
            </details>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <details className="bg-[#b35645] text-white px-8 py-6 rounded-2xl cursor-pointer hover:bg-[#9e4738] transition">
              <summary className="font-semibold text-lg">
                ▶ Is there a checkride?
              </summary>
              <p className="mt-4 text-white/90">
                There is no checkride or FAA knowledge test. When the CFI is confident you are proficient
                in Part 61.31 requirements, you will receive your tailwheel endorsement.
              </p>
            </details>

            <details className="bg-[#b35645] text-white px-8 py-6 rounded-2xl cursor-pointer hover:bg-[#9e4738] transition">
              <summary className="font-semibold text-lg">
                ▶ Can I use it in any tailwheel airplane?
              </summary>
              <p className="mt-4 text-white/90">
                Yes. Once endorsed, you can act as PIC of any tailwheel airplane for which you are rated.
                High-performance, complex, or turbine tailwheel aircraft require additional endorsements.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-[#f4eadc]">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-black/70">
          <div className="font-semibold text-black">Pemberton Tailwheel Training</div>
          <div className="mt-2">Phone: 609-864-1366</div>
          <div>Email: (to be added)</div>
          <div>Operating Hours: Sunrise – Sunset</div>
          <div className="mt-4">Follow us on Facebook!</div>
        </div>
      </footer>
    </main>
  );
}