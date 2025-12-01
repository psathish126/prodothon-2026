import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Trophy, Zap, Award, Target } from "lucide-react";

const Home = () => {
  const highlights = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "30+ Events",
      description: "Technical and non-technical competitions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "2000+ Participants",
      description: "Students from across the nation"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "₹5 Lakh Prize Pool",
      description: "Win exciting prizes and recognition"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Workshops",
      description: "Learn from industry professionals"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 tech-pattern opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            {/* Logos Section */}
            <div className="flex justify-center items-center gap-6 flex-wrap mb-8 opacity-90">
              <div className="text-sm font-medium bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-foreground/20">
                PSG College of Technology
              </div>
              <div className="text-sm font-medium bg-accent/20 backdrop-blur-sm px-6 py-3 rounded-full border border-accent/30">
                75 Years of Excellence
              </div>
              <div className="text-sm font-medium bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-foreground/20">
                PEA × SME
              </div>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-extrabold leading-tight">
              Prodothon <span className="text-accent">2026</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-primary-foreground/90">
              Where Innovation Meets Excellence
            </p>

            <div className="flex items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                <span>March 2026</span>
              </div>
              <span className="text-primary-foreground/50">|</span>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                <span>PSG Tech, Coimbatore</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/register">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow text-lg px-8 h-14">
                  Register Now
                </Button>
              </Link>
              <Link to="/events">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 h-14">
                  Explore Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
              About Prodothon 2026
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Prodothon 2026 is PSG College of Technology's flagship technical fest, organized by the Production Engineering Association (PEA) in partnership with the Society of Manufacturing Engineers (SME). Join us for three days of innovation, competition, and learning as we celebrate 75 years of PSG excellence and 50 years of the Production Engineering Department.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience cutting-edge workshops, participate in thrilling technical and non-technical events, and network with industry experts and fellow innovators from across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Event Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-smooth border-0 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex p-4 rounded-full bg-accent/10 text-accent">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Ready to Be Part of Something Amazing?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Register now and secure your spot at Prodothon 2026. Limited seats available!
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow text-lg px-12 h-16">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
