import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  Play,
  Zap,
  Coffee
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Internship = () => {
  return (
    <div className="bg-white text-gray-900 font-sans leading-relaxed overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden min-h-[90vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/40 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"
        />

        <div className="max-w-7xl mx-auto px-6 relative w-full">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-widest uppercase mb-8"
            >
              <Zap size={16} /> Flagship Programme
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-extrabold text-gray-900 mb-8 leading-[1.05] tracking-tight"
            >
              Women Enterprise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700">
                Support Initiative
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl"
            >
              Empowering rural women entrepreneurs by bridging the gap between local government schemes and grassroots beneficiaries.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="https://forms.gle/Ft3XLFztBZGoXvKc8"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-green-900/20 transition-all hover:-translate-y-1 active:scale-95"
              >
                Apply for Internship
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the Programme */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-4xl font-bold mb-10 flex items-center gap-4">
                <div className="w-2 h-10 bg-green-600 rounded-full"></div>
                About the Programme
              </h2>
              <div className="space-y-8 text-gray-600 text-xl leading-relaxed">
                <p>
                  Mahila Vikas Samaj is implementing a flagship initiative aimed at empowering rural women entrepreneurs. We focus on bridging the gap between local government schemes and grassroots beneficiaries.
                </p>
                <p>
                  Under this programme, eligible women from rural areas (with an annual household income below <strong>₹5 lakh</strong>) can access up to <strong>75% financial subsidy</strong> provided by the Panchayat to start or strengthen their micro-enterprises.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-green-50/80 backdrop-blur-sm p-8 rounded-[2rem] border border-green-100 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Coffee size={100} />
                  </div>
                  <p className="font-bold text-green-900 italic text-xl relative z-10 leading-relaxed">
                    "A key focus is supporting women in establishing small-scale enterprises such as cafeterias, cafés, and coffee shops, creating sustainable and locally viable livelihood opportunities."
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <motion.div
                  variants={fadeIn}
                  whileHover={{ y: -10 }}
                  className="h-64 bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-xl"
                >
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600" alt="Women Empowerment" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  whileHover={{ y: -10 }}
                  className="h-80 bg-green-600 rounded-[2.5rem] flex flex-col justify-end p-10 text-white shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                  <span className="text-6xl font-black mb-4">75%</span>
                  <p className="text-lg font-bold opacity-90 leading-tight">Financial subsidy for <br /> micro-enterprises</p>
                </motion.div>
              </div>
              <div className="space-y-6 pt-12">
                <motion.div
                  variants={fadeIn}
                  whileHover={{ y: -10 }}
                  className="h-80 bg-emerald-700 rounded-[2.5rem] overflow-hidden shadow-xl relative"
                >
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" alt="Small Cafe" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white font-bold">Local Enterprises</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  whileHover={{ y: -10 }}
                  className="h-64 bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-xl"
                >
                  <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600" alt="Coffee Shop" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Highlight Section */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row min-h-[500px]"
          >
            <div className="lg:w-3/5 relative aspect-video lg:aspect-auto group">
              <video
                controls
                className="w-full h-full object-cover"
                preload="metadata"
              >
                <source src="/video_internship.MOV#t=0.1" type="video/quicktime" />
                <source src="/video_internship.MOV#t=0.1" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="lg:w-2/5 p-16 flex flex-col justify-center bg-white relative">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Play size={150} />
              </div>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-green-600 font-bold tracking-[0.2em] uppercase text-sm mb-6 block"
              >
                Programme Highlight
              </motion.span>
              <h2 className="text-4xl font-extrabold mb-8 text-gray-900 leading-tight">
                Our Flagship Internship in Action
              </h2>
              <p className="text-gray-600 text-xl mb-10 leading-relaxed">
                Watch how our interns engage with the community and help realize the dream of women-led enterprises at the grassroots level.
              </p>
              <div className="flex items-center gap-5 text-green-700 font-bold text-lg group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center shadow-lg shadow-green-900/5 transition-all"
                >
                  <Play size={24} fill="currentColor" />
                </motion.div>
                <span className="group-hover:underline transition-all">Experience the Impact</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Role */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Our Vital Role</h2>
            <div className="w-20 h-1.5 bg-green-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 leading-relaxed">
              Mahila Vikas Samaj acts as a crucial bridge between Panchayat-level policies and the community, ensuring every eligible woman gets the support she deserves.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Mobilization", desc: "Identifying and mobilizing eligible rural women and forming Self-Help Groups (SHGs).", icon: <Users className="text-green-600" />, color: "bg-green-50" },
              { title: "Awareness", desc: "Creating awareness about Panchayat schemes, subsidies, and financial linkages.", icon: <Globe className="text-blue-600" />, color: "bg-blue-50" },
              { title: "Planning", desc: "Assisting in project proposal preparation, especially for café/cafeteria enterprises.", icon: <Briefcase className="text-purple-600" />, color: "bg-purple-50" },
              { title: "Documentation", desc: "Handling end-to-end documentation, application, and follow-ups with local authorities.", icon: <CheckCircle2 className="text-orange-600" />, color: "bg-orange-50" },
              { title: "Training", desc: "Providing structured training, skill development, and capacity-building support.", icon: <GraduationCap className="text-red-600" />, color: "bg-red-50" },
              { title: "Mentorship", desc: "Continuous monitoring, guidance, and mentorship for up to three years.", icon: <Heart className="text-pink-600" />, color: "bg-pink-50" }
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-2xl ${skill.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-700 transition-colors">{skill.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{skill.desc}</p>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enterprise Focus */}
      <section className="py-32 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 items-center gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight leading-tight">
              Why Cafeterias & <br />
              <span className="text-green-700">Cafés?</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Locally Adaptable", desc: "Easy to manage with locally available resources and skills." },
                { title: "Women-Led SHGs", desc: "Ideally suited for group management by Self-Help Groups." },
                { title: "Consistent Income", desc: "Capable of generating steady, daily income for the participants." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-6 p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xl mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-lg">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-green-200/50 rounded-[5rem] rotate-12 absolute inset-0 -translate-x-4 -translate-y-4 blur-2xl"></div>
            <div className="aspect-square bg-white rounded-[5rem] relative z-10 overflow-hidden border-[12px] border-white shadow-2xl group">
              <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" alt="Cafe Culture" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internship & CTA */}
      <section className="py-32 bg-green-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-800 rounded-full -mr-96 -mt-96 blur-[150px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-800 rounded-full -ml-72 -mb-72 blur-[150px] opacity-50" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black mb-10 tracking-tight"
            >
              Internship Opportunity
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-green-100 text-xl md:text-2xl mb-16 leading-relaxed opacity-90"
            >
              Get hands-on experience in community mobilization, field visits, and understanding real-time policy implementation at the local level. Join our field-based flagship initiative and make a real impact.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-6 mb-20 text-left"
            >
              {[
                "Community mobilization & SHG formation",
                "Grassroots field visits & interaction",
                "Awareness on Panchayat schemes",
                "Assisting in enterprise planning",
                "Real-time policy implementation study",
                "Exposure to grassroots governance"
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  className="flex items-center gap-4 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-lg">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 md:p-20 bg-white rounded-[4rem] text-gray-900 shadow-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl -mr-16 -mt-16" />
              <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Ready to contribute?</h3>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Be a part of this impactful initiative and contribute to empowering rural women through sustainable enterprises.</p>
              <a
                href="https://forms.gle/Ft3XLFztBZGoXvKc8"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-full font-bold text-2xl transition-all hover:scale-105 shadow-2xl shadow-green-900/20"
              >
                Apply Now
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight size={28} />
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;

