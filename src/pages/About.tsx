import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Lightbulb,
  Calendar,
  Users,
  Award,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  return (
    <div className="min-h-screen pt-28 md:pt-32 bg-background">
      {/* Hero / Header */}
      <section className="relative py-16 md:py-20 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="scale-in">
            <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/15 rounded-3xl shadow-2xl backdrop-blur-xl px-6 md:px-10 py-8 md:py-10 space-y-4">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/70">
                PSG COLLEGE OF TECHNOLOGY • PRODUCTION ENGINEERING
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                About Prodothon&apos;26
              </h1>
              <p className="text-base md:text-lg text-accent font-semibold tracking-[0.35em]">
                LEARN • IMPACT • INNOVATE
              </p>
              <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
                A two‑day inter‑college festival celebrating manufacturing,
                innovation, and the spirit of the mechanical stream.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gradient-to-b from-peach/30 to-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          {/* What is Prodothon */}
          <AnimatedSection animation="slide-left">
            <Card className="shadow-card border-0 bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="p-4 rounded-2xl bg-accent/10 text-accent flex-shrink-0 hidden md:flex items-center justify-center">
                    <Lightbulb className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4 md:mb-6">
                      What is Prodothon?
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      Prodothon is an inter‑college festival organized by the
                      Department of Production Engineering, PSG College of
                      Technology. Spanning two days, it is tailored for
                      undergraduate students from the mechanical stream with
                      events, competitions, workshops, entrepreneurial
                      initiatives, presentations, and exhibitions, providing a
                      dynamic platform to showcase technical expertise,
                      problem‑solving skills, and innovative thinking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Our Vision */}
          <AnimatedSection animation="slide-right">
            <Card className="shadow-card border-0 bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="p-4 rounded-2xl bg-secondary/10 text-secondary flex-shrink-0 hidden md:flex items-center justify-center">
                    <Eye className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4 md:mb-6">
                      Our Vision
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      To become a flagship event that inspires the next
                      generation of engineers to pursue excellence in
                      manufacturing and mechanical engineering, bridging the
                      gap between academic learning and industry practices while
                      promoting sustainable, innovative solutions rooted in
                      strong values and social responsibility.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Our Mission */}
          <AnimatedSection animation="slide-left">
            <Card className="shadow-card border-0 bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="p-4 rounded-2xl bg-accent/10 text-accent flex-shrink-0 hidden md:flex items-center justify-center">
                    <Target className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4 md:mb-6">
                      Our Mission
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      To foster innovation, technical proficiency, and
                      collaborative learning by providing a competitive platform
                      that emphasizes cutting‑edge technologies, practical
                      knowledge, industry‑relevant skills, and teamwork, helping
                      students grow into future‑ready professionals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Event Highlights / Stats */}
          <AnimatedSection animation="fade-in-up">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <Card className="shadow-card border-0 text-center bg-peach/40 backdrop-blur-md hover:shadow-card-hover hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 md:p-8">
                  <div className="mx-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-7 w-7 md:h-8 md:w-8 text-secondary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-1">
                    2
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base font-medium">
                    Days of innovation
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 text-center bg-peach/40 backdrop-blur-md hover:shadow-card-hover hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 md:p-8">
                  <div className="mx-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Award className="h-7 w-7 md:h-8 md:w-8 text-secondary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-1">
                    10+
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base font-medium">
                    Technical & non‑tech events
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 text-center bg-peach/40 backdrop-blur-md hover:shadow-card-hover hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 md:p-8">
                  <div className="mx-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Users className="h-7 w-7 md:h-8 md:w-8 text-secondary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-1">
                    500+
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base font-medium">
                    Expected participants
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
