import { Clapperboard, PenLine, Palette, ArrowUpRight } from "lucide-react";

// Personal/creative interests, kept light — short blurbs and tags rather
// than full case studies. Each entry can optionally link out (a reel, a
// writing sample, an Instagram/portfolio) once one exists; set `link` to a
// URL and the "View" button appears automatically. Leave it null until then.
const pursuits = [
  {
    icon: Clapperboard,
    title: "Film",
    blurb:
      "Acts and gets involved behind the scenes on independent film projects — drawn to storytelling with a multicultural lens.",
    tags: ["Acting", "Independent film", "Storytelling"],
    link: null,
  },
  {
    icon: PenLine,
    title: "Writing",
    blurb:
      "Writes essays and reflections on identity, place, and politics — an extension of the thinking behind her CEU thesis on Latin American informal settlements.",
    tags: ["Essays", "Cultural commentary", "Creative writing"],
    link: null,
  },
  {
    icon: Palette,
    title: "Art",
    blurb:
      "Explores visual art as another way of processing culture and place, alongside her academic and professional work.",
    tags: ["Visual art", "Mixed media"],
    link: null,
  },
];

const PursuitCard = ({ pursuit }) => {
  const Icon = pursuit.icon;
  return (
    <div className="bg-main-sand rounded-lg border border-main-taupe/20 p-6 hover:border-accent-sage/40 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-accent-sage/15 text-accent-forest">
          <Icon className="w-6 h-6" strokeWidth={1.75} />
        </div>
        <h3 className="text-xl font-bold text-main-ink">{pursuit.title}</h3>
      </div>

      <p className="text-main-taupe text-sm mb-4 leading-relaxed">{pursuit.blurb}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {pursuit.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs rounded-full bg-main-bone text-main-ink/70 border border-main-taupe/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {pursuit.link && (
        <a
          href={pursuit.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-forest hover:text-accent-sage transition-colors"
        >
          View
          <ArrowUpRight className="w-4 h-4" />
        </a>
      )}
    </div>
  );
};

export default function BeyondWork() {
  return (
    <section id="beyond-work" className="bg-main-sand/40 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-main-ink mb-4 font-serif">Beyond Work</h2>
          <p className="text-lg text-main-taupe max-w-2xl mx-auto">
            Creative pursuits outside the office — film, writing, and art
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pursuits.map((pursuit) => (
            <PursuitCard key={pursuit.title} pursuit={pursuit} />
          ))}
        </div>
      </div>
    </section>
  );
}
