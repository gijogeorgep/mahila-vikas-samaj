import React from 'react';
import { ArrowRight, CheckCircle2, Globe, Users, Briefcase, GraduationCap, Heart } from 'lucide-react';

const Internship = () => {
  return (
    <div className="bg-white text-gray-900 font-sans leading-relaxed">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-4 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-wide uppercase mb-6 animate-fade-in">
              Flagship Programme
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Women Enterprise <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
                Support Initiative
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Empowering rural women entrepreneurs by bridging the gap between local government schemes and grassroots beneficiaries.
            </p>
            <a 
              href="https://forms.gle/Ft3XLFztBZGoXvKc8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-green-200 transition-all hover:scale-105 active:scale-95"
            >
              Apply for Internship <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About the Programme */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-green-600 rounded-full"></div>
                About the Programme
              </h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  Mahila Vikas Samaj is implementing a flagship initiative aimed at empowering rural women entrepreneurs. We focus on bridging the gap between local government schemes and grassroots beneficiaries.
                </p>
                <p>
                  Under this programme, eligible women from rural areas (with an annual household income below <strong>₹5 lakh</strong>) can access up to <strong>75% financial subsidy</strong> provided by the Panchayat to start or strengthen their micro-enterprises.
                </p>
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <p className="font-semibold text-green-800 italic">
                    "A key focus is supporting women in establishing small-scale enterprises such as cafeterias, cafés, and coffee shops, creating sustainable and locally viable livelihood opportunities."
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gray-100 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600" alt="Women Empowerment" className="w-full h-full object-cover" />
                </div>
                <div className="h-64 bg-green-600 rounded-2xl flex flex-col justify-end p-6 text-white">
                  <span className="text-4xl font-bold mb-2">75%</span>
                  <p className="text-sm font-medium opacity-90 text-white">Financial subsidy for micro-enterprises</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                   <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" alt="Small Cafe" className="w-full h-full object-cover" />
                </div>
                <div className="h-48 bg-gray-100 rounded-2xl overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600" alt="Coffee Shop" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Role */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Vital Role</h2>
            <p className="text-gray-600">Mahila Vikas Samaj acts as a crucial bridge between Panchayat-level policies and the community, ensuring every eligible woman gets the support she deserves.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Mobilization", desc: "Identifying and mobilizing eligible rural women and forming Self-Help Groups (SHGs).", icon: <Users className="text-green-600" /> },
              { title: "Awareness", desc: "Creating awareness about Panchayat schemes, subsidies, and financial linkages.", icon: <Globe className="text-blue-600" /> },
              { title: "Planning", desc: "Assisting in project proposal preparation, especially for café/cafeteria enterprises.", icon: <Briefcase className="text-purple-600" /> },
              { title: "Documentation", desc: "Handling end-to-end documentation, application, and follow-ups with local authorities.", icon: <CheckCircle2 className="text-orange-600" /> },
              { title: "Training", desc: "Providing structured training, skill development, and capacity-building support.", icon: <GraduationCap className="text-red-600" /> },
              { title: "Mentorship", desc: "Continuous monitoring, guidance, and mentorship for up to three years.", icon: <Heart className="text-pink-600" /> }
            ].map((skill, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-gray-600 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Focus */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-8">Why Cafeterias & Cafés?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-green-50 transition-colors">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="font-bold">Locally Adaptable</h4>
                  <p className="text-gray-600">Easy to manage with locally available resources and skills.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-green-50 transition-colors">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="font-bold">Women-Led SHGs</h4>
                  <p className="text-gray-600">Ideally suited for group management by Self-Help Groups.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-green-50 transition-colors">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="font-bold">Consistent Income</h4>
                  <p className="text-gray-600">Capable of generating steady, daily income for the participants.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
             <div className="aspect-square bg-green-100 rounded-[4rem] rotate-6 absolute inset-0"></div>
             <div className="aspect-square bg-white rounded-[4rem] relative z-10 overflow-hidden border-8 border-white shadow-2xl">
                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" alt="Cafe Culture" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* Internship & CTA */}
      <section className="py-24 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Internship Opportunity</h2>
            <p className="text-green-100 text-lg mb-12">
              Get hands-on experience in community mobilization, field visits, and understanding real-time policy implementation at the local level. Join our field-based flagship initiative and make a real impact.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16 text-left">
              {[
                "Community mobilization & SHG formation",
                "Grassroots field visits & interaction",
                "Awareness on Panchayat schemes",
                "Assisting in enterprise planning",
                "Real-time policy implementation study",
                "Exposure to grassroots governance"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <CheckCircle2 className="text-green-400" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-8 md:p-12 bg-white rounded-[3rem] text-gray-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to contribute?</h3>
              <p className="text-gray-600 mb-8">Be a part of this impactful initiative and contribute to empowering rural women through sustainable enterprises.</p>
              <a 
                href="https://forms.gle/Ft3XLFztBZGoXvKc8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold text-xl transition-all hover:scale-105"
              >
                Apply Now <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;
