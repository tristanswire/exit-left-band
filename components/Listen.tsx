const secondaryVideos: { id: string; title: string }[] = [
  { id: "PLACEHOLDER_ID_1", title: "Live at Lava Cantina" },
  { id: "PLACEHOLDER_ID_2", title: "Corporate Event Highlights" },
  { id: "PLACEHOLDER_ID_3", title: "Private Party Reel" },
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
        <div className="mb-10">
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

        {/* Secondary thumbnails hidden until real video IDs are added
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {secondaryVideos.map((video) => (
            <div key={video.id}>
              <div
                style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
                className="bg-brand-card"
              >
                <iframe
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="font-heading text-sm uppercase tracking-wide text-brand-dark mt-3">
                {video.title}
              </p>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
