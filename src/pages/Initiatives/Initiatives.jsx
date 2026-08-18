import { Leaf, Newspaper, Megaphone, UtensilsCrossed } from "lucide-react";

const allInitiatives = [
  {
    title: "Homa Kah Sustainability Certification",
    description:
      "Coordinated sustainability documentation and certification requirements for the Homa Kah residential development, working across departments to build out the portfolio.",
    outcomes: [
      { value: "Top-tier", label: "sustainability recognition" },
      { value: "Int'l", label: "Property Awards" },
    ],
    icon: Leaf,
    iconColor: "text-accent-amber",
    company: "Grupo Homa Real Estate Developers",
    year: "2023",
    detail: "Recognized as one of the most sustainable residential developments in the Americas.",
  },
  {
    title: "CEU Environmental Front — Outreach & Content",
    description:
      "Managed communications and produced content for CEU's primary environmental student organization, coordinating outreach for sustainability-focused events.",
    outcomes: [
      { value: "Lead", label: "communications role" },
    ],
    icon: Megaphone,
    iconColor: "text-accent-ochre",
    company: "Central European University",
    year: "2024 – 2026",
    detail: "Student-led environmental advocacy and campus outreach.",
  },
  {
    title: "Co-Founder, The Beak Student Newspaper",
    description:
      "Co-founded the school's student newspaper, contributing original editorial pieces and editing submissions across a 3-year run.",
    outcomes: [
      { value: "3 yrs", label: "editorial run" },
    ],
    icon: Newspaper,
    iconColor: "text-accent-coral",
    company: "International Christian School of Vienna",
    year: "2016 – 2021",
    detail: "One of the founding editors of the school's first student-run newspaper, \"The Beak.\"",
  },
  {
    title: "Community Events with Aguacate Latin Food",
    description:
      "Organized events promoting Venezuelan cuisine as cultural representation, strengthening community engagement and brand visibility in Vienna.",
    outcomes: [
      { value: "Ongoing", label: "events program" },
    ],
    icon: UtensilsCrossed,
    iconColor: "text-accent-rust",
    company: "Aguacate Latin Food",
    year: "2025 – 2026",
    detail: "Cultural events pairing food, community, and storytelling.",
  },
];

const InitiativeCard = ({ initiative }) => {
  const Icon = initiative.icon;
  return (
    <div className="bg-main-sand rounded-lg overflow-hidden border border-main-taupe/20 hover:border-main-taupe/40 transition-all duration-300 hover:shadow-lg">
      {/* Header */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-main-taupe/10 via-main-sand to-accent-amber/10 flex items-center justify-center">
        <Icon className={`w-14 h-14 ${initiative.iconColor}`} strokeWidth={1.5} />
        <div className="absolute top-4 left-4 bg-main-bone/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm text-main-ink font-medium">
            {initiative.company}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-accent-amber/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm text-white font-medium">{initiative.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-main-ink mb-2">
          {initiative.title}
        </h3>

        {/* Outcome chips */}
        {initiative.outcomes?.length > 0 && (
          <div className="flex gap-4 mb-3 pb-3 border-b border-main-taupe/20">
            {initiative.outcomes.map((outcome, i) => (
              <div key={i}>
                <div className="text-accent-ochre font-bold text-base leading-tight">
                  {outcome.value}
                </div>
                <div className="text-main-taupe text-xs leading-tight">
                  {outcome.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="text-main-taupe mb-2 text-sm">
          {initiative.description}
        </p>
        <p className="text-main-taupe/80 text-xs italic">
          {initiative.detail}
        </p>
      </div>
    </div>
  );
};

export default function Initiatives() {
  return (
    <section id="initiatives" className="bg-main-bone py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-main-ink mb-4 font-serif">Initiatives</h2>
          <p className="text-lg text-main-taupe max-w-2xl mx-auto">
            Standout work across sustainability, diplomacy, and community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allInitiatives.map((initiative, index) => (
            <InitiativeCard key={index} initiative={initiative} />
          ))}
        </div>
      </div>
    </section>
  );
}
