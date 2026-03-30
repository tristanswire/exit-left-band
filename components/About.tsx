import { LinkButton } from "@/components/ui/Button";

export default function About() {
  return (
    <section id="about" className="bg-brand-darker py-24">
      <div className="max-w-[720px] mx-auto px-6 text-center">
        {/* Header */}
        <p className="font-heading text-xs tracking-widest uppercase text-brand-green mb-3">
          ABOUT
        </p>
        <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-wide text-white mb-8">
          EXIT LEFT
        </h2>

        {/* Divider */}
        <div className="w-[60px] h-[2px] bg-brand-green mx-auto mb-8" />

        {/* Bio */}
        <p className="font-body text-base md:text-lg leading-relaxed mb-6" style={{ color: "#cccccc" }}>
          Exit Left is a high-energy, female-fronted rock cover band based in
          Dallas–Fort Worth, built to turn any room into a full-blown singalong.
        </p>
        <p className="font-body text-base md:text-lg leading-relaxed mb-6" style={{ color: "#cccccc" }}>
          We don&apos;t just play songs—we deliver the hits people feel. From 90s
          alt-rock and 2000s throwbacks to today&apos;s biggest anthems, every set
          is stacked with crowd favorites that keep the dance floor packed and the
          energy sky-high.
        </p>
        <p className="font-body text-base md:text-lg leading-relaxed mb-6" style={{ color: "#cccccc" }}>
          Whether it&apos;s a packed bar, private party, corporate event, or festival
          stage, Exit Left brings a bold, polished show with powerhouse vocals,
          tight musicianship, and zero filler. Just wall-to-wall energy from the
          first note to the last.
        </p>
        <p className="font-body text-base md:text-lg leading-relaxed mb-6" style={{ color: "#cccccc" }}>
          Booking now for events across the DFW metroplex and beyond. If you want
          a band that your crowd will actually remember—hit the inquiry below and
          let&apos;s make it happen.
        </p>

        {/* CTA */}
        <LinkButton href="#book" className="mt-10">
          INQUIRE ABOUT BOOKING
        </LinkButton>
      </div>
    </section>
  );
}
