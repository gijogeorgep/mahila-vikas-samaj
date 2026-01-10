export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

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
              <li><a href="#home" className="hover:text-green-400">Home</a></li>
              <li><a href="#about" className="hover:text-green-400">About Us</a></li>
              <li><a href="#programs" className="hover:text-green-400">Programs</a></li>
              <li><a href="#impact" className="hover:text-green-400">Impact</a></li>
              <li><a href="#gallery" className="hover:text-green-400">Gallery</a></li>
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
              <li>📍 Kerala, India</li>
              <li>📧 mahilavikassamaj@gmail.com</li>
              <li>📞 +91 9567866487</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-center">
          © {new Date().getFullYear()} Mahila Vikas Samaj. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
