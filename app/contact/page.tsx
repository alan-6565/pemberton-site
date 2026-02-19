import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#f4eadc] text-[#1f1a16]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#f4eadc]/95 backdrop-blur border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-semibold">
                Pemberton Tailwheel Training
              </div>
              <div className="text-sm text-black/60">
                Pemberton Aerodrome • 3NJ1
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/aircraft-rates">Our Aircraft / Rates</Link>
            <Link href="/faqs">FAQs</Link>
            <Link
              href="/contact"
              className="rounded-md bg-[#b35645] px-4 py-2 text-white hover:bg-[#9e4738] transition"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO CONTACT SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE INFO */}
          <div>
            <h1 className="text-5xl font-bold">
              Contact Us
            </h1>

            <div className="w-20 h-[2px] bg-[#b35645] mt-6"></div>

            <p className="mt-8 text-lg text-black/75 leading-relaxed">
              Ready to begin your tailwheel journey? Whether you're looking to schedule
              training, ask about endorsements, or book a sightseeing flight —
              we’d love to hear from you.
            </p>

            <div className="mt-12 space-y-6 text-lg">
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-[#b35645]">609-864-1366</div>
              </div>

              <div>
                <div className="font-semibold">Email</div>
                <div>(To be added once domain is secured)</div>
              </div>

              <div>
                <div className="font-semibold">Operating Hours</div>
                <div>Sunrise – Sunset</div>
              </div>

              <div>
                <div className="font-semibold">Location</div>
                <div>Pemberton Aerodrome (3NJ1)</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="border-l border-black/10 pl-10">
            <h2 className="text-2xl font-semibold mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/70 border border-black/15 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b35645]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-white/70 border border-black/15 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b35645]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white/70 border border-black/15 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b35645]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#b35645] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#9e4738] transition"
              >
                Submit Inquiry
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 py-10 px-6 text-sm text-black/70">
        <div className="max-w-6xl mx-auto">
          <div className="font-semibold text-black">
            Pemberton Tailwheel Training
          </div>
          <div className="mt-2">Phone: 609-864-1366</div>
          <div>Email: (To be added)</div>
          <div>Operating Hours: Sunrise – Sunset</div>
          <div className="mt-4">Follow us on Facebook!</div>
        </div>
      </footer>

    </main>
  );
}