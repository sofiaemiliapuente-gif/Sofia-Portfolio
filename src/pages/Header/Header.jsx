import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaGraduationCap,
  FaUser,
  FaImages,
  FaLightbulb,
  FaEnvelope,
  FaBars,
  FaPalette,
} from "react-icons/fa";

export default function Header() {
  const [activeLink, setActiveLink] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { id: "hero", icon: FaHome, text: "Home" },
    { id: "initiatives", icon: FaLightbulb, text: "Initiatives" },
    { id: "experience", icon: FaGraduationCap, text: "Experience" },
    { id: "beyond-work", icon: FaPalette, text: "Beyond Work" },
    { id: "gallery", icon: FaImages, text: "Gallery" },
    { id: "contact", icon: FaEnvelope, text: "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Adjust based on header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-main-bone/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-accent-amber via-accent-coral to-accent-amber animate-gradient-x">
          <nav className="bg-main-bone/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5 md:shadow-lg">
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center md:hidden px-2">
              <a
                href="#hero"
                aria-label="Back to top"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('hero');
                }}
                className="text-main-ink font-bold font-serif"
              >
                {navLinks.find(link => link.id === activeLink)?.text || "Sofía Puente"}
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-main-ink p-2"
              >
                <FaBars />
              </button>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
              <div className="flex flex-col md:flex-row md:flex-nowrap md:items-center gap-2 md:gap-0.5 py-4 md:py-0 md:whitespace-nowrap">
                {navLinks.map(({ id, icon: Icon, text }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (location.pathname !== '/') {
                        navigate(`/#${id}`);
                      } else {
                        scrollToSection(id);
                      }
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 md:px-2.5 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                      transition-all duration-300 flex items-center gap-2 md:gap-1.5
                      hover:bg-main-taupe/10 cursor-pointer
                      ${
                        activeLink === id
                          ? "bg-accent-amber/20 text-accent-ochre"
                          : "text-main-taupe hover:text-main-ink"
                      }
                    `}
                  >
                    <Icon
                      className={`text-base md:text-sm ${
                        activeLink === id ? "scale-110" : ""
                      }`}
                    />
                    <span className="inline">{text}</span>
                  </a>
                ))}
                {/* About page link */}
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/about');
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-2 md:px-2.5 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                    transition-all duration-300 flex items-center gap-2 md:gap-1.5
                    hover:bg-main-taupe/10 cursor-pointer
                    ${
                      location.pathname === '/about'
                        ? "bg-accent-amber/20 text-accent-ochre"
                        : "text-main-taupe hover:text-main-ink"
                    }
                  `}
                >
                  <FaUser className={`text-base md:text-sm ${location.pathname === '/about' ? "scale-110" : ""}`} />
                  <span className="inline">About</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
