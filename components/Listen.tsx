const songPreviews = [
  { id: "8aWUTaI-6lY", title: "Billie Jean" },
  { id: "myBPNL7OzCI", title: "Creep" },
  { id: "39igZlrvogE", title: "Purple Rain" },
  { id: "Xaw-99_dXVo", title: "I Love Rock N Roll" },
  { id: "8Lil6i7MJkI", title: "Who Knew" },
];

export default function Listen() {
  return (
    <section id="listen" className="bg-brand-light py-20">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-12 text-center">
          <span className="font-heading text-sm tracking-widest uppercase text-brand-green">
            MEDIA
          </span>
          <h2 className="font-heading text-5xl uppercase text-brand-dark">
            LISTEN TO EXIT LEFT
          </h2>
          <p className="font-body text-base text-brand-muted tracking-wider">
            A QUICK LOOK AT OUR LIVE ENERGY — CLIPS, PROMO VIDEOS, AND CROWD
            FAVORITES
          </p>
        </div>

        {/* Featured video */}
        <div className="mb-8">
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              src="https://www.youtube-nocookie.com/embed/rthJrZFSos4"
              title="Exit Left Promo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Song preview videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {songPreviews.map((preview) => (
            <div key={preview.id} className="bg-brand-card overflow-hidden group">
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  src={`https://www.youtube-nocookie.com/embed/${preview.id}`}
                  title={preview.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="font-heading text-base uppercase tracking-wide text-white px-4 py-3">
                {preview.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
