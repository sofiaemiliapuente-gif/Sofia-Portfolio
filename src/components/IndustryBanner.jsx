import {
  FaLandmark,
  FaLeaf,
  FaGlassCheers,
  FaBullhorn,
  FaHandshake,
} from "react-icons/fa";

const IndustryBanner = () => {
  const industries = [
    { name: "Diplomacy & International Affairs", icon: FaLandmark },
    { name: "Sustainability", icon: FaLeaf },
    { name: "Events & Hospitality", icon: FaGlassCheers },
    { name: "Communications", icon: FaBullhorn },
    { name: "Customer Relations", icon: FaHandshake },
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedIndustries = [...industries, ...industries];

  return (
    <div className="relative py-12 bg-main-sand border-y border-main-taupe/20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-main-sand via-main-bone to-main-sand"></div>

      {/* Moving banner container */}
      <div className="relative">
        <div className="flex animate-scroll-left">
          {duplicatedIndustries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="flex items-center space-x-3 px-8 py-4 mx-4 bg-main-bone rounded-lg shadow-sm border border-main-taupe/20 hover:shadow-md transition-shadow duration-300 min-w-max"
              >
                <Icon className="w-6 h-6 text-accent-amber" />
                <span className="text-main-ink font-medium whitespace-nowrap">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fade gradients on edges */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-main-sand to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-main-sand to-transparent z-10"></div>

      {/* Section title */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20">
        <p className="text-sm text-main-taupe font-medium">
          Sectors I've Worked Across
        </p>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default IndustryBanner;
