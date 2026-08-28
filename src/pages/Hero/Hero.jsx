import sofiaPhoto from "@/assets/images/sofia.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen bg-main-bone py-16 sm:py-20 md:py-32 flex items-center overflow-x-clip"
    >
          {/* Main content container */}
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 px-4 md:px-8">
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              {/* Name section */}
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-main-ink font-serif">
                  Sofía Puente Hernández
                  <span className="block text-2xl sm:text-3xl lg:text-4xl text-accent-ochre">Culture, Communications</span>
                </h1>
              </div>

              {/* Description */}
              <div className="mb-12 max-w-xl">
                <p className="text-lg text-main-ink/80 leading-relaxed">
                  I am a writer and researcher interested in stories, food,
                  culture, and the connections between people and places.
                  With a
                  background spanning international affairs, sustainability,
                  sales and communications, I'm especially drawn to projects
                  with an international dimension and to stories that
                  deserve to be heard.
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
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-4 border-main-sand shadow-2xl">
                  <img
                    src={sofiaPhoto}
                    alt="Sofía Puente Hernández"
                    className="w-full h-full object-cover object-[58%_15%] scale-150 origin-[60%_45%]"
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
