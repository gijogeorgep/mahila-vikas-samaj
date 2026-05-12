import React from "react";
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react";
import img22 from "../assets/img22.jpeg";
import newscutting from "../assets/newscuttings.jpeg";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  return (
    <section className="bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 tracking-tight">
            Mahila Vikas Samaj
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-700 font-medium">
            Empowering Women. Transforming Communities.
          </p>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
          className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 group-hover:bg-green-100 transition-colors duration-700" />

          <h3 className="text-3xl font-bold text-green-800 mb-8 relative">
            About Us
          </h3>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg relative">
            <p>
              <span className="font-bold text-green-700">
                Mahila Vikas Samaj
              </span>{" "}
              is a grassroots non-profit organization committed to strengthening
              the economic and social position of women across rural and semi-rural
              regions of Kerala. We believe that true empowerment begins when
              women gain control over their livelihoods, decisions, and futures.
            </p>

            <p>
              Our organization was founded with the vision of enabling women to
              move beyond dependency and become confident contributors to their
              families and communities. By focusing on entrepreneurship,
              skill-building, and collective action, we help women unlock their
              potential and turn local resources into sustainable opportunities.
            </p>

            <p>
              Working in close collaboration with Local Self-Governments,
              Panchayats, Kudumbashree networks, and community institutions, we
              ensure that development initiatives are inclusive, locally relevant,
              and long-lasting. Our approach bridges the gap between policy,
              opportunity, and grassroots realities.
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeInVariant}
            className="bg-white rounded-3xl p-10 shadow-lg shadow-gray-200/50 border-t-4 border-green-600 hover:shadow-2xl transition-shadow duration-500"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm">01</span>
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              To build an equitable society where every woman, regardless of
              socio-economic background, has the opportunity, confidence, and
              resources to achieve economic independence and live with dignity.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInVariant}
            className="bg-white rounded-3xl p-10 shadow-lg shadow-gray-200/50 border-t-4 border-emerald-600 hover:shadow-2xl transition-shadow duration-500"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm">02</span>
              Our Mission
            </h3>
            <ul className="space-y-4 text-gray-700">
              {[
                "Promote grassroots women entrepreneurship across Kerala",
                "Provide practical skill development and enterprise training",
                "Support women in accessing subsidies, schemes, and resources",
                "Encourage collective and community-led enterprises",
                "Enable women to become economically self-reliant leaders",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 mt-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  </span>
                  <span className="text-gray-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Media Showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeInVariant}
            whileHover={{ y: -10 }}
            className="group rounded-[2rem] overflow-hidden shadow-2xl bg-white"
          >
            <img
              src={img22}
              alt="Mahila Vikas Samaj activity"
              className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="p-6 bg-white border-t border-gray-100">
              <p className="text-green-800 font-bold">Community Engagement</p>
              <p className="text-gray-500 text-sm">Empowering grassroots initiatives</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInVariant}
            whileHover={{ y: -10 }}
            className="group rounded-[2rem] overflow-hidden shadow-2xl bg-white flex flex-col"
          >
            <div className="flex-grow p-8 flex items-center justify-center bg-gray-50">
              <img
                src={newscutting}
                alt="News coverage"
                className="max-w-full max-h-[300px] object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 bg-white border-t border-gray-100">
              <p className="text-green-800 font-bold">Media Coverage</p>
              <p className="text-gray-500 text-sm">Recognized for our impact</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Flagship Program */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="bg-gradient-to-br from-green-800 to-emerald-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-green-900/20"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -mr-64 -mt-64" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight max-w-2xl">
              Flagship Program: Grassroots Women Entrepreneurship Initiative
            </h3>

            <p className="text-green-100/80 max-w-3xl mb-12 text-lg leading-relaxed">
              Our flagship initiative focuses on identifying, nurturing, and
              supporting women entrepreneurs at the village level. Through
              structured training, financial access, and continuous mentoring, we
              help women transform ideas into sustainable enterprises.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Skill Development & Practical Training",
                "Subsidy & Scheme Linked Business Support",
                "Enterprise Incubation & Handholding",
                "Women-Led Community Enterprises",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-colors"
                >
                  <h4 className="font-bold text-white/90">{item}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Impact Summary */}
        <motion.div
          id="impact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="bg-white rounded-[2.5rem] p-12 md:p-16 shadow-xl shadow-gray-200/50 border border-gray-100 scroll-mt-20"
        >
          <h3 className="text-3xl font-bold text-green-800 mb-10">
            Our Impact
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Women trained in entrepreneurship and livelihood skills",
              "Village-level micro-units successfully established",
              "Increased and diversified household incomes",
              "Strengthened women-led community networks",
              "Improved financial literacy and digital inclusion",
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-green-50 transition-colors">
                <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                  <ChevronRight size={14} className="text-white" />
                </div>
                <span className="text-gray-700 text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

