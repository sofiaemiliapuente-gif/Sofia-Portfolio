import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./assets/css/index.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Initiatives from "./pages/Initiatives/Initiatives";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Gallery from "./pages/Gallery/Gallery";
import BeyondWork from "./pages/BeyondWork/BeyondWork";
import IndustryBanner from "./components/IndustryBanner";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash && location.pathname === '/') {
      const timer = setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
    // Route changes without a hash (e.g. /about) start at the top —
    // React Router preserves scroll position otherwise, opening pages mid-scroll.
    window.scrollTo(0, 0);
  }, [location]);

  // Home page component that contains all sections
  const HomePage = () => (
    <>
      <Hero />
      <Skills />
      <Initiatives />
      <Experience />
      <IndustryBanner />
      <BeyondWork />
      <Gallery />
      <Contact />
    </>
  );

  return (
    <div className="min-h-screen flex flex-col bg-main-bone">
      <Header />
      <main className="flex-grow pb-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
