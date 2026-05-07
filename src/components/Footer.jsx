import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Mahila Vikas Samaj
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Empowering women through grassroots entrepreneurship, skill
              development and community-driven initiatives across Kerala.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1CqiAa4CY2/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-lg group">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-5 h-5 invert group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/mahilavikassamaj?igsh=MXExazhlbXM0Y2hzdw==" target=" _blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 transition-all duration-300 shadow-lg group">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-5 h-5 invert group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/company/mahila-vikas-samaj/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg group">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-5 h-5 invert group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://wa.me/9567866487?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Mahila%20Vikas%20Samaj%20and%20its%20initiatives." target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-all duration-300 shadow-lg group">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-5 h-5 invert group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#programs" className="hover:text-green-400 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/#impact" className="hover:text-green-400 transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link to="/#gallery" className="hover:text-green-400 transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Work</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-green-400 cursor-pointer transition-colors">Women Entrepreneurship</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Skill Development</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Micro Enterprises</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">SHG Support</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Community Livelihoods</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span>
                  Bld No 21/396 D near Mission School, Thripunithara, Ernakulam,
                  Kerala
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:mahilavikassamaj@gmail.com" className="hover:text-green-400 transition-colors">
                  mahilavikassamaj@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+919567866487" className="hover:text-green-400 transition-colors">
                  +91 9567866487
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Mahila Vikas Samaj. All rights reserved.
        </div>
      </div>
    </footer >
  );
};

export default Footer;
