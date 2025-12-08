import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const Events = () => {
  const events = [
    {
      id: 1,
      name: "Paper Presentation",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
      description: "Present your research papers on innovative manufacturing technologies and engineering solutions.",
      date: "Feb 27, 2026 | 9:00 AM",
      venue: "Seminar Hall A",
      coordinator: "BALAJI C - +91 987654321"
    },
    {
      id: 2,
      name: "CAD Modelling",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
      description: "Showcase your CAD skills by designing complex mechanical components within the time limit.",
      date: "Feb 27, 2026 | 10:00 AM",
      venue: "Computer Lab 1",
      coordinator: "SUKANTH N R - +91 987654321"
    },
    {
      id: 3,
      name: "Technical Quiz",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600",
      description: "Test your technical knowledge in mechanical and manufacturing engineering.",
      date: "Feb 27, 2026 | 2:00 PM",
      venue: "Main Auditorium",
      coordinator: "LAKSHMAN RAGHAV V G - +91 987654321"
    },
    {
      id: 4,
      name: "Project Expo",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
      description: "Display your innovative projects and prototypes to industry experts and judges.",
      date: "Feb 27-28, 2026",
      venue: "Exhibition Ground",
      coordinator: "DEVISRI J - +91 987654321"
    },
    {
      id: 5,
      name: "Debugging Challenge",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
      description: "Find and fix errors in CNC programs and automation codes under pressure.",
      date: "Feb 27, 2026 | 3:30 PM",
      venue: "Computer Lab 2",
      coordinator: "HARISH N - +91 987654321"
    },
    {
      id: 6,
      name: "Product Design",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
      description: "Design innovative products solving real-world problems with sustainable solutions.",
      date: "Feb 28, 2026 | 9:00 AM",
      venue: "Design Studio",
      coordinator: "RITHIKA G - +91 987654321"
    },
    {
      id: 7,
      name: "Manufacturing Simulation",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600",
      description: "Simulate and optimize manufacturing processes using industry-standard software.",
      date: "Feb 28, 2026 | 10:30 AM",
      venue: "Simulation Lab",
      coordinator: "MUGILAN N - +91 987654321"
    },
    {
      id: 8,
      name: "Reverse Engineering",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600",
      description: "Analyze and recreate mechanical components through reverse engineering techniques.",
      date: "Feb 28, 2026 | 11:00 AM",
      venue: "Workshop Hall",
      coordinator: "RAMAKRISHNAN K - +91 987654321"
    },
    {
      id: 9,
      name: "Business Plan",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600",
      description: "Present your entrepreneurial ideas with a comprehensive business model.",
      date: "Feb 28, 2026 | 2:00 PM",
      venue: "Conference Room",
      coordinator: "NARMADA B S - +91 987654321"
    },
    {
      id: 10,
      name: "Technical Photography",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600",
      description: "Capture the essence of engineering and technology through your lens.",
      date: "Feb 27-28, 2026",
      venue: "Campus Wide",
      coordinator: "DIYA VISALI R S - +91 987654321"
    }
  ];

  return (
    <div className="min-h-screen pt-28 md:pt-32">
      {/* Header */}
      <section className="py-16 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="scale-in">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
              Events
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our exciting lineup of technical and non-technical events
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-gradient-to-b from-peach/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <AnimatedSection key={event.id} animation="scale-in" delay={index * 0.05}>
                <Card className="shadow-card hover:shadow-card-hover transition-smooth border-0 overflow-hidden group h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-heading text-xl font-bold text-secondary">
                      {event.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-foreground">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <User className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-xs">{event.coordinator}</span>
                      </div>
                    </div>

                    <Link to="/register" className="block pt-2">
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                        Register Here
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
