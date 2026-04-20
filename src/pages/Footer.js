import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#061018] border-t border-cyan-400/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-gray-400">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            GhostPanda 🐼
          </h2>
          <p className="text-sm">
            Futuristic Resume Intelligence platform that helps you
            optimize resumes, improve ATS score and land better jobs 🚀
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-cyan-400 transition">
                Home
              </Link>
            </li>
            <li>
            <Link to="/analyze" className="hover:text-cyan-400 transition">
              Analyze Resume
            </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-cyan-400 transition">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>

          <p className="text-sm">
            Email:
          </p>

          <a
            href="mailto:ghostpanda.ai@gmail.com"
            className="text-cyan-400 hover:underline text-sm"
          >
            ghostpanda.ai@gmail.com
          </a>

          <p className="text-xs mt-4 text-gray-500">
            We usually reply within 24 hours.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-cyan-400/10 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} GhostPanda. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;