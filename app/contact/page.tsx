const EMAIL = "info.schedule@pembertontailwheel.com";
const PHONE = "609-864-1366";
const PHONE_LINK = "16098641366";

export default function ContactPage() {
  return (
    <div className="bg-[#f3e8db]">
      {/* Top Section */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-3 text-black/70">
            Questions about tailwheel training, rates, or sightseeing? Reach
            out and we’ll get back to you.
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
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-lg font-semibold hover:underline"
                >
                  {EMAIL}
                </a>
              </div>

              <div>
                <div className="font-medium">Operating Hours</div>
                <div className="font-semibold">
                  By appointment only • 7 days a week
                </div>
              </div>

              <a
  href="https://www.facebook.com/share/1GfWeb53NU/?mibextid=wwXIfr"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-lg bg-[#b35645] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
>
  Follow us on Facebook
</a>
            </div>
          </div>

          {/* Mailto Form */}
          <div className="rounded-2xl border border-black/10 bg-white/70 p-8 shadow-sm">
            <h2 className="text-lg font-semibold">Send an Inquiry</h2>

            <p className="mt-2 text-sm text-black/70">
              Click below to send us a message directly via email.
            </p>

            <a
              href={`mailto:${EMAIL}?subject=Website%20Inquiry&body=Name:%0D%0APhone%20or%20Email:%0D%0AMessage:%0D%0A`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#b35645] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Submit Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}