import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const Events = () => {
  const events = [
    {
      id: 1,
      name: "Production Meishu",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
      description: "A platform where participants present their skills in product design, manufacturing, cost estimation, and marketing. Emphasizes innovative product development, smart selection of manufacturing processes, lean manufacturing, quality control, and environment-friendly practices.",
      date: "Feb 27-28, 2026",
      venue: "Main Auditorium",
      coordinators: [
        { name: "Manjuswetha S V", phone: "6369777609" },
        { name: "Harish N", phone: "7418760901" },
        { name: "Logeshwaran M", phone: "7339506691" }
      ]
    },
    {
      id: 2,
      name: "Paper / Project Presentation",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
      description: "An academic platform to showcase innovative thinking, technical research, and engineering problem-solving skills. Present Technical Papers OR Project Models / Case Studies from Mechanical stream domains including Production, Mechanical, Mechatronics, Automobile, or Industrial Engineering.",
      date: "Feb 27, 2026",
      venue: "Seminar Hall A",
      coordinators: [
        { name: "Rithika G", phone: "8220824986" },
        { name: "Neka S", phone: "9751085106" }
      ]
    },
    {
      id: 3,
      name: "AI-Driven Generative Design & FEA Workshop",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
      description: "Learn modern engineering workflow combining generative design with FEA-based validation. Explore AI-driven design tools, topology optimization for lightweight geometries, and rapid FEA verification. Complete a sample optimization case with portfolio-ready outcomes in just 3 hours.",
      date: "Feb 27, 2026 | 9:00 AM",
      venue: "Computer Lab 1",
      coordinators: [
        { name: "Krisitha J S", phone: "6382163572" },
        { name: "Makeshwaran T", phone: "9342205832" }
      ]
    },
    {
      id: 4,
      name: "The CAD Master Challenge",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600",
      description: "A two-round technical competition designed to test 3D modelling, assembly, and animation skills using CAD software. Evaluate both speed and design precision while showcasing creativity and technical excellence in computer-aided design.",
      date: "Feb 27, 2026 | 10:00 AM",
      venue: "CAD Lab",
      coordinators: [
        { name: "Nharguna Nangai M B", phone: "7904416005" },
        { name: "Sunanthika S", phone: "9488611002" }
      ]
    },
    {
      id: 5,
      name: "AutoQuest",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
      description: "A two-round robotics challenge testing skills in autonomous navigation, intelligent sensing, and real-time decision-making. Design and program self-driven electric bots capable of completing dynamic arena challenges including precision parking and strategic target-hunting duels.",
      date: "Feb 27-28, 2026",
      venue: "Robotics Arena",
      coordinators: [
        { name: "N Mugilan", phone: "7904083428" },
        { name: "Dhanalakshmi K", phone: "7339092514" }
      ]
    },
    {
      id: 6,
      name: "Ladder Rush",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600",
      description: "A creative twist on classic Snakes and Ladders, blending engineering knowledge, teamwork, and fast decision-making. Experience strategy, laughter, and friendly competition while refreshing fundamental engineering concepts in a fun, relaxed environment.",
      date: "Feb 28, 2026 | 2:00 PM",
      venue: "Recreation Hall",
      coordinators: [
        { name: "Sukanth N", phone: "9385414316" },
        { name: "Ari Prasanna V", phone: "9042461791" },
        { name: "Karunya V", phone: "9952200812" }
      ]
    },
    {
      id: 7,
      name: "Stick It! Structure It!",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
      description: "Design and construct a miniature Truss Crane Arm using renewable materials - wooden sticks, glue, elastic thread, and basic tools. Create a cantilever-type crane arm capable of supporting maximum load with superior strength, minimal deflection, and efficient material utilization.",
      date: "Feb 28, 2026 | 10:00 AM",
      venue: "Workshop Hall",
      coordinators: [
        { name: "Ramakrishnan K", phone: "9344680090" },
        { name: "Nimesha S", phone: "6369672135" },
        { name: "Nuthanasri V", phone: "9360672939" }
      ]
    },
    {
      id: 8,
      name: "Panel Discussion: Sustainability in Manufacturing",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600",
      description: "Industry professionals and thought leaders explore emerging approaches shaping sustainable manufacturing. Gain deep industry insights, real-world challenges, and practical perspectives on embedding sustainability into modern manufacturing environments.",
      date: "Feb 28, 2026 | 3:00 PM",
      venue: "Conference Hall",
      coordinators: [
        { name: "Aishaa Nihar Z", phone: "9363022355" },
        { name: "Kancia Roslin Mary S", phone: "8438303204" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-28 md:pt-32">
      {/* Header */}
      <section className="py-20 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="scale-in">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              8 Exciting Events
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              EVENTS
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Explore our exciting lineup of technical competitions, workshops, and interactive sessions
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-gradient-to-b from-peach/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <AnimatedSection key={event.id} animation="fade-in-up" delay={index * 0.1}>
                <Card className="shadow-card hover:shadow-card-hover transition-all duration-500 border-0 overflow-hidden group h-full bg-card hover:-translate-y-2">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image Section */}
                    <div className="md:w-2/5 relative overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full shadow-lg">
                          Event #{event.id}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <CardContent className="md:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                          {event.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {event.description}
                        </p>
                        
                        <div className="space-y-2 text-sm mb-4">
                          <div className="flex items-center gap-2 text-foreground">
                            <Calendar className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-foreground">
                            <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{event.venue}</span>
                          </div>
                        </div>

                        {/* Coordinators */}
                        <div className="border-t border-border/50 pt-4">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                            <Users className="h-3.5 w-3.5 text-accent" />
                            <span className="font-semibold uppercase tracking-wide">Event Coordinators</span>
                          </div>
                          <div className="space-y-1">
                            {event.coordinators.map((coord, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Phone className="h-3 w-3 text-accent/70" />
                                <span>{coord.name}</span>
                                <span className="text-accent font-medium">• {coord.phone}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Link to="/register" className="block mt-4">
                        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                          Register Now →
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Compete?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Register now and be part of PRODOTHON'26. Maximum 4 events per participant.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8 py-6 text-lg shadow-xl">
                Register for Events
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Events;
