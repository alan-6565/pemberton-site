import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[var(--background)]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

          <div className="flex items-center gap-3">
            <div className="h-16 w-16 overflow-hidden rounded-full border border-black/10 bg-white/60">
              <Image
                src="/logo.png"
                alt="Pemberton Tailwheel Training"
                width={64}
                height={64}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <div className="text-base font-semibold tracking-wide">
                Pemberton Tailwheel Training
              </div>
              <div className="text-xs opacity-70">
                Pemberton Aerodrome • 3NJ1
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="/" className="hover:opacity-80">Home</a>
            <a href="/aircraft-rates" className="hover:opacity-80">Our Aircraft / Rates</a>
            <a href="/faqs" className="hover:opacity-80">FAQs</a>
            <a href="/contact" className="hover:opacity-80">Contact Us</a>
          </nav>

          <a
            href="/contact"
            className="rounded-md bg-[var(--brand-red)] px-4 py-2 text-sm font-semibold text-[#f4eadb] shadow hover:brightness-95"
          >
            Contact Us
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="relative h-[600px] w-full md:h-[680px]">
          <Image
            src="/hero.jpg"
            alt="Tailwheel aircraft"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#f4eadb]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f4eadb]/40 via-[#f4eadb]/55 to-[#f4eadb]/75" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold md:text-6xl">
                Tailwheel Flight Instruction
              </h1>

              <div className="mt-4 flex items-center gap-3 text-base opacity-85 md:text-lg">
                <span className="h-[2px] w-10 bg-[var(--foreground)]/40" />
                <span>Start Your Journey in a Classic Taildragger</span>
              </div>

              <div className="mt-8 flex max-w-md flex-col gap-3">
                <a
                  href="tel:6098641366"
                  className="w-full rounded-md bg-[#1f1a16] px-5 py-3 text-center text-sm font-semibold text-[#f4eadb] shadow hover:brightness-110"
                >
                  Call Us Now
                </a>
                <a
                  href="/aircraft-rates"
                  className="w-full rounded-md border border-black/25 bg-white/60 px-5 py-3 text-center text-sm font-semibold hover:bg-white/70"
                >
                  View Rates
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="bg-gradient-to-b from-[var(--brand-red)] to-[#a54435] text-[#f4eadb]">
        <div className="mx-auto max-w-6xl px-4 py-14">

          <h2 className="text-3xl font-bold">Our Mission</h2>

          <div className="mt-6 space-y-5 leading-relaxed text-[#f4eadb]/90">
            <p>
              Tailwheel aircraft connect pilots to the roots of aviation—the era when stick-and-rudder skill defined a pilot. Training in these airplanes isn’t just about building hours; it’s about developing craftsmanship, discipline, and respect for the fundamentals on which professional flying was built. In the complex and technological world of modern-day flying, it is important to preserve the heritage and pure thrill of true stick-and-rudder flying.
            </p>

            <p>
              Whether you’re building time with a specific career path in mind or positioning yourself for your first commercial opportunity, our training here at Pemberton Tailwheels is designed to sharpen your fundamentals, build real confidence, and help you stand out in a competitive job market.
            </p>

            <p>
              And if you’re simply drawn to tailwheel flying for the pure enjoyment of it, you’re in the right place. There’s nothing quite like the feel of a conventional-gear airplane—the responsiveness, the connection to the runway, and the satisfaction of a perfectly executed landing. Many pilots pursue tailwheel training not for a job, but for the challenge, the heritage, and the sheer fun of mastering a classic flying machine. Whether your goal is a cockpit career or weekend grass-strip adventures, we’ll help you experience the kind of flying that reminds you why you started in the first place.
            </p>
          </div>
        </div>
      </section>

      {/* TRAIN WITH US */}
      <section className="bg-[var(--background)]">
        <div className="mx-auto max-w-6xl px-4 py-14">

          <h2 className="text-3xl font-bold">Train With Us</h2>

          <div className="mt-6 space-y-5 leading-relaxed opacity-85">
            <p>
              We operate out of Pemberton Aerodrome (3NJ1), ideally situated in the heart of New Jersey, making it one of the most convenient and accessible training locations for pilots across the region. Positioned between Philadelphia, New York City, and the iconic Jersey Shore, our location allows pilots from surrounding states and metropolitan areas to reach us easily while escaping congested airspace for focused, high-quality training.
            </p>

            <p>
              Our training program is streamlined, structured, efficient, and tailored to each pilot’s goals and experience level. We create a clear progression plan so every lesson builds purposefully on the last—eliminating wasted time and accelerating skill development.
            </p>

            <p>
              Whether you prefer accelerated immersion or a flexible schedule, we adapt to your timeline without sacrificing quality or consistency.
            </p>

            <p className="font-semibold">Come fly with us!</p>
          </div>
        </div>
      </section>

      {/* SIGHTSEEING */}
      <section className="bg-gradient-to-b from-[var(--brand-red)] to-[#a54435] text-[#f4eadb]">
        <div className="mx-auto max-w-6xl px-4 py-14">

          <h2 className="text-3xl font-bold">Let’s Go Sightseeing</h2>

          <div className="mt-6 space-y-5 leading-relaxed text-[#f4eadb]/90">
            <p>
              You don’t have to be a pilot to experience the thrill of flying in a taildragger—anyone can fly with us and see the region from an entirely new perspective. Book a sightseeing tour with us and take in some of the most diverse and striking scenery on the East Coast in a single flight.
            </p>

            <p>
              Soar past the dramatic skylines of Philadelphia and New York City, follow the sparkling Atlantic coastline along the Jersey Shore, then transition to the quiet beauty of South Jersey farmland and the vast, untouched forests of the Pine Barrens. The contrast is unforgettable—vibrant cityscapes, open ocean, and peaceful countryside all within minutes of one another.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-[var(--background)]">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm opacity-80">
          <div className="font-semibold opacity-100">Pemberton Tailwheel Training</div>
          <div>Phone: 609-864-1366</div>
          <div>Email: (To be added)</div>
          <div>Operating Hours: Sunrise – Sunset</div>
          <div className="mt-4">Follow us on Facebook!</div>
        </div>
      </footer>

    </main>
  );
}