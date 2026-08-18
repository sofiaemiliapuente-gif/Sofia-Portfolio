import { Briefcase, GraduationCap } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";
import { experience, education } from "@/data/experience";

// Drop a real photo at src/assets/images/sofia.jpg (portrait, ~4:5 aspect
// ratio, at least 900x1125px) and swap the PlaceholderImage below for an
// <img> import, same as in src/pages/Hero/Hero.jsx.

const TimelineItem = ({ item }) => (
  <div className="relative flex items-start mb-6">
    <div className="flex-shrink-0 w-3 h-3 bg-accent-sage rounded-full border-2 border-main-bone shadow mt-2 mr-5 z-10"></div>
    <div className="flex-1 bg-main-bone rounded-lg border border-main-taupe/20 p-4 hover:border-accent-sage/30 transition-colors duration-200">
      <div className="inline-block mb-1 px-3 py-0.5 rounded-full text-xs font-medium bg-accent-sage/10 text-accent-forest">
        {item.title}
      </div>
      <h3 className="text-sm font-bold text-main-ink">{item.cardTitle}</h3>
      <p className="text-sm text-accent-forest">{item.cardSubtitle}</p>
      {item.location && (
        <p className="text-xs text-main-taupe mt-0.5">{item.location}</p>
      )}
    </div>
  </div>
);

const TimelineColumn = ({ items, title, icon: Icon }) => (
  <div>
    <div className="flex items-center gap-2 mb-6">
      <Icon className="w-5 h-5 text-accent-sage" />
      <h3 className="text-base font-bold text-main-ink">{title}</h3>
    </div>
    <div className="relative">
      <div className="absolute left-1.5 top-0 w-px h-full bg-accent-sage/20"></div>
      {items.map((item, i) => (
        <TimelineItem key={i} item={item} />
      ))}
    </div>
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-main-sand pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

        {/* Bio section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          <div className="flex-shrink-0">
            <PlaceholderImage
              label="Sofía's photo"
              sublabel="src/assets/images/sofia.jpg"
              aspect="aspect-[4/5]"
              className="w-52 h-64 shadow-lg"
            />
          </div>

          <div className="flex-1">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-forest mb-3">About</p>
            <h1 className="text-3xl font-bold text-main-ink mb-6 leading-tight font-serif">
              Sofía Puente Hernández
            </h1>
            <div className="space-y-4 text-main-ink/80 leading-relaxed">
              <p>
                I'm a multilingual professional working across diplomacy,
                sustainability, events, and communications. I speak Spanish
                natively, work professionally in English, and hold a B1
                (ÖIF-certified) level of German.
              </p>
              <p>
                My path has taken me from an internship at the Embassy of
                The Republic of Nicaragua in Vienna — writing diplomatic
                reports and briefings across UN bodies like UNIDO, UNODC,
                and the IAEA — to coordinating sustainability certification
                for a residential development in Tulum, Mexico, recognized
                as one of the most sustainable in the Americas.
              </p>
              <p>
                I enjoy bringing people together and finding practical
                solutions that help projects move forward. Whether that's
                translating a policy document, organizing a community
                event, or managing a social media calendar, I'm comfortable
                juggling multiple priorities at once.
              </p>
              <p>
                I'm currently completing a B.Sc. in Culture, Politics and
                Society at Central European University in Vienna, majoring
                in Cultural and Historical Studies with a minor in
                International Relations. My thesis looks at urban
                transformation and the unequal citizenship of Latin
                American informal settlements — a subject close to my own
                multicultural background.
              </p>
              <p>
                What ties all of this together is a uniquely multicultural
                perspective that emphasizes Latin American voices,
                wherever I'm working from.
              </p>
              <p>
                Outside of work, I act and get involved in independent film
                projects, write essays on identity and place, and explore
                visual art as another way of processing culture.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="/resume-sofia-puente-hernandez.pdf"
                download="sofia-puente-hernandez-resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-sage hover:bg-accent-forest text-white text-sm font-medium transition-colors duration-200"
              >
                Download résumé
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-main-bone hover:bg-main-sand text-main-ink text-sm font-medium border border-main-taupe/30 transition-colors duration-200"
              >
                View contact
              </a>
            </div>
          </div>
        </div>

        {/* Experience + Education timeline */}
        <div>
          <h2 className="text-2xl font-bold text-main-ink mb-2 font-serif">Experience &amp; Education</h2>
          <p className="text-main-taupe mb-10 text-sm">
            A full history of where I've worked and studied.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <TimelineColumn
              items={experience}
              title="Professional Experience"
              icon={Briefcase}
            />
            <TimelineColumn
              items={education}
              title="Education"
              icon={GraduationCap}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
