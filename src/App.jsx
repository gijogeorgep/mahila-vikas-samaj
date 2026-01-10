import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      {/* Sections */}
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

     

      <Footer />
    </>
  );
}

export default App;
