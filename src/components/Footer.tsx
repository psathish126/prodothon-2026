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
    <footer className="bg-gradient-to-b from-[#1a252f] via-slate-950 to-[#0b141c] text-slate-50 border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-8 py-10 sm:py-12 md:py-14">
        {/* Top sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12 footer-section pb-8 md:pb-10 border-b border-white/10">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="font-heading text-2xl sm:text-[1.7rem] font-extrabold tracking-tight">
              PRODOTHON <span className="text-emerald-300">'26</span>
            </h3>
            <p className="text-slate-200/85 text-xs sm:text-sm leading-relaxed">
              An inter-college festival by the Department of Production
              Engineering, PSG College of Technology.
            </p>
            <p className="text-emerald-300 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase">
              Learn • Impact • Innovate
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/pea_sme?igsh=Y3dvNHRzMzd2d2l5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/8 hover:bg-emerald-400 hover:text-slate-900 transition-colors shadow-sm"
                aria-label="Prodothon Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/pea-sme-psg-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/8 hover:bg-emerald-400 hover:text-slate-900 transition-colors shadow-sm"
                aria-label="Prodothon LinkedIn"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-base sm:text-lg font-semibold text-emerald-300">
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-200/80 hover:text-emerald-300 text-xs sm:text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span className="h-[3px] w-[3px] rounded-full bg-slate-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-heading text-base sm:text-lg font-semibold text-emerald-300">
              Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-200/85">
              <div className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-emerald-300 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Department of Production Engineering
                  <br />
                  PSG College of Technology
                  <br />
                  Coimbatore, Tamil Nadu
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-4.5 w-4.5 text-emerald-300 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
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

              <div className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-emerald-300 flex-shrink-0" />
                <a
                  href="mailto:prodothon@psgtech.ac.in"
                  className="hover:text-emerald-300 transition-colors break-all"
                >
                  prodothon@psgtech.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Organized By */}
          <div className="space-y-3">
            <h4 className="font-heading text-base sm:text-lg font-semibold text-emerald-300">
              Organized By
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-200/85 leading-relaxed">
              <p>
                <span className="font-semibold text-emerald-300">PEA</span>
                <br />
                Production Engineering Association
              </p>
              <p>
                <span className="font-semibold text-emerald-300">SME</span>
                <br />
                Society of Manufacturing Engineers – Students&apos; Chapter
              </p>
            </div>
            <Link to="/register" className="inline-block pt-1.5">
              <button className="bg-emerald-400 text-slate-900 px-5 py-2 rounded-full font-semibold hover:bg-emerald-300 transition-colors text-xs sm:text-sm shadow-md">
                Register Now
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="footer-bottom mt-6 sm:mt-8 pt-5 sm:pt-6 text-center text-[11px] sm:text-xs md:text-sm text-slate-300/80 space-y-2 border-t border-white/10">
          <div className="space-y-0.5">
            <p>
              &copy; 2026 Prodothon – PSG College of Technology. All rights
              reserved.
            </p>
            <p className="text-slate-300/70">
              Department of Production Engineering
            </p>
          </div>

          {/* Designed by */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 pt-1">
            <span className="text-slate-300/65">
              Designed &amp; developed by
            </span>
            <span className="font-semibold text-emerald-300">
              Sathish P (Final Year BE Production Engineering)
            </span>
          </div>

          {/* Legal / permissions */}
          <div className="pt-2 space-y-1 max-w-3xl mx-auto">
            <p className="text-slate-300/65 leading-relaxed">
              Unauthorized reproduction or distribution of any content is
              strictly prohibited.
            </p>
            <p className="text-slate-300/65 leading-relaxed">
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
