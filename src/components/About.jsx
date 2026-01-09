export default function About() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Mahila Vikas Samaj
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Empowering Women. Transforming Communities.
          </p>
        </div>

        {/* About */}
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm">
          <h3 className="text-3xl font-semibold text-green-800 mb-6">
            About Us
          </h3>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            <span className="font-semibold text-green-700">
              Mahila Vikas Samaj
            </span>{" "}
            is a non-profit organization dedicated to empowering women through
            sustainable, community-based entrepreneurship across the villages
            of Kerala. Founded with the belief that economic independence is the
            foundation of true empowerment, we create opportunities for women to
            learn, grow, and lead with confidence.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            We work closely with Local Self-Governments, Panchayats, and community
            networks to bridge the gap between opportunity and access—ensuring
            women from rural and semi-rural regions build secure, dignified
            livelihoods.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl p-10 shadow-sm border-l-4 border-green-600">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To build a society where every woman has the opportunities,
              resources, and confidence to achieve economic independence and
              contribute meaningfully to her family, community, and the nation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border-l-4 border-green-600">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Our Mission
            </h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "Promote grassroots women entrepreneurship across Kerala",
                "Provide accessible skill development and micro-enterprise support",
                "Create sustainable livelihood models with local governments",
                "Enable women to become self-reliant entrepreneurs",
                "Build a supportive entrepreneurial ecosystem for women",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-green-600 font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-3xl p-12 shadow-sm">
          <h3 className="text-3xl font-semibold text-green-800 mb-10 text-center">
            Our Core Values
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Inclusivity", "Every woman deserves equal opportunity"],
              ["Sustainability", "Livelihood models built to last"],
              ["Community Partnership", "Change through collective action"],
              ["Dignity & Respect", "Women’s voices matter"],
              ["Transparency", "Ethical and responsible operations"],
            ].map(([title, desc], i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-green-700 mb-2">{title}</h4>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Flagship Program */}
        <div className="bg-green-700 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-semibold mb-6">
            Flagship Program: Grassroots Women Entrepreneurship Initiative
          </h3>

          <p className="text-green-100 max-w-3xl mb-10">
            Our flagship initiative nurtures women entrepreneurs across rural
            Kerala through structured training, subsidy support, and continuous
            handholding.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Skill Development & Training",
              "Subsidy-Linked Entrepreneurship Support",
              "Enterprise Incubation & Handholding",
              "Women-Led Community Enterprises",
            ].map((item, i) => (
              <div key={i} className="bg-green-800 rounded-2xl p-6">
                <h4 className="font-semibold">{item}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="bg-white rounded-3xl p-12 shadow-sm">
          <h3 className="text-3xl font-semibold text-green-800 mb-6">
            Our Impact
          </h3>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
            {[
              "Women trained in enterprise development",
              "Micro-units established across villages",
              "Increased household incomes",
              "Stronger women-led community networks",
              "Improved financial literacy & digital inclusion",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-green-600 font-bold">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-green-800 mb-4">
            Join Us
          </h3>
          <p className="text-gray-700 mb-8">
            Together, we can build a future where every woman in Kerala stands
            strong, independent, and empowered.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition">
              Partner With Us
            </button>
            <button className="border border-green-700 text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
              Volunteer
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
