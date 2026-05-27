import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      title: "Empowering Rural Communities",
      src: "/video1.mp4",
      poster: "/video1_poster.png",
      description: "Witness the impact of our grassroots initiatives in rural Kerala.",
      type: "video/mp4"
    },
    {
      title: "Women Entrepreneurship in Action",
      src: "/video2.mp4",
      poster: "/video2_poster.png",
      description: "How Mahila Vikas Samaj is transforming lives through local enterprises.",
      type: "video/mp4"
    },
    {
      title: "Our Flagship Internship Programme",
      src: "/video_internship.MOV",
      poster: null,
      description: "See our interns in action — bridging the gap between Panchayat schemes and rural women entrepreneurs.",
      type: "video/quicktime"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-green-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Impact Stories</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Impact in Motion</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            See firsthand how our programs are making a difference in the lives of women across the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <div key={index} className="group relative">
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-[1.02] bg-gray-900">
                <video 
                  controls 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  poster={video.poster || undefined}
                  preload="metadata"
                >
                  <source src={video.src} type={video.type} />
                  {video.type === "video/quicktime" && (
                    <source src={video.src} type="video/mp4" />
                  )}
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay that disappears on hover or play */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform group-hover:scale-110 transition-transform duration-500">
                    <Play className="text-white fill-white" size={32} />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 px-4">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
