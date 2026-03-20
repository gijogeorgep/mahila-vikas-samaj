import { useState, useEffect } from "react";
import { X, ArrowRight, CheckCircle2, Coffee, Users, Globe } from "lucide-react";
import bannerImg from "../assets/programme_banner.png";

export default function EnterpriseBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling 600px
      if (window.scrollY > 600 && !isClosed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClosed]);

  if (isClosed) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-md transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsClosed(true)}
      ></div>

      {/* Centered Banner Content */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[95%] max-w-5xl transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
          }`}
      >
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.2)] flex flex-col lg:flex-row relative">

          {/* Close Button */}
          <button
            onClick={() => setIsClosed(true)}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all z-20"
          >
            <X size={24} />
          </button>

          {/* Left: Image Side */}
          <div className="lg:w-2/5 relative h-48 lg:h-auto overflow-hidden">
            <img
              src={bannerImg}
              alt="Women Entrepreneurs"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10"></div>
            <div className="absolute bottom-6 left-6 right-6 lg:hidden">
              <span className="bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Flagship Initiative
              </span>
            </div>
          </div>

          {/* Right: Content Side */}
          <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col">
            <div className="hidden lg:flex items-center gap-2 mb-4">
              <span className="bg-green-100 text-green-700 text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                Flagship Programme
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500 text-xs font-medium">Mahila Vikas Samaj</span>
            </div>

            <h2 className="text-gray-900 font-extrabold text-3xl lg:text-4xl leading-tight mb-4 tracking-tight">
              Women Enterprise <br className="hidden lg:block" /> Support Initiative
            </h2>

            <p className="text-gray-600 text-base mb-8 leading-relaxed lg:max-w-md">
              Bridging the gap between government policies and grassroots beneficiaries. Empowering rural women through <span className="text-green-700 font-semibold italic">micro-enterprises like cafes & cafeterias</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                  <Coffee size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">75% Subsidy</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Financial support for small scale cafes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">SHG Support</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Mobilization & formal registration.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Real Impact</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Hands-on field experience for interns.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">End-to-End</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Assistance from proposal to loans.</p>
                </div>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://forms.gle/Ft3XLFztBZGoXvKc8"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-green-200 hover:shadow-green-300 hover:scale-[1.03] active:scale-95 transition-all text-sm lg:text-base"
              >
                Apply for Internship
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-[10px] text-gray-400 font-medium text-center sm:text-left max-w-[200px]">
                Be a part of this impactful initiative and empower rural women.
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
