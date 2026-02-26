const EMAIL = "info.schedule@pembertontailwheel.com";
const PHONE_DISPLAY = "609-864-1366";
const PHONE_TEL = "16098641366";

export default function ContactPage() {
  return (
    <div className="bg-[#f3eae1]">
      {/* Top section */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-black/70">
            Questions about tailwheel training, rates, or sightseeing? Reach out and we’ll get back to you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Info card */}
          <div className="rounded-2xl border border-black/10 bg-white/60 p-8 shadow-sm">
            <h2 className="text-lg font-semibold">Info</h2>

            <div className="mt-6 space-y-5 text-sm text-black/80">
              <div>
                <div className="font-medium">Phone (Call/Text)</div>
                <a className="text-lg font-semibold hover:underline" href={`tel:${PHONE_TEL}`}>
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div>
                <div className="font-medium">Email</div>
                <div className="text-lg font-semibold">{EMAIL}</div>
              </div>

              <div>
                <div className="font-medium">Operating Hours</div>
                <div className="font-semibold">By appointment only • 7 days a week</div>
              </div>

              <div className="pt-2">
                {/* Don’t link yet if you don’t want. Put # for now. */}
                <a
                  href="#"
                  className="inline-flex rounded-lg bg-[#b35645] px-5 py-3 text-sm font-semibold text-white hover:brightness-110"
                >
                  Follow us on Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry form */}
          <div className="rounded-2xl border border-black/10 bg-white/60 p-8 shadow-sm">
            <h2 className="text-lg font-semibold">Send an Inquiry</h2>
            <p className="mt-2 text-sm text-black/70">
              For now, this form is <span className="font-semibold">not connected</span> to email yet.
              Once the domain email is confirmed, we can wire this to send to{" "}
              <span className="font-semibold">{EMAIL}</span>.
            </p>

            {/* No JS handler here */}
            <form className="mt-6 space-y-4" action="#" method="post">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#b35645]/40"
                  placeholder="Your name"
                  name="name"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone or Email</label>
                <input
                  className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#b35645]/40"
                  placeholder="How should we reach you?"
                  name="contact"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  className="mt-1 min-h-[140px] w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#b35645]/40"
                  placeholder="Tell us what you're looking for…"
                  name="message"
                />
              </div>

              {/* Not wired yet: button is disabled to avoid confusion */}
              <button
                type="button"
                disabled
                className="w-full rounded-lg bg-[#b35645]/60 px-5 py-3 text-sm font-semibold text-white cursor-not-allowed"
              >
                Submit Inquiry (Coming Soon)
              </button>

              <p className="text-xs text-black/60">
                Once connected, inquiries will send to <span className="font-semibold">{EMAIL}</span>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}