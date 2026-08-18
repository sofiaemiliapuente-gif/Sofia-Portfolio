import { useState } from "react";
import {
  Clapperboard,
  PenLine,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ImageOff,
} from "lucide-react";

// Personal/creative interests, shown as a slideshow — one photo per slide,
// grouped by category (a category with several photos just gets several
// consecutive slides). Missing photos aren't in the repo yet: the <img>
// 404s and the onError handler swaps in a labeled placeholder.
//
// TO ADD/REPLACE A PHOTO: drop the file at public/beyond-work/<filename>
// using the exact filename below (see public/beyond-work/README.md).
// Recommended: portrait, ~3:4–4:5 aspect ratio, at least 1200px on the
// long edge, JPG or WEBP.
//
// Each slide can optionally link out (a reel, a writing sample, an
// Instagram/portfolio) once one exists — set `link` to a URL and a
// "View" button appears automatically. Leave it null until then.
const slides = [
  {
    category: "Film",
    icon: Clapperboard,
    filename: "film-1.jpg",
    blurb: "Checking a shot on location, camera in hand.",
    tags: ["Behind the scenes", "Cinematography"],
    link: null,
  },
  {
    category: "Film",
    icon: Clapperboard,
    filename: "film-2.jpg",
    blurb: "On location with the crew, setting up the next shot.",
    tags: ["On location", "Crew"],
    link: null,
  },
  {
    category: "Film",
    icon: Clapperboard,
    filename: "film-3.jpg",
    blurb: "On set, slating a take with the crew.",
    tags: ["On set", "Acting"],
    link: null,
  },
  {
    category: "Writing",
    icon: PenLine,
    filename: "writing.jpg",
    blurb:
      "Writes essays and reflections on identity, place, and politics — an extension of the thinking behind her CEU thesis on Latin American informal settlements.",
    tags: ["Essays", "Cultural commentary", "Creative writing"],
    link: null,
  },
];

const SlideImage = ({ slide }) => {
  const [errored, setErrored] = useState(false);
  const src = `${import.meta.env.BASE_URL}beyond-work/${slide.filename}`;

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-main-sand">
      {errored ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent-amber/20 via-main-sand to-accent-coral/15 px-4 text-center">
          <ImageOff className="w-10 h-10 text-main-taupe" strokeWidth={1.5} />
          <p className="text-sm text-main-taupe">public/beyond-work/{slide.filename}</p>
        </div>
      ) : (
        <img
          src={src}
          alt={slide.category}
          onError={() => setErrored(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
};

export default function BeyondWork() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const Icon = slide.icon;

  const categoryTotal = slides.filter((s) => s.category === slide.category).length;
  const categoryPosition =
    slides.slice(0, index + 1).filter((s) => s.category === slide.category).length;

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section id="beyond-work" className="bg-main-sand/40 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-main-ink mb-4 font-serif">Beyond Work</h2>
          <p className="text-lg text-main-taupe max-w-2xl mx-auto">
            Creative pursuits outside the office — film and writing
          </p>
        </div>

        <div className="relative bg-main-bone rounded-2xl border border-main-taupe/20 shadow-lg overflow-hidden">
          <SlideImage slide={slide} />

          {/* Slide arrows */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 top-[calc(40%-1.25rem)] bg-main-bone/80 hover:bg-main-bone text-main-ink rounded-full p-2 shadow transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-[calc(40%-1.25rem)] bg-main-bone/80 hover:bg-main-bone text-main-ink rounded-full p-2 shadow transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Description — the remaining ~20% of the card */}
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-5 h-5 text-accent-ochre" />
              <h3 className="text-lg font-bold text-main-ink">{slide.category}</h3>
              {categoryTotal > 1 && (
                <span className="text-xs text-main-taupe">
                  {categoryPosition}/{categoryTotal}
                </span>
              )}
            </div>
            <p className="text-sm text-main-taupe mb-3 leading-relaxed">{slide.blurb}</p>
            <div className="flex flex-wrap items-center gap-2">
              {slide.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-full bg-main-sand text-main-ink/70 border border-main-taupe/20"
                >
                  {tag}
                </span>
              ))}
              {slide.link && (
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent-ochre hover:text-accent-amber transition-colors ml-1"
                >
                  View
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((s, i) => (
            <button
              key={`${s.category}-${s.filename}`}
              onClick={() => setIndex(i)}
              aria-label={`Show ${s.category} photo ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-accent-amber" : "w-2.5 bg-main-taupe/40 hover:bg-main-taupe/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
