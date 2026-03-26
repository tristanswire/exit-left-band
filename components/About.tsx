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
          Exit Left is a high-energy rock cover band based in Dallas-Fort Worth,
          TX. We play the songs people actually know and love — the anthems that
          fill dance floors and keep crowds singing all night long.
        </p>
        <p className="font-body text-base md:text-lg leading-relaxed mb-6" style={{ color: "#cccccc" }}>
          From packed bars and music venues to private parties, corporate events,
          and festivals, we bring a polished and professional show every time. The
          setlist delivers the energy is real, and we never stop rocking.
        </p>
        <p className="font-body text-base md:text-lg leading-relaxed mb-6" style={{ color: "#cccccc" }}>
          Available to hire for events of all sizes across the DFW metroplex
          and beyond. Inquire below to check availability and get a custom quote
          for your event.
        </p>

        {/* CTA */}
        <LinkButton href="#book" className="mt-10">
          INQUIRE ABOUT BOOKING
        </LinkButton>
      </div>
    </section>
  );
}
