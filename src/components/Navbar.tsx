import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

/* Navigation Sections */
const sections = [
  { name: "Home", id: "home", path: "/" },
  { name: "Events", id: "events", path: "/events" },
  { name: "Accommodation", id: "accommodation", path: "/accommodation" },
  { name: "Gallery", id: "gallery", path: "/gallery" },
  { name: "About", id: "about", path: "/about" },
  { name: "Team", id: "team", path: "/team" },
  { name: "Contact", id: "contact", path: "/contact" },
];

/* Logos */
const logoFiles = [
  { src: "/Logo/Psgct.png", alt: "PSG College of Technology" },
  { src: "/Logo/100 yrs.png", alt: "100 Years Celebration" },
  { src: "/Logo/75 no bg.png", alt: "75 Years" },
  { src: "/Logo/prod.png", alt: "Prodothon 2026" },
  { src: "/Logo/pea.png", alt: "PEA" },
  { src: "/Logo/Sme.png", alt: "SME" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Shrink on Scroll */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ScrollSpy */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* Close mobile menu on ESC */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* LOGO BAR */}
     {/* LOGO BAR – Equal Distribution */}
<div
  className={`bg-white border-b transition-all duration-300 ${
    isScrolled ? "py-2" : "py-4"
  }`}
>
  <div className="max-w-7xl mx-auto px-4">
    <div className="hidden md:grid grid-cols-6 items-center gap-7">
      {logoFiles.map((logo, i) => (
        <div
          key={i}
          className="flex justify-center items-center"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className={`object-contain transition-all ${
              isScrolled ? "h-12 md:h-16" : "h-16 md:h-20"
            }`}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>
      ))}
    </div>
  </div>
</div>


      {/* NAVBAR */}
      <nav
        className={`bg-white transition-shadow duration-200 ${
          isScrolled ? "shadow-md" : ""
        }`}
        role="navigation"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-14 flex items-center justify-between">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 mx-auto">
              {sections.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setActive(item.id)}
                  className={`relative text-sm font-semibold uppercase tracking-wide px-3 py-2 transition-colors
                    ${
                      active === item.id
                        ? "text-accent"
                        : "text-gray-800 hover:text-accent"
                    }
                    after:absolute after:left-0 after:-bottom-2
                    after:h-[3px] after:w-full after:bg-accent after:rounded-full
                    after:scale-x-0 after:origin-left after:transition-transform
                    hover:after:scale-x-100
                    ${active === item.id ? "after:scale-x-100" : ""}
                  `}
                >
                  {item.name}
                </Link>
              ))}

              <Link to="/register" className="ml-4">
                <Button className="bg-accent text-white hover:bg-accent/90 px-5">
                  Register
                </Button>
              </Link>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex w-full justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/Logo/prod.png"
                  alt="Prodothon"
                  className="h-8 object-contain"
                />
                <span className="font-bold tracking-wide">PRODOTHON’26</span>
              </div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              menuOpen ? "max-h-96 py-4" : "max-h-0"
            }`}
          >
            <div className="bg-white rounded-xl p-3 shadow-sm">
              {sections.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => {
                    setMenuOpen(false);
                    setActive(item.id);
                  }}
                  className={`block py-3 px-3 rounded-md text-sm font-medium
                    ${
                      active === item.id
                        ? "text-accent border-l-4 border-accent pl-4"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-3 px-3">
                <Link to="/register" onClick={() => setMenuOpen(false)}>
                  <Button className="w-full bg-accent text-white">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
