import PlaceholderImage from "@/components/PlaceholderImage";

// Drop a real photo at src/assets/images/sofia.jpg (portrait, ~4:5 aspect
// ratio, at least 900x1125px, JPG or WEBP) then swap the PlaceholderImage
// below for:
//   import sofiaPhoto from "@/assets/images/sofia.jpg";
//   <img src={sofiaPhoto} alt="Sofía Puente Hernández" className="w-full h-full object-cover max-w-md" />

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen bg-main-bone py-16 sm:py-20 md:py-32 flex items-center overflow-x-clip"
    >
      {/* Simple background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-main-sand via-main-bone to-main-sand pointer-events-none"></div>

          {/* Main content container */}
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 px-4 md:px-8">
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              {/* Name section */}
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-main-ink font-serif">
                  Sofía Puente Hernández
                  <span className="block text-accent-ochre">International Relations</span>
                </h1>
              </div>

              {/* Description */}
              <div className="mb-12 max-w-xl">
                <p className="text-lg text-main-ink/80 leading-relaxed">
                  Multilingual professional with experience spanning project
                  coordination, communications, customer relations, and
                  international affairs. I enjoy bringing people together and
                  finding practical solutions that help projects move forward.
                  Having worked across diplomacy, sustainability, and
                  hospitality, I'm comfortable managing multiple priorities,
                  with a uniquely multicultural perspective emphasizing Latin
                  American voices.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent-amber hover:bg-accent-ochre text-white font-medium transition-colors duration-200"
                >
                  <span>View contact</span>
                </a>

                <a
                  href="#initiatives"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-main-bone hover:bg-main-sand text-main-ink font-medium border border-main-taupe/30 transition-colors duration-200"
                >
                  <span>See highlights</span>
                </a>
              </div>
            </div>

            {/* Right column - Photo */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Decorative background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-amber/20 to-accent-coral/20 rounded-full blur-3xl"></div>

                {/* Photo container */}
                <div className="relative rounded-2xl overflow-hidden border-4 border-main-sand shadow-2xl">
                  <PlaceholderImage
                    label="Sofía's photo goes here"
                    sublabel="src/assets/images/sofia.jpg · portrait, ~4:5 ratio, 900×1125px+"
                    aspect="aspect-[4/5]"
                    className="border-0 rounded-none"
                  />

                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-main-ink/50 to-transparent pointer-events-none"></div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                    <p className="text-sm font-medium opacity-90">International Relations & Communications</p>
                    <p className="text-xs opacity-75">Vienna, Austria · working across borders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-main-taupe text-sm">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
