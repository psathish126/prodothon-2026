import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Workshops", path: "/workshops" },
    { name: "Accommodation", path: "/accommodation" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-heading text-2xl font-bold text-primary">
              Prodothon <span className="text-accent">2026</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-smooth font-medium ${
                  location.pathname === link.path
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:text-accent hover:bg-accent/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/register">
              <Button className="ml-4 bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow">
                Register Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-smooth ${
                  location.pathname === link.path
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:text-accent hover:bg-accent/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-2"
            >
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Register Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
