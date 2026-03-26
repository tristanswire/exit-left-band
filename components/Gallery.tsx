import fs from "fs";
import path from "path";
import GalleryClient from "./GalleryClient";
import { LinkButton } from "@/components/ui/Button";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function getGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public", "images", "gallery");
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .map((file) => `/images/gallery/${file}`);
  } catch {
    return [];
  }
}

export default function Gallery() {
  const images = getGalleryImages();

  return (
    <section id="gallery" className="bg-brand-dark py-20">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-12 text-center">
          <span className="font-heading text-xs tracking-widest uppercase text-brand-green">
            PHOTOS
          </span>
          <h2 className="font-heading text-4xl uppercase text-white">
            GALLERY
          </h2>
        </div>
      </div>

      <GalleryClient images={images} />

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <LinkButton href="#book">BOOK EXIT LEFT</LinkButton>
      </div>
    </section>
  );
}
