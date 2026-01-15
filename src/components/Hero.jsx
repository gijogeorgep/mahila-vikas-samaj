export const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/20/b5/ca/20b5caabc0ef3bdb9a4c2b65ddc0e46b.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-sm uppercase tracking-widest text-green-300 font-semibold mb-4">
            Empowering Women • Transforming Communities
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Building Stronger Women,
            <br />
            Stronger Communities
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-xl">
            Mahila Vikas Samaj empowers women at the grassroots through
            entrepreneurship, skill development, and sustainable livelihood
            opportunities across Kerala.
          </p>

          <div className="flex flex-wrap gap-4">
       
            <a
              href="#about"
              className="border border-green-300 text-green-200 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Spacer (keeps original layout balance) */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};
