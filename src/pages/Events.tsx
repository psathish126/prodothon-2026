import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const events = [
    {
      id: 1,
      name: "RoboWars",
      category: "Technical",
      description: "Build and battle! Compete with your custom-built robots in an epic arena showdown.",
      prize: "₹50,000",
      team: "2-4 members",
      duration: "2 days",
      coordinator: "John Doe - +91 XXXXX XXXXX"
    },
    {
      id: 2,
      name: "Code Sprint",
      category: "Technical",
      description: "Test your coding prowess in this intensive 24-hour hackathon with real-world problem statements.",
      prize: "₹40,000",
      team: "1-3 members",
      duration: "24 hours",
      coordinator: "Jane Smith - +91 XXXXX XXXXX"
    },
    {
      id: 3,
      name: "Innovation Pitch",
      category: "Technical",
      description: "Present your groundbreaking ideas to industry experts and investors. Best pitch wins!",
      prize: "₹30,000",
      team: "2-5 members",
      duration: "1 day",
      coordinator: "Mike Johnson - +91 XXXXX XXXXX"
    },
    {
      id: 4,
      name: "CAD Challenge",
      category: "Technical",
      description: "Showcase your design skills in this comprehensive CAD modeling competition.",
      prize: "₹25,000",
      team: "Individual",
      duration: "4 hours",
      coordinator: "Sarah Williams - +91 XXXXX XXXXX"
    },
    {
      id: 5,
      name: "Quiz Master",
      category: "Non-Technical",
      description: "Test your general knowledge and technical awareness in this exciting quiz competition.",
      prize: "₹15,000",
      team: "2 members",
      duration: "3 hours",
      coordinator: "David Brown - +91 XXXXX XXXXX"
    },
    {
      id: 6,
      name: "Photography Contest",
      category: "Non-Technical",
      description: "Capture moments and express your creativity through the lens. Theme: Innovation & Heritage.",
      prize: "₹10,000",
      team: "Individual",
      duration: "Throughout event",
      coordinator: "Emily Davis - +91 XXXXX XXXXX"
    }
  ];

  const technical = events.filter(e => e.category === "Technical");
  const nonTechnical = events.filter(e => e.category === "Non-Technical");

  const EventCard = ({ event }: { event: typeof events[0] }) => (
    <Card className="shadow-card hover:shadow-card-hover transition-smooth border-0 h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="font-heading text-2xl text-primary">{event.name}</CardTitle>
          <Badge className={event.category === "Technical" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}>
            {event.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{event.description}</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-primary">
            <Trophy className="h-4 w-4 text-accent" />
            <span className="font-semibold">Prize: {event.prize}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{event.team}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{event.duration}</span>
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold">Coordinator:</span> {event.coordinator}
          </p>
        </div>

        <Link to="/register">
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Register for Event
          </Button>
        </Link>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Events at Prodothon 2026
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Compete, innovate, and showcase your talents across diverse technical and non-technical events
          </p>
        </div>
      </section>

      {/* Technical Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-primary mb-12 text-center">
            Technical Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technical.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Non-Technical Events */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-primary mb-12 text-center">
            Non-Technical Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonTechnical.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
