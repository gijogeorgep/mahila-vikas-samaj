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



const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img22, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21,img23, img24, img25, img26, img27, img28];

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
