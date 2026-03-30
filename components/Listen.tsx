const songPreviews = [
  { src: "/videos/song-preview-1.mp4", title: "Song Preview 1" },
  { src: "/videos/song-preview-2.mp4", title: "Song Preview 2" },
  { src: "/videos/song-preview-3.mp4", title: "Song Preview 3" },
  { src: "/videos/song-preview-4.mp4", title: "Song Preview 4" },
  { src: "/videos/song-preview-5.mp4", title: "Song Preview 5" },
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
            <div key={preview.src} className="bg-brand-card overflow-hidden group">
              <video
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
                style={{ backgroundColor: "#0a0a0a" }}
              >
                <source src={preview.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
