import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";

// Curated visual strip — not a general travel dump, but a handful of shots
// that back up the multicultural, cross-sector story told elsewhere on the
// site. Real photos are not in the repo yet: each item below points at a
// filename under public/gallery/ that doesn't exist, so the <img> 404s and
// the onError handler swaps in a labeled placeholder tile instead.
//
// TO ADD A REAL PHOTO: drop the file at public/gallery/<filename> using the
// exact filename listed below (see public/gallery/README.md for the same
// list). Recommended: square, at least 1200×1200px, JPG or WEBP, ideally
// under ~500KB so the page stays fast.
const galleryItems = [
  {
    filename: "dongguk-exchange.jpg",
    place: "Seoul, South Korea",
    context: "Exchange year at Dongguk University",
  },
  {
    filename: "dongguk-exchange-2.jpg",
    place: "Seoul, South Korea",
    context: "Exchange year at Dongguk University",
  },
  {
    filename: "hong-kong.jpg",
    place: "Hong Kong",
    context: "Cultural exchange trip during her year abroad",
  },
  {
    filename: "tulum-homa-kah.jpg",
    place: "Tulum, Mexico",
    context: "Homa Kah, a certified sustainable development",
  },
  {
    filename: "tulum-homa-kah-2.jpg",
    place: "Tulum, Mexico",
    context: "Homa Kah, a certified sustainable development",
  },
  {
    filename: "tulum-homa-kah-3.jpg",
    place: "Tulum, Mexico",
    context: "Homa Kah, a certified sustainable development",
  },
  {
    filename: "vienna-aguacate.jpg",
    place: "Vienna, Austria",
    context: "Community event with Aguacate Latin Food",
  },
  {
    filename: "vienna-aguacate-2.jpg",
    place: "Vienna, Austria",
    context: "Community event with Aguacate Latin Food",
  },
  {
    filename: "vienna-aguacate-3.jpg",
    place: "Vienna, Austria",
    context: "Community event with Aguacate Latin Food",
  },
  {
    filename: "ceu-environmental-front.jpg",
    place: "Vienna, Austria",
    context: "Outreach for CEU Environmental Front",
  },
  {
    filename: "ceu-environmental-front-2.jpg",
    place: "Vienna, Austria",
    context: "Outreach for CEU Environmental Front",
  },
  {
    filename: "ceu-environmental-front-3.jpg",
    place: "Vienna, Austria",
    context: "Outreach for CEU Environmental Front",
  },
];

const GalleryImage = ({ item, badge, className }) => {
  const [errored, setErrored] = useState(false);
  const src = `${import.meta.env.BASE_URL}gallery/${item.filename}`;

  return (
    <div className={`group relative aspect-square w-full overflow-hidden rounded-xl border border-main-taupe/30 bg-main-sand ${className || ""}`}>
      {errored ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent-amber/20 via-main-sand to-accent-coral/15 px-3 text-center">
          <ImageOff className="w-7 h-7 text-main-taupe" strokeWidth={1.5} />
          <p className="text-xs text-main-taupe">public/gallery/{item.filename}</p>
        </div>
      ) : (
        <img
          src={src}
          alt={`${item.place} — ${item.context}`}
          onError={() => setErrored(true)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
      {badge && (
        <span className="absolute top-2.5 right-2.5 bg-main-ink/60 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-main-ink/80 to-transparent p-3">
        <p className="text-sm font-medium text-white">{item.place}</p>
        <p className="text-xs text-white/80 line-clamp-1">{item.context}</p>
      </div>
    </div>
  );
};

const GalleryTile = ({ item, badge, onClick }) => (
  <button onClick={onClick} className="block w-full text-left">
    <GalleryImage item={item} badge={badge} />
  </button>
);

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const showPrev = () =>
    setActiveIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % galleryItems.length);

  const active = isOpen ? galleryItems[activeIndex] : null;

  return (
    <section id="gallery" className="bg-main-bone py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-main-ink mb-4 font-serif">Gallery</h2>
          <p className="text-lg text-main-taupe max-w-2xl mx-auto">
            A few snapshots from events, moments and experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => {
            const sameContext = galleryItems.filter(
              (g) => g.place === item.place && g.context === item.context
            );
            const badge =
              sameContext.length > 1
                ? `${sameContext.indexOf(item) + 1}/${sameContext.length}`
                : null;
            return (
              <GalleryTile
                key={item.filename}
                item={item}
                badge={badge}
                onClick={() => setActiveIndex(index)}
              />
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-main-ink/90 px-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/80 hover:text-white"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-4 md:left-8 text-white/80 hover:text-white"
          >
            <ChevronLeft className="w-9 h-9" />
          </button>

          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <GalleryImage item={active} />
            <p className="mt-4 text-center text-white">
              <span className="font-medium">{active.place}</span>
              <span className="text-white/70"> — {active.context}</span>
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="absolute right-4 md:right-8 text-white/80 hover:text-white"
          >
            <ChevronRight className="w-9 h-9" />
          </button>
        </div>
      )}
    </section>
  );
}
