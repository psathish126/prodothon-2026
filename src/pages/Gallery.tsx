import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images - in a real implementation, these would be actual event photos
  const galleryImages = {
    events: [
      { id: 1, title: "RoboWars 2024", url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800" },
      { id: 2, title: "Code Sprint Finals", url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800" },
      { id: 3, title: "Innovation Pitch", url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" },
      { id: 4, title: "Project Expo", url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800" },
      { id: 5, title: "Tech Quiz Finals", url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800" },
      { id: 6, title: "Award Ceremony", url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800" }
    ],
    workshops: [
      { id: 7, title: "AI Workshop Session", url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800" },
      { id: 8, title: "Robotics Training", url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" },
      { id: 9, title: "3D Printing Lab", url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800" },
      { id: 10, title: "IoT Workshop", url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800" },
      { id: 11, title: "Cloud Computing Session", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800" },
      { id: 12, title: "Blockchain Tutorial", url: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800" }
    ],
    campus: [
      { id: 13, title: "PSG Tech Campus", url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800" },
      { id: 14, title: "Main Auditorium", url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800" },
      { id: 15, title: "Engineering Block", url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" },
      { id: 16, title: "Central Library", url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800" },
      { id: 17, title: "Sports Complex", url: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800" },
      { id: 18, title: "Campus Grounds", url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800" }
    ]
  };

  const ImageGrid = ({ images }: { images: typeof galleryImages.events }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <Card
          key={image.id}
          className="overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-smooth border-0 group"
          onClick={() => setSelectedImage(image.url)}
        >
          <div className="aspect-video relative overflow-hidden">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-smooth flex items-center justify-center">
              <p className="text-primary-foreground font-heading text-lg opacity-0 group-hover:opacity-100 transition-smooth">
                {image.title}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Gallery
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Glimpses from previous editions of Prodothon and PSG Tech campus
          </p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
              <TabsTrigger value="campus">Campus</TabsTrigger>
            </TabsList>
            
            <TabsContent value="events" className="animate-fade-in">
              <ImageGrid images={galleryImages.events} />
            </TabsContent>
            
            <TabsContent value="workshops" className="animate-fade-in">
              <ImageGrid images={galleryImages.workshops} />
            </TabsContent>
            
            <TabsContent value="campus" className="animate-fade-in">
              <ImageGrid images={galleryImages.campus} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img
              src={selectedImage}
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
