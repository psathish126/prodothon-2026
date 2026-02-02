// navbar.tsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

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
      : "text-slate-700 hover:text-emerald-600";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30">
        {/* LOGO BAR – desktop only */}
        <div
          className={`
            hidden md:block transition-all duration-300 border-b border-slate-200
            bg-white
            ${isScrolled ? "py-2 shadow-[0_4px_16px_rgba(15,23,42,0.12)]" : "py-3 shadow-none"}
          `}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-6 items-center gap-6 lg:gap-8">
              {logoFiles.map((logo, i) => (
                <div key={i} className="flex justify-center items-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className={`
                      object-contain transition-all duration-300
                      ${
                        logo.alt === "Prodothon 2026"
                          ? isScrolled
                            ? "h-20 lg:h-22 xl:h-24"
                            : "h-24 lg:h-26 xl:h-28"
                          : isScrolled
                          ? "h-16 lg:h-18 xl:h-20"
                          : "h-18 lg:h-20 xl:h-22"
                      }
                    `}
                    style={{ filter: "drop-shadow(0 2px 6px rgba(15,23,42,0.25))" }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NAVBAR – light glass bar */}
        <nav
          className={`
            transition-all duration-300 border-b
            border-emerald-200/70
            bg-white/90 backdrop-blur-xl
            ${isScrolled ? "shadow-[0_10px_28px_rgba(15,23,42,0.12)]" : ""}
          `}
          role="navigation"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div
              className={`
                flex items-center justify-between
                ${isScrolled ? "h-12" : "h-14"}
              `}
            >
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8 mx-auto">
                {sections.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setActive(item.id)}
                    className={`
                      relative text-[10px] lg:text-[11px] xl:text-xs font-semibold uppercase tracking-[0.28em] px-3 py-1.5
                      transition-colors
                      ${linkColorClasses(item.id)}
                      after:absolute after:left-0 after:-bottom-2
                      after:h-[2px] after:w-full
                      after:bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300
                      after:rounded-full
                      after:scale-x-0 after:origin-left after:transition-transform
                      hover:after:scale-x-100
                      ${active === item.id ? "after:scale-x-100" : ""}
                    `}
                  >
                    {item.name}
                  </Link>
                ))}

                <Link to="/register" className="ml-4">
                  <Button className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 text-white hover:from-emerald-400 hover:via-teal-300 hover:to-emerald-200 px-5 shadow-[0_0_20px_rgba(34,197,94,0.7)] rounded-full text-xs lg:text-sm font-semibold flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Register</span>
                  </Button>
                </Link>
              </div>

              {/* Mobile Header row */}
              <div className="md:hidden flex w-full justify-between items-center">
                <span className="text-[11px] uppercase tracking-[0.25em] text-slate-800">
                  Prodothon&apos;26
                </span>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 rounded-full bg-white border border-emerald-300/60 text-slate-800 hover:bg-emerald-50 transition-colors"
                  aria-label="Toggle menu"
                >
                  {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar – light drawer */}
      <div
        className={`
          md:hidden fixed inset-0 z-50 transition-opacity duration-300
          ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
        `}
      >
        {/* backdrop */}
        <div className="absolute inset-0 bg-slate-900/70" />

        {/* content layer */}
        <div className="absolute inset-0 flex">
          {/* sliding panel on the left */}
          <div
            className={`
              h-full w-[78%] xs:w-[72%] sm:w-[60%]
              bg-white shadow-[0_0_40px_rgba(15,23,42,0.45)]
              transform transition-transform duration-300
              ${menuOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-slate-200">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-800">
                Menu
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-3 py-3 space-y-1">
              {sections.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => {
                    setMenuOpen(false);
                    setActive(item.id);
                  }}
                  className={`
                    block py-2.5 px-3 rounded-xl text-sm font-medium
                    ${
                      active === item.id
                        ? "text-emerald-900 bg-emerald-100"
                        : "text-slate-800 hover:bg-slate-100"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-3">
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                >
                  <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-400 shadow-md rounded-full text-sm font-semibold flex items-center justify-center gap-1.5">
                    <Sparkles className="h-4 w-4" />
                    <span>Register</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* right side: backdrop tap to close */}
          <button
            type="button"
            className="flex-1 h-full bg-transparent"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu backdrop"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
