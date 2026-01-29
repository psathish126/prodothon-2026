import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles, X } from "lucide-react";

type GalleryImage = {
  id: string;
  url: string;
  title: string;
};

const prod25Images: GalleryImage[] = [
  { id: "img1",  url: "/Prodothon 25/_DSC4845.JPG",            title: "PRODOTHON 25" },
  { id: "img2",  url: "/Prodothon 25/_DSC4891.JPG",            title: "PRODOTHON 25" },
  { id: "img3",  url: "/Prodothon 25/_DSC4897.JPG",            title: "PRODOTHON 25" },
  { id: "img4",  url: "/Prodothon 25/_DSC4920.JPG",            title: "PRODOTHON 25" },
  { id: "img5",  url: "/Prodothon 25/_DSC4933.JPG",            title: "PRODOTHON 25" },
  { id: "img6",  url: "/Prodothon 25/_DSC4976.JPG",            title: "PRODOTHON 25" },
  { id: "img7",  url: "/Prodothon 25/_DSC5013.JPG",            title: "PRODOTHON 25" },
  { id: "img8",  url: "/Prodothon 25/_DSC5110.JPG",            title: "PRODOTHON 25" },
  { id: "img9",  url: "/Prodothon 25/_DSC5215.JPG",            title: "PRODOTHON 25" },
  { id: "img10", url: "/Prodothon 25/_DSC5469.JPG",            title: "PRODOTHON 25" },
  { id: "img11", url: "/Prodothon 25/IMG_20251230_102948.jpg", title: "PRODOTHON 25" },
  { id: "img12", url: "/Prodothon 25/IMG-20250225-WA0004.jpg", title: "PRODOTHON 25" },
  { id: "img13", url: "/Prodothon 25/IMG-20250301-WA0014.jpg", title: "PRODOTHON 25" },
  { id: "img14", url: "/Prodothon 25/IMG-20250304-WA0054.jpg", title: "PRODOTHON 25" },
  { id: "img15", url: "/Prodothon 25/IMG20250302093920.jpg",   title: "PRODOTHON 25" },
];

const prod24Images: GalleryImage[] = [
  { id: "img1",  url: "/Prodothon 24/IMG_0037.JPG",            title: "PRODOTHON 24" },
  { id: "img2",  url: "/Prodothon 24/IMG_0100.JPG",            title: "PRODOTHON 24" },
  { id: "img3",  url: "/Prodothon 24/IMG_0218.JPG",            title: "PRODOTHON 24" },
  { id: "img4",  url: "/Prodothon 24/IMG_0226.JPG",            title: "PRODOTHON 24" },
  { id: "img5",  url: "/Prodothon 24/IMG_4949.JPG",            title: "PRODOTHON 24" },
  { id: "img6",  url: "/Prodothon 24/IMG_4989.JPG",            title: "PRODOTHON 24" },
  { id: "img7",  url: "/Prodothon 24/IMG-20251230-WA0011.jpg", title: "PRODOTHON 24" },
  { id: "img8",  url: "/Prodothon 24/IMG-20251230-WA0013.jpg", title: "PRODOTHON 24" },
  { id: "img9",  url: "/Prodothon 24/IMG-20251230-WA0014.jpg", title: "PRODOTHON 24" },
  { id: "img10", url: "/Prodothon 24/IMG-20251230-WA0024.jpg", title: "PRODOTHON 24" },
  { id: "img11", url: "/Prodothon 24/IMG-20251230-WA0025.jpg", title: "PRODOTHON 24" },
  { id: "img12", url: "/Prodothon 24/IMG-20251230-WA0026.jpg", title: "PRODOTHON 24" },
  { id: "img13", url: "/Prodothon 24/IMG-20251230-WA0028.jpg", title: "PRODOTHON 24" },
  { id: "img14", url: "/Prodothon 24/IMG20240303140352.jpg",   title: "PRODOTHON 24" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const renderGrid = (images: GalleryImage[], delayBase = 0) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
      {images.map((image, index) => (
        <AnimatedSection
          key={image.id}
          animation="scale-in"
          delay={delayBase + (index % 10) * 0.05}
        >
          <Card
            className="relative overflow-hidden cursor-pointer shadow-[0_18px_60px_rgba(0,0,0,0.9)] hover:shadow-[0_22px_80px_rgba(34,197,94,0.6)] transition-all duration-500 border border-emerald-300/25 group aspect-square bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl rounded-2xl"
            onClick={() => setSelectedImage(image)}
          >
            {/* glow on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.4),transparent_55%)] opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-2 bottom-2 flex items-center justify-center">
                <p className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-semibold text-emerald-50/95 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="h-3 w-3 text-emerald-300" />
                  <span>{image.title}</span>
                </p>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 bg-[radial-gradient(circle_at_top,_#020617_0,_#020617_40%,_#000000_100%)] text-white">
      {/* Header – jazzy glass hero */}
      <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.3),transparent_55%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.25),transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-slate-950/90" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] hidden sm:block">
          <div className="w-[200%] h-[200%] bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:40px_40px] animate-[slow-pan_35s_linear_infinite]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection animation="scale-in">
            <div className="max-w-3xl mx-auto bg-white/5 border border-white/15 rounded-[28px] sm:rounded-[32px] shadow-[0_22px_110px_rgba(0,0,0,0.9)] backdrop-blur-2xl px-5 sm:px-7 md:px-10 py-7 sm:py-8 md:py-10 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-3.5 py-1 text-[10px] xs:text-[11px] sm:text-xs uppercase tracking-[0.24em] text-emerald-100/95">
                <Sparkles className="h-3 w-3 text-emerald-300" />
                <span>Highlights from previous editions</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-black">
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent inline-block drop-shadow-[0_0_35px_rgba(0,0,0,0.85)]">
                  Gallery
                </span>
              </h1>
              <p className="text-[13px] sm:text-sm md:text-base text-emerald-50/90 max-w-2xl mx-auto">
                Relive the energy of PRODOTHON&apos;24 and PRODOTHON&apos;25 through moments captured
                across events, workshops, and celebrations.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-slate-950 via-slate-950 to-black relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(34,197,94,0.25),transparent_55%)] opacity-80" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 md:space-y-14 relative z-10">
          {/* PRODOTHON 25 */}
          <AnimatedSection animation="fade-in-up">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-50">
                  PRODOTHON 25
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-emerald-200/80 bg-slate-900/70 border border-emerald-300/40 px-3 py-1 rounded-full">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                  <span>Most recent edition</span>
                </span>
              </div>
              {renderGrid(prod25Images)}
            </div>
          </AnimatedSection>

          {/* PRODOTHON 24 */}
          <AnimatedSection animation="fade-in-up">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-50">
                  PRODOTHON 24
                </h2>
              </div>
              {renderGrid(prod24Images, 0.1)}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox Dialog – glassy & centered */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 border-0 bg-transparent shadow-none">
          {selectedImage && (
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.35),transparent_60%)] opacity-80 blur-3xl -z-10" />
              <div className="relative bg-slate-950/90 border border-emerald-300/40 rounded-3xl overflow-hidden shadow-[0_26px_90px_rgba(0,0,0,0.95)] backdrop-blur-xl">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-emerald-100 hover:bg-black/80 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full max-h-[70vh] object-contain bg-black"
                />
                <div className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 border-t border-emerald-900/70 flex items-center justify-between gap-3">
                  <p className="text-[12px] sm:text-sm text-emerald-100 font-medium">
                    {selectedImage.title}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs text-emerald-200/85 bg-slate-900/80 border border-emerald-300/40 px-2.5 py-1 rounded-full">
                    <Sparkles className="h-3 w-3 text-emerald-300" />
                    <span>PRODOTHON Moments</span>
                  </span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
