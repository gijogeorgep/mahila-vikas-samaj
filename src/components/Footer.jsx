import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Mahila Vikas Samaj
            </h3>
            <p className="text-sm leading-relaxed">
              Empowering women through grassroots entrepreneurship, skill
              development and community-driven initiatives across Kerala.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-green-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-400">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-green-400">Programs</Link></li>
              <li><Link to="/impact" className="hover:text-green-400">Impact</Link></li>
              <li><Link to="/join" className="hover:text-green-400">Join Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Work
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Women Entrepreneurship</li>
              <li>Skill Development</li>
              <li>Micro Enterprises</li>
              <li>SHG Support</li>
              <li>Community Livelihoods</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                📍 Kerala, India
              </li>
              <li>
                📧 info@mahilavikassamaj.org
              </li>
              <li>
                📞 +91 9XXXXXXXXX
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>
            © {new Date().getFullYear()} Mahila Vikas Samaj. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed with ❤️ for women empowerment
          </p>
        </div>

      </div>
    </footer>
  );
}
