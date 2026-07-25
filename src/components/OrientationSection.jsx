import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  BookOpen, 
  Users, 
  Compass, 
  Sparkles,
  ArrowRight,
  GraduationCap
} from "lucide-react";

// Import orientation images
import orientation1 from "../assets/orientation/orientation1.jpeg";
import orientation2 from "../assets/orientation/orientation2.jpeg";
import orientation3 from "../assets/orientation/orientation3.jpeg";
import orientation4 from "../assets/orientation/orientation4.jpeg";
import orientation5 from "../assets/orientation/orientation5.jpeg";
import orientation6 from "../assets/orientation/orientation6.jpeg";

const images = [
  orientation1,
  orientation2,
  orientation3,
  orientation4,
  orientation5,
  orientation6
];



const OrientationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handlePrev = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  // Auto-play effect
  useEffect(() => {
    if (isHovered || lightboxOpen) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, lightboxOpen]);

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden" id="orientation">
      {/* Background Decorative Blurs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-50 rounded-full -translate-x-1/2 blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-50 rounded-full translate-x-1/2 blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Header Label */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 border border-green-200/60 text-green-700 text-xs font-bold rounded-full mb-6 uppercase tracking-wider shadow-sm">
            <GraduationCap size={14} className="text-green-600" />
            Field Education Partnership
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6">
            Building the Next Generation of <br />
            <span className="bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 bg-clip-text text-transparent">
              Community-Centred Social Workers
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-600 to-emerald-400 mx-auto rounded-full" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text / Info Area (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
              Mahila Vikas Samaj successfully conducted a Concurrent Fieldwork Orientation Programme for the students of Bharata Mata School of Social Work, Thrikkakara, marking the commencement of a collaborative field education initiative under the recently signed Memorandum of Understanding (MoU).
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              {/* Highlight Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4">
                  <Compass size={22} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Governance & Systems</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Introduced students to the Panchayati Raj System, LSGIs, and the practical role of social workers in community engagement.
                </p>
              </div>

              {/* Highlight Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
                  <Users size={22} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Women Entrepreneurship</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Engaging with the Women Entrepreneurship Initiative, connecting women with livelihood support through Panchayat partnership.
                </p>
              </div>

              {/* Highlight Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 bg-teal-50 text-teal-700 rounded-xl flex items-center justify-center">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Project-Based Fieldwork Model</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Rather than limiting fieldwork to observation and documentation, the model encourages students to actively participate in beneficiary identification, community engagement, Panchayat coordination, and livelihood-focused interventions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              The interactive orientation included discussions, practical examples, and case-based learning, providing students with valuable insights into grassroots social work practice.
            </p>

            <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-green-700 block mb-1">Session Facilitators</span>
                <span className="text-gray-800 font-medium text-sm">
                  <strong>Adithya R. Nair</strong> (Associate Project Coordinator) & <strong>Akshay Sunil</strong> (Internship Coordinator)
                </span>
              </div>
              <div className="text-xs text-gray-500 font-medium flex items-center gap-1.5 self-start sm:self-center shrink-0">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                Active Mentorship
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Mahila Vikas Samaj extends its sincere gratitude to the management, faculty, and students of Bharata Mata School of Social Work for their enthusiastic participation and collaboration. We look forward to mentoring the students throughout their concurrent fieldwork journey and working together to strengthen women entrepreneurship, sustainable livelihoods, and community development.
            </p>
          </div>

          {/* Right Slideshow Area (5 Columns) */}
          <div 
            className="lg:col-span-5 w-full space-y-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border-4 border-white group">
              
              {/* Slideshow Images */}
              <div className="w-full h-full relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={images[activeIndex]}
                    alt={`Orientation slide ${activeIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover cursor-zoom-in"
                    onClick={() => setLightboxOpen(true)}
                  />
                </AnimatePresence>
              </div>

              {/* Gradient overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" />

              {/* Top Bar / Counter */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                <span className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-semibold tracking-wider border border-white/10">
                  Orientation Gallery • {activeIndex + 1} of {images.length}
                </span>
                
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="bg-black/50 hover:bg-black/75 transition-colors p-2 rounded-full text-white backdrop-blur-md border border-white/10"
                  title="Expand image"
                >
                  <Maximize2 size={15} />
                </button>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handlePrev}
                  className="pointer-events-auto w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90 hover:scale-105"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="pointer-events-auto w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90 hover:scale-105"
                >
                  <ChevronRight size={20} />
                </button>
              </div>


            </div>

            {/* Slide Dots / Indicators */}
            <div className="flex justify-center items-center gap-2.5 py-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? "w-8 bg-green-600" 
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  title={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[999] flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 z-[1000] bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors text-white backdrop-blur-md border border-white/10 active:scale-95"
            >
              <X size={24} />
            </button>

            {/* Navigation - Prev */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-[1000] bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all text-white backdrop-blur-sm border border-white/10 hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Main Image Container */}
            <div className="relative w-full max-w-5xl h-full flex flex-col justify-center items-center pointer-events-none">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-h-[75vh] max-w-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[activeIndex]}
                  alt={`Orientation expanded slide ${activeIndex + 1}`}
                  className="max-h-[75vh] max-w-full rounded-2xl shadow-2xl pointer-events-auto border border-white/15 object-contain"
                />
              </motion.div>

              {/* Index Info in Lightbox */}
              <div className="mt-6 pointer-events-auto text-center max-w-2xl px-4">
                <span className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-white/70 text-xs font-semibold backdrop-blur-md border border-white/5">
                  Image {activeIndex + 1} of {images.length}
                </span>
              </div>
            </div>

            {/* Navigation - Next */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-[1000] bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all text-white backdrop-blur-sm border border-white/10 hover:scale-110 active:scale-95"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OrientationSection;
