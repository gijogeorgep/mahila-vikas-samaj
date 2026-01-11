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
            is a grassroots non-profit organization committed to strengthening
            the economic and social position of women across rural and semi-rural
            regions of Kerala. We believe that true empowerment begins when
            women gain control over their livelihoods, decisions, and futures.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Our organization was founded with the vision of enabling women to
            move beyond dependency and become confident contributors to their
            families and communities. By focusing on entrepreneurship,
            skill-building, and collective action, we help women unlock their
            potential and turn local resources into sustainable opportunities.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Working in close collaboration with Local Self-Governments,
            Panchayats, Kudumbashree networks, and community institutions, we
            ensure that development initiatives are inclusive, locally relevant,
            and long-lasting. Our approach bridges the gap between policy,
            opportunity, and grassroots realities.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl p-10 shadow-sm border-l-4 border-green-600">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To build an equitable society where every woman, regardless of
              socio-economic background, has the opportunity, confidence, and
              resources to achieve economic independence and live with dignity.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border-l-4 border-green-600">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Our Mission
            </h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "Promote grassroots women entrepreneurship across Kerala",
                "Provide practical skill development and enterprise training",
                "Support women in accessing subsidies, schemes, and resources",
                "Encourage collective and community-led enterprises",
                "Enable women to become economically self-reliant leaders",
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
              ["Inclusivity", "Ensuring equal opportunity for every woman"],
              ["Sustainability", "Building livelihood models that endure"],
              ["Community Partnership", "Progress through collective effort"],
              ["Dignity & Respect", "Upholding women’s voices and choices"],
              ["Transparency", "Ethical, accountable, and responsible action"],
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
            Our flagship initiative focuses on identifying, nurturing, and
            supporting women entrepreneurs at the village level. Through
            structured training, financial access, and continuous mentoring, we
            help women transform ideas into sustainable enterprises.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Skill Development & Practical Training",
              "Subsidy & Scheme Linked Business Support",
              "Enterprise Incubation & Handholding",
              "Women-Led Community Enterprises",
            ].map((item, i) => (
              <div key={i} className="bg-green-800 rounded-2xl p-6">
                <h4 className="font-semibold">{item}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Summary */}
        <div className="bg-white rounded-3xl p-12 shadow-sm">
          <h3 className="text-3xl font-semibold text-green-800 mb-6">
            Our Impact
          </h3>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
            {[
              "Women trained in entrepreneurship and livelihood skills",
              "Village-level micro-units successfully established",
              "Increased and diversified household incomes",
              "Strengthened women-led community networks",
              "Improved financial literacy and digital inclusion",
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
            Together, we can create pathways for women to lead, earn, and thrive
            — strengthening families, communities, and the future of Kerala.
          </p>

          {/* <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition">
              Partner With Us
            </button>
            <button className="border border-green-700 text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
              Volunteer
            </button>
          </div> */}
        </div>

      </div>
    </section>
  );
}
