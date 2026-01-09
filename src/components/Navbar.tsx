// navbar.tsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

/* Logos (desktop only) */
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
  const location = useLocation();

  /* Shrink on Scroll */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Set active based on route */
  useEffect(() => {
    const match = sections.find((s) => s.path === location.pathname);
    if (match) setActive(match.id);
  }, [location.pathname]);

  const linkColorClasses = (id: string) =>
    active === id
      ? "text-emerald-600"
      : "text-slate-800 hover:text-emerald-600";

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* LOGO BAR – desktop only */}
      {/* LOGO BAR – desktop only, white */}
<div
  className={`
    transition-all duration-300 border-b border-slate-200
    ${isScrolled ? "py-2 bg-white" : "py-4 bg-white"}
  `}
>
  <div className="max-w-7xl mx-auto px-4">
    <div className="hidden md:grid grid-cols-6 items-center gap-7">
      {logoFiles.map((logo, i) => (
        <div key={i} className="flex justify-center items-center">
          <img
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className={`object-contain transition-all
              ${
                logo.alt === "Prodothon 2026"
                  ? isScrolled
                    ? "h-14 md:h-20"
                    : "h-20 md:h-24"
                  : isScrolled
                  ? "h-10 md:h-14"
                  : "h-14 md:h-20"
              }`}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      ))}
    </div>
  </div>
</div>


      {/* NAVBAR – always white */}
      <nav
        className={`
          transition-all duration-300 border-b
          bg-white border-slate-200 ${isScrolled ? "shadow-sm" : ""}
        `}
        role="navigation"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-12 flex items-center justify-between">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 mx-auto">
              {sections.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setActive(item.id)}
                  className={`
                    relative text-xs lg:text-sm font-semibold uppercase tracking-[0.25em] px-3 py-2
                    transition-colors
                    ${linkColorClasses(item.id)}
                    after:absolute after:left-0 after:-bottom-2
                    after:h-[3px] after:w-full after:bg-emerald-400 after:rounded-full
                    after:scale-x-0 after:origin-left after:transition-transform
                    hover:after:scale-x-100
                    ${active === item.id ? "after:scale-x-100" : ""}
                  `}
                >
                  {item.name}
                </Link>
              ))}

              <Link to="/register" className="ml-4">
                <Button className="bg-emerald-500 text-white hover:bg-emerald-600 px-5 shadow-md">
                  Register
                </Button>
              </Link>
            </div>

            {/* Mobile Header row */}
            <div className="md:hidden flex w-full justify-between items-center">
              <span className="text-[11px] uppercase tracking-[0.25em] text-slate-700">
                Menu
              </span>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md hover:bg-slate-100 text-slate-700"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              menuOpen ? "max-h-96 py-3" : "max-h-0"
            }`}
          >
            <div className="bg-white/95 rounded-xl p-3 shadow-lg border border-slate-100">
              {sections.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => {
                    setMenuOpen(false);
                    setActive(item.id);
                  }}
                  className={`
                    block py-3 px-3 rounded-md text-sm font-medium
                    ${
                      active === item.id
                        ? "text-emerald-600 border-l-4 border-emerald-500 pl-4 bg-emerald-50"
                        : "text-slate-700 hover:bg-slate-50"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-3 px-3">
                <Link to="/register" onClick={() => setMenuOpen(false)}>
                  <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-600 shadow-md">
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
