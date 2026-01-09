import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/programs" element={<h1>Programs Page</h1>} />
        <Route path="/impact" element={<h1>Impact Page</h1>} />
        <Route path="/join" element={<h1>Join Us Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
