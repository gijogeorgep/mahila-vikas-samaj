import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  BookOpen,
  Users,
  TrendingUp,
  Coins,
  UserPlus,
  ArrowRight
} from "lucide-react";

const programs = [
  {
    title: "Women Entrepreneurship",
    desc: "Supporting women to start and sustain small businesses through training, mentorship, and access to resources.",
    icon: <Briefcase className="text-green-600" size={28} />,
    color: "bg-green-50"
  },
  {
    title: "Skill Development",
    desc: "Providing vocational and technical skills to improve employability and income generation.",
    icon: <BookOpen className="text-emerald-600" size={28} />,
    color: "bg-emerald-50"
  },
  {
    title: "Self Help Groups",
    desc: "Strengthening women-led SHGs to promote savings, financial inclusion, and collective growth.",
    icon: <Users className="text-teal-600" size={28} />,
    color: "bg-teal-50"
  },
  {
    title: "Livelihood Support",
    desc: "Enabling sustainable livelihoods through local enterprises and community-based initiatives.",
    icon: <TrendingUp className="text-cyan-600" size={28} />,
    color: "bg-cyan-50"
  },
  {
    title: "Financial Literacy",
    desc: "Educating women on savings, credit management, and government welfare schemes.",
    icon: <Coins className="text-green-700" size={28} />,
    color: "bg-green-50"
  },
  {
    title: "Leadership Development",
    desc: "Building confidence and leadership skills for active participation in governance and society.",
    icon: <UserPlus className="text-emerald-700" size={28} />,
    color: "bg-emerald-50"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const Programs = () => {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-sm font-bold rounded-full mb-6 uppercase tracking-widest">
            Our Initiatives
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Empowering Women at the Grassroots
          </h2>
          <div className="w-20 h-1.5 bg-green-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Our initiatives focus on creating sustainable opportunities for women
            through education, entrepreneurship, and community support.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50 relative overflow-hidden"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {item.desc}
              </p>

              <div className="flex items-center gap-2 text-green-700 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                <span>Learn More</span>
                <ArrowRight size={18} />
              </div>

              {/* Decorative background number */}
              <span className="absolute -bottom-4 -right-2 text-8xl font-black text-gray-100/50 pointer-events-none group-hover:text-green-500/10 transition-colors">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Programs;


