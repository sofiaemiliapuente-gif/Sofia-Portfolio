import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-main-sand border-t border-main-taupe/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-main-taupe text-sm">
            © {currentYear} Sofía Puente Hernández
          </div>

          {/* Professional Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/sof%C3%ADa-emilia-puente-hernandez-916782284/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-main-taupe hover:text-accent-ochre transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:sofiaemiliapuente@gmail.com"
              className="text-main-taupe hover:text-accent-ochre transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="tel:+436601185761"
              className="text-main-taupe hover:text-accent-ochre transition-colors duration-200"
              aria-label="Phone"
            >
              <FaPhone size={18} />
            </a>
          </div>

          {/* Role */}
          <div className="text-main-taupe text-sm">
            International Relations & Communications
          </div>
        </div>
      </div>
    </footer>
  );
}
