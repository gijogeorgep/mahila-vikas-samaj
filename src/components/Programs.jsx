import React from "react";

const programs = [
  {
    title: "Women Entrepreneurship",
    desc: "Supporting women to start and sustain small businesses through training, mentorship, and access to resources.",
    icon: "💼",
  },
  {
    title: "Skill Development",
    desc: "Providing vocational and technical skills to improve employability and income generation.",
    icon: "🧵",
  },
  {
    title: "Self Help Groups",
    desc: "Strengthening women-led SHGs to promote savings, financial inclusion, and collective growth.",
    icon: "👩‍👩‍👧",
  },
  {
    title: "Livelihood Support",
    desc: "Enabling sustainable livelihoods through local enterprises and community-based initiatives.",
    icon: "🌱",
  },
  {
    title: "Financial Literacy",
    desc: "Educating women on savings, credit management, and government welfare schemes.",
    icon: "📊",
  },
  {
    title: "Leadership Development",
    desc: "Building confidence and leadership skills for active participation in governance and society.",
    icon: "⭐",
  },
];

export default function Programs() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-wide text-green-700 font-semibold mb-3">
            Our Programs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empowering Women at the Grassroots
          </h2>
          <p className="text-gray-600">
            Our initiatives focus on creating sustainable opportunities for women
            through education, entrepreneurship, and community support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8faf9] rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-100"
            >
              <div className="text-4xl mb-5">{item.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
