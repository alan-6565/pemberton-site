import Image from "next/image";
import Link from "next/link";

export default function AircraftRatesPage() {
  return (
    <main className="min-h-screen bg-[#f4eadb] text-[#1f1a16]">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4eadb]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Pemberton Tailwheel Training logo"
              width={48}
              height={48}
              className="rounded-full border border-black/10"
            />
            <div>
              <div className="font-semibold">
                Pemberton Tailwheel Training
              </div>
              <div className="text-sm text-black/60">
                Pemberton Aerodrome • 3NJ1
              </div>
            </div>
          </Link>

          <nav className="hidden gap-6 text-sm md:flex">
            <Link href="/">Home</Link>
            <Link className="font-semibold underline underline-offset-4" href="/aircraft-rates">
              Our Aircraft / Rates
            </Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* TITLE */}
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <h1 className="text-4xl font-extrabold md:text-5xl">
          Our Aircraft & Rates
        </h1>
        <div className="mt-4 h-[2px] w-24 bg-[#b35645]/60" />
      </section>

      {/* AIRCRAFT SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid items-start gap-12 md:grid-cols-2">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl font-bold">Luscombe 8E</h2>

            <p className="mt-4 text-black/80">
              The Luscombe 8E goes where you tell it, when you tell it—offering crisp handling
              and a highly responsive rudder that gives the pilot strong control authority.
              It’s an honest, precise airplane that encourages true mastery of stick-and-rudder skills.
            </p>

            <p className="mt-4 text-black/80">
              The cabin’s side-by-side seating configuration makes communication and instruction
              far more natural and effective compared to tandem seating. Its simple,
              easy-to-read instruments and intuitive controls keep the focus on flying.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="overflow-hidden rounded-2xl border border-black/10 shadow-md">
            <Image
              src="/aircraft.jpg"
              alt="Luscombe 8E"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* SPECIFICATIONS BUBBLE */}
        <div className="mt-14">
          <h3 className="text-2xl font-bold mb-6">Specifications</h3>

          <div className="rounded-2xl bg-white/60 backdrop-blur border border-black/10 shadow-lg p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Spec label="Rate" value="$230/hr (subject to change)" />
              <Spec label="Engine" value="C-85 – 85 HP" />
              <Spec label="Seating" value="2 (side-by-side)" />
              <Spec label="Training Focus" value="Precision stick-and-rudder mastery" />
            </div>
          </div>
        </div>
      </section>

      {/* RATES SECTION */}
      <section className="bg-[#b35645]/10">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold">Rates</h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">

            {/* HOURLY RATE BUBBLE */}
            <div className="rounded-2xl bg-white/70 border border-black/10 shadow-lg p-8">
              <h3 className="text-xl font-semibold">Hourly Aircraft Rate</h3>
              <div className="mt-4 text-3xl font-bold text-[#b35645]">
                $230/hr
              </div>
              <p className="mt-3 text-black/70">
                Ideal for pilots who prefer pay-as-you-go training.
              </p>
            </div>

            {/* GROUND RATE BUBBLE */}
            <div className="rounded-2xl bg-white/70 border border-black/10 shadow-lg p-8">
              <h3 className="text-xl font-semibold">Ground Instruction</h3>
              <div className="mt-4 text-3xl font-bold text-[#b35645]">
                $___/hr
              </div>
              <p className="mt-3 text-black/70">
                Preflight planning, briefings, and post-flight debriefs.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-[#b35645] px-6 py-3 font-semibold text-white hover:opacity-95"
            >
              Call Us Now
            </Link>

            <a
              href="#"
              className="rounded-md border border-black/20 px-6 py-3 font-semibold hover:bg-black/5"
            >
              View Rates
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-black/70">
          <div className="font-semibold text-black/90">
            Pemberton Tailwheel Training
          </div>
          <div className="mt-2">Phone: 609-864-1366</div>
          <div>Email: (to be added)</div>
          <div>Operating Hours: Sunrise – Sunset</div>
          <div className="mt-4 font-semibold">Follow us on Facebook!</div>
        </div>
      </footer>
    </main>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-sm font-semibold text-black/60">{label}</div>
      <div className="mt-1 text-lg font-medium">{value}</div>
    </div>
  );
}