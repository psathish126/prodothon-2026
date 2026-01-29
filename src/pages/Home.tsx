// home.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, Phone, MapPin, Sparkles, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#020617_0,_#020617_35%,_#000000_100%)] text-white">
      {/* thin accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 animate-[pulse_3s_ease-in-out_infinite]" />

      {/* Hero Section */}
      <section
        className="
          relative min-h-[90vh] sm:min-h-screen
          flex items-center
          overflow-hidden
          pt-24 sm:pt-28 md:pt-32
        "
      >
        {/* hero bg image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{ backgroundImage: "url('/Logo/prodhome.jpg')" }}
        />

        <ParticleBackground />

        {/* color glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(45,212,191,0.35),transparent_55%),radial-gradient(circle_at_90%_10%,rgba(251,191,36,0.35),transparent_55%)] mix-blend-screen opacity-80" />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-emerald-900/75" />

        {/* animated grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] hidden sm:block">
          <div className="w-[200%] h-[200%] bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:40px_40px] animate-[slow-pan_35s_linear_infinite]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection animation="scale-in">
              <div className="relative overflow-hidden bg-black/35 sm:bg-black/40 border border-white/15 rounded-[28px] sm:rounded-[32px] shadow-[0_22px_110px_rgba(0,0,0,0.9)] backdrop-blur-2xl px-4 sm:px-7 md:px-10 py-6 sm:py-8 md:py-12 space-y-4 sm:space-y-6 md:space-y-8">
                <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-emerald-400/40 opacity-70 [mask-image:radial-gradient(circle_at_top,_black,transparent_70%)] animate-[border-glow_5s_ease-in-out_infinite]" />

                {/* top pill */}
                <AnimatedSection animation="fade-in-up">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-3.5 py-1 text-[10px] xs:text-[11px] sm:text-xs uppercase tracking-[0.22em] text-emerald-100/95 font-display">
                    <Sparkles className="h-3 w-3 text-emerald-300" />
                    <span>Department of Production Engineering</span>
                  </div>
                </AnimatedSection>

                {/* hero heading with catchy font */}
                <AnimatedSection animation="scale-in" delay={0.1}>
                  <h1
                    className="
                      font-heading font-black
                      text-4xl xs:text-[2.6rem] sm:text-5xl md:text-7xl lg:text-[4.8rem]
                      leading-tight md:leading-[1.05]
                      tracking-tight
                    "
                  >
                    <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent inline-block drop-shadow-[0_0_40px_rgba(0,0,0,0.85)] animate-[hero-glow_5s_ease-in-out_infinite]">
                      PRODOTHON&apos;26
                    </span>
                  </h1>
                </AnimatedSection>

                <AnimatedSection animation="fade-in-up" delay={0.25}>
                  <p className="font-display text-[10px] xs:text-[11px] sm:text-sm md:text-[0.95rem] lg:text-base font-semibold text-emerald-200/90 uppercase tracking-[0.3em] sm:tracking-[0.38em]">
                    Learn • Impact • Innovate
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fade-in-up" delay={0.4}>
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-emerald-500/50 blur-2xl opacity-70 animate-[pulse_3s_ease-in-out_infinite]" />
                      <div className="relative font-display text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-[2.6rem] font-extrabold bg-gradient-to-r from-amber-300 via-emerald-200 to-teal-200 text-slate-950 px-7 sm:px-9 md:px-12 py-2.5 sm:py-3 md:py-4 rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.7)] border border-white/30 tracking-wide">
                        FEB 27 &amp; 28
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-in-up" delay={0.55}>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2.5 sm:pt-4 md:pt-6">
                    <a
                      href="/brochure.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        className="group bg-white text-slate-950 hover:bg-slate-100 text-xs xs:text-sm sm:text-base md:text-lg px-6 sm:px-8 h-10 xs:h-11 sm:h-12 md:h-14 font-semibold shadow-xl hover:shadow-[0_0_40px_rgba(248,250,252,0.9)] transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                        Download Brochure
                      </Button>
                    </a>

                    <Link to="/register">
                      <Button
                        size="lg"
                        className="group bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 text-slate-950 hover:from-emerald-300 hover:via-teal-300 hover:to-emerald-200 shadow-[0_0_55px_rgba(34,197,94,0.9)] animate-pulse-glow text-xs xs:text-sm sm:text-base md:text-lg px-6 sm:px-8 h-10 xs:h-11 sm:h-12 md:h-14 font-semibold hover:shadow-[0_0_70px_rgba(45,212,191,1)] transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        <span className="mr-2">Register Here</span>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950/60 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(45,212,191,0.18),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <AnimatedSection animation="fade-in-up">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-300/30 bg-emerald-500/10 text-[10px] xs:text-[11px] sm:text-xs text-emerald-100/90 font-display tracking-[0.2em] uppercase">
                <Sparkles className="h-3 w-3 text-emerald-300" />
                <span>Powered by Industry Leaders</span>
              </div>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center text-emerald-50 mb-6 sm:mb-8">
              Our Sponsors
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={0.1}>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 shadow-[0_24px_80px_rgba(0,0,0,0.85)] border border-emerald-200/20">
              <div className="flex justify-center flex-wrap gap-x-6 sm:gap-x-10 md:gap-x-12 gap-y-6 sm:gap-y-8">
                {sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="relative group w-24 h-14 xs:w-28 xs:h-16 sm:w-32 sm:h-18 md:w-40 md:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-card border border-white/10"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.25),transparent_55%)] transition-opacity duration-300" />
                    <div className="h-full w-full flex items-center justify-center p-1">
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[radial-gradient(circle_at_top,_#020617_0,_#020617_40%,_#000000_100%)] relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(15,23,42,0.9),transparent_20%,transparent_80%,rgba(15,23,42,0.9)),radial-gradient(circle_at_top,rgba(45,212,191,0.3),transparent_55%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center text-emerald-50 mb-8 sm:mb-10 md:mb-12">
              Events
            </h2>
          </AnimatedSection>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible gap-4 sm:gap-6 pb-3 sm:pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-slate-900/60 scrollbar-thumb-emerald-400/70">
            {events.map((event, index) => (
              <AnimatedSection
                key={event.id}
                animation="scale-in"
                delay={index * 0.08}
              >
                <Card className="group flex-shrink-0 w-52 xs:w-56 sm:w-60 md:w-auto snap-center shadow-[0_18px_60px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_80px_rgba(34,197,94,0.55)] transition-all duration-300 border border-emerald-300/15 overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-950 to-slate-950">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.17),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white">
                      <h3 className="font-heading text-sm sm:text-base md:text-lg font-semibold mb-2 line-clamp-2">
                        {event.name}
                      </h3>
                      <Link to="/register">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 hover:from-emerald-300 hover:to-teal-300 font-semibold shadow-[0_0_30px_rgba(34,197,94,0.6)] flex items-center justify-center gap-1.5 text-xs sm:text-sm"
                        >
                          <span>Register Here</span>
                          <ArrowRight className="h-3.5 w-3.5" />
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
                className="border-emerald-400/80 text-emerald-200 hover:bg-emerald-400 hover:text-slate-950 font-semibold px-6 py-2 text-xs sm:text-sm md:text-base shadow-[0_0_30px_rgba(34,197,94,0.5)]"
              >
                View All Events
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950/40 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.35),transparent_55%)] opacity-70" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/70 border border-emerald-400/40 text-emerald-100 text-[10px] xs:text-[11px] sm:text-xs tracking-[0.18em] uppercase font-display">
                  <Sparkles className="h-3 w-3 text-emerald-300" />
                  <span>About Prodothon</span>
                </div>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center text-emerald-50 mb-8 sm:mb-10 md:mb-12">
                About Prodothon
              </h2>
            </AnimatedSection>

            <div className="space-y-6 sm:space-y-8">
              <AnimatedSection animation="slide-left">
                <Card className="shadow-[0_20px_70px_rgba(0,0,0,0.9)] hover:shadow-[0_22px_90px_rgba(45,212,191,0.45)] transition-all duration-300 border border-emerald-300/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                  <CardContent className="p-5 sm:p-6 md:p-7">
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-emerald-200 mb-3 sm:mb-4">
                      What is Prodothon?
                    </h3>
                    <p className="text-[13px] sm:text-[15px] md:text-base text-slate-200/90 leading-relaxed">
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
                <Card className="shadow-[0_20px_70px_rgba(0,0,0,0.9)] hover:shadow-[0_22px_90px_rgba(56,189,248,0.45)] transition-all duration-300 border border-cyan-300/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                  <CardContent className="p-5 sm:p-6 md:p-7">
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-cyan-200 mb-3 sm:mb-4">
                      Our Vision
                    </h3>
                    <p className="text-[13px] sm:text-[15px] md:text-base text-slate-200/90 leading-relaxed">
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
                <Card className="shadow-[0_20px_70px_rgba(0,0,0,0.9)] hover:shadow-[0_22px_90px_rgba(34,197,94,0.5)] transition-all duration-300 border border-emerald-300/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                  <CardContent className="p-5 sm:p-6 md:p-7">
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-emerald-200 mb-3 sm:mb-4">
                      Our Mission
                    </h3>
                    <p className="text-[13px] sm:text-[15px] md:text-base text-slate-200/90 leading-relaxed">
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
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-emerald-950/60 via-slate-950 to-black relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.3),transparent_55%)] opacity-70" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* Contact Us */}
            <AnimatedSection animation="slide-left">
              <Card className="shadow-[0_22px_80px_rgba(0,0,0,0.95)] hover:shadow-[0_24px_100px_rgba(45,212,191,0.5)] transition-all duration-300 border border-emerald-300/30 h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                <CardContent className="p-6 sm:p-7 md:p-8">
                  <h3 className="font-heading text-2xl sm:text-[1.7rem] font-bold text-emerald-50 mb-5 sm:mb-6 flex items-center gap-2">
                    <span>Contact Us</span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-300/60">
                      <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                  </h3>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2.5 sm:p-3 rounded-full bg-emerald-500/10 text-emerald-300 flex-shrink-0 border border-emerald-300/40">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <p className="text-emerald-50 font-semibold text-sm sm:text-base">
                          Department of Production Engineering,
                        </p>
                        <p className="text-emerald-100/90 text-sm sm:text-base">
                          PSG College of Technology, Coimbatore,
                        </p>
                        <p className="text-emerald-100/90 text-sm sm:text-base">
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2.5 sm:p-3 rounded-full bg-emerald-500/10 text-emerald-300 flex-shrink-0 border border-emerald-300/40">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <a
                        href="mailto:prodothon@psgtech.ac.in"
                        className="text-emerald-200 hover:text-emerald-100 font-medium text-sm sm:text-base transition-colors underline-offset-4 hover:underline break-all"
                      >
                        prodothon@psgtech.ac.in
                      </a>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2.5 sm:p-3 rounded-full bg-emerald-500/10 text-emerald-300 flex-shrink-0 border border-emerald-300/40">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="space-y-1.5">
                        <a
                          href="tel:+918838892817"
                          className="text-emerald-50 font-medium hover:text-emerald-200 transition-colors block text-sm sm:text-base"
                        >
                          BALAJI C : +91 8838892817
                        </a>
                        <a
                          href="tel:+919843306391"
                          className="text-emerald-50 font-medium hover:text-emerald-200 transition-colors block text-sm sm:text-base"
                        >
                          Lakshman Raghav V G: +91 98433 06391
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Our Location */}
            <AnimatedSection animation="slide-right">
              <Card className="shadow-[0_22px_80px_rgba(0,0,0,0.95)] hover:shadow-[0_24px_100px_rgba(34,197,94,0.55)] transition-all duration-300 border border-emerald-300/30 overflow-hidden h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex items-center justify-between px-6 sm:px-7 md:px-8 pt-6 pb-3 sm:pb-4">
                    <h3 className="font-heading text-2xl sm:text-[1.7rem] font-bold text-emerald-50">
                      Our Location
                    </h3>
                    <span className="text-[10px] xs:text-[11px] sm:text-xs text-emerald-200/80">
                      Tap to explore on Maps
                    </span>
                  </div>
                  <div className="h-[240px] xs:h-[260px] sm:h-[320px] lg:h-[calc(100%-72px)] relative">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.2),transparent_55%)] opacity-60" />
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
