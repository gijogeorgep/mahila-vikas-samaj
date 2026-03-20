import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import EnterpriseBanner from "./components/EnterpriseBanner";
import Internship from "./pages/Internship";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return null;
}

function Home() {
  return (
    <>
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="programs" className="scroll-mt-20">
        <Programs />
      </section>

      <section id="gallery" className="scroll-mt-20">
        <Gallery />
      </section>
      
      {/* Flagship Programme Banner */}
      <EnterpriseBanner />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
