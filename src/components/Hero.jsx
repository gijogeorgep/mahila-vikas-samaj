import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img7 from "../assets/img7.jpeg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[calc(100svh-88px)] min-h-[520px] bg-cover bg-[position:40%_center] sm:bg-center flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${img7})`,
      }}
    >
      {/* Brand Green Tint overlay for blending */}
      <div className="absolute inset-0 bg-green-900/25 mix-blend-multiply"></div>

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/45 md:bg-gradient-to-r md:from-black/90 md:via-black/55 md:to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-6 md:py-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-montserrat"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] text-green-400 font-bold mb-3 md:mb-5"
          >
            Empowering Women • Transforming Communities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-[2.5rem] md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-4 md:mb-6"
          >
            Building Stronger <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200">
              Women & Communities
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-300 text-base sm:text-base md:text-lg mb-6 md:mb-9 max-w-xl leading-relaxed"
          >
            Mahila Vikas Samaj empowers women at the grassroots through
            entrepreneurship, skill development, and sustainable livelihood
            opportunities across Kerala.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <a
              href="https://forms.gle/Ft3XLFztBZGoXvKc8"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-green-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold transition-all hover:bg-green-700 shadow-xl shadow-green-900/40 hover:shadow-green-900/60 hover:-translate-y-1 active:scale-95 flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">Apply Internship</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </a>
            <Link
              to="/donate"
              className="bg-white text-green-800 px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold transition-all hover:bg-green-50 shadow-xl shadow-green-900/30 hover:-translate-y-1 active:scale-95"
            >
              Donate
            </Link>
            <a
              href="#about"
              className="backdrop-blur-md border border-white/30 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-white/10 transition-all hover:border-white/50 active:scale-95"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Abstract visual or empty space */}
        <div className="hidden md:block relative h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full pointer-events-none"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden sm:block absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[30px] h-[50px] border-2 border-white/20 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-green-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

