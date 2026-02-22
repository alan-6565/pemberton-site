// app/contact/page.tsx

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#f3eee4] text-[#1a1a1a]">
      {/* PAGE INTRO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-2 max-w-2xl text-black/70">
            Questions about tailwheel training, rates, or sightseeing? Reach out and we’ll get back to you.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* INFO CARD */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
                <h2 className="text-lg font-semibold">Info</h2>

                <div className="mt-5 space-y-5 text-sm">
                  <div>
                    <div className="text-black/60">Phone (Call/Text)</div>
                    <div className="text-xl font-semibold tracking-tight">609-864-1366</div>
                  </div>

                  <div>
                    <div className="text-black/60">Email</div>
                    <div className="font-medium">(To be added after domain is set up)</div>
                  </div>

                  <div>
                    <div className="text-black/60">Operating Hours</div>
                    <div className="font-medium">By appointment only • 7 days a week</div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-xl bg-[#b35645] px-4 py-2 font-semibold text-white shadow-sm transition hover:opacity-95"
                    >
                      Follow us on Facebook
                    </a>
                    <p className="mt-2 text-xs text-black/50">
                      (We’ll add the real Facebook link when they confirm it.)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM CARD */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
                <h2 className="text-2xl font-bold tracking-tight">Send an Inquiry</h2>
                <p className="mt-2 text-black/70">
                  Fill this out and we’ll respond as soon as possible.
                </p>

                {/* No onSubmit yet (prevents Next.js server component event handler error). */}
                <form className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium" htmlFor="firstName">
                        First name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        className="mt-1 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium" htmlFor="lastName">
                        Last name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Smith"
                        className="mt-1 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="mt-1 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(609) 555-1234"
                        className="mt-1 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium" htmlFor="topic">
                      What is this about?
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      defaultValue="training"
                      className="mt-1 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
                    >
                      <option value="training">Tailwheel Training</option>
                      <option value="rates">Rates / Scheduling</option>
                      <option value="sightseeing">Sightseeing Tour</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us what you’re looking for (experience level, goals, preferred dates, etc.)"
                      className="mt-1 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
                    />
                  </div>

                  {/* Not wired yet */}
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-[#b35645] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 sm:w-auto"
                  >
                    Submit Inquiry
                  </button>

                  <p className="text-xs text-black/55">
                    Note: This form is not connected to email yet. Once the domain email is created, we can wire this
                    to send inquiries to that inbox.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}