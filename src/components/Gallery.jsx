import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";
import img22 from "../assets/img22.jpeg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";
import img14 from "../assets/img14.jpeg";
import img15 from "../assets/img15.jpeg";
import img16 from "../assets/img16.jpeg";
import img17 from "../assets/img17.jpeg";
import img18 from "../assets/img18.jpeg";
import img19 from "../assets/img19.jpeg";
import img20 from "../assets/img20.jpeg";
import img21 from "../assets/img21.jpeg";
import img23 from "../assets/img23.jpeg";
import img24 from "../assets/img24.jpeg";
import img25 from "../assets/img25.jpeg";
import img26 from "../assets/img26.jpeg";
import img27 from "../assets/img27.jpeg";
import img28 from "../assets/img28.jpeg";
import img29 from "../assets/img29.jpeg";
import img30 from "../assets/img30.jpeg";
import img31 from "../assets/img31.jpeg";
import img32 from "../assets/img32.jpeg";
import img33 from "../assets/img33.jpeg";
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img22,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
];

const internshipImages = [img29, img30, img31, img33];

const allImages = [...images, ...internshipImages];

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  const handleNext = (e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gray-50/50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-green-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-green-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
            Our Visual Journey
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Capturing the essence of empowerment and change. A glimpse into the
            lives and initiatives transforming communities across Kerala.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              layoutId={`img-${index}`}
              onClick={() => setSelectedIdx(index)}
              className="relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <motion.img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-white font-medium text-sm">
                    View Moment
                  </span>
                  <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                    <Maximize2 size={18} className="text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Internship Showcase Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-600 bg-green-50 border border-green-200 px-4 py-1.5 rounded-full mb-4">
            Internship Programme
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
            Learning by Doing
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            A look at our internship initiatives — where young changemakers
            engage directly with communities to turn ideas into real impact.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {internshipImages.map((img, index) => {
            const globalIdx = images.length + index;
            return (
              <motion.div
                key={globalIdx}
                variants={itemVariants}
                layoutId={`img-${globalIdx}`}
                onClick={() => setSelectedIdx(globalIdx)}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-white aspect-[4/3]"
              >
                <motion.img
                  src={img}
                  alt={`Internship ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-white font-medium text-sm">
                      View Moment
                    </span>
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                      <Maximize2 size={16} className="text-white" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors text-white backdrop-blur-md border border-white/10"
            >
              <X size={24} />
            </button>

            {/* Navigation - Prev */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-[110] bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all text-white backdrop-blur-sm border border-white/10 hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Main Image Container */}
            <div className="relative w-full max-w-5xl h-full flex items-center justify-center pointer-events-none">
              <motion.div
                layoutId={`img-${selectedIdx}`}
                className="relative max-h-full max-w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={allImages[selectedIdx]}
                  alt="Gallery Full View"
                  className="max-h-[85vh] w-auto rounded-xl shadow-2xl pointer-events-auto border-2 border-white/10"
                />

                {/* Image Info / Counter */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white/70 text-sm font-medium">
                  <span className="bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/5">
                    {selectedIdx + 1} / {allImages.length}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Navigation - Next */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-[110] bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all text-white backdrop-blur-sm border border-white/10 hover:scale-110 active:scale-95"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
