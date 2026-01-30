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
      ? "text-emerald-300"
      : "text-emerald-100/85 hover:text-emerald-50";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30">
        {/* LOGO BAR – desktop only, light background so logos are clear */}
        <div
          className={`
            hidden md:block transition-all duration-300 border-b border-slate-200
            bg-slate-50
            ${isScrolled ? "py-2 shadow-[0_4px_18px_rgba(15,23,42,0.15)]" : "py-3 shadow-none"}
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
                            ? "h-16 lg:h-18 xl:h-20"
                            : "h-20 lg:h-22 xl:h-24"
                          : isScrolled
                          ? "h-12 lg:h-14 xl:h-16"
                          : "h-14 lg:h-16 xl:h-18"
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

        {/* NAVBAR – glass bar */}
        <nav
          className={`
            transition-all duration-300 border-b
            border-emerald-300/40
            bg-slate-950/80 backdrop-blur-xl
            ${isScrolled ? "shadow-[0_12px_45px_rgba(0,0,0,0.85)]" : ""}
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
                      after:bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300
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
                  <Button className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 text-slate-950 hover:from-emerald-300 hover:via-teal-300 hover:to-emerald-200 px-5 shadow-[0_0_25px_rgba(34,197,94,0.9)] rounded-full text-xs lg:text-sm font-semibold flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Register</span>
                  </Button>
                </Link>
              </div>

              {/* Mobile Header row */}
              <div className="md:hidden flex w-full justify-between items-center">
                <span className="text-[11px] uppercase tracking-[0.25em] text-emerald-100/90">
                  Prodothon&apos;26
                </span>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 rounded-full bg-slate-900/60 border border-emerald-400/40 text-emerald-100 hover:bg-slate-900/80 transition-colors"
                  aria-label="Toggle menu"
                >
                  {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar – full-screen solid, rendered outside header/nav */}
      <div
        className={`
          md:hidden fixed inset-0 z-50 transition-opacity duration-300
          ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
        `}
      >
        {/* full-screen solid background */}
        <div className="absolute inset-0 bg-black" />

        {/* content layer */}
        <div className="absolute inset-0 flex">
          {/* sliding panel on the left */}
          <div
            className={`
              h-full w-[78%] xs:w-[72%] sm:w-[60%]
              bg-black shadow-[0_0_40px_rgba(0,0,0,0.9)]
              transform transition-transform duration-300
              ${menuOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-slate-800">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-100">
                Menu
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1.5 rounded-full bg-slate-900 text-emerald-100 hover:bg-slate-800 transition-colors"
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
                        ? "text-emerald-100 bg-emerald-600"
                        : "text-emerald-100/85 hover:bg-slate-800"
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
                  <Button className="w-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-md rounded-full text-sm font-semibold flex items-center justify-center gap-1.5">
                    <Sparkles className="h-4 w-4" />
                    <span>Register</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* right side: solid background; tap to close */}
          <button
            type="button"
            className="flex-1 h-full bg-black"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu backdrop"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
