import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#f3efe6]">
      {/* HERO */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <Image
          src="/hero-header.jpg"
          alt="Aircraft at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />

        {/* Logo over top (client request) */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
          <Image
            src="/logo.png"
            alt="Pemberton Tailwheel Training"
            width={140}
            height={140}
            className="mb-6 rounded-full bg-white/10 p-2 backdrop-blur"
          />

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Tailwheel Flight Instruction
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Start Your Journey into Low &amp; Slow Flight at Pemberton Aerodrome
            (3NJ1)
          </p>

          {/* Button (do not link yet) */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="rounded-md bg-[#b35645] px-8 py-3 font-semibold text-white shadow-sm hover:opacity-90"
            >
              Call Us Now
            </a>
            <Link
              href="/aircraft-rates"
              className="rounded-md border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              View Rates
            </Link>
          </div>
        </div>
      </section>

      {/* OUR MISSION (sandy red section) */}
      <section className="bg-[#b35645] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Logo"
              width={56}
              height={56}
              className="rounded-full bg-white/10 p-1"
            />
            <h2 className="text-4xl font-bold">Our Mission</h2>
          </div>

          <div className="mt-8 space-y-6 text-white/95 leading-relaxed">
            <p>
              Tailwheel aircraft connect pilots to the roots of aviation—the era
              when stick-and-rudder skill defined a pilot. Training in these
              airplanes isn’t just about building hours; it’s about developing
              craftsmanship, discipline, and respect for the fundamentals on
              which professional flying was built. In the complex and
              technological world of modern-day flying, it is important to
              preserve the heritage and pure thrill of true stick-and-rudder
              flying.
            </p>

            <p>
              Whether you’re building time with a specific career path in mind or
              positioning yourself for your first commercial opportunity, our
              training here at Pemberton Tailwheels is designed to sharpen your
              fundamentals, build real confidence, and help you stand out in a
              competitive job market.
            </p>

            <p>
              And if you’re simply drawn to tailwheel flying for the pure
              enjoyment of it, you’re in the right place. There’s nothing quite
              like the feel of a conventional-gear airplane—the responsiveness,
              the connection to the runway, and the satisfaction of a perfectly
              executed landing. Many pilots pursue tailwheel training not for a
              job, but for the challenge, the heritage, and the sheer fun of
              mastering a classic flying machine. Whether your goal is a cockpit
              career or weekend grass-strip adventures, we’ll help you
              experience the kind of flying that reminds you why you started in
              the first place.
            </p>
          </div>

          {/* Client request: add photos */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Image
              src="/mission-1.jpg"
              alt="Mission photo 1"
              width={900}
              height={600}
              className="h-[320px] w-full rounded-lg object-cover shadow-sm"
            />
            <Image
              src="/mission-2.jpg"
              alt="Mission photo 2"
              width={900}
              height={600}
              className="h-[320px] w-full rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* TRAIN WITH US (back to parchment) */}
      <section className="bg-[#f3efe6]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-4xl font-bold">Train With Us</h2>
          <div className="mt-8 space-y-6 text-black/80 leading-relaxed">
            <p>
              We operate out of Pemberton Aerodrome (3NJ1), ideally situated in
              the heart of New Jersey, making it one of the most convenient and
              accessible training locations for pilots across the region.
              Positioned between Philadelphia, New York City, and the iconic
              Jersey Shore, our location allows pilots from surrounding states
              and metropolitan areas to reach us easily while escaping congested
              airspace for focused, high-quality training.
            </p>
            <p>
              Our training program is streamlined, structured, efficient, and
              tailored to each pilot’s goals and experience level. We create a
              clear progression plan so every lesson builds purposefully on the
              last—eliminating wasted time and accelerating skill development.
            </p>
            <p>
              Whether you prefer accelerated immersion or a flexible schedule, we
              adapt to your timeline without sacrificing quality or consistency.
            </p>
            <p className="font-semibold">Come fly with us!</p>
          </div>
        </div>
      </section>

      {/* SIGHTSEEING (sandy red section) */}
      <section className="bg-[#b35645] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-4xl font-bold">Let’s Go Sightseeing</h2>
          <div className="mt-8 space-y-6 text-white/95 leading-relaxed">
            <p>
              You don’t have to be a pilot to experience the thrill of flying in
              a taildragger—anyone can fly with us and see the region from an
              entirely new perspective. Book a sightseeing tour with us and take
              in some of the most diverse and striking scenery on the East Coast
              in a single flight.
            </p>
            <p>
              Soar past the dramatic skylines of Philadelphia and New York City,
              follow the sparkling Atlantic coastline along the Jersey Shore,
              then transition to the quiet beauty of South Jersey farmland and
              the vast, untouched forests of the Pine Barrens. The contrast is
              unforgettable—vibrant cityscapes, open ocean, and peaceful
              countryside all within minutes of one another.
            </p>
          </div>

          {/* Client request: sightseeing photos */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Image
              src="/sightseeing-1.jpg"
              alt="Sightseeing photo 1"
              width={700}
              height={900}
              className="h-[380px] w-full rounded-lg object-cover shadow-sm"
            />
            <Image
              src="/sightseeing-2.jpg"
              alt="Sightseeing photo 2"
              width={700}
              height={900}
              className="h-[380px] w-full rounded-lg object-cover shadow-sm"
            />
            <Image
              src="/sightseeing-3.jpg"
              alt="Sightseeing photo 3"
              width={700}
              height={900}
              className="h-[380px] w-full rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
}