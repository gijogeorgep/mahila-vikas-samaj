import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin } from "lucide-react";

// Import tribal awareness images
import tribe1 from "../assets/tribe/tribe1.jpeg";
import tribe2 from "../assets/tribe/tribe2.jpeg";

const TribeAwarenessSection = () => {
  return (
    <section className="py-24 bg-emerald-950 text-white relative overflow-hidden" id="tribal-outreach">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/40 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-900/30 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none"></div>
      
      {/* Subtle lines grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Box (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/60 border border-emerald-800/80 rounded-full text-xs font-bold uppercase tracking-wider text-green-300">
              <Sparkles size={12} className="text-green-400" />
              Tribal Outreach
            </div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white font-montserrat">
              Awareness Session on Panchayat Schemes
            </h3>
            
            <div className="w-16 h-1 bg-green-500 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-green-50 font-medium leading-relaxed tracking-wide font-montserrat pt-2">
              Awareness session on Panchayat schemes for tribal NHGs at Mullankolli Grama Panchayat, Wayanad District.
            </p>

            <div className="flex items-center gap-2.5 text-green-300 text-sm font-semibold pt-4">
              <MapPin size={18} className="text-green-400 shrink-0" />
              <span>Mullankolli Panchayat, Wayanad</span>
            </div>
          </div>

          {/* Right Photos (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-4 lg:pt-0">
            {/* Image 1 - Staggered Left */}
            <motion.div 
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: 0, transition: { duration: 0.3 } }}
              className="bg-white p-3 rounded-[1.5rem] shadow-2xl relative overflow-hidden border border-gray-100 cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-[1rem] overflow-hidden bg-gray-100">
                <img 
                  src={tribe1} 
                  alt="Tribal NHG Awareness Session Mullankolli 1" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">Mullankolli Session • 01</span>
              </div>
            </motion.div>

            {/* Image 2 - Staggered Right */}
            <motion.div 
              initial={{ opacity: 0, y: 40, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: 0, transition: { duration: 0.3 } }}
              className="bg-white p-3 rounded-[1.5rem] shadow-2xl relative overflow-hidden border border-gray-100 cursor-pointer sm:translate-y-8"
            >
              <div className="aspect-[4/3] rounded-[1rem] overflow-hidden bg-gray-100">
                <img 
                  src={tribe2} 
                  alt="Tribal NHG Awareness Session Mullankolli 2" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">Mullankolli Session • 02</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TribeAwarenessSection;
