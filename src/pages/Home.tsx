import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParticleBackground from "@/components/ParticleBackground";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown to Feb 27, 2026
  useEffect(() => {
    const targetDate = new Date("2026-02-27T09:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 min-w-[60px] md:min-w-[80px] border border-white/20 shadow-lg">
        <span className="text-3xl md:text-5xl font-bold text-white font-mono">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm text-white/80 mt-2 uppercase tracking-wider font-medium">{label}</span>
    </div>
  );

  const events = [
    { id: 1, name: "Production Meishu", image: "/eventlogo/The production meishu_.png" },
    { id: 2, name: "Paper / Project Presentation", image: "/eventlogo/Paper presentation_.png" },
    { id: 3, name: "AI-Driven Design Workshop", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400" },
    { id: 4, name: "CAD Master Challenge", image: "/eventlogo/Cad combat.jpg" },
    { id: 5, name: "AutoQuest", image: "/eventlogo/Autoquest_.jpg" },
    { id: 6, name: "Ladder Rush", image: "/eventlogo/LadderRush.jpg" },
    { id: 7, name: "Stick It! Structure It!", image: "/eventlogo/Stick it structure it_.jpg" },
    { id: 8, name: "Panel Discussion", image: "/eventlogo/Panel discussion_.png" },
  ];

  const sponsors = [
    { name: "Sponsor 1", image: "/Sponsers/_image.webp" },
    { name: "Sponsor 2", image: "/Sponsers/IMG-20260106-WA0037.jpg" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-hero text-white overflow-hidden pt-">
        <ParticleBackground />
        <div className="absolute inset-0 tech-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <AnimatedSection animation="scale-in">
              <h1 className="font-heading text-6xl md:text-8xl font-extrabold leading-tight tracking-tight">
                PRODOTHON'26
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={0.2}>
              <p className="text-2xl md:text-3xl font-bold text-accent uppercase tracking-[0.3em]">
                Learn • Impact • Innovate
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={0.4}>
              <div className="text-3xl md:text-5xl font-bold bg-peach text-primary inline-block px-8 py-4 rounded-xl">
                FEB 27 & 28
              </div>
            </AnimatedSection>

            {/* Countdown Timer */}
            <AnimatedSection animation="fade-in-up" delay={0.5}>
              <div className="pt-4">
                <p className="text-white/80 text-sm md:text-base mb-4 uppercase tracking-widest">Event starts in</p>
                <div className="flex justify-center gap-3 md:gap-5">
                  <CountdownUnit value={timeLeft.days} label="Days" />
                  <span className="text-3xl md:text-4xl text-white/40 self-start mt-4 md:mt-5">:</span>
                  <CountdownUnit value={timeLeft.hours} label="Hours" />
                  <span className="text-3xl md:text-4xl text-white/40 self-start mt-4 md:mt-5">:</span>
                  <CountdownUnit value={timeLeft.minutes} label="Mins" />
                  <span className="text-3xl md:text-4xl text-white/40 self-start mt-4 md:mt-5">:</span>
                  <CountdownUnit value={timeLeft.seconds} label="Secs" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-14 font-semibold shadow-lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
                <Link to="/register">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow animate-pulse-glow text-lg px-8 h-14 font-semibold">
                    Register Here
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

{/* Sponsors Section */}
<section className="py-16 bg-peach">
  <div className="container mx-auto px-4">
    <AnimatedSection>
      <h2 className="font-heading text-3xl font-bold text-center text-primary mb-10">
        Our Sponsors
      </h2>
    </AnimatedSection>

    <div className="flex justify-center flex-wrap gap-x-12 gap-y-8">
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className="w-36 h-20 bg-white rounded-xl flex items-center justify-center text-primary font-semibold shadow-card hover:shadow-card-hover hover:scale-105 transition-transform"
        >
          <img
            src={sponsor.image}
            alt={sponsor.name}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Events Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-heading text-4xl font-bold text-center text-primary mb-12">
              Events
            </h2>
          </AnimatedSection>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible">
            {events.map((event, index) => (
              <AnimatedSection key={event.id} animation="scale-in" delay={index * 0.1}>
                <Card className="flex-shrink-0 w-64 md:w-auto snap-center shadow-card hover:shadow-card-hover transition-smooth border-0 overflow-hidden group">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-heading text-lg font-bold mb-2">{event.name}</h3>
                      <Link to="/register">
                        <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                          Register Here
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-8">
            <Link to="/events">
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold">
                View All Events
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/5 to-peach/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="font-heading text-4xl font-bold text-center text-primary mb-12">
                About Prodothon
              </h2>
            </AnimatedSection>
            
            <div className="space-y-8">
              <AnimatedSection animation="slide-left">
                <Card className="shadow-card border-0 border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-2xl font-semibold text-secondary mb-4">
                      What is Prodothon?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Prodothon is an Inter-College Festival at the Department of Production Engineering, PSG College of Technology. Spanning two days, this event is tailored for undergraduate students from the Mechanical Stream. The festival aims to embrace the students' spirit in the Mechanical Stream with events, competitions, workshops, entrepreneur initiatives, presentations, and exhibitions. It serves as a dynamic platform for students to showcase their technical expertise, problem-solving skills, and innovative thinking.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-right">
                <Card className="shadow-card border-0 border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-2xl font-semibold text-secondary mb-4">
                      Our Vision
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To become a flagship event that inspires the next generation of engineers to embrace excellence in manufacturing and mechanical engineering, bridging the gap between academic learning and industry practices while promoting sustainable and innovative solutions. We aim to engage in activities guided by values and ethics with a sense of responsibility to society and the environment.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-left">
                <Card className="shadow-card border-0 border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-2xl font-semibold text-secondary mb-4">
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To foster innovation, technical proficiency, and collaborative learning among engineering students by providing a competitive platform that emphasizes cutting-edge technologies, practical knowledge, industry-relevant skills, and teamwork.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-20 bg-peach/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Us */}
            <AnimatedSection animation="slide-left">
              <Card className="shadow-card border-0 h-full">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                    Contact Us
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">Department of Production Engineering,</p>
                        <p className="text-muted-foreground">PSG College of Technology, Coimbatore,</p>
                        <p className="text-muted-foreground">Tamil Nadu, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <a href="mailto:pea.prod@psgtech.ac.in" className="text-secondary hover:text-accent font-medium transition-smooth">
                        pea.prod@psgtech.ac.in
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <a href="tel:+918838892817" className="text-foreground font-medium hover:text-accent transition-smooth block">BALAJI C : +91 8838892817</a>
                        <a href="tel:+919843306391" className="text-foreground font-medium hover:text-accent transition-smooth block">LAKSHMAN : +91 98433 06391</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Our Location */}
            <AnimatedSection animation="slide-right">
              <Card className="shadow-card border-0 overflow-hidden h-full">
                <CardContent className="p-0 h-full">
                  <h3 className="font-heading text-2xl font-bold text-primary p-8 pb-4">
                    Our Location
                  </h3>
                  <div className="h-[300px] lg:h-[calc(100%-80px)]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.8367616013686!2d77.00286481472448!3d11.02453589516701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1765214451220!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="PSG College of Technology Location"
                    />
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;