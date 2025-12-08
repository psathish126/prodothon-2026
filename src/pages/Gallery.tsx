import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Generate 50 placeholder images for past events
  const galleryImages = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    title: `Prodothon ${2020 + (index % 5)} - Event ${(index % 10) + 1}`,
    url: `https://images.unsplash.com/photo-${
      [
        "1540575467063-178a50c2df87",
        "1504384308090-c894fdcc538d",
        "1552664730-d307ca884978",
        "1523580494863-6f3031224c94",
        "1587825140708-dfaf72ae4b04",
        "1531482615713-2afd69097998",
        "1581091226825-a6a2a5aee158",
        "1581092795360-fd1ca04f0952",
        "1573164713988-8665fc963095",
        "1517245386807-bb43f82c33c4",
        "1556155092-490a1ba16284",
        "1562774053-701939374585",
        "1523050854058-8df90110c9f1",
        "1481627834876-b7833e8f5570",
        "1599058917212-d750089bc07e",
        "1541339907198-e08756dedf3f",
        "1461749280684-dccba630e2f6",
        "1485827404703-89b55fcc595e",
        "1573496359142-b8d87734a5a2",
        "1517841905240-472988babdf9",
      ][index % 20]
    }?w=600`,
  }));

  return (
    <div className="min-h-screen pt-32">
      {/* Header */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
            Gallery
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Glimpses from our past events and memorable moments
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-smooth border-0 group aspect-square"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-smooth flex items-end justify-center pb-4">
                    <p className="text-primary-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-smooth text-center px-2">
                      {image.title}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0">
          {selectedImage && (
            <img
              src={selectedImage.replace("w=600", "w=1200")}
              alt="Gallery image"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
