import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  // Ensure page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50/30 pt-8 pb-12">
      {/* Navigation Header */}
      <div className="max-w-7xl mx-auto px-6 mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-green-700 bg-white border border-green-200/80 hover:bg-green-50/80 hover:border-green-300 shadow-sm hover:shadow px-6 py-3 rounded-full text-sm font-extrabold active:scale-95 transition-all"
        >
          <ChevronLeft size={16} className="stroke-[3]" />
          Back to Home
        </Link>
      </div>
      
      {/* Full Gallery Content */}
      <Gallery preview={false} />
    </main>
  );
};

export default GalleryPage;
