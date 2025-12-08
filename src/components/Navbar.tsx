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
    { name: "Accommodation", path: "/accommodation" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  // Placeholder logos - replace with actual logo paths
  const logos = [
    { name: "PSG College", src: "/placeholder.svg", alt: "PSG College of Technology" },
    { name: "100 Years", src: "/placeholder.svg", alt: "100 Years Celebration" },
    { name: "75 Years", src: "/placeholder.svg", alt: "75 Years" },
    { name: "Prodothon", src: "/placeholder.svg", alt: "Prodothon 2026" },
    { name: "PEA", src: "/placeholder.svg", alt: "PEA Logo" },
    { name: "SME", src: "/placeholder.svg", alt: "SME Logo" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Logo Bar */}
      <div
        className={`transition-smooth ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-2"
            : "bg-primary/90 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`flex items-center justify-center transition-smooth ${
                  isScrolled ? "h-8 md:h-10" : "h-10 md:h-14"
                }`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto object-contain"
                />
                <span
                  className={`ml-1 text-xs font-medium hidden sm:block ${
                    isScrolled ? "text-primary" : "text-primary-foreground"
                  }`}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav
        className={`transition-smooth ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-card"
            : "bg-primary"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center w-full space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-smooth font-medium text-sm uppercase tracking-wide ${
                    location.pathname === link.path
                      ? isScrolled
                        ? "text-accent bg-accent/10"
                        : "text-accent bg-accent/20"
                      : isScrolled
                      ? "text-foreground hover:text-accent hover:bg-accent/5"
                      : "text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/register">
                <Button className="ml-4 bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow uppercase text-sm tracking-wide">
                  Register
                </Button>
              </Link>
            </div>

            {/* Mobile: Title + Menu Button */}
            <div className="md:hidden flex items-center justify-between w-full">
              <span
                className={`font-heading font-bold ${
                  isScrolled ? "text-primary" : "text-primary-foreground"
                }`}
              >
                PRODOTHON'26
              </span>
              <button
                className={`p-2 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 animate-fade-in bg-background rounded-b-lg">
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
                className="block mt-2 px-4"
              >
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Register Now
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
