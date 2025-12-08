import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

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
    <footer className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold">
              PRODOTHON <span className="text-accent">'26</span>
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              An Inter-College Festival at the Department of Production Engineering, PSG College of Technology.
            </p>
            <p className="text-accent font-semibold">LEARN • IMPACT • INNOVATE</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
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
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
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
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Department of Production Engineering<br />
                  PSG College of Technology<br />
                  Coimbatore, Tamil Nadu
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>BALAJI: +91 987654321</p>
                  <p>LAKSH: +91 987654321</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">pea.prod@psgtech.ac.in</span>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Organized By</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p><span className="font-semibold text-accent">PEA</span> - Production Engineering Association</p>
              <p><span className="font-semibold text-accent">SME</span> - Society of Manufacturing Engineers</p>
            </div>
            <Link to="/register" className="inline-block mt-4">
              <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-smooth">
                Register Now
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2026 Prodothon - PSG College of Technology. All rights reserved.</p>
          <p className="mt-1">Department of Production Engineering</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
