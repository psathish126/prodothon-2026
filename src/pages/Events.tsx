import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Phone, MessageCircle, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const events = [
    {
      id: 1,
      name: "Production Meishu",
      category: "competition",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
      description: "Production Meishu is a platform where participants present their skills in product design, manufacturing, cost estimation, and marketing to a panel of judges. The event emphasizes innovative product development, smart selection of manufacturing processes, and efficient production planning. Participants must showcase cost-effective methods, apply lean manufacturing to reduce waste, and highlight quality control measures that ensure product standards. Environment-friendly practices such as recycling, energy efficiency, and waste reduction—are also expected. Strong application of production, operations, and supply chain management principles will be key to demonstrating optimized manufacturing and logistics efficiency.",
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
      category: "competition",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
      description: "Paper / Project Presentation is an academic platform created to encourage students to showcase their innovative thinking, technical research and engineering problem-solving skills. This event aims to promote knowledge sharing, critical thinking, and collaborative learning through discussions on emerging trends in the industry. Participants can present Technical Papers OR Project Models / Case Studies. Participants can present any technical paper from Mechanical stream (Production, Mechanical, Mechatronics, Automobile or Industrial Engineering domain.)",
      date: "Feb 27, 2026",
      venue: "Seminar Hall A",
      coordinators: [
        { name: "Rithika G", phone: "8220824986" },
        { name: "Neka S", phone: "9751085106" }
      ]
    },
    {
      id: 3,
      name: "Workshop on AI-Driven Generative Design & FEA for Smart Manufacturing",
      category: "workshop",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
      description: "This workshop introduces students to the modern engineering workflow that combines generative design with FEA-based validation. Participants will explore how AI-driven design and manufacturing tools can transform conventional CAD models into lightweight, high-performance geometries using topology optimisation. The session also highlights how such optimisation aligns with current trends in AI-augmented manufacturing where intelligent algorithms assist engineers in reducing material usage, improving efficiency and enhancing structural integrity. Students will see designs evolve visually in real time and then perform rapid FEA verification to confirm performance. With strong relevance to automotive, aerospace, EV components, robotics, and advanced manufacturing, this workflow mirrors current industry expectations and interview focus areas such as weight optimisation, manufacturability and design validation. By the end of the workshop, participants will complete a sample optimisation case, visualise before-and-after models, and walk away with a portfolio-ready outcome within just 3 hours.",
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
      category: "competition",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600",
      description: "The CAD Master Challenge is a two-round technical competition designed to test participants' 3D modelling, assembly, and animation skills using CAD software. The event aims to evaluate both speed and design precision, pushing participants to showcase their creativity and technical excellence in computer-aided design.",
      date: "Feb 27, 2026 | 10:00 AM",
      venue: "CAD Lab",
      staffIncharge: ["Dr. Renjin J Bright", "Dr Rajamani R"],
      coordinators: [
        { name: "Nharguna Nangai M B", phone: "7904416005" },
        { name: "Sunanthika S", phone: "9488611002" }
      ]
    },
    {
      id: 5,
      name: "AutoQuest",
      category: "competition",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
      description: "AutoQuest is a two-round robotics challenge that tests participants' skills in autonomous navigation, intelligent sensing, and real-time decision-making. Competitors must design and program self-driven electric bots capable of completing dynamic arena challenges without human control. From precision parking maneuvers to strategic target-hunting duels, every round pushes the limits of coding logic, sensor fusion, and control design. AutoQuest isn't just about building a bot — it's about engineering machines that think, sense, and act on their own. The event fosters creativity, teamwork, and hands-on problem-solving under pressure. AutoQuest ultimately prepares future engineers for real-world autonomous systems used in modern manufacturing, mobility, and smart industries.",
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
      category: "competition",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600",
      description: "This event brings a creative twist to the classic board game Snakes and Ladders, transforming it into an exciting blend of engineering knowledge, teamwork, and fast decision-making. This dynamic format adds an extra layer of excitement, ensuring every team stays alert and prepared. The mix of luck, knowledge, and quick reflexes promises plenty of surprises whether you're climbing up a ladder or sliding down a tricky snake. The goal of this event is not only to entertain but also to strengthen bonding within the Production Engineering community, encourage active participation, and refresh fundamental engineering concepts in a fun, relaxed environment. Join us for three unforgettable hours of strategy, laughter, and friendly competition!",
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
      category: "competition",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
      description: "Inspired by modern advancements in sustainable engineering, where lightweight truss systems are replacing heavy metallic structures in cranes and cantilevers, this event challenges participants to design and construct a miniature Truss Crane Arm using renewable materials. Using only wooden sticks, glue, elastic thread, and basic tools, participants must create a cantilever-type crane arm capable of supporting the maximum possible load at its free end. The structure should reflect superior strength, minimal deflection, and efficient material utilization. During evaluation, judges will progressively apply load at the crane's tip until structural failure to assess stability, durability, and design efficiency. This event encourages sustainable innovation through minimal material use, thoughtful engineering design, and responsible resource management.",
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
      name: "Panel Discussion on Sustainability in Manufacturing",
      category: "discussion",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600",
      description: "Panel Discussion on \"Sustainability in Manufacturing\" brings together renowned industry professionals, technical experts, and thought leaders from across the country to explore emerging approaches that are shaping the future of sustainable manufacturing. The discussion aims to provide students, researchers, and budding engineers with deep industry insights, real-world challenges, and practical perspectives on how sustainability can be effectively embedded into modern manufacturing environments. By engaging directly with accomplished professionals, participants will gain valuable exposure to industry expectations, evolving trends, and the skills required to contribute to a greener and more sustainable industrial landscape. This event serves as a bridge academia and industry, promote responsible engineering practices, and inspire the next generation of innovators.",
      date: "Feb 28, 2026 | 3:00 PM",
      venue: "Conference Hall",
      coordinators: [
        { name: "Aishaa Nihar Z", phone: "9363022355" },
        { name: "Kancia Roslin Mary S", phone: "8438303204" }
      ]
    }
  ];

  const filters = [
    { id: "all", label: "All Events" },
    { id: "competition", label: "Competitions" },
    { id: "workshop", label: "Workshops" },
    { id: "discussion", label: "Discussion" },
  ];

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const handleWhatsApp = (phone: string, eventName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in the event "${eventName}" at PRODOTHON'26. Can you provide more details?`);
    window.open(`https://wa.me/91${phone}?text=${message}`, '_blank');
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:+91${phone}`;
  };

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
          {/* Filter Buttons */}
          <AnimatedSection animation="fade-in-up" className="mb-10">
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-accent text-accent-foreground shadow-lg"
                      : "bg-secondary/10 text-secondary hover:bg-secondary/20"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8">
            {filteredEvents.map((event, index) => (
              <AnimatedSection key={event.id} animation="fade-in-up" delay={index * 0.1}>
                <Card className="shadow-card hover:shadow-card-hover transition-all duration-500 border-0 overflow-hidden group bg-card">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-1/3 relative overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full shadow-lg">
                          Event #{event.id}
                        </span>
                        <span className={`px-3 py-1 text-xs font-bold rounded-full shadow-lg ${
                          event.category === 'workshop' ? 'bg-primary text-white' :
                          event.category === 'discussion' ? 'bg-secondary text-white' :
                          'bg-peach text-primary'
                        }`}>
                          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <CardContent className="lg:w-2/3 p-6 lg:p-8 flex flex-col">
                      <div className="flex-1">
                        <h3 className="font-heading text-2xl lg:text-3xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                          {event.name}
                        </h3>
                        
                        {/* Full Description */}
                        <div className="mb-6">
                          <p className={`text-muted-foreground leading-relaxed ${
                            expandedEvent === event.id ? '' : 'line-clamp-4'
                          }`}>
                            {event.description}
                          </p>
                          {event.description.length > 300 && (
                            <button
                              onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                              className="text-accent font-semibold text-sm mt-2 hover:underline"
                            >
                              {expandedEvent === event.id ? 'Show Less' : 'Read More'}
                            </button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-3 bg-peach/30 rounded-lg p-3">
                            <Calendar className="h-5 w-5 text-accent flex-shrink-0" />
                            <div>
                              <span className="text-xs text-muted-foreground block">Date & Time</span>
                              <span className="font-semibold text-foreground">{event.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 bg-peach/30 rounded-lg p-3">
                            <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                            <div>
                              <span className="text-xs text-muted-foreground block">Venue</span>
                              <span className="font-semibold text-foreground">{event.venue}</span>
                            </div>
                          </div>
                        </div>

                        {/* Staff Incharge (if exists) */}
                        {event.staffIncharge && (
                          <div className="bg-secondary/5 rounded-lg p-4 mb-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                              <GraduationCap className="h-4 w-4 text-secondary" />
                              <span className="font-semibold uppercase tracking-wide">Staff Incharge</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {event.staffIncharge.map((staff, idx) => (
                                <span key={idx} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                                  {staff}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Coordinators */}
                        <div className="border-t border-border/50 pt-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <Users className="h-4 w-4 text-accent" />
                            <span className="font-semibold uppercase tracking-wide">Event Coordinators</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {event.coordinators.map((coord, idx) => (
                              <div key={idx} className="flex items-center justify-between bg-background rounded-lg p-3 shadow-sm border border-border/30">
                                <div>
                                  <p className="font-medium text-foreground text-sm">{coord.name}</p>
                                  <p className="text-xs text-muted-foreground">{coord.phone}</p>
                                </div>
                                <div className="flex gap-1">
                                  <button
                                    onClick={() => handleWhatsApp(coord.phone, event.name)}
                                    className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
                                    title="WhatsApp"
                                  >
                                    <MessageCircle className="h-4 w-4" />
                                  </button>
                                  <button
                                    onClick={() => handleCall(coord.phone)}
                                    className="p-2 bg-primary hover:bg-primary/90 text-white rounded-full transition-colors"
                                    title="Call"
                                  >
                                    <Phone className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Link to="/register" className="block mt-6">
                        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-lg">
                          Register for {event.name} →
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
