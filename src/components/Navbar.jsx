import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Programs", link: "#programs" },
    { name: "Gallery", link: "#gallery" },
    { name: "Impact", link: "#impact" },
  ];

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-4 group">
          <img
            src="logo_mahila_vikas.png"
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
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-gray-700 font-medium hover:text-green-700 transition-all duration-200 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}

          {/* CTA */}
          <a
            href="#join"
            className="ml-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            Join Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-green-700 transition-colors"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-slide-down">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 font-medium hover:text-green-700 transition-colors py-2"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#join"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transition-all mt-4"
            >
              Join Us
            </a>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}
