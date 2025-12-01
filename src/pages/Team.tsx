import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Ramesh Kumar",
      role: "Faculty Coordinator",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      linkedin: "#"
    },
    {
      name: "Priya Sharma",
      role: "Chief Organizer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      linkedin: "#"
    },
    {
      name: "Arjun Menon",
      role: "Technical Events Head",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      linkedin: "#"
    },
    {
      name: "Kavya Iyer",
      role: "Workshops Coordinator",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      linkedin: "#"
    },
    {
      name: "Vikram Patel",
      role: "Non-Technical Events Head",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400",
      linkedin: "#"
    },
    {
      name: "Ananya Reddy",
      role: "Sponsorship Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      linkedin: "#"
    },
    {
      name: "Rohan Das",
      role: "Marketing & Publicity",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      linkedin: "#"
    },
    {
      name: "Divya Krishnan",
      role: "Hospitality Coordinator",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
      linkedin: "#"
    },
    {
      name: "Aditya Singh",
      role: "Logistics Head",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      linkedin: "#"
    },
    {
      name: "Sneha Verma",
      role: "Design & Creative Lead",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      linkedin: "#"
    },
    {
      name: "Karthik Nair",
      role: "Web Development Lead",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
      linkedin: "#"
    },
    {
      name: "Meera Joshi",
      role: "Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Our Team
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Meet the dedicated individuals making Prodothon 2026 a grand success
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-card-hover transition-smooth border-0 group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 text-center space-y-2">
                    <h3 className="font-heading text-xl font-bold text-primary">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {member.role}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth mt-3"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-4xl font-bold text-primary">
              Join Our Volunteer Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Want to be part of the organizing team? We're looking for enthusiastic volunteers to help make Prodothon 2026 memorable. Gain valuable experience, build your network, and contribute to this amazing event!
            </p>
            <div className="pt-4">
              <a
                href="mailto:volunteers@prodothon.psgtech.edu"
                className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-smooth shadow-glow"
              >
                Apply to Volunteer
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
