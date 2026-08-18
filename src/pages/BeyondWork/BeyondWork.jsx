import { useState } from "react";
import {
  Clapperboard,
  PenLine,
  Palette,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ImageOff,
} from "lucide-react";

// Personal/creative interests, shown as a slideshow — one project per
// slide, image-forward. Real photos aren't in the repo yet: each slide
// points at a filename under public/beyond-work/ that doesn't exist, so
// the <img> 404s and the onError handler swaps in a labeled placeholder.
//
// TO ADD A REAL PHOTO: drop the file at public/beyond-work/<filename>
// using the exact filename below (see public/beyond-work/README.md).
// Recommended: ~4:3 landscape, at least 1200×900px, JPG or WEBP.
//
// Each entry can optionally link out (a reel, a writing sample, an
// Instagram/portfolio) once one exists — set `link` to a URL and a
// "View" button appears automatically. Leave it null until then.
const pursuits = [
  {
    icon: Clapperboard,
    title: "Film",
    filename: "film.jpg",
    blurb:
      "Acts and gets involved behind the scenes on independent film projects — drawn to storytelling with a multicultural lens.",
    tags: ["Acting", "Independent film", "Storytelling"],
    link: null,
  },
  {
    icon: PenLine,
    title: "Writing",
    filename: "writing.jpg",
    blurb:
      "Writes essays and reflections on identity, place, and politics — an extension of the thinking behind her CEU thesis on Latin American informal settlements.",
    tags: ["Essays", "Cultural commentary", "Creative writing"],
    link: null,
  },
  {
    icon: Palette,
    title: "Art",
    filename: "art.jpg",
    blurb:
      "Explores visual art as another way of processing culture and place, alongside her academic and professional work.",
    tags: ["Visual art", "Mixed media"],
    link: null,
  },
];

const SlideImage = ({ item }) => {
  const [errored, setErrored] = useState(false);
  const src = `${import.meta.env.BASE_URL}beyond-work/${item.filename}`;

  return (
    <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-main-sand">
      {errored ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent-amber/20 via-main-sand to-accent-coral/15 px-4 text-center">
          <ImageOff className="w-10 h-10 text-main-taupe" strokeWidth={1.5} />
          <p className="text-sm text-main-taupe">public/beyond-work/{item.filename}</p>
        </div>
      ) : (
        <img
          src={src}
          alt={item.title}
          onError={() => setErrored(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
};

export default function BeyondWork() {
  const [index, setIndex] = useState(0);
  const item = pursuits[index];
  const Icon = item.icon;

  const prev = () => setIndex((i) => (i - 1 + pursuits.length) % pursuits.length);
  const next = () => setIndex((i) => (i + 1) % pursuits.length);

  return (
    <section id="beyond-work" className="bg-main-sand/40 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-main-ink mb-4 font-serif">Beyond Work</h2>
          <p className="text-lg text-main-taupe max-w-2xl mx-auto">
            Creative pursuits outside the office — film, writing, and art
          </p>
        </div>

        <div className="relative bg-main-bone rounded-2xl border border-main-taupe/20 shadow-lg overflow-hidden">
          <SlideImage item={item} />

          {/* Slide arrows */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 top-[calc(40%-1.25rem)] sm:top-[calc(50%-1.25rem)] bg-main-bone/80 hover:bg-main-bone text-main-ink rounded-full p-2 shadow transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-[calc(40%-1.25rem)] sm:top-[calc(50%-1.25rem)] bg-main-bone/80 hover:bg-main-bone text-main-ink rounded-full p-2 shadow transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Description — the remaining ~20% of the card */}
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-5 h-5 text-accent-ochre" />
              <h3 className="text-lg font-bold text-main-ink">{item.title}</h3>
            </div>
            <p className="text-sm text-main-taupe mb-3 leading-relaxed">{item.blurb}</p>
            <div className="flex flex-wrap items-center gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-full bg-main-sand text-main-ink/70 border border-main-taupe/20"
                >
                  {tag}
                </span>
              ))}
              {item.link && (
                <a
                  href={item.link}
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
          {pursuits.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setIndex(i)}
              aria-label={`Show ${p.title}`}
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
