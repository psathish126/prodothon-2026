import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Workshops", path: "/workshops" },
    { name: "Gallery", path: "/gallery" },
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
              Prodothon <span className="text-accent">2026</span>
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              PSG College of Technology's premier technical fest celebrating innovation, creativity, and excellence in engineering.
            </p>
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
                  PSG College of Technology<br />
                  Coimbatore, Tamil Nadu 641004
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">prodothon@psgtech.edu</span>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Our Partners</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p><span className="font-semibold">Presented by:</span> PEA</p>
              <p><span className="font-semibold">In partnership with:</span> SME</p>
              <p><span className="font-semibold">Supported by:</span> PSG Tech</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2026 Prodothon - PSG College of Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
