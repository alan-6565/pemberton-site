import Image from "next/image";

export default function AircraftRates() {
  return (
    <div className="bg-[#f3efe6]">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold">Our Aircraft / Rates</h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Left: Text */}
          <div>
            {/* Client request: add rate to top */}
            <h2 className="text-3xl font-bold">Luscombe 8E – $230/hr</h2>

            <p className="mt-4 text-black/80 leading-relaxed">
              The Luscombe 8E goes where you tell it, when you tell it—offering
              crisp handling and a highly responsive rudder that gives the pilot
              strong control authority. It’s an honest, precise airplane that
              encourages true mastery of stick-and-rudder skills.
            </p>

            <p className="mt-4 text-black/80 leading-relaxed">
              The cabin’s side-by-side seating configuration makes communication
              and instruction far more natural and effective compared to the
              tandem (front-and-back) seating found in many other tailwheel
              aircraft. Its straightforward, functional layout is part of its
              enduring charm, featuring simple, easy-to-read instruments and
              intuitive controls that keep the focus on flying.
            </p>

            {/* Specifications bubble box (keep bubble, client OK) */}
            <div className="mt-8 rounded-xl border border-black/10 bg-white/60 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Specifications</h3>

              <div className="mt-4 space-y-3 text-black/80">
                <div className="flex items-center justify-between border-b border-black/10 pb-2">
                  <span className="font-medium">Engine</span>
                  <span>C-85 Engine – 85 hp</span>
                </div>

                {/* Client request: remove “Training focus” and replace */}
                <div className="flex items-center justify-between border-b border-black/10 pb-2">
                  <span className="font-medium">Control Type</span>
                  <span>Stick and Rudder</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-medium">Airport</span>
                  <span>3NJ1</span>
                </div>

                {/* Client request: remove (Subject to change) -> not included */}
              </div>
            </div>

            {/* IMPORTANT: Client request says remove bottom rates section + buttons
               So we do NOT add any extra “Rates” block or buttons down here. */}
          </div>

          {/* Right: Photos */}
          <div className="grid gap-8">
            {/* Client request: add photos to rates tab */}
            <Image
              src="/rates-1.jpg"
              alt="Aircraft on runway"
              width={900}
              height={600}
              className="h-[320px] w-full rounded-xl object-cover shadow-sm"
            />
            <Image
              src="/rates-2.jpg"
              alt="Cockpit interior"
              width={900}
              height={600}
              className="h-[320px] w-full rounded-xl object-cover shadow-sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
}