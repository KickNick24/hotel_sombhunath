import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { X, ZoomIn } from "lucide-react";
import { getWhatsAppGenericBookingUrl } from "../../utils/whatsappBooking";
import { publicUrl } from "../../utils/publicUrl";

interface GalleryImage {
  id: number;
  src: string;
  /** Used for image `alt` only (not shown on the page). */
  caption: string;
}

function gallerySrc(filename: string): string {
  return publicUrl(`gallery/${filename}`);
}

/** JPEGs from `public/gallery/` shown on the gallery page. */
const GALLERY_FILENAMES = [
  "photo-output.jpg",
  "photo-output(1).jpg",
  "photo-output(2).jpg",
  "photo-output(3).jpg",
  "photo-output(5).jpg",
  "photo-output(7).jpg",
  "photo-output(8).jpg",
  "photo-output(10).jpg",
  "photo-output(12).jpg",
  "photo-output(13).jpg",
  "photo-output(15).jpg",
  "photo-output(16).jpg",
  "photo-output(17).jpg",
  "photo-output(18).jpg",
  "photo-output(20).jpg",
  "photo-output(21).jpg",
  "photo-output(22).jpg",
] as const;

const IMAGES: GalleryImage[] = GALLERY_FILENAMES.map((filename, index) => ({
  id: index + 1,
  src: gallerySrc(filename),
  caption: `Hotel gallery photo ${index + 1}`,
}));

type BentoSpan = { col: 1 | 2; row: 1 | 2 };

/** Repeating bento rhythm so any number of images lays out cleanly. */
const BENTO_PATTERN: BentoSpan[] = [
  { col: 2, row: 2 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 1 },
  { col: 1, row: 2 },
  { col: 1, row: 1 },
  { col: 2, row: 1 },
];

function bentoSpanForId(id: number): BentoSpan {
  return BENTO_PATTERN[(id - 1) % BENTO_PATTERN.length] ?? { col: 1, row: 1 };
}

function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: GalleryImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: "rgba(7,30,51,0.96)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
        onClick={onClose}
      >
        <X className="w-5 h-5 text-white" />
      </button>

      <button
        className="absolute left-4 lg:left-8 w-11 h-11 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
          <path d="M9 11.5L4.5 7L9 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        className="absolute right-4 lg:right-8 w-11 h-11 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
          <path d="M5 2.5L9.5 7L5 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className="relative mx-16 lg:mx-24 max-w-4xl w-full rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.caption}
          className="w-full object-cover"
          style={{ maxHeight: "80vh" }}
        />
      </div>
    </div>
  );
}

function BentoCell({
  image,
  colSpan,
  rowSpan,
  onClick,
}: {
  image: GalleryImage;
  colSpan: 1 | 2;
  rowSpan: 1 | 2;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  const colClass = colSpan === 2 ? "col-span-2" : "col-span-1";
  const rowClass = rowSpan === 2 ? "row-span-2" : "row-span-1";

  return (
    <div
      className={`${colClass} ${rowClass} relative rounded-2xl overflow-hidden cursor-pointer`}
      style={{
        minHeight: rowSpan === 2 ? "360px" : "180px",
        boxShadow: hovered ? "0 16px 48px rgba(11,44,74,0.22)" : "0 4px 16px rgba(11,44,74,0.1)",
        transition: "box-shadow 0.3s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img
        src={image.src}
        alt={image.caption}
        className="w-full h-full object-cover"
        style={{ transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.5s" }}
      />
      <div
        className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.3)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scale(0.7)",
          transition: "opacity 0.2s, transform 0.2s",
        }}
      >
        <ZoomIn className="w-3.5 h-3.5 text-white" />
      </div>
    </div>
  );
}

export function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    const idx = IMAGES.findIndex((img) => img.id === id);
    setLightboxIndex(idx >= 0 ? idx : null);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    setLightboxIndex((i) => {
      if (i === null) return null;
      return (i - 1 + IMAGES.length) % IMAGES.length;
    });
  };

  const nextImage = () => {
    setLightboxIndex((i) => {
      if (i === null) return null;
      return (i + 1) % IMAGES.length;
    });
  };

  return (
    <>
      <PageHeader
        title="Our Gallery"
        subtitle="A visual journey through Hotel Sombhunath — from lush nature to luxurious interiors."
        breadcrumb="Gallery"
      />

      <section className="w-full py-16 lg:py-20" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {IMAGES.map((image) => {
              const span = bentoSpanForId(image.id);
              return (
                <BentoCell
                  key={image.id}
                  image={image}
                  colSpan={span.col}
                  rowSpan={span.row}
                  onClick={() => openLightbox(image.id)}
                />
              );
            })}
          </div>

          {/* CTA strip */}
          <div
            className="mt-14 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-7"
            style={{
              background: "linear-gradient(135deg, #0B2C4A 0%, #123B63 100%)",
              boxShadow: "0 8px 32px rgba(11,44,74,0.18)",
            }}
          >
            <div>
              <p
                className="text-white text-lg"
                style={{ fontFamily: "'Merriweather', serif", fontWeight: 700 }}
              >
                Ready to experience it in person?
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Nunito', sans-serif" }}
              >
                Book your stay at Hotel Sombhunath today.
              </p>
            </div>
            <a
              href={getWhatsAppGenericBookingUrl(
                "I saw your gallery and would like to book a stay at Hotel Sombhunath. Please share availability and room options.",
              )}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 rounded-xl px-7 py-3 text-sm text-white transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #F97316, #FB923C)",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                boxShadow: "0 4px 16px rgba(249,115,22,0.4)",
              }}
            >
              Book Now →
            </a>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && IMAGES[lightboxIndex] && (
        <Lightbox
          image={IMAGES[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
