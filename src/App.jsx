import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import EnterpriseBanner from "./components/EnterpriseBanner";
import Internship from "./pages/Internship";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="programs">
        <Programs />
      </section>

      <section id="gallery">
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
