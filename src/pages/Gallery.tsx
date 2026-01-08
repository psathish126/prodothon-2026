import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import AnimatedSection from "@/components/AnimatedSection";

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
  { id: "img1",  url: "/Prodothon 24/IMG_0037.JPG",             title: "PRODOTHON 24" },
  { id: "img2",  url: "/Prodothon 24/IMG_0100.JPG",             title: "PRODOTHON 24" },
  { id: "img3",  url: "/Prodothon 24/IMG_0218.JPG",             title: "PRODOTHON 24" },
  { id: "img4",  url: "/Prodothon 24/IMG_0226.JPG",             title: "PRODOTHON 24" },
  { id: "img5",  url: "/Prodothon 24/IMG_4949.JPG",             title: "PRODOTHON 24" },
  { id: "img6",  url: "/Prodothon 24/IMG_4989.JPG",             title: "PRODOTHON 24" },
  { id: "img7",  url: "/Prodothon 24/IMG-20251230-WA0011.jpg",  title: "PRODOTHON 24" },
  { id: "img8",  url: "/Prodothon 24/IMG-20251230-WA0013.jpg",  title: "PRODOTHON 24" },
  { id: "img9",  url: "/Prodothon 24/IMG-20251230-WA0014.jpg",  title: "PRODOTHON 24" },
  { id: "img10", url: "/Prodothon 24/IMG-20251230-WA0024.jpg",  title: "PRODOTHON 24" },
  { id: "img11", url: "/Prodothon 24/IMG-20251230-WA0025.jpg",  title: "PRODOTHON 24" },
  { id: "img12", url: "/Prodothon 24/IMG-20251230-WA0026.jpg",  title: "PRODOTHON 24" },
  { id: "img13", url: "/Prodothon 24/IMG-20251230-WA0028.jpg",  title: "PRODOTHON 24" },
  { id: "img14", url: "/Prodothon 24/IMG20240303140352.jpg",    title: "PRODOTHON 24" },
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
            className="overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-smooth border-0 group aspect-square bg-card/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-smooth flex items-end justify-center pb-3 md:pb-4">
                <p className="text-white text-[10px] md:text-xs font-medium opacity-0 group-hover:opacity-100 transition-smooth text-center px-2 line-clamp-2">
                  {image.title}
                </p>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen pt-28 md:pt-32 bg-background">
      {/* Header */}
      <section className="relative py-16 md:py-20 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="scale-in">
            <div className="max-w-3xl mx-auto bg-white/5 border border-white/15 rounded-3xl shadow-2xl backdrop-blur-xl px-6 md:px-10 py-8 md:py-10 space-y-3">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                Gallery
              </h1>
              <p className="text-sm md:text-base text-white/85 max-w-2xl mx-auto">
                Relive the energy of PRODOTHON&apos;24 and PRODOTHON&apos;25
                through highlights captured across events, workshops, and
                celebrations.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-peach/30 to-background">
        <div className="container mx-auto px-4 space-y-10 md:space-y-14">
          {/* PRODOTHON 25 */}
          <AnimatedSection animation="fade-in-up">
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary">
                  PRODOTHON 25
                </h2>
                
              </div>
              {renderGrid(prod25Images)}
            </div>
          </AnimatedSection>

          {/* PRODOTHON 24 */}
          <AnimatedSection animation="fade-in-up">
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary">
                  PRODOTHON 24
                </h2>
              </div>
              {renderGrid(prod24Images, 0.1)}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0">
          {selectedImage && (
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
