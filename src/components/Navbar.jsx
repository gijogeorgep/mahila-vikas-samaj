import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_mahila_vikas.png";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Programs", link: "/#programs" },
    { name: "Gallery", link: "/#gallery" },
    { name: "Internship", link: "/internship" },
  ];

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <img
            src={logo}
            alt="Mahila Vikas Samaj Logo"
            className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <div className="leading-tight">
            <h1 className="text-2xl font-bold text-gray-900 tracking-wide">
              Mahila Vikas Samaj
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Empowering Women • Transforming Communities
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-gray-700 font-medium hover:text-green-700 transition-all duration-200 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* CTA */}
          <Link
            to="/donate"
            className="ml-2 inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            <Heart size={16} fill="currentColor" />
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-green-700 transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          mobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute left-0 top-0 h-screen w-[82vw] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Mahila Vikas Samaj Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <p className="font-bold text-gray-900 leading-tight">
                  Mahila Vikas Samaj
                </p>
                <p className="text-xs text-gray-500">Menu</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full p-2 text-gray-700 hover:bg-gray-100 hover:text-green-700 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-6 py-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-gray-700 font-semibold hover:bg-green-50 hover:text-green-700 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transition-all mt-4"
            >
              <Heart size={18} fill="currentColor" />
              Donate
            </Link>
          </div>
        </aside>
      </div>

    </nav>
  );
};

export default Navbar;

