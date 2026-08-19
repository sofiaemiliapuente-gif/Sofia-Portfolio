import { MapPin, Mail, Phone, Linkedin } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "sofiaemiliapuente@gmail.com",
    href: "mailto:sofiaemiliapuente@gmail.com",
    color: "text-accent-amber",
    bg: "bg-accent-amber/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+43 660 1185761",
    href: "tel:+436601185761",
    color: "text-accent-ochre",
    bg: "bg-accent-ochre/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Sofía Emilia Puente Hernández",
    href: "https://www.linkedin.com/in/sof%C3%ADa-emilia-puente-hernandez-916782284/",
    color: "text-accent-coral",
    bg: "bg-accent-coral/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Vienna, Austria",
    href: null,
    color: "text-accent-rust",
    bg: "bg-accent-rust/10",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-main-bone">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-main-ink font-serif">
          Let's talk
        </h2>
        <p className="text-main-taupe text-lg">
          I'm interested in work that brings together culture, international
          affairs, wellness, sustainability, and development, especially
          where Latin American perspectives and multicultural thinking have
          a place. Whether in business, academia, creative projects, or
          beyond, I'm always open to collaborations, and opportunities to
          build something meaningful.
        </p>

        {/* Contact details */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {contactDetails.map(({ icon: Icon, label, value, href, color, bg }) => {
            const Wrapper = href ? "a" : "div";
            return (
              <Wrapper
                key={label}
                {...(href
                  ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined }
                  : {})}
                className="flex items-center gap-4 bg-main-sand rounded-xl p-4 border border-main-taupe/20 hover:border-accent-amber/40 transition-colors"
              >
                <div className={`p-3 rounded-lg ${bg}`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-main-ink">{label}</h3>
                  <p className="text-main-taupe break-words">{value}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
