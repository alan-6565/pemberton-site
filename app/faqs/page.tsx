export default function FAQs() {
  const faqs = [
    {
      q: "How long does it take to get a tailwheel endorsement?",
      a: "There is no minimum hour requirement. It depends entirely on pilot proficiency. Most pilots take between 5–10 hours to complete the training.",
    },
    {
      q: "What does the training consist of?",
      a: "Refer to FAA Part 61.31. Flight training includes normal and crosswind takeoffs and landings, taxi procedures, three-point landings, wheel landings, and go-around procedures.",
    },
    {
      q: "Is there a checkride?",
      a: "There is no checkride or FAA knowledge test. When the CFI is confident you are proficient in the requirements listed in Part 61.31, you will receive your tailwheel endorsement.",
    },
    {
      q: "Does the tailwheel endorsement expire?",
      a: "No, a tailwheel endorsement never expires. However, you must still meet general currency requirements.",
    },
    {
      q: "Can I use it in any tailwheel airplane?",
      a: "Yes. Once endorsed, you can act as PIC of any tailwheel airplane for which you are rated (e.g., single-engine land). Additional endorsements may be required for certain aircraft types.",
    },
  ];

  return (
    <div className="bg-[#f3efe6]">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-3 text-black/70">
          Please reach out with any questions you may have. We’d love to hear
          from you!
        </p>

        {/* Rows like your example, but using sandy red */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl bg-[#b35645] text-white shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                <span className="text-base font-semibold">{item.q}</span>
                <span className="text-white/90 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-white/95 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}