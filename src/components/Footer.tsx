import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Accommodation", path: "/accommodation" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold">
              PRODOTHON <span className="text-emerald-300">'26</span>
            </h3>
            <p className="text-white/80 text-sm">
              An inter-college festival by the Department of Production
              Engineering, PSG College of Technology.
            </p>
            <p className="text-emerald-300 font-semibold text-sm tracking-wider">
              LEARN • IMPACT • INNOVATE
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/pea_sme?igsh=Y3dvNHRzMzd2d2l5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-emerald-400 hover:text-slate-900 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/pea-sme-psg-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-emerald-400 hover:text-slate-900 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-emerald-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Department of Production Engineering
                  <br />
                  PSG College of Technology
                  <br />
                  Coimbatore, Tamil Nadu
                </span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <Phone className="h-5 w-5 text-emerald-300 flex-shrink-0" />
                <div className="text-white/80">
                  <a
                    href="tel:+918838892817"
                    className="block hover:text-emerald-300 transition-colors"
                  >
                    Balaji C: +91 8838892817
                  </a>
                  <a
                    href="tel:+919843306391"
                    className="block hover:text-emerald-300 transition-colors"
                  >
                    Lakshman Raghav V G: +91 98433 06391
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-emerald-300 flex-shrink-0" />
                <span className="text-white/80">prodothon@psgtech.ac.in</span>
              </div>
            </div>
          </div>

          {/* Organized By */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Organized By</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>
                <span className="font-semibold text-emerald-300">PEA</span>
                <br />
                Production Engineering Association
              </p>
              <p>
                <span className="font-semibold text-emerald-300">SME</span>
                <br />
                Society of Manufacturing Engineers - Students' Chapter
              </p>
            </div>
            <Link to="/register" className="inline-block mt-4">
              <button className="bg-emerald-400 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-300 transition-colors text-sm shadow-md">
                Register Now
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-8 border-top border-white/10 text-center text-xs sm:text-sm text-white/70 space-y-2">
          <p>
            &copy; 2026 Prodothon - PSG College of Technology. All rights
            reserved.
          </p>
          <p>Department of Production Engineering</p>

          {/* Designed by */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 pt-2">
            <span className="text-white/60">Designed &amp; developed by</span>
            <span className="font-semibold text-emerald-300 text-center">
              Sathish P (Final Year BE Production Engineering)
            </span>
          </div>

          {/* Copyright / legal */}
          <div className="pt-2 space-y-1">
            <p className="text-white/60">
              Unauthorized reproduction or distribution of any content is strictly prohibited.
            </p>
            <p className="text-white/60">
              For permissions or queries, contact{" "}
              <a
                href="mailto:prodothon@psgtech.ac.in"
                className="underline underline-offset-2 hover:text-emerald-300 transition-colors"
              >
                prodothon@psgtech.ac.in
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
