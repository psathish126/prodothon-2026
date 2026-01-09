// home.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParticleBackground from "@/components/ParticleBackground";

const Home = () => {
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
      {/* thin accent bar just under navbar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400" />

     {/* Hero Section */}
<section
  className="
    relative min-h-screen
    flex items-center
    text-white overflow-hidden
    pt-24 sm:pt-28 md:pt-32
    bg-fit bg-center bg-no-repeat
  "
  style={{ backgroundImage: "url('/Logo/prodhome.jpg')" }}
>

        <ParticleBackground />
        {/* Dark gradient overlay for readability, slightly lighter */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-primary/70" />
        {/* subtle pattern */}
        <div className="absolute inset-0 tech-pattern opacity-15" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="scale-in">
              <div className="bg-white/5 border border-white/15 rounded-3xl shadow-2xl backdrop-blur-2xl px-3 sm:px-4 md:px-10 py-6 sm:py-8 md:py-12 space-y-4 sm:space-y-6 md:space-y-8 animate-[fadeIn_0.8s_ease-out]">
                <AnimatedSection animation="fade-in-up">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full bg-black/40 border border-white/25 text-[9px] sm:text-[10px] md:text-xs tracking-[0.28em] sm:tracking-[0.35em] uppercase mb-1">
                    <span>PSG COLLEGE OF TECHNOLOGY</span>
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    <span>PRODOTHON’26</span>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={0.1}>
                  <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight drop-shadow-[0_0_35px_rgba(0,0,0,0.75)]">
                    PRODOTHON&apos;26
                  </h1>
                </AnimatedSection>

                <AnimatedSection animation="fade-in-up" delay={0.25}>
                  <p className="text-sm sm:text-lg md:text-2xl font-bold text-accent uppercase tracking-[0.25em] sm:tracking-[0.35em]">
                    Learn • Impact • Innovate
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fade-in-up" delay={0.4}>
                  <div className="inline-flex items-center gap-3 sm:gap-4">
                    <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-peach text-primary px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-xl shadow-[0_18px_45px_rgba(0,0,0,0.55)] border border-white/20">
                      FEB 27 &amp; 28
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-in-up" delay={0.55}>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-3 sm:pt-4 md:pt-6">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 text-sm sm:text-base md:text-lg px-6 sm:px-8 h-11 sm:h-12 md:h-14 font-semibold shadow-lg hover:shadow-2xl transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Download Brochure
                    </Button>
                    <Link to="/register">
                      <Button
                        size="lg"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow animate-pulse-glow text-sm sm:text-base md:text-lg px-6 sm:px-8 h-11 sm:h-12 md:h-14 font-semibold hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        Register Here
                      </Button>
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-12 sm:py-16 bg-peach/80">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-primary mb-6 sm:mb-8">
              Our Sponsors
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={0.1}>
            <div className="bg-white/60 backdrop-blur-md rounded-3xl px-4 sm:px-6 py-6 sm:py-8 shadow-xl">
              <div className="flex justify-center flex-wrap gap-x-8 sm:gap-x-12 gap-y-6 sm:gap-y-8">
                {sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="w-28 h-16 sm:w-36 sm:h-20 bg-white rounded-xl flex items-center justify-center text-primary font-semibold shadow-card hover:shadow-2xl hover:scale-105 transition-transform duration-200"
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
          </AnimatedSection>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-primary mb-8 sm:mb-12">
              Events
            </h2>
          </AnimatedSection>

          <div className="flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-visible gap-4 sm:gap-6 pb-3 sm:pb-4 snap-x snap-mandatory">
            {events.map((event, index) => (
              <AnimatedSection
                key={event.id}
                animation="scale-in"
                delay={index * 0.08}
              >
                <Card className="flex-shrink-0 w-56 sm:w-64 md:w-auto snap-center shadow-card hover:shadow-2xl transition-smooth border border-primary/10 overflow-hidden group rounded-2xl bg-card/95">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                      <h3 className="font-heading text-base sm:text-lg font-bold mb-2 line-clamp-2">
                        {event.name}
                      </h3>
                      <Link to="/register">
                        <Button
                          size="sm"
                          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                        >
                          Register Here
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-6 sm:mt-8" animation="fade-in-up">
            <Link to="/events">
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold"
              >
                View All Events
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-secondary/5 to-peach/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-primary mb-8 sm:mb-12">
                About Prodothon
              </h2>
            </AnimatedSection>

            <div className="space-y-6 sm:space-y-8">
              <AnimatedSection animation="slide-left">
                <Card className="shadow-card hover:shadow-2xl transition-smooth border-0 border-l-4 border-l-accent bg-card/95">
                  <CardContent className="p-5 sm:p-6">
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-secondary mb-3 sm:mb-4">
                      What is Prodothon?
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Prodothon is an inter-college festival at the Department
                      of Production Engineering, PSG College of Technology.
                      Spanning two days, this event is tailored for
                      undergraduate students from the mechanical stream and
                      features events, competitions, workshops, entrepreneurial
                      initiatives, presentations, and exhibitions, providing a
                      dynamic platform to showcase technical expertise and
                      innovative thinking.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-right">
                <Card className="shadow-card hover:shadow-2xl transition-smooth border-0 border-l-4 border-l-secondary bg-card/95">
                  <CardContent className="p-5 sm:p-6">
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-secondary mb-3 sm:mb-4">
                      Our Vision
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      To become a flagship event that inspires the next
                      generation of engineers to pursue excellence in
                      manufacturing and mechanical engineering, bridging the
                      gap between academic learning and industry practices while
                      promoting sustainable and innovative solutions rooted in
                      values and social responsibility.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-left">
                <Card className="shadow-card hover:shadow-2xl transition-smooth border-0 border-l-4 border-l-accent bg-card/95">
                  <CardContent className="p-5 sm:p-6">
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-secondary mb-3 sm:mb-4">
                      Our Mission
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      To foster innovation, technical proficiency, and
                      collaborative learning among engineering students by
                      providing a competitive platform that emphasizes
                      cutting-edge technologies, practical knowledge,
                      industry-relevant skills, and teamwork.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-16 sm:py-20 bg-peach/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Us */}
            <AnimatedSection animation="slide-left">
              <Card className="shadow-card hover:shadow-2xl transition-smooth border-0 h-full bg-card/95">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-5 sm:mb-6">
                    Contact Us
                  </h3>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold text-sm sm:text-base">
                          Department of Production Engineering,
                        </p>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          PSG College of Technology, Coimbatore,
                        </p>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <a
                        href="mailto:pea.prod@psgtech.ac.in"
                        className="text-secondary hover:text-accent font-medium text-sm sm:text-base transition-smooth break-all"
                      >
                        pea.prod@psgtech.ac.in
                      </a>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <a
                          href="tel:+918838892817"
                          className="text-foreground font-medium hover:text-accent transition-smooth block text-sm sm:text-base"
                        >
                          BALAJI C : +91 8838892817
                        </a>
                        <a
                          href="tel:+919843306391"
                          className="text-foreground font-medium hover:text-accent transition-smooth block text-sm sm:text-base"
                        >
                          LAKSHMAN : +91 98433 06391
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Our Location */}
            <AnimatedSection animation="slide-right">
              <Card className="shadow-card hover:shadow-2xl transition-smooth border-0 overflow-hidden h-full bg-card/95">
                <CardContent className="p-0 h-full flex flex-col">
                  <h3 className="font-heading text-2xl font-bold text-primary px-6 sm:px-8 pt-6 pb-3 sm:pb-4">
                    Our Location
                  </h3>
                  <div className="h-[260px] sm:h-[320px] lg:h-[calc(100%-72px)]">
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
