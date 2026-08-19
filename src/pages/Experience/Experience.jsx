import { Briefcase, GraduationCap, MapPin, Download } from "lucide-react";
import { experience, education } from "@/data/experience";

const TimelineItem = ({ item }) => {
  return (
    <div className="relative flex items-start mb-8">
      {/* Timeline dot */}
      <div className="flex-shrink-0 w-4 h-4 bg-accent-amber rounded-full border-4 border-main-bone shadow-lg mt-3 mr-6 z-10"></div>

      {/* Content card */}
      <div className="flex-1">
        <div className="bg-main-bone rounded-lg shadow-md border border-main-taupe/30 p-4 hover:shadow-lg transition-shadow duration-300">
          {/* Date badge */}
          <div className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-accent-amber/20 text-accent-ochre">
            {item.title}
          </div>

          {/* Job title and company */}
          <h3 className="text-lg font-bold text-main-ink mb-1">{item.cardTitle}</h3>
          <h4 className="text-md font-semibold text-accent-ochre">{item.cardSubtitle}</h4>
          {item.location && (
            <p className="flex items-center gap-1.5 text-sm text-main-taupe mt-1 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              {item.location}
            </p>
          )}

          {item.bullets?.length > 0 && (
            <ul className="mt-3 space-y-1.5 list-disc list-outside pl-4">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="text-sm text-main-ink/80 leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const CustomTimeline = ({ items, title, icon: Icon, accentColor }) => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Icon className={`w-8 h-8 ${accentColor}`} />
        <h3 className="text-2xl font-bold text-main-ink">{title}</h3>
      </div>

      <div className="bg-main-sand rounded-lg p-6 border border-main-taupe/30">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-2 top-0 w-0.5 h-full bg-accent-amber/30"></div>

          {/* Timeline items */}
          {items.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen bg-main-bone relative py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-main-sand via-main-bone to-main-sand pointer-events-none"></div>

      {/* Content container */}
      <div className="relative container mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-main-ink mb-4 font-serif">Experience</h2>
          <p className="text-lg text-main-taupe max-w-2xl mx-auto">
            Diplomacy, sustainability, and hospitality.
          </p>
        </div>

        {/* Two-column layout: Experience + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <CustomTimeline
            items={experience}
            title="Professional Experience"
            icon={Briefcase}
            accentColor="text-accent-amber"
          />

          <CustomTimeline
            items={education}
            title="Education"
            icon={GraduationCap}
            accentColor="text-accent-coral"
          />
        </div>

        {/* Resume Download CTA */}
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-main-ink mb-4">Want more details?</h3>
            <p className="text-lg text-main-taupe max-w-xl mx-auto">
              Download my full resume for a more focused look.
            </p>
          </div>

          {/* Placeholder résumé — replace public/resume-sofia-puente-hernandez.pdf
              with the real PDF (same filename) and this link starts serving it. */}
          <a
            href="/resume-sofia-puente-hernandez.pdf"
            download="sofia-puente-hernandez-resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent-amber hover:bg-accent-ochre text-white font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Download résumé</span>
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
