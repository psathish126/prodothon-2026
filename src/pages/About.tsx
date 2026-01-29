import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Calendar, Users, Award, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 bg-[radial-gradient(circle_at_top,_#020617_0,_#020617_40%,_#000000_100%)] text-white">
      {/* Hero / Header – jazzy glass like Home */}
      <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden">
        {/* glow and grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.3),transparent_55%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.25),transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-slate-950/90" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] hidden sm:block">
          <div className="w-[200%] h-[200%] bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:40px_40px] animate-[slow-pan_35s_linear_infinite]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="scale-in">
            <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/15 rounded-[28px] sm:rounded-[32px] shadow-[0_22px_110px_rgba(0,0,0,0.9)] backdrop-blur-2xl px-5 sm:px-7 md:px-10 py-7 sm:py-8 md:py-10 space-y-4">
              <p className="text-[10px] xs:text-[11px] md:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-emerald-100/80">
                PSG COLLEGE OF TECHNOLOGY • PRODUCTION ENGINEERING
              </p>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-black leading-tight">
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent inline-block drop-shadow-[0_0_35px_rgba(0,0,0,0.85)]">
                  About Prodothon&apos;26
                </span>
              </h1>
              <p className="text-[11px] xs:text-xs sm:text-sm md:text-base text-emerald-100 font-semibold tracking-[0.32em] sm:tracking-[0.35em]">
                LEARN • IMPACT • INNOVATE
              </p>
              <p className="text-[13px] sm:text-sm md:text-base text-emerald-50/90 max-w-2xl mx-auto">
                A two‑day inter‑college festival celebrating manufacturing, innovation, and the spirit
                of the mechanical stream.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-slate-950 via-slate-950 to-black relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(34,197,94,0.25),transparent_55%)] opacity-80" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8 sm:space-y-10 md:space-y-12 relative z-10">
          {/* What is Prodothon */}
          <AnimatedSection animation="slide-left">
            <Card className="shadow-[0_22px_80px_rgba(0,0,0,0.95)] border border-emerald-300/25 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl rounded-3xl overflow-hidden">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-300 flex-shrink-0 hidden md:flex items-center justify-center border border-emerald-300/40">
                    <Lightbulb className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-emerald-50 mb-3 sm:mb-4 md:mb-5">
                      What is Prodothon?
                    </h2>
                    <p className="text-[13px] sm:text-sm md:text-base text-emerald-50/90 leading-relaxed">
                      Prodothon is an inter‑college festival organized by the Department of Production
                      Engineering, PSG College of Technology. Spanning two days, it is tailored for
                      undergraduate students from the mechanical stream with events, competitions,
                      workshops, entrepreneurial initiatives, presentations, and exhibitions, providing
                      a dynamic platform to showcase technical expertise, problem‑solving skills, and
                      innovative thinking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Our Vision */}
          <AnimatedSection animation="slide-right">
            <Card className="shadow-[0_22px_80px_rgba(0,0,0,0.95)] border border-cyan-300/25 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl rounded-3xl overflow-hidden">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-300 flex-shrink-0 hidden md:flex items-center justify-center border border-cyan-300/40">
                    <Eye className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-emerald-50 mb-3 sm:mb-4 md:mb-5">
                      Our Vision
                    </h2>
                    <p className="text-[13px] sm:text-sm md:text-base text-emerald-50/90 leading-relaxed">
                      To become a flagship event that inspires the next generation of engineers to
                      pursue excellence in manufacturing and mechanical engineering, bridging the gap
                      between academic learning and industry practices while promoting sustainable,
                      innovative solutions rooted in strong values and social responsibility.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Our Mission */}
          <AnimatedSection animation="slide-left">
            <Card className="shadow-[0_22px_80px_rgba(0,0,0,0.95)] border border-emerald-300/25 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl rounded-3xl overflow-hidden">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-300 flex-shrink-0 hidden md:flex items-center justify-center border border-emerald-300/40">
                    <Target className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-emerald-50 mb-3 sm:mb-4 md:mb-5">
                      Our Mission
                    </h2>
                    <p className="text-[13px] sm:text-sm md:text-base text-emerald-50/90 leading-relaxed">
                      To foster innovation, technical proficiency, and collaborative learning by
                      providing a competitive platform that emphasizes cutting‑edge technologies,
                      practical knowledge, industry‑relevant skills, and teamwork, helping students
                      grow into future‑ready professionals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Event Highlights / Stats */}
          <AnimatedSection animation="fade-in-up">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-2 sm:pt-3">
              <Card className="shadow-[0_18px_60px_rgba(0,0,0,0.9)] border border-emerald-300/25 text-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl hover:shadow-[0_22px_80px_rgba(34,197,94,0.6)] hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                <CardContent className="p-5 sm:p-6 md:p-7">
                  <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-3 sm:mb-4 border border-emerald-300/40">
                    <Calendar className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-300" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-emerald-300 mb-1">
                    2
                  </div>
                  <p className="text-emerald-100/85 text-xs sm:text-sm md:text-base font-medium">
                    Days of innovation
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-[0_18px_60px_rgba(0,0,0,0.9)] border border-emerald-300/25 text-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl hover:shadow-[0_22px_80px_rgba(34,197,94,0.6)] hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                <CardContent className="p-5 sm:p-6 md:p-7">
                  <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-3 sm:mb-4 border border-emerald-300/40">
                    <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-300" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-emerald-300 mb-1">
                    10+
                  </div>
                  <p className="text-emerald-100/85 text-xs sm:text-sm md:text-base font-medium">
                    Technical &amp; non‑tech events
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-[0_18px_60px_rgba(0,0,0,0.9)] border border-emerald-300/25 text-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl hover:shadow-[0_22px_80px_rgba(34,197,94,0.6)] hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                <CardContent className="p-5 sm:p-6 md:p-7">
                  <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-3 sm:mb-4 border border-emerald-300/40">
                    <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-300" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-emerald-300 mb-1">
                    500+
                  </div>
                  <p className="text-emerald-100/85 text-xs sm:text-sm md:text-base font-medium">
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
