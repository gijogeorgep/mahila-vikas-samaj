import { useState } from "react";

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

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-primary text-center mb-4">
        Our Gallery
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-10">
        Moments from grassroots women entrepreneurship initiatives,
        inaugurations, and community-led enterprises across Kerala.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImg(img)}
            className="cursor-pointer overflow-hidden rounded-lg shadow group relative"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"></div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Full View"
            className="max-w-[90%] max-h-[90%] rounded shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
