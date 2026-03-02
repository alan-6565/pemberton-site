const EMAIL = "info.schedule@pembertontailwheel.com";
const PHONE = "609-864-1366";
const PHONE_LINK = "16098641366";
const FACEBOOK =
  "https://www.facebook.com/share/1GfWeb53NU/?mibextid=wwXIfr";

export default function ContactPage() {
  return (
    <div className="bg-[#f3e8db]">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-3 text-black/70">
            Questions about tailwheel training, rates, or sightseeing? Reach out
            and we’ll get back to you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Info Card */}
          <div className="rounded-2xl border border-black/10 bg-white/70 p-8 shadow-sm">
            <h2 className="text-lg font-semibold">Info</h2>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <div className="font-medium">Phone (Call/Text)</div>
                <a
                  href={`tel:+${PHONE_LINK}`}
                  className="text-lg font-semibold hover:underline"
                >
                  {PHONE}
                </a>
              </div>

              <div>
                <div className="font-medium">Email</div>
                <div className="text-lg font-semibold">{EMAIL}</div>
              </div>

              <div>
                <div className="font-medium">Operating Hours</div>
                <div className="font-semibold">
                  By appointment only • 7 days a week
                </div>
              </div>

              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#b35645] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Follow us on Facebook
              </a>
            </div>
          </div>

          {/* Web3Forms Form */}
          <div className="rounded-2xl border border-black/10 bg-white/70 p-8 shadow-sm">
            <h2 className="text-lg font-semibold">Send an Inquiry</h2>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="mt-6 space-y-4"
            >
              <input
                type="hidden"
                name="access_key"
                value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
              />

              <input
                type="hidden"
                name="subject"
                value="New Website Inquiry - Pemberton Tailwheel"
              />

              {/* Honeypot Anti-Spam */}
              <input type="checkbox" name="botcheck" className="hidden" />

              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-[#b35645]/40"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-[#b35645]/40"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-[#b35645]/40"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-[#b35645]/40"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#b35645] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}