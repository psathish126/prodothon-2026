// home.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParticleBackground from "@/components/ParticleBackground";

const Home = () => {
  const events = [
    { id: 1, name: "Panel Discussion", image: "/eventlogo/Panel discussion_.png" },
    { id: 2, name: "Production Meishu", image: "/eventlogo/The production meishu_.png" },
    { id: 3, name: "Paper / Project Presentation", image: "/eventlogo/Paper presentation_.png" },
    { id: 4, name: "AI-Driven Design Workshop", image: "/eventlogo/workshop.png" },
    { id: 5, name: "CAD Combat", image: "/eventlogo/Cad combat.jpg" },
    { id: 6, name: "AutoQuest", image: "/eventlogo/Autoquest_.jpg" },
    { id: 7, name: "Ladder Rush", image: "/eventlogo/LadderRush.jpg" },
    { id: 8, name: "Stick It! Structure It!", image: "/eventlogo/Stick it structure it_.jpg" },
  ];

  // images are served from public/Sponsers/* as /Sponsers/filename.jpg
  const sponsors = [
    { name: "Sponsor 2", image: "/Sponsers/IMG-20260106-WA0037.jpg" },
  ];

  const collaborators = [
    { name: "Schneider Electric", image: "/Sponsers/schneider.jpg" },
    { name: "ELGi", image: "/Sponsers/elgi.jpg" },
    { name: "Opel", image: "/Sponsers/opel.jpg" },
    { name: "Radiant", image: "/Sponsers/radiant.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* thin accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500" />

      {/* Hero Section */}
      <section
        className="
          relative min-h-[90vh] sm:min-h-[92vh]
          flex items-center
          overflow-hidden
          mt-[7.5rem] sm:mt-[7.5rem] md:mt-[8rem]
        "
      >
        {/* hero bg image, softened with light overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/Logo/prodhome.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/82" />

        <ParticleBackground />

        {/* subtle color glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(45,212,191,0.16),transparent_55%),radial-gradient(circle_at_90%_5%,rgba(251,191,36,0.18),transparent_55%)] mix-blend-screen opacity-80" />

        {/* light grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.14] hidden sm:block">
          <div className="w-[200%] h-[200%] bg-[linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection animation="scale-in">
              <div className="relative overflow-hidden bg-emerald-50/90 backdrop-blur-2xl border border-emerald-100/70 rounded-[22px] xs:rounded-[26px] sm:rounded-[32px] shadow-[0_18px_80px_rgba(15,23,42,0.20)] px-3 xs:px-4 sm:px-7 md:px-10 py-5 xs:py-6 sm:py-9 md:py-12 space-y-4 xs:space-y-5 sm:space-y-7 md:space-y-8">
                {/* inner subtle border mask */}
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/40 [mask-image:radial-gradient(circle_at_top,_black,transparent_65%)]" />

                {/* floating badge */}
                <AnimatedSection animation="fade-in-up" delay={0.05}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200 shadow-sm mb-1">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-500 animate-[spin_6s_linear_infinite]" />
                    <span className="text-[10px] xs:text-[11px] sm:text-xs font-semibold tracking-[0.26em] uppercase text-emerald-700">
                      Department of Production Engineering
                    </span>
                  </div>
                </AnimatedSection>

                {/* hero heading */}
                <AnimatedSection animation="scale-in" delay={0.12}>
                  <h1
                    className="
                      font-heading font-black
                      text-[clamp(2.25rem,5vw,3.2rem)]
                      md:text-[clamp(3rem,5vw,4rem)]
                      leading-[1.05]
                      tracking-tight
                    "
                  >
                    <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 bg-clip-text text-transparent inline-block">
                      PRODOTHON&apos;26
                    </span>
                  </h1>
                </AnimatedSection>

                <AnimatedSection animation="fade-in-up" delay={0.25}>
                  <p className="font-display text-[10px] xs:text-[11px] sm:text-xs md:text-sm lg:text-[0.95rem] font-semibold text-emerald-700 uppercase tracking-[0.24em] sm:tracking-[0.32em]">
                    Learn • Impact • Innovate
                  </p>
                </AnimatedSection>

                {/* date pill */}
                <AnimatedSection animation="fade-in-up" delay={0.38}>
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-emerald-400/45 blur-2xl opacity-70" />
                      <div className="relative font-display text-[clamp(1.1rem,3.2vw,1.6rem)] sm:text-2xl md:text-4xl lg:text-[2.6rem] font-extrabold bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-400 text-slate-900 px-5 xs:px-6 sm:px-9 md:px-12 py-2 xs:py-2.5 sm:py-3 md:py-4 rounded-2xl shadow-[0_14px_40px_rgba(15,23,42,0.25)] border border-emerald-100 tracking-wide">
                        FEB 27 &amp; 28
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* CTAs */}
                <AnimatedSection animation="fade-in-up" delay={0.5}>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 xs:pt-2.5 sm:pt-4 md:pt-5">
                    <a
                      href="/brochure.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        className="group bg-white text-slate-900 hover:bg-slate-100 text-xs xs:text-sm sm:text-base md:text-lg px-4 xs:px-5 sm:px-8 h-9 xs:h-10 sm:h-11 md:h-12 font-semibold shadow-md hover:shadow-lg border border-slate-200"
                      >
                        <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                        Download Brochure
                      </Button>
                    </a>

                    <Link to="/register">
                      <Button
                        size="lg"
                        className="group bg-emerald-500 text-white hover:bg-emerald-600 text-xs xs:text-sm sm:text-base md:text-lg px-4 xs:px-5 sm:px-8 h-9 xs:h-10 sm:h-11 md:h-12 font-semibold shadow-md hover:shadow-lg"
                      >
                        <span className="mr-2 whitespace-nowrap">Register Here</span>
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

      {/* Sponsors & Collaborators Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-emerald-50/40 relative overflow-hidden">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-10 relative z-10">
          <AnimatedSection animation="fade-in-up">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-[10px] xs:text-[11px] sm:text-xs text-emerald-700 font-display tracking-[0.2em] uppercase">
                <Sparkles className="h-3 w-3 text-emerald-500" />
                <span>Partners</span>
              </div>
            </div>
            <h2 className="font-heading text-[clamp(1.35rem,3vw,2.1rem)] sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-6 sm:mb-8">
              Sponsors & Collaborators
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {/* Top: Sponsors (highlighted) */}
            <AnimatedSection animation="scale-in" delay={0.1}>
              <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-50 to-emerald-500/5 rounded-3xl px-4 sm:px-6 md:px-8 py-5 sm:py-7 md:py-8 shadow-[0_18px_60px_rgba(16,185,129,0.25)] border border-emerald-200">
                <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">
                    Sponsor
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-emerald-500 text-white text-[10px] xs:text-[11px] sm:text-xs font-medium px-3 py-1 shadow-sm">
                    Prime Partner
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
                  {sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="relative group aspect-[3/2] w-full max-w-[180px] rounded-2xl overflow-hidden bg-white shadow-sm border border-emerald-100 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(16,185,129,0.45)] transition-all duration-300 flex items-center justify-center"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.22),transparent_60%)] transition-opacity duration-300" />
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="max-h-full max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Bottom: Collaborators */}
            <AnimatedSection animation="scale-in" delay={0.2}>
              <div className="bg-white rounded-3xl px-4 sm:px-6 md:px-8 py-5 sm:py-7 md:py-8 shadow-[0_16px_50px_rgba(15,23,42,0.10)] border border-slate-200">
                <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">
                    Collaborators
                  </h3>
                  <span className="text-[10px] xs:text-[11px] sm:text-xs text-slate-500">
                    Supporting Industry Partners
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
                  {collaborators.map((collab, index) => (
                    <div
                      key={index}
                      className="relative group aspect-[3/2] w-full max-w-[160px] rounded-2xl overflow-hidden bg-slate-50 shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.20)] transition-all duration-300 flex items-center justify-center"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.2),transparent_60%)] transition-opacity duration-300" />
                      <img
                        src={collab.image}
                        alt={collab.name}
                        className="max-h-full max-w-[78%] object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-heading text-[clamp(1.35rem,3vw,2.1rem)] sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-7 sm:mb-10 md:mb-12">
              Events
            </h2>
          </AnimatedSection>

          {/* mobile: horizontal scroll, desktop: grid */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible gap-4 sm:gap-6 pb-3 sm:pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-emerald-300/80">
            {events.map((event, index) => (
              <AnimatedSection
                key={event.id}
                animation="scale-in"
                delay={index * 0.08}
              >
                <Card className="group flex-shrink-0 w-52 xs:w-56 sm:w-60 md:w-auto snap-center shadow-[0_18px_50px_rgba(15,23,42,0.12)] hover:shadow-[0_20px_70px_rgba(16,185,129,0.25)] transition-all duration-300 border border-slate-200 overflow-hidden rounded-2xl bg-white hover:-translate-y-1">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white">
                      <h3 className="font-heading text-sm sm:text-base md:text-lg font-semibold mb-2 line-clamp-2">
                        {event.name}
                      </h3>
                      <Link to="/register">
                        <Button
                          size="sm"
                          className="w-full bg-emerald-500 text-white hover:bg-emerald-600 font-semibold shadow-sm flex items-center justify-center gap-1.5 text-xs sm:text-sm"
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

          <AnimatedSection
            className="text-center mt-6 sm:mt-8"
            animation="fade-in-up"
          >
            <Link to="/events">
              <Button
                variant="outline"
                className="border-emerald-500 text-emerald-700 hover:bg-emerald-500 hover:text-white font-semibold px-6 py-2 text-xs sm:text-sm md:text-base shadow-sm"
              >
                View All Events
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-white via-emerald-50/40 to-white relative overflow-hidden">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] xs:text-[11px] sm:text-xs tracking-[0.18em] uppercase font-display">
                  <Sparkles className="h-3 w-3 text-emerald-500" />
                  <span>About Prodothon</span>
                </div>
              </div>
              <h2 className="font-heading text-[clamp(1.35rem,3vw,2.1rem)] sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8 sm:mb-10 md:mb-12">
                About Prodothon
              </h2>
            </AnimatedSection>

            <div className="space-y-6 sm:space-y-8">
              <AnimatedSection animation="slide-left">
                <Card className="shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_22px_80px_rgba(16,185,129,0.25)] transition-all duration-300 border border-slate-200 bg-white">
                  <CardContent className="p-5 sm:p-6 md:p-7">
                    <h3 className="font-heading text-lg sm:text-2xl font-semibold text-emerald-700 mb-3 sm:mb-4">
                      What is Prodothon?
                    </h3>
                    <p className="text-[13px] sm:text-[15px] md:text-base text-slate-700 leading-relaxed">
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
                <Card className="shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_22px_80px_rgba(56,189,248,0.25)] transition-all duration-300 border border-slate-200 bg-white">
                  <CardContent className="p-5 sm:p-6 md:p-7">
                    <h3 className="font-heading text-lg sm:text-2xl font-semibold text-cyan-700 mb-3 sm:mb-4">
                      Our Vision
                    </h3>
                    <p className="text-[13px] sm:text-[15px] md:text-base text-slate-700 leading-relaxed">
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
                <Card className="shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_22px_80px_rgba(16,185,129,0.25)] transition-all duration-300 border border-slate-200 bg-white">
                  <CardContent className="p-5 sm:p-6 md:p-7">
                    <h3 className="font-heading text-lg sm:text-2xl font-semibold text-emerald-700 mb-3 sm:mb-4">
                      Our Mission
                    </h3>
                    <p className="text-[13px] sm:text-[15px] md:text-base text-slate-700 leading-relaxed">
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
      <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-emerald-50/60 via-white to-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* Contact Us */}
            <AnimatedSection animation="slide-left">
              <Card className="shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_22px_80px_rgba(16,185,129,0.25)] transition-all duration-300 border border-slate-200 h-full bg-white">
                <CardContent className="p-5 sm:p-6 md:p-8">
                  <h3 className="font-heading text-xl sm:text-[1.7rem] font-bold text-slate-900 mb-5 sm:mb-6 flex items-center gap-2">
                    <span>Contact Us</span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 border border-emerald-300">
                      <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
                    </span>
                  </h3>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2.5 sm:p-3 rounded-full bg-emerald-50 text-emerald-500 flex-shrink-0 border border-emerald-200">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <p className="text-slate-900 font-semibold text-sm sm:text-base">
                          Department of Production Engineering,
                        </p>
                        <p className="text-slate-700 text-sm sm:text-base">
                          PSG College of Technology, Coimbatore,
                        </p>
                        <p className="text-slate-700 text-sm sm:text-base">
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2.5 sm:p-3 rounded-full bg-emerald-50 text-emerald-500 flex-shrink-0 border border-emerald-200">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <a
                        href="mailto:prodothon@psgtech.ac.in"
                        className="text-emerald-700 hover:text-emerald-800 font-medium text-sm sm:text-base transition-colors underline-offset-4 hover:underline break-all"
                      >
                        prodothon@psgtech.ac.in
                      </a>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2.5 sm:p-3 rounded-full bg-emerald-50 text-emerald-500 flex-shrink-0 border border-emerald-200">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="space-y-1.5">
                        <a
                          href="tel:+918838892817"
                          className="text-slate-900 font-medium hover:text-emerald-700 transition-colors block text-sm sm:text-base"
                        >
                          BALAJI C : +91 8838892817
                        </a>
                        <a
                          href="tel:+919843306391"
                          className="text-slate-900 font-medium hover:text-emerald-700 transition-colors block text-sm sm:text-base"
                        >
                          Lakshman Raghav V G : +91 98433 06391
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Our Location */}
            <AnimatedSection animation="slide-right">
              <Card className="shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_22px_80px_rgba(16,185,129,0.25)] transition-all duration-300 border border-slate-200 overflow-hidden h-full bg-white">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex items-center justify-between px-5 sm:px-6 md:px-8 pt-6 pb-3 sm:pb-4">
                    <h3 className="font-heading text-xl sm:text-[1.7rem] font-bold text-slate-900">
                      Our Location
                    </h3>
                    <span className="text-[10px] xs:text-[11px] sm:text-xs text-slate-500">
                      Tap to explore on Maps
                    </span>
                  </div>
                  <div className="h-[220px] xs:h-[240px] sm:h-[320px] lg:h-[calc(100%-72px)] relative">
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
